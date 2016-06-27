// ==UserScript==
// @name         Webmotes
// @namespace    http://iap-reloaded.github.io/Webmotes
// @version      0.17
// @description  emoji to be used over the entire web
// @author       IAP-Reloaded
// @match       *://*/*
// @grant        none
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js
// ==/UserScript==

$("div:contains('[itworks]')").html(function (_, html) { // proof that it works
     return html.replace("[itworks]","<img src='http://i.imgur.com/BjaY6nR.png' />");
});

$("div:contains('[itworks-dark]')").html(function (_, html) { // dark version of itworks
     return html.replace("[itworks-dark]","<img src='http://i.imgur.com/2u9WdEk.png' />");
});

$("div:contains('[flipped-smile]')").html(function (_, html) { // dark version of itworks
     return html.replace("[flipped-smile]","<img src='http://i.imgur.com/OuFD0NS.png' />");
});

$("div:contains('[frown]')").html(function (_, html) { // dark version of itworks
     return html.replace("[frown]","<img src='http://i.imgur.com/h206D7y.png' />");
});
