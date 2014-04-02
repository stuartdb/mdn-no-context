// ==UserScript==
// @name mdn-no-context
// @version 0.1
// @namespace https://github.com/stuartdb/mdn-no-context
// @author Stuart Baker
// @description Removes context menu items on the MDN
// @include *://developer.mozilla.org/*
// @downloadURL https://github.com/stuartdb/mdn-no-context/raw/master/mdn-no-context.user.js
// @updateURL https://github.com/stuartdb/mdn-no-context/raw/master/mdn-no-context.meta.js
// @run-at document-end
// ==/UserScript==
(function () {
    'use strict';
    var menu_html;

    menu_html = document.getElementsByTagName('menu');
    menu_html[0].remove();
}());
