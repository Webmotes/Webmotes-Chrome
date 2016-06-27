// ==UserScript==
// @name         Webmotes
// @namespace    http://iap-reloaded.github.io/Webmotes
// @version      0.20
// @description  emoji to be used over the entire web
// @author       IAP-Reloaded
// @match       *://*/*
// @grant        none
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js
// ==/UserScript==

// We're already at version 20!

$("div:contains('[itworks]')").html(function (_, html) { // proof that it works
     return html.replace("[itworks]","<img src='http://i.imgur.com/BjaY6nR.png' />");
});

$("div:contains('[itworks-dark]')").html(function (_, html) { // dark version of itworks
     return html.replace("[itworks-dark]","<img src='http://i.imgur.com/2u9WdEk.png' />");
});

$("div:contains('[flipped-smile]')").html(function (_, html) { // flipped smile
     return html.replace("[flipped-smile]","<img src='http://i.imgur.com/OuFD0NS.png' />");
});

$("div:contains('[frown]')").html(function (_, html) { // frown
     return html.replace("[frown]","<img src='http://i.imgur.com/h206D7y.png' />");
});

$("div:contains('[animationtest]')").html(function (_, html) { // test for animation
     return html.replace("[animationtest]","<img src='https://i.imgur.com/NhxgpdA.gif' />");
});
https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbFB_48feefIAvILEDvptvUV76sEVRaepT_VbXsXU7etqDcwdT
$("div:contains('[yourversion]')").html(function (_, html) { // displays the current version
     return html.replace("[yourversion]","1.19");
});

$("div:contains('[billcipherwheel]')").html(function (_, html) { // bill cipher wheel
     return html.replace("[billcipherwheel]","<img src='https://i1.sndcdn.com/artworks-000132224764-hvpveo-small.jpg' />");
});

$("div:contains('[billcipherdeal]')").html(function (_, html) { // bill cipher making a deal
     return html.replace("[billcipherdeal]","<img src='https://i1.sndcdn.com/artworks-000058208109-z2pw13-small.jpg' />");
});

$("div:contains('[rainbow]')").html(function (_, html) {
     return html.replace("[rainbow]","<img src='https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Rainbow.png' />");
});

$("div:contains('[reverse-rainbow]')").html(function (_, html) {
     return html.replace("[reverse-rainbow]","<img src='https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Backwards%20Rainbow.png' />");
});

$("div:contains('[itworks-white]')").html(function (_, html) {
     return html.replace("[itworks-white]","<img src='https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/It%20Works%20White.png' />");
});
