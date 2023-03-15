let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let scoreHome = 0;
let scoreGuest = 0;

function homePlusOne() {
  scoreHome += 1;
  homeScore.textContent = scoreHome;
}

function homePlusTwo() {
  scoreHome += 2;
  homeScore.textContent = scoreHome;
}

function homePlusThree() {
  scoreHome += 3;
  homeScore.textContent = scoreHome;
}

function guestPlusOne() {
  scoreGuest += 1;
  guestScore.textContent = scoreGuest;
}

function guestPlusTwo() {
  scoreGuest += 2;
  guestScore.textContent = scoreGuest;
}

function guestPlusThree() {
  scoreGuest += 3;
  guestScore.textContent = scoreGuest;
}
