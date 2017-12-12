// ==UserScript==
// @name        Wanikani Niai Similar Kanji
// @version     0.9.1
// @author      acm
// @description Adds a visually similar kanji section to content pages, reviews, and lessons
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_niai
//
// @include     *://www.wanikani.com/kanji/*
// @include     *://www.wanikani.com/review/session*
// @include     *://www.wanikani.com/lesson/session*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-similar-kanji/wk_niai.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-similar-kanji/wk_niai.user.js
//
// @resource    from_keisei   https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/from_keisei_esc.json
// @resource    stroke_dist   https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/stroke_edit_dist_esc.json
// @resource    yl_radical    https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/yl_radical_esc.json
// @resource    old_script    https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/old_script_esc.json
// @resource    manual        https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/manual_esc.json
// @resource    lookup        https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/db/lookup_esc.json
//
// @resource    niai_style    https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/css/wk_niai.css
//
// @resource    chargrid      https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/css/chargrid.css
// @resource    bootstrapcss  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/bootstrap/css/bootstrap.crop.css
//
// @resource    bootstrap-js  https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-phonetic-compounds/bootstrap/js/bootstrap.js
// @resource    b-dropdown-js https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/utility/bootstrap/js/bootstrap-dropdown.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/utility/wk_interaction.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/wk_niai.db.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/wk_niai.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/wk_niai.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/master/wanikani-similar-kanji/wk_niai.main.js
//
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==
