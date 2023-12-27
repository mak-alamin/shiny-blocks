/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/typing-text/view.js ***!
  \*********************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log('Hello from Typewriter Text');
var typed = new Typed(".sb-typed-texts", {
  strings: ["WordPress Expert", "Fullstack Dev", "UI/UX designer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  startDelay: 500
});

/* eslint-enable no-console */
/******/ })()
;
//# sourceMappingURL=view.js.map