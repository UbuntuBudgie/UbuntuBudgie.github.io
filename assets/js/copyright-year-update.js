// Autoupdate Copyright year
// Derived from:
// http://updateyourfooter.com
// https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-a-span-element-in-javascript#1358815

$(document).ready(function() {
    document.getElementById("copyright-year").textContent=(new Date().getFullYear());
});
