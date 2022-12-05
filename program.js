// target the mode button element
var modeBtn = document.getElementById("mode");
// set the default text to darkmode
modeBtn.innerText="darkmode";
// create a variable to the program knows what text to output
var darkmodeOn = true;
// target the body 
var element = document.body;

// create a variable to store what theme is being used
var modeSet;
// set the local storage
// localStorage.setItem("saved_theme");
// get the variable from the local storage
modeSet = localStorage.getItem("saved_theme");

function defaultTheme() {
// create an if statement to know what theme to load
if (modeSet == "dark") {
    modeBtn.innerText="LIGHT";
    darkmodeOn = false;
    element.classList = "dark-mode";
}
else if (modeSet == "light") {
    modeBtn.innerText="DARK";
    darkmodeOn = true;
    element.classList = "light-mode";
}
}

defaultTheme();

// create a function to swap to and from darkmode
function darkmode() {
    // create if statement to toggle dark mode on/off
    // turn darkmode on
    if (darkmodeOn) {
        // set theme to dark
        element.classList = "dark-mode";
        // change the button text
        modeBtn.innerText="LIGHT";
        // set variable to false
        darkmodeOn = false;
        // set the local storage variable
        modeSet = "dark";
        // set it in the local storage
        localStorage.setItem("saved_theme", modeSet);
    }
    // turn lightmode on
    else if (darkmodeOn == false) {
        // set the theme to light
        element.classList = "light-mode";
        // change the button text
        modeBtn.innerText="DARK";
        // set the variable to true
        darkmodeOn = true;
        // set the local storage variable
        modeSet = "light";
        // set it in the local storage
        localStorage.setItem("saved_theme", modeSet);
    }
}
