require('focus-visible');
window.ResizeObserver = window.ResizeObserver || require('@juggle/resize-observer').ResizeObserver;

if(!navigator.clipboard) {
    navigator.clipboard = require('clipboard-polyfill');
}
