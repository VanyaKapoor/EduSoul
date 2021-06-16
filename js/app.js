const navbar = document.getElementById("nav");
const hamburgerIcon = document.getElementById("menu-icon");
const navItems = document.getElementsByClassName("nav-items")[0];

hamburgerIcon.addEventListener("click", () => {
  openNav();
});

changeNavColor = () => {
  console.log(window.innerWidth);
  if (window.innerWidth >= 700) {
    if (
      document.body.scrollTop > window.innerHeight / 5 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.style.width = "100%";
      // navbar.style.position = "fixed";
      document.getElementById("nav-bg").style.width = "100%";
    } else {
      // navbar.style.position = "sticky";
      document.getElementById("nav-bg").style.width = "100px";
    }
  }
};

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

window.onscroll = changeNavColor;

function main() {}
