const compareFn = () => 0.5 - Math.random();
const tile = document.querySelectorAll(".tile");
const results = [];
const choice = [];
let moveCount = 0;

const Num = document.querySelector("#Numbers");
const Icon = document.querySelector("#Icons");
const gridSix = document.querySelector("#Six");
const gridFour = document.querySelector("#Four");

const plys_1 = document.querySelector("#players__1");
const plys_2 = document.querySelector("#players__2");
const plys_3 = document.querySelector("#players__3");
const plys_4 = document.querySelector("#players__4");

menuBoard = [Num, Icon, gridFour, gridSix, plys_1, plys_2, plys_3, plys_4];

menuBoard.forEach(
  addEventListener("click", (event) => {
    startData(event);
  })
);

function startData(event) {
  const targetId = event.target.id;

  if (targetId == "Numbers") {
    localStorage.setItem("GridSymbol", "NUM");
  }
  if (targetId == "Icons") {
    localStorage.setItem("GridSymbol", "ICON");
  }
  if (targetId == "Six") {
    localStorage.setItem("GridSize", "SIX");
  }
  if (targetId == "Four") {
    localStorage.setItem("GridSize", "FOUR");
  }
  if (targetId === "players__1") {
    localStorage.setItem("Players", "ply_1");
  }
  if (targetId === "players__2") {
    localStorage.setItem("Players", "ply_2");
  }
  if (targetId === "players__3") {
    localStorage.setItem("Players", "ply_3");
  }
  if (targetId === "players__4") {
    localStorage.setItem("Players", "ply_4");
  }
}

