// ==UserScript==
// @name         Webmotes
// @namespace    http://iap-reloaded.github.io/Webmotes
// @version      0.15
// @description  emoji to be used over the entire web
// @author       IAP-Reloaded
// @match       *://*/*
// @grant        none
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js
// ==/UserScript==

$(".forum-threadview-post-text:contains('[itworks]')").html(function (_, html) {
     return html.replace("[itworks]","<img src='http://i.imgur.com/BjaY6nR.png' />");
});

$(".forum-threadview-post-text:contains('[itworks-dark]')").html(function (_, html) {
     return html.replace(/[itworks-dark]/g,"<img src='http://i.imgur.com/2u9WdEk.png' />");
});
