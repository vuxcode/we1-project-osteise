// target the mode button element
var modeBtn = document.getElementById("mode");
// set the default text to darkmode
modeBtn.innerText="darkmode";
// create a variable to the program knows what text to output
var darkmodeOn = true;
// create a function to swap to and from darkmode
function darkmode() {
    // target the body 
    var element = document.body;
    // toggle darkmode
    element.classList.toggle("dark-mode");
    // set variable to true to know what text to output
    // darkmodeOn = true;
    console.log("darkmode on");
    // create an if statement to output different texts on the button
    if (darkmodeOn) {
        modeBtn.innerText="lightmode";
        darkmodeOn = false;
    }
    else if (darkmodeOn == false) {
        modeBtn.innerText="darkmode";
    darkmodeOn = true;
    }
}