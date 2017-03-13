module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "rules": {

    "linebreak-style": [
            "error",
            "windows"
        ],

    "semi": [
            "error",
            "always"
        ],
    "no-console": "off",
    // "comma-dangle": [1, "always"],
    "no-unused-vars": [1, { "vars": "all", "args": "after-used" }]
    // "no-unused-vars": "off"
  }
};
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
    "linebreak-style": [2, "windows"],
    "semi": [2, "always"],
    "comma-dangle": [1, "always"],
    "no-unused-vars": [1, {
      "vars": "all",
      "args": "all"
    }],
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": false,
        "ClassDeclaration": false
      }
    }]
  },
};
