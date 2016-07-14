// ==UserScript==
// @name         Webmotes
// @namespace    http://iap-reloaded.github.io/Webmotes
// @version      1.07
// @description  emoji to be used over the entire web
// @author       IAP-Reloaded
// @match        *://*/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js
// ==/UserScript==

// 1.05: New linkable Webmotes
// 1.05.1: Linked it directly.
// 1.05.2: Quick fix for Stack Overflow URL
// 1.06: Semicolons for the win! Also new Webmotes
// Some stuff

var version = "1.07";
var subversion = "";
var fullversion = version + subversion;

function applyWebmote(code, image, link) {
  var replace = "[" + code + "]"
  $("div:contains(" + replace + ")").html(function(_, html) {
      return html.replace(replace, "<a href='" + link + "'><img src='" + image + "'></a>");
  });
} 

applyWebmote("dog", "https://github.com/IAP-Reloaded/Webmotes/blob/master/Peanut%20Sad%20Webmote.png?raw=true", "")
applyWebmote("googlemaps", "https://showtheway.io/img/showtheway-google-maps.png", "https://maps.google.com");
applyWebmote("google", "https://addons.cdn.mozilla.net/user-media/addon_icons/613/613484-32.png?modified=1441898710", "https://www.google.com");
applyWebmote("askubuntu", "http://cdn.sstatic.net/Sites/askubuntu/img/favicon.ico?v=4f32ecc8f43d", "https://www.askubuntu.com");
applyWebmote("stackoverflow", "http://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d", "https://www.stackoverflow.com");
applyWebmote("minecraft-diamond", "https://github.com/IAP-Reloaded/Webmotes/raw/master/Grid_Diamant.png", "");
applyWebmote("facebook", "http://screenshots.en.sftcdn.net/en/scrn/69665000/69665708/facebook-chat-notification-02-32x32.png", "");
applyWebmote("itworks", "http://i.imgur.com/BjaY6nR.png", "");
applyWebmote("itworks-dark", "http://i.imgur.com/2u9WdEk.png", "");
applyWebmote("flipped-smile", "http://i.imgur.com/OuFD0NS.png", "");
applyWebmote("frown", "http://i.imgur.com/h206D7y.png", "");
applyWebmote("animationtest", "https://i.imgur.com/NhxgpdA.gif", "");
applyWebmote("version", "https://github.com/IAP-Reloaded/Webmotes/blob/master/" + version + "%20Version%20Number.png?raw=true", ""); // Make sure to update this! May change version to fullversion later
applyWebmote("billcipherwheel", "https://i1.sndcdn.com/artworks-000132224764-hvpveo-small.jpg", "");
applyWebmote("billcipherdeal", "https://i1.sndcdn.com/artworks-000058208109-z2pw13-small.jpg", "");
applyWebmote("rainbow", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Rainbow.png", "");
applyWebmote("backwards-rainbow", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/Backwards%20Rainbow.png", "");
applyWebmote("itworks-white", "https://raw.githubusercontent.com/IAP-Reloaded/Webmotes/master/It%20Works%20White.png", "");
