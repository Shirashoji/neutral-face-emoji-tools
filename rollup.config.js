import svelte from "rollup-plugin-svelte";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";
import css from "rollup-plugin-import-css";
// import embedCSS from "rollup-plugin-embed-css";

const config = {
  input: "src/content.js",
  plugins: [
    css({
      /* Options */
    }),
    svelte({
      dev: true,
    }),
    babel({
      babelHelpers: "bundled",
      compact: false,
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    globals(),
    builtins(),
  ],
  output: {
    file: "dist/content.js",
    format: "iife",
  },
};

export default config;