function startGame() {
  const startMenu = document.querySelector(".menu__box");
  startMenu.style.display = "none";
  const gameBoard = document.querySelector(".gameBoard");
  gameBoard.style.display = "flex";

  const GNI = localStorage.getItem("GridSymbol");
  const GSI = localStorage.getItem("GridSize");

  let ele = document.querySelector("#timer");

  function timeUp() {
    let sec = 0;
    let min = 0;
    let timer = setInterval(() => {
      seconds = sec % 60;
      minutes = Math.floor(min / 60);
      ele.innerHTML = minutes + ":" + seconds;

      min++;
      sec++;
    }, 1000);
  }
  timeUp();

  if (GNI == "NUM") {
    if (GSI == "SIX") {
      const numbers = [
        { no: 1, id: 1 },
        { no: 2, id: 2 },
        { no: 3, id: 3 },
        { no: 4, id: 4 },
        { no: 5, id: 5 },
        { no: 6, id: 6 },
        { no: 7, id: 7 },
        { no: 8, id: 8 },
        { no: 9, id: 9 },
        { no: 10, id: 10 },
        { no: 11, id: 11 },
        { no: 12, id: 12 },
        { no: 13, id: 13 },
        { no: 14, id: 14 },
        { no: 15, id: 15 },
        { no: 16, id: 16 },
        { no: 17, id: 17 },
        { no: 18, id: 18 },
      ];
      numbers.sort(compareFn);
      for (let i = 0; i < numbers.length; i++) {
        results.push(numbers[i]);
        results.sort(compareFn).push(numbers[i]);
      }
      const userListEl = document.querySelector(" .tiles");
      userListEl.innerHTML = results.map((user) => text(user)).join("");
      return results;
    }
  }
  if (GNI == "NUM") {
    if (GSI == "FOUR") {
      const numbers = [
        { no: 1, id: 1 },
        { no: 2, id: 2 },
        { no: 3, id: 3 },
        { no: 4, id: 4 },
        { no: 5, id: 5 },
        { no: 6, id: 6 },
        { no: 7, id: 7 },
        { no: 8, id: 8 },
      ];
      numbers.sort(compareFn);
      for (let i = 0; i < numbers.length; i++) {
        results.push(numbers[i]);
        results.sort(compareFn).push(numbers[i]);
      }
      const userListEl = document.querySelector(" .tiles");
      userListEl.innerHTML = results.map((user) => text(user)).join("");
      return results;
    }
  }

  function text(user) {
    return `<div class="tile" id="${user.id}">
      ${user.no}
      </div>`;
  }

  if (GNI == "ICON") {
    if (GSI == "SIX") {
      const icons = [
        { no: 1, id: 1, img: "./assets/icons/1.svg" },
        { no: 2, id: 2, img: "./assets/icons/2.svg" },
        { no: 3, id: 3, img: "./assets/icons/3.svg" },
        { no: 4, id: 4, img: "./assets/icons/4.svg" },
        { no: 5, id: 5, img: "./assets/icons/5.svg" },
        { no: 6, id: 6, img: "./assets/icons/6.svg" },
        { no: 7, id: 7, img: "./assets/icons/7.svg" },
        { no: 8, id: 8, img: "./assets/icons/8.svg" },
        { no: 9, id: 9, img: "./assets/icons/9.svg" },
        { no: 10, id: 10, img: "./assets/icons/10.svg" },
        { no: 11, id: 11, img: "./assets/icons/11.svg" },
        { no: 12, id: 12, img: "./assets/icons/12.svg" },
        { no: 13, id: 13, img: "./assets/icons/13.svg" },
        { no: 14, id: 14, img: "./assets/icons/14.svg" },
        { no: 15, id: 15, img: "./assets/icons/15.svg" },
        { no: 16, id: 16, img: "./assets/icons/16.svg" },
        { no: 17, id: 17, img: "./assets/icons/17.svg" },
        { no: 18, id: 18, img: "./assets/icons/18.svg" },
      ];
      icons.sort(compareFn);
      for (let i = 0; i < icons.length; i++) {
        results.push(icons[i]);
        results.sort(compareFn).push(icons[i]);
      }
      const userListEl = document.querySelector(".tiles");
      userListEl.innerHTML = results.map((user) => textIcon(user)).join("");
      return results;
    }
  }
  if (GNI == "ICON") {
    if (GSI == "FOUR") {
      const icons = [
        { no: 1, id: 1, img: "./assets/icons/1.svg" },
        { no: 2, id: 2, img: "./assets/icons/2.svg" },
        { no: 3, id: 3, img: "./assets/icons/3.svg" },
        { no: 4, id: 4, img: "./assets/icons/4.svg" },
        { no: 5, id: 5, img: "./assets/icons/5.svg" },
        { no: 6, id: 6, img: "./assets/icons/6.svg" },
        { no: 7, id: 7, img: "./assets/icons/7.svg" },
        { no: 8, id: 8, img: "./assets/icons/8.svg" },
      ];
      icons.sort(compareFn);
      for (let i = 0; i < icons.length; i++) {
        results.push(icons[i]);
        results.sort(compareFn).push(icons[i]);
      }
      const userListEl = document.querySelector(".tiles");
      userListEl.innerHTML = results.map((user) => textIcon(user)).join("");
      return results;
    }
  }
  function textIcon(user) {
    return `<div class="tile" id="${user.id}" >
    <img src="${user.img}" class="tile__icon" >
      </div>`;
  }
}
tile.addEventListener("click", (event) => {
    gamegame(event)
  })


function gamegame(event){
  choice.push(event.target.id);
console.log('23456werty')
}

setTimeout(() => {
  
gamegame(e)}, 1000)



// function gm__play(event) {
//   choice.push(event.target.id);
//   console.log(choice);

//   if (choice.length == 2) {
//     if (choice[0] == choice[1]) {
//       console.log("win");
//     } else if (choice[0] !== choice[1]) {
//       console.log("lose");
//     }
//     moveCount = moveCount + 1;
//     const moves = document.querySelector(" .moves");
//     moves.innerHTML = moveCount;
//     console.log(moveCount);
//     choice.length = 0;
//   }
// }