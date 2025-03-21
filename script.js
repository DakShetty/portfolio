let certImages = [
    "images/certifications/cert1.jpg",
    "images/certifications/cert2.jpg",
    "images/certifications/cert3.jpg",
    "images/certifications/cert4.jpg",
    "images/certifications/cert5.jpg",
    "images/certifications/cert6.jpg"
];

let currentCert = 0;
document.getElementById("prev").addEventListener("click", function () {
    currentCert = (currentCert - 1 + certImages.length) % certImages.length;
    document.getElementById("certImage").src = certImages[currentCert];
});

document.getElementById("next").addEventListener("click", function () {
    currentCert = (currentCert + 1) % certImages.length;
    document.getElementById("certImage").src = certImages[currentCert];
}); 












