let homePtsEl = document.getElementById("home-pts");
let guestPtsEl = document.getElementById("guest-pts");

let homePoints = 0;
let guestPoints = 0;

function homePlusOne() {
  homePoints += 1;
  homePtsEl.textContent = homePoints;
}

function homePlusTwo() {
  homePoints += 2;
  homePtsEl.textContent = homePoints;
}

function homePlusThree() {
  homePoints += 3;
  homePtsEl.textContent = homePoints;
}

function guestPlusOne() {
  guestPoints += 1;
  guestPtsEl.textContent = guestPoints;
}

function guestPlusTwo() {
  guestPoints += 2;
  guestPtsEl.textContent = guestPoints;
}

function guestPlusThree() {
  guestPoints += 3;
  guestPtsEl.textContent = guestPoints;
}
