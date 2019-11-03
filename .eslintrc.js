module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["prettier", "react", "react-hooks", "jsx-a11y"],
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'array-callback-return': 0,
    'react/no-array-index-key': 0
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./webpack.config.js"
      }
    }
  }
}
