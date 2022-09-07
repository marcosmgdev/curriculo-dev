export const env = {
  es6: true,
  browser: true,
  node: true,
};
export const extends = ["airbnb", "prettier"];
export const globals = {
  Atomics: "readonly",
  SharedArrayBuffer: "readonly",
  __DEV__: "readonly",
};
export const parser = "babel-eslint";
export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 2018,
  sourceType: "module",
};
export const plugins = ["react", "prettier"];
export const rules = {
  "prettier/prettier": [
    "error",
    { endOfLine: "auto" },
    { usePrettierrc: true },
  ],
  "react/jsx-filename-extension": [
    "warn",
    {
      extensions: [".jsx", ".js"],
    },
  ],
  "import/prefer-default-export": "off",
  "react/state-in-constructor": "off",
  "react/static-property-placement": "off",
  "react/jsx-props-no-spreading": "off",
  "react/prop-types": "off",
  "no-param-reassign": "off",
  "no-console": "off",
  "react/react-in-jsx-scope": "off",
};
