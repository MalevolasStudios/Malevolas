window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrolltop')
        scroll.classList.toggle('active', window.scrollY > 200)
})

document.querySelector("#seta").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#container");

    console.log("go to up");
});

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#tatuadores").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#artistas");

    console.log("go to up");
});
document.querySelector("#tatuadores_foto").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#artistas_foto");

    console.log("go to up");
});
document.querySelector("#pierce").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#pierce_");

    console.log("go to up");
});
document.querySelector("#Body_piercing").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#Body_");

    console.log("go to up");
});

function loading() {
    document.getElementsByClassName('load')[0].style.display = "none";
    document.getElementsByClassName('loandig')[0].style.display = "block";
}