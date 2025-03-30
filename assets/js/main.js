
// PRELOADER
window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});

// VIDEO PLAYER
document.getElementById("playButton").addEventListener("click", function () {
    let videoWrapper = document.getElementById("videoWrapper");

    let videoEmbed = `
        <iframe width="100%" height="100%"
            src="https://www.youtube.com/embed/t9-cMiEDNyk?autoplay=1&rel=0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;

    videoWrapper.innerHTML = videoEmbed;
});
