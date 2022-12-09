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
}
// run the function upon load
getArtists();
//create a variable to store the highscore
var highscore;
// create a variable to store the last score
var lastScore;

// create a variable and target the <p> id to output the artist
var text = document.getElementById("artistOutput");
// target the session stat image
var img = document.querySelector("img");

// get the total score from the program by creating a function
function getTotal() {
    // get the total score from the local storage
    total = localStorage.getItem("saved_total");
    // display the total score
    console.log(total);
}
// load the total score when the program loads
getTotal();

// output the total score on the session stats page
document.getElementById("totalStat").innerHTML = "The total number of questions you have answered is: " + total;

// create a function to get the last score
function getLastScore() {
    // get the last score from the local storage
    lastScore = localStorage.getItem("saved_last");
    // check it 
    console.log(lastScore);
}
// run the function when the program loads
getLastScore();
// output the last score on the session stats page
document.getElementById("lastScore").innerHTML = "The score of your last game was: " + lastScore;

// get the highscore value from the local storage
localStorage.getItem("saved_highscore");
// get the highscore from the local storage
function getHighscore() {
    // get the highscore from the local storage
    highscore = localStorage.getItem("saved_highscore");
    // check it
    console.log("highscore = " + highscore);
}
// run the program
getHighscore();

// output the highscore on the session stats page
document.getElementById("highscoreText").innerHTML = "Your highscore is: " + highscore;

//create an array to store the values
var artistArr = [mj, abba, elvis, acdc, bob, bruce, queen, elton, cash, mc, beatles];
// check the array
console.log(artistArr);
// check the highest value
console.log(Math.max(...artistArr));

if (cash == Math.max(...artistArr)) {
    img.src = "https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2012/2/28/1330447418243/I-was-evil.-I-really-was--007.jpg?width=465&quality=85&dpr=1&s=none";
    text.innerText="Johnny Cash!";
}
else if (queen == Math.max(...artistArr)) {
    img.src = img.src = "https://www.fractiondiscs.se/wp-content/uploads/2018/01/queen.jpg";
    text.innerText="Queen!";
}
else if (mj == Math.max(...artistArr)) {
    img.src = "https://image.newyork.se/wp-content/uploads/2022/02/MJ-The-Michael-Jackson-Musical-on-Broadway-Tickets-MJ-and-Cast.jpg";
    text.innerText="Michael Jackson!";
}
else if (abba == Math.max(...artistArr)) {
    img.src = "https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A68cb1de8-cbdd-11e8-8d0b-a6539b949662?source=ig";
    text.innerText="ABBA!";
}
else if (elvis == Math.max(...artistArr)) {
    img.src = "https://gaffa.blob.core.windows.net/gaffa-media/media/2503eabc-ac0c-44c8-8a90-14390cf28a2b/ElvisFoljerITupacsFotspar-default.webp";
    text.innerText="Elvis Presley!";
}
else if (acdc == Math.max(...artistArr)) {
    img.src = "https://images.aftonbladet-cdn.se/v2/images/a2c142e2-f09b-44bc-bd31-49607f8f7dd4?fit=crop&format=auto&h=1267&q=50&w=1900&s=91ff95d249b0910d674511139c1f72455d69c1c9";
    text.innerText="AC/DC!";
}
else if (bob == Math.max(...artistArr)) {
    img.src = "https://www.rollingstone.com/wp-content/uploads/2020/01/Bob-Marley-Lead.jpg?w=1581&h=1054&crop=1";
    text.innerText="Bob Marley!";
}
else if (bruce == Math.max(...artistArr)) {
    img.src = "https://static01.nyt.com/images/2021/12/17/arts/15culture-springsteen/15culture-springsteen-videoSixteenByNine3000-v2.jpg";
    text.innerText="Bruce Springsteen!";
}
else if (elton == Math.max(...artistArr)) {
    img.src = "https://static-cdn.sr.se/images/2794/c4d9a082-b2a8-412b-8d3e-5844e3f862c4.jpg";
    text.innerText="Elton John!";
}
else if (mc == Math.max(...artistArr)) {
    img.src = "https://www.udiscovermusic.com/wp-content/uploads/2020/11/Mo%CC%88tley-Cru%CC%88e-GettyImages-1202277301-1000x600.jpg";
    text.innerText="Motley Crue!";
}
else if (beatles == Math.max(...artistArr)) {
    img.src = "https://svd.vgc.no/v2/images/81e63073-137a-45ba-93b3-e8e70a1b9736?h=560&q=80&upscale=true&w=995&s=c8dd41c0e57da0a82faeeab43db3b43ed8428860";
    text.innerText="The Beatles!";
}
else if (Math.min(...artistArr) == 0) {
    img.src = "";
    text.innerText="Answer more questions to see\nthe most frequent appearing artist!"
}
else if (artistArr == null) {
    img.src = "";
    text.innerText="Answer more questions to see\nthe most frequent appearing artist!"
}