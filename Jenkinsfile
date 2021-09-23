scripts.discardOldJobBuilds('3')
scripts.killPreviousJobBuilds()

node {
    scripts.tryFinally {
        stage('Checkout') {
            checkout scm
        }

        def branch = env.BRANCH_NAME
        def isPR = branch ==~ /^PR-\d+$/

        docker.image('node:14.15').inside('-e HOME=/tmp') {
            stage('Install') {
                sh 'yarn install'
            }

            stage('Build storybook') {
                sh 'yarn build'
            }

            stage('Build package') {
                sh 'yarn package'
            }

            if (!isPR) {
                stage('Publish artifacts') {
                    step([$class: 'ArtifactArchiver', artifacts: '.out/**/*', fingerprint: true])
                    step([$class: 'ArtifactArchiver', artifacts: 'lib/**/*', fingerprint: true])
                }

                stage('Publish ghpage storybook') {
                    sh "yarn deploy-storybook"
                }

                stage('Publish npm package') {
                    withNPM(npmrcConfig:'publishnpmrc') {
                        sh "npm --no-git-tag-version version 1.9.${env.BUILD_NUMBER} && npm publish"
                    }
                }
            }
        }
    }
}
