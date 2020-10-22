require('focus-visible');
window.ResizeObserver = window.ResizeObserver || require('@juggle/resize-observer').ResizeObserver;
navigator.clipboard = navigator.clipboard || require('clipboard-polyfill');
if(!Element.closest){ require('element-closest-polyfill') };
