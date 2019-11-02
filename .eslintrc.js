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
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./webpack.config.js"
      }
    }
  }
}
