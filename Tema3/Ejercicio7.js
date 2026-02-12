
var images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

var currentIndex = 0;

var slide = document.getElementById("slide");


slide.style.backgroundImage = "url('" + images[currentIndex] + "')";

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0; // loop to first image
    }

    slide.style.backgroundImage = "url('" + images[currentIndex] + "')";
}

function prevImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; // loop to last image
    }

    slide.style.backgroundImage = "url('" + images[currentIndex] + "')";
}
