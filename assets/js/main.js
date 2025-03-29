
// PRELOADER
window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});
