module.exports = {
    env: {
        test: {
            presets: [
                ["@babel/preset-react"],
                ["@babel/preset-env", {
                    modules: "commonjs",
                    targets: {
                        node: "current",
                    },
                    useBuiltIns: "usage"
                }]
            ],
        }
    }
};
