window.onbeforeunload = function () {
    document.getElementById("firstPage").scrollIntoView();
}

function goScroll(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
}