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


// SESSIONS STATS SPECIFIC CODE STARTS HERE

// create a variable for all artists to collect them from the localstorage
var mj;
var acdc;
var bruce;
var abba;
var elvis;
var cash;
var mc;
var bob;
var elton;
var queen;
var beatles;
// create a function to import values from local storage
function getArtists() {
    mj = localStorage.getItem("saved_mj");
    acdc = localStorage.getItem("saved_acdc");
    bruce = localStorage.getItem("saved_bruce");
    abba = localStorage.getItem("saved_abba");
    elvis = localStorage.getItem("saved_elvis");
    cash = localStorage.getItem("saved_cash");
    mc = localStorage.getItem("saved_mc");
    bob = localStorage.getItem("saved_bob");
    elton = localStorage.getItem("saved_elton");
    queen = localStorage.getItem("saved_queen");
    beatles = localStorage.getItem("saved_beatles");
    console.log("fetching artists");
    console.log(acdc + "acdc");
    console.log(cash + "cash");
}
// run the function upon load
getArtists();

function imgOutput() {
// create an if statement that controls what image is shown
if (acdc > mj && bruce && abba && elvis && cash && mc && bob && elton && queen && beatles) {
    img.src = "https://images.aftonbladet-cdn.se/v2/images/a2c142e2-f09b-44bc-bd31-49607f8f7dd4?fit=crop&format=auto&h=1267&q=50&w=1900&s=91ff95d249b0910d674511139c1f72455d69c1c9";
}
else if (cash > mj && bruce && abba && elvis && acdc && mc && bob && elton && queen && beatles) {
    img.src = "https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2012/2/28/1330447418243/I-was-evil.-I-really-was--007.jpg?width=465&quality=85&dpr=1&s=none";
}
else if (abba > mj && bruce && cash && elvis && acdc && mc && bob && elton && queen && beatles) {
    img.src = "https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A68cb1de8-cbdd-11e8-8d0b-a6539b949662?source=ig";
}
else if (elton > mj && bruce && abba && elvis && acdc && mc && bob && cash && queen && beatles) {
    img.src = "https://static-cdn.sr.se/images/2794/c4d9a082-b2a8-412b-8d3e-5844e3f862c4.jpg";
}
else if (mj > bruce && cash && abba && elvis && acdc && mc && bob && elton && queen && beatles) {
    img.src = "https://image.newyork.se/wp-content/uploads/2022/02/MJ-The-Michael-Jackson-Musical-on-Broadway-Tickets-MJ-and-Cast.jpg";
}
else if (bruce > acdc && cash && abba && elvis && mc && bob && elton && mj && queen && beatles) {
    img.src = "https://static01.nyt.com/images/2021/12/17/arts/15culture-springsteen/15culture-springsteen-videoSixteenByNine3000-v2.jpg";
}
else if (bob > mj && bruce && abba && elvis && acdc && mc && cash && elton && queen && beatles) {
    img.src = "https://www.rollingstone.com/wp-content/uploads/2020/01/Bob-Marley-Lead.jpg?w=1581&h=1054&crop=1";
}
else if (beatles > mj && bruce && abba && elvis && acdc && mc && bob && elton && queen && cash) {
    img.src = "https://svd.vgc.no/v2/images/81e63073-137a-45ba-93b3-e8e70a1b9736?h=560&q=80&upscale=true&w=995&s=c8dd41c0e57da0a82faeeab43db3b43ed8428860";
}
else if (mc > mj && bruce && abba && elvis && acdc && cash && bob && elton && queen && beatles) {
    img.src = "https://www.udiscovermusic.com/wp-content/uploads/2020/11/Mo%CC%88tley-Cru%CC%88e-GettyImages-1202277301-1000x600.jpg";
}
else if (elvis > mj && bruce && abba && cash && acdc && mc && bob && elton && queen && beatles) {
    img.src = "https://gaffa.blob.core.windows.net/gaffa-media/media/2503eabc-ac0c-44c8-8a90-14390cf28a2b/ElvisFoljerITupacsFotspar-default.webp";
}
else if (queen > mj && bruce && abba && elvis && acdc && mc && bob && elton && cash && beatles) {
    img.src = "https://www.fractiondiscs.se/wp-content/uploads/2018/01/queen.jpg";
}
}
// imgOutput();

var total;
var img;
// get the total score from the program by creating a function
function getTotal() {
    // get the total score from the local storage
    total = localStorage.getItem("saved_total");
    // display the total score
    console.log(total);
}

// load the total score when the program loads
// getTotal();


var lastScore;
// create a function to get the last score
function getLastScore() {
    // get the last score from the local storage
    lastScore = localStorage.getItem("saved_last");
    // check it 
    console.log(lastScore);
}

// run the function when the program loads
// getLastScore();

localStorage.getItem("saved_highscore");


var highscore;
// get the highscore from the local storage
function getHighscore() {
    // get the highscore from the local storage
    highscore = localStorage.getItem("saved_highscore");
    // check it
    console.log("highscore = " + highscore);
}
// run the program
// getHighscore();

// create a function so that this only works if the session stat page is loaded
function statPage() {
    // create an if statement to return if the page is the wrong one
    if (location.href === 'index.html') {
        return;
    }
    else if (location.href === 'contact.html') {
        return;
    }
    else if (location.href === 'info.html') {
        return;
    }
    // else if (location.href === 'session-stats.html') {
    // target the session stat image
var img = document.querySelector("img");
// output the total score on the session stats page
document.getElementById("totalStat").innerHTML = "Your total stat is: " + total;
// output the last score on the session stats page
document.getElementById("lastScore").innerHTML = "Your latest score is: " + lastScore;
// output the highscore on the session stats page
document.getElementById("highscoreText").innerHTML = "Your highscore is: " + highscore;
// run the function specific to the session stat page
console.log("HEJ");
imgOutput();
}
// }
getTotal();
getLastScore();
getHighscore();
statPage();