
module.exports = {
    apps : [
        {
            name: "a43",
            script: "./app3.js",
            instances: 6,
            exec_mode: "cluster",
            increment_var : 'PORT',
            env: {
                "PORT": 3000,
                "NODE_ENV": "development"
            }
        }
    ]
};

