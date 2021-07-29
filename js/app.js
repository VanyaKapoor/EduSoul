const navbar = document.getElementById("nav");
const hamburgerIcon = document.getElementById("menu-icon");
const navItems = document.getElementsByClassName("nav-items")[0];

hamburgerIcon.addEventListener("click", () => {
    console.log("click");
    openNav();
});

changeNavColor = () => {
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

openNav = () => {
    document.getElementById("mySidepanel").style.width = "250px";
};

closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
};

window.onscroll = changeNavColor;

// TypeEffect class
class TypeEffect {
    // constructor
    constructor(textElement, words) {
        this.textElement = textElement;
        this.words = words;
        this.text = 0;
        this.wordIndex = 1;
        this.typeSpeed = 100;
        this.delete = false;
        this.phrase = "";
        // calling the type method in the constructor
        this.type();
    }
    type() {
        // checking if all the texts have been typed
        if (this.text === this.words.length) {
            // set the index back to 0
            this.text = 0;
        }
        // getting the text from the array
        let text = this.words[this.text];
        // is delete is true
        if (this.delete) {
            // increase the typeSpeed
            this.typeSpeed = 50;
            // deleting the text
            this.phrase = text.slice(0, this.wordIndex);
            // decrementing the wordIndex
            this.wordIndex--;
        } else {
            // decrease the typeSpeed
            this.typeSpeed = 100;
            // typing the word
            this.phrase = text.slice(0, this.wordIndex);
            // incrementing the wordIndex
            this.wordIndex++;
        }
        // setting the text of the span to the phrase
        this.textElement.innerText = this.phrase;
        // if delete is false and the full phrase has been typed
        if (!this.delete && this.wordIndex - 1 === text.length) {
            // introduce a delay
            this.typeSpeed = 1000;
            // set delete to true
            this.delete = true;
            // if delete is true and the full phrase has been deleted
        } else if (this.delete && this.phrase == "") {
            // introduce a delay
            this.typeSpeed = 1000;
            // set delete to false
            this.delete = false;
            // incrementing the text Index to type the next word from the array
            this.text += 1;
            // setting the wordIndex back to one
            this.wordIndex = 1;
        }
        // calling the function after the typeSpeed
        setTimeout(() => {
            this.type();
        }, this.typeSpeed);
    }
}

// the main method
function main() {
    const textElement = document.querySelector(".title3");
    const words = ["ME", "YOU", "EVERYONE"];
    new TypeEffect(textElement, words);
}
// calling the init method when the Dom content is loaded
document.addEventListener("DOMContentLoaded", main);


// Donation Js