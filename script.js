// Lightbox Functionality (Show Image + Memory Text)
function openLightbox(imageSrc, memoryText) {
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("memory-text").textContent = memoryText;
    document.getElementById("lightbox").style.display = "flex";
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Apology Button Interaction
document.getElementById("forgiveButton").addEventListener("click", function() {
    alert("I love you so much! ❤️");
});
