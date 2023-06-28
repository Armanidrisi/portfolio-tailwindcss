var btn = document.getElementById("btn");
var nav = document.getElementById("menu");
if (btn && nav) {
    btn.addEventListener("click", function () {
        nav.classList.toggle("flex");
        nav.classList.toggle("hidden");
    });
}
