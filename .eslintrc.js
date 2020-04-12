module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    gon: "readonly",
    dataLayer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jquery"],
  rules: {
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["draft", "state"] },
    ], // https://github.com/immerjs/immer/issues/189
    "jquery/no-ajax": 0,
    "jquery/no-ajax-events": 0,
    "jquery/no-animate": 0,
    "jquery/no-attr": 0,
    "jquery/no-bind": 0,
    "jquery/no-class": 0,
    "jquery/no-clone": 0,
    "jquery/no-closest": 0,
    "jquery/no-css": 0,
    "jquery/no-data": 0,
    "jquery/no-deferred": 0,
    "jquery/no-delegate": 0,
    "jquery/no-each": 0,
    "jquery/no-extend": 0,
    "jquery/no-fade": 0,
    "jquery/no-filter": 0,
    "jquery/no-find": 0,
    "jquery/no-global-eval": 0,
    "jquery/no-grep": 0,
    "jquery/no-has": 0,
    "jquery/no-hide": 0,
    "jquery/no-html": 0,
    "jquery/no-in-array": 0,
    "jquery/no-is-array": 0,
    "jquery/no-is-function": 0,
    "jquery/no-is": 0,
    "jquery/no-load": 0,
    "jquery/no-map": 0,
    "jquery/no-merge": 0,
    "jquery/no-param": 0,
    "jquery/no-parent": 0,
    "jquery/no-parents": 0,
    "jquery/no-parse-html": 0,
    "jquery/no-prop": 0,
    "jquery/no-proxy": 0,
    "jquery/no-ready": 0,
    "jquery/no-serialize": 0,
    "jquery/no-show": 0,
    "jquery/no-size": 0,
    "jquery/no-sizzle": 0,
    "jquery/no-slide": 0,
    "jquery/no-submit": 0,
    "jquery/no-text": 0,
    "jquery/no-toggle": 0,
    "jquery/no-trigger": 0,
    "jquery/no-trim": 0,
    "jquery/no-val": 0,
    "jquery/no-when": 0,
    "jquery/no-wrap": 0,
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
  },
};
