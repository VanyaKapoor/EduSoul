function main() {
}

navbar = document.getElementById("nav");
window.onscroll = function () {
    if (document.body.scrollTop > window.innerHeight / 5 || document.documentElement.scrollTop > 50) {
        navbar.style.width = "100%";
        // navbar.style.position = "fixed";
        document.getElementById("nav-bg").style.width = "100%";
    } else {
        // navbar.style.position = "sticky";
        document.getElementById("nav-bg").style.width = "100px";
    }
};

document.addEventListener('DOMContentLoaded', main);
