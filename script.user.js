// ==UserScript==
// @name         Webmotes
// @namespace    http://iap-reloaded.github.io/Webmotes
// @version      0.23
// @description  emoji to be used over the entire web
// @author       IAP-Reloaded
// @match       *://*/*
// @grant        none
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js
// ==/UserScript==

// We're already at version 20!
// 0.21: moving this into multiple functions. hope this works.
// 0.22: Still not working.
// 0.23: Perhaps removing quotes would work?
// 1.00: Functions now working! Added facebook one too. Version variable too

var version = 1.00

function applyWebmote(code, url) {
  var replace = "[" + code + "]"
  $("div:contains(" + replace + ")").html(function(_, html) {
    return html.replace(replace, "<img src='" + url + "'>");
  });
} 

applyWebmote("minecraft-diamond", "https://github.com/IAP-Reloaded/Webmotes/raw/master/Grid_Diamant.png");
applyWebmote("facebook", "http://ownlocal-adforge-assets.s3.amazonaws.com/production/social/facebook-03b14203ab0e8e3c82388d329d0a57b5d116b7e784060ba214be6571ea6653f8.png");
applyWebmote("itworks", "http://i.imgur.com/BjaY6nR.png")
applyWebmote("itworks-dark", "http://i.imgur.com/2u9WdEk.png")
applyWebmote("flipped-smile", "http://i.imgur.com/OuFD0NS.png")
applyWebmote("frown", "http://i.imgur.com/h206D7y.png")
applyWebmote("animationtest", "https://i.imgur.com/NhxgpdA.gif")
applyWebmote("yourversion", version)
applyWebmote("billcipherwheel", "https://i1.sndcdn.com/artworks-000132224764-hvpveo-small.jpg")
applyWebmote("billcipherdeal", "https://i1.sndcdn.com/artworks-000058208109-z2pw13-small.jpg")
applyWebmote("rainbow", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Rainbow.png")
applyWebmote("reverse-rainbow", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Backwards%20Rainbow.png")
applyWebmote("itworks-white", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/It%20Works%20White.png")
