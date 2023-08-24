const compareFn = () => 0.5 - Math.random();

const results = [];
const choice = [];
let moveCount = 0;
let tile_icons = [];
let tiles = [];

const Num = document.querySelector("#Numbers");
const Icon = document.querySelector("#Icons");
const gridSix = document.querySelector("#Six");
const gridFour = document.querySelector("#Four");

const plys_1 = document.querySelector("#players__1");
const plys_2 = document.querySelector("#players__2");
const plys_3 = document.querySelector("#players__3");
const plys_4 = document.querySelector("#players__4");

const OBJ12 = [
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

const OBJ8 = [
  { no: 1, id: 1, img: "./assets/icons/1.svg" },
  { no: 2, id: 2, img: "./assets/icons/2.svg" },
  { no: 3, id: 3, img: "./assets/icons/3.svg" },
  { no: 4, id: 4, img: "./assets/icons/4.svg" },
  { no: 5, id: 5, img: "./assets/icons/5.svg" },
  { no: 6, id: 6, img: "./assets/icons/6.svg" },
  { no: 7, id: 7, img: "./assets/icons/7.svg" },
  { no: 8, id: 8, img: "./assets/icons/8.svg" },
];

function textIcon(user) {
  return `<div class="tile" id="${user.id}" >
  <img id="${user.no}" src="${user.img}" class="tile__icon" >
    </div>`;
}

function text(user) {
  return `<div class="tile" id="${user.id}">
    ${user.no}
     </div>`;
}

function func_img(event) {
  console.log(event);
  const imgTragetId = event.target.childNodes[1].id;
  console.log(imgTragetId);
  console.log(tile_icon[imgTragetId]);
  for (let i = 0; i < tile_icon.length; ++i) {}
}

function gm__play(event) {
  choice.push(event.target.id);
  console.log(choice);
  // console.log(results)

  if (choice.length == 2) {
    if (choice[0] == choice[1]) {
      // console.log("win");
      // console.log(tiles[0])
      // console.log(tiles[0])
      // console.log([choice[0]])
      // console.log([choice[1]])
    } else if (choice[0] !== choice[1]) {
      // console.log("lose");
      // console.log(tiles[0])
      // console.log(tiles[0])
      // console.log([choice[0]])
      // console.log([choice[1]])
    }

    moveCount = moveCount + 1;
    const moves = document.querySelector(" .moves");
    moves.innerHTML = moveCount;
    console.log(moveCount);
  }

  const GridSym = localStorage.getItem("GridSymbol");

  if (GridSym == "NUM") {
    textTragetId = event.target.id;
    innerTextId = event.target.innerText;

    for (let i = 0; i < results.length; ++i) {
      const poId = (results[i].poID = i);

      if (tiles[0][i].id == textTragetId) {
        if (poId == results.indexOf(results[i])) {
          event.target.innerHTML = `${results[i].no}`;
        }
      }
    }
    // console.log(tiles[0][i].childNodes[0])
    // console.log(event.target.innerText)
    // console.log(event.target.id)
    for (let i = 0; i < tiles[0].length; ++i) {
      if (tiles[0][i].innerText == event.target.id) {
        tiles[0][i].classList.add("clickOnce");

        if (choice[0] !== choice[1]) {
          const TileOne = [];
          const TileTwo = [];

          if (tiles[0][i].id == choice[0]) {
            TileOne.push( tiles[0][i])
          }
          if (tiles[0][i].id == choice[1]) {
            TileTwo.push( tiles[0][i])
          }

          console.log(TileOne[0]);
          if (choice.length == 2) {
            console.log(TileTwo[0]);

            // tiles[0][i].style.visibility = "hidden";
            choice.length = 0;
          }
        }
      }
    }
  }

  if (GridSym == "ICON") {
    imgTragetId = event.target.childNodes[1].id;
    console.log(imgTragetId);
    for (let i = 0; i < tile_icons[0].length; ++i) {
      if (tile_icons[0][i].id == imgTragetId)
        event.target.childNodes[1].style.visibility = "hidden";
    }
  }
}

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
      const numbers = OBJ12;
      numbers.sort(compareFn);
      for (let i = 0; i < numbers.length; i++) {
        results.push(numbers[i]);
        results.sort(compareFn).push(numbers[i]);
      }
      const userListEl = document.querySelector(" .tiles");
      userListEl.innerHTML = results.map((user) => text(user)).join("");
      const tile = document.querySelectorAll(" .tile");

      const tile_icon = document.querySelectorAll(".tile__icon");
      tiles.push(tile);
      console.log(tile_icon);

      tile.forEach((tile) => {
        tile.addEventListener("click", (event) => {
          gm__play(event);
        });
      });
      for (let i = 0; i < tile.length; ++i) {
        tile[i].innerHTML = " ";
      }
      return results, tile;
    }
  }
  if (GNI == "NUM") {
    if (GSI == "FOUR") {
      const numbers = OBJ8;
      numbers.sort(compareFn);
      for (let i = 0; i < numbers.length; i++) {
        results.push(numbers[i]);
        results.sort(compareFn).push(numbers[i]);
      }
      const userListEl = document.querySelector(" .tiles");
      userListEl.innerHTML = results.map((user) => text(user)).join("");
      const tile = document.querySelectorAll(" .tile");

      const tile_icon = document.querySelectorAll(".tile__icon");
      console.log(tile_icon);
      tiles.push(tile);

      console.log(tile);
      tile.forEach((tile) => {
        tile.addEventListener("click", (event) => {
          gm__play(event);
        });
      });
      for (let i = 0; i < tile.length; ++i) {
        tile[i].innerHTML = " ";
      }
      return results, tile;
    }
  }

  if (GNI == "ICON") {
    if (GSI == "SIX") {
      const icons = OBJ12;
      icons.sort(compareFn);
      for (let i = 0; i < icons.length; i++) {
        results.push(icons[i]);
        results.sort(compareFn).push(icons[i]);
      }
      const userListEl = document.querySelector(".tiles");
      userListEl.innerHTML = results.map((user) => textIcon(user)).join("");
      const tile = document.querySelectorAll(" .tile");
      const tile_icon = document.querySelectorAll(".tile__icon");
      tile_icons.push(tile_icon);

      console.log(tile_icon);

      console.log(tile);
      tile.forEach((tile) => {
        tile.addEventListener("click", (event) => {
          gm__play(event);
        });
      });
      return results, tile_icon;
    }
  }
  if (GNI == "ICON") {
    if (GSI == "FOUR") {
      const icons = OBJ8;
      icons.sort(compareFn);
      for (let i = 0; i < icons.length; i++) {
        results.push(icons[i]);
        results.sort(compareFn).push(icons[i]);
      }
      const userListEl = document.querySelector(".tiles");
      userListEl.innerHTML = results.map((user) => textIcon(user)).join("");
      const tile = document.querySelectorAll(" .tile");
      const tile_icon = document.querySelectorAll(".tile__icon");
      tile_icons.push(tile_icon);

      console.log(tile_icon);

      console.log(tile);
      tile.forEach((tile) => {
        tile.addEventListener("click", (event) => {
          gm__play(event);
        });
      });
      return results, tile_icon;
    }
  }
}
