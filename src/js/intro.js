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

let miniDelay = 200;

setTimeout(() => {
    header.classList.add("full");
    setTimeout(() => {
        boxes.classList.add("show");
    }, miniDelay);
    setTimeout(() => {
        title.classList.remove("displayBlock");
    }, miniDelay+200);
}, animationDuration);