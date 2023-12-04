// ==UserScript==
// @name        Wanikani Niai Similar Kanji
// @version     1.4.22
// @author      acm
// @description Adds a visually similar kanji section to content pages, reviews, and lessons
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_niai
//
// @match        https://www.wanikani.com/*
// @match        https://preview.wanikani.com/*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-similar-kanji/wk_niai.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-similar-kanji/wk_niai.user.js
//
// @resource    from_keisei_db https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/from_keisei_esc.json
// @resource    stroke_dist_db https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/stroke_edit_dist_esc.json
// @resource    yl_radical_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/yl_radical_esc.json
// @resource    old_script_db  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/old_script_esc.json
// @resource    noto_db        https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/wk_niai_noto_esc.json
// @resource    manual_db      https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/manual_esc.json
// @resource    lookup_db      https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/wanikani-similar-kanji/db/lookup_esc.json
//
// @resource    niai_style     https://raw.githubusercontent.com/mwil/wanikani-userscripts/289e5075b24b9e59cf79beb0db8cc5f95e87d180/wanikani-similar-kanji/css/wk_niai.css
// @resource    chargrid       https://raw.githubusercontent.com/mwil/wanikani-userscripts/289e5075b24b9e59cf79beb0db8cc5f95e87d180/wanikani-similar-kanji/css/wkstructchargrid.css
//
// @resource    bootstrapcss   https://raw.githubusercontent.com/mwil/wanikani-userscripts/73c3055bd88b1224454d7506c1ec80ba91e4d236/styles/bootstrap/css/bootstrap.crop.css
//
// @resource    bootstrap-js   https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/styles/bootstrap/js/bootstrap.js
// @resource    b-dropdown-js  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8ee517737d604f1df0ff103a33b69f1f07218815/styles/bootstrap/js/bootstrap-dropdown.js
//
// @require     https://greasyfork.org/scripts/430565-wanikani-item-info-injector/code/WaniKani%20Item%20Info%20Injector.user.js?version=1276693
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/57a8329fe0c51a66baf57161c1dbcbb6084ba99f/wanikani-similar-kanji/wk_niai.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/7f0ec344fda3df9441d55ae6ae73a01b001d96c8/wanikani-similar-kanji/wk_niai.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/73c3055bd88b1224454d7506c1ec80ba91e4d236/wanikani-similar-kanji/wk_niai.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/289e5075b24b9e59cf79beb0db8cc5f95e87d180/wanikani-similar-kanji/wk_niai.main.js
//
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant       unsafeWindow
//
// @run-at      document-end
// ==/UserScript==
