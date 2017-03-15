module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [2, 2],
    "quotes": [2, "single"],
    "no-console": "off",
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"],
    "comma-dangle": [1, "always"],
    "no-unused-vars": [1, {
      "vars": "all",
      "args": "all"
    }],
    "require-jsdoc": [1, {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": false,
        "ClassDeclaration": false
      }
    }]
  },
};
