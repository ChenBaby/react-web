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
    "linebreak-style": ["error", "windows"],
    "jsx-quotes": ["error", "prefer-single"],
    "semi": ["error", "never"],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "jsx-a11y/anchor-is-valid": 0
  }
};