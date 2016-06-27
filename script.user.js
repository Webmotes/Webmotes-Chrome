// ==UserScript==
// @name         Webmotes
// @namespace    http://iap-reloaded.github.io/Webmotes
// @version      0.2
// @description  emoji to be used over the entire web
// @author       IAP-Reloaded
// @match       *
// @grant        none
// ==/UserScript==

$(".forum-threadview-post-text:contains('[itworks]')").html(function (_, html) {
     return html.replace(/[itworks]/g,"<img src='http://i.imgur.com/BjaY6nR.png' />");
});

$(".forum-threadview-post-text:contains('[itworks-dark]')").html(function (_, html) {
     return html.replace(/[itworks-dark]/g,"<img src='http://i.imgur.com/2u9WdEk.png' />");
});
