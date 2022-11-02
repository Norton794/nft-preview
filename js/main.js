let img = document.getElementById("figureWrapper")
let thumb = document.getElementById("thumb")

img.addEventListener('mouseover', (event) => {
    thumb.style.opacity = 0.5;
});

img.addEventListener('mouseout', (event) => {
    thumb.style.opacity = 0;
});