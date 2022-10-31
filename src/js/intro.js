// INTRO ANIMATION

let animationDuration = 7000;


// disable scroll at start
setTimeout(() => {
    let main = document.getElementsByClassName("main-wrapper")[0];
    main.classList.remove("stopScroll");
}, animationDuration);

// show and hide welcome title and header
let title = document.getElementsByClassName("mainTitleContainer")[0];
let header = document.getElementsByClassName("header")[0];
let boxes = document.getElementsByClassName("mainBoxesContainer")[0];

title.classList.add("displayBlock");

setTimeout(() => {
    header.classList.add("full");
    setTimeout(() => {
        title.classList.remove("displayBlock");
        boxes.classList.add("show");
    }, 200);
}, animationDuration);