// ==UserScript==
// @name         Webmotes
// @namespace    http://iap-reloaded.github.io/Webmotes
// @version      0.9
// @description  emoji to be used over the entire web
// @author       IAP-Reloaded
// @match       *://*/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

$(".forum-threadview-post-text:contains('[itworks]')").html(function (_, html) {
     return html.replace(/[itworks]/g,"<img src='http://i.imgur.com/BjaY6nR.png' />");
});

$(".forum-threadview-post-text:contains('[itworks-dark]')").html(function (_, html) {
     return html.replace(/[itworks-dark]/g,"<img src='http://i.imgur.com/2u9WdEk.png' />");
});
