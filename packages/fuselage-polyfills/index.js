require('focus-visible');
window.ResizeObserver = window.ResizeObserver || require('@juggle/resize-observer').ResizeObserver;
navigator.clipboard = navigator.clipboard || require('clipboard-polyfill');
Element.closest = Element.closest || require('element-closest-polyfill');