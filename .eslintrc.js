module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "airbnb",
  "plugins": ["react", "jsx-a11y", "import"],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  "rules": {
    // "indent": ["error", 4],
    "linebreak-style": 0,
    "jsx-quotes": ["error", "prefer-single"],
    "semi": ["error", "never"],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-array-index-key": 0,
    "space-before-function-paren": 0,
    "jsx-a11y/label-has-for": 0,
    "comma-dangle": 0,
    "keyword-spacing": 2,
    "space-before-function-paren": [2, "always"]
  }
};