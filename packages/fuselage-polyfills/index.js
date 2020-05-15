require('focus-visible');
var clipboard = require('clipboard-polyfill');
var ResizeObserver = require('@juggle/resize-observer');
window.ResizeObserver = window.ResizeObserver || ResizeObserver.ResizeObserver;
navigator.clipboard = navigator.clipboard || clipboard;
