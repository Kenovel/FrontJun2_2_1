const { version } = require("react");

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "react-hooks", "jsx-ally", "prettier"],
    rules: {
        "prettier/prettier": "warn",
        "react/prop-types": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
