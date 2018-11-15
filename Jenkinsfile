scripts.discardOldJobBuilds('5')
scripts.killPreviousJobBuilds()

node {
    scripts.tryFinally {
        stage('Checkout') {
            checkout scm
        }

        def branch = env.BRANCH_NAME
        def isPR = branch ==~ /^PR-\d+$/
        def shouldDeploy = branch == 'master'

        docker.image('node:10.13.0-stretch').inside('-e HOME=/tmp') {
            stage('Install') {
                sh 'yarn install'
            }

            stage('Build') {
                sh 'yarn build-storybook'
            }

            if (shouldDeploy) {
                stage('Publish artifacts') {
                    step([$class: 'ArtifactArchiver', artifacts: '.out/**/*', fingerprint: true])
                }

                stage('Deploy') {
                    try {
                        sh 'yarn deploy-storybook -- --ci'
                    } catch (err) {
                        currentBuild.result = 'UNSTABLE'
                        throw err
                    }
                }
            }
        }
    }
}
