const compareFn = () => 0.5 - Math.random();

const results = [];
const choice = [];
const imgChoice = [];
let moveCount = 0;
let tile_icons = [];
let tiles = [];
let gameCount = 0;
const letters = [];
let letterIndex = 0;

ply_1_score = 0;
ply_2_score = 0;
ply_3_score = 0;
ply_4_score = 0;

const ele = document.querySelector("#timer");
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

if (moveCount == 0) {
  document.querySelector(".player__1").style.backgroundColor = "aqua";
}

function textIcon(user) {
  return `<div class="tile" id="${user.id}" >
  <img id="${user.no}" src="${user.img}" class="tile__icon" >
    </div>`;
}

function text(user) {
  return `<div class="tile" id="${user.id}">
  <p> ${user.no}</p>
  </div>`;
}

function func_img(event) {
  const imgTragetId = event.target.childNodes[1].id;
  console.log(imgTragetId);
  console.log(tile_icon[imgTragetId]);
}

function gm__play(event) {
  choice.push(event.srcElement);

  // choiceOneTwo.push(event.srcElement)
  if (choice.length == 2) {
    moveCount = moveCount + 1;
    const moves = document.querySelector(" .moves");
    moves.innerHTML = moveCount;
  }

  const GridSym = localStorage.getItem("GridSymbol");

  if (GridSym == "NUM") {
    textTragetId = event.target.id;
    innerTextId = event.target.innerText;

    setTimeout(() => {
      for (let i = 0; i < results.length; ++i) {
        const poId = (results[i].poID = i);

        if (tiles[0][i].id == textTragetId) {
          if (poId == results.indexOf(results[i])) {
            event.target.innerHTML = `${results[i].no}`;
          }
        }

        // GAMEPLAY SYSTEM

        if (tiles[0][i].innerText == event.target.id) {
          tiles[0][i].classList.add("clickOnce");

          localStorage.setItem("ChoiceOne", choice[0].id);
          const ChoiceOne = localStorage.getItem("ChoiceOne");

          const GSI = localStorage.getItem("GridSize");

          if (choice[1]) {
            if (ChoiceOne == tiles[0][i].id) {
              if (results[i].poID == i) {
                gameCount = gameCount + 1;
                if (GSI == "FOUR") {
                  if (gameCount == 8) {
                    clearInterval(timer);
                  }
                }
                if (GSI == "SIX") {
                  if (gameCount == 18) {
                    clearInterval(timer);
                  }
                }
              }
            }

            if (choice.length == 2) {
              localStorage.setItem("ChoiceTwo", choice[1].id);
              const ChoiceTwo = localStorage.getItem("ChoiceTwo");
              if (choice[0].id !== choice[1].id) {
                if (ChoiceTwo == tiles[0][i].id) {
                  const ChoiceOne = choice[0];
                  if (results[i].poID == i) {
                    const ChOne = event.srcElement;

                    setTimeout(() => {
                      tiles[0][i].innerText = [];
                      tiles[0][i].classList.remove("clickOnce");

                      ChoiceOne.innerText = [];
                      ChoiceOne.classList.remove("clickOnce");
                    }, 350);
                  }
                }
              }

              if (moveCount % 1 == 0) {
                letterIndex++;
              }

              function displayNextPlayer() {
                const letter = letters[letterIndex];
                if (letterIndex >= letters.length - 1) {
                  letterIndex = 0;
                }

                const players = localStorage.getItem("Players");

                if (players == "ply_4") {
                  if (moveCount == 2) {
                    letters.unshift(0);
                    letterIndex = letterIndex + 1;
                  }
                }
                if (players == "ply_3") {
                  if (moveCount == 1) {
                    letters.unshift(0);
                    letterIndex = letterIndex + 1;
                  }
                }
                if (players == "ply_2") {
                  if (moveCount == 1) {
                    letters.unshift(0);
                  }
                }
                console.log(letter);

                if (players == "ply_4") {
                  if (letter == "C") {
                    if (choice[0].id == choice[1].id) {
                      ply_2_score = ply_2_score + 1;
                    }
                  }
                  if (letter == "D") {
                    if (choice[0].id == choice[1].id) {
                      ply_3_score = ply_3_score + 1;
                    }
                  }
                  if (letter == "A") {
                    if (choice[0].id == choice[1].id) {
                      ply_4_score = ply_4_score + 1;
                    }
                  }
                  if (letter == "B") {
                    if (choice[0].id == choice[1].id) {
                      ply_1_score = ply_1_score + 1;
                    }
                  }
                }
                if (players == "ply_3") {
                  if (letter == "C") {
                    if (choice[0].id == choice[1].id) {
                      ply_2_score = ply_2_score + 1;
                    }
                  }

                  if (letter == "A") {
                    if (choice[0].id == choice[1].id) {
                      ply_3_score = ply_3_score + 1;
                    }
                  }
                  if (letter == "B") {
                    if (choice[0].id == choice[1].id) {
                      ply_1_score = ply_1_score + 1;
                    }
                  }
                }
                if (players == "ply_2") {
                  if (letter == "A") {
                    if (choice[0].id == choice[1].id) {
                      ply_2_score = ply_2_score + 1;
                    }
                  }
                  if (letter == "B") {
                    if (choice[0].id == choice[1].id) {
                      ply_1_score = ply_1_score + 1;
                    }
                  }
                }
                document.querySelector(".player_1_score").innerHTML =
                  ply_1_score;
                document.querySelector(".player_2_score").innerHTML =
                  ply_2_score;
                document.querySelector(".player_3_score").innerHTML =
                  ply_3_score;
                document.querySelector(".player_4_score").innerHTML =
                  ply_4_score;

                if (letter == "A") {
                  document.querySelector(".player__1").style.backgroundColor =
                    "aqua";
                  document.querySelector(".player__2").style.backgroundColor =
                    "white";
                  document.querySelector(".player__3").style.backgroundColor =
                    "white";
                  document.querySelector(".player__4").style.backgroundColor =
                    "white";
                }
                if (letter == "B") {
                  document.querySelector(".player__1").style.backgroundColor =
                    "white";
                  document.querySelector(".player__2").style.backgroundColor =
                    "aqua";
                  document.querySelector(".player__3").style.backgroundColor =
                    "white";
                  document.querySelector(".player__4").style.backgroundColor =
                    "white";
                }
                if (letter == "C") {
                  document.querySelector(".player__1").style.backgroundColor =
                    "white";
                  document.querySelector(".player__2").style.backgroundColor =
                    "white";
                  document.querySelector(".player__3").style.backgroundColor =
                    "aqua";
                  document.querySelector(".player__4").style.backgroundColor =
                    "white";
                }
                if (letter == "D") {
                  document.querySelector(".player__1").style.backgroundColor =
                    "white";
                  document.querySelector(".player__2").style.backgroundColor =
                    "white";
                  document.querySelector(".player__3").style.backgroundColor =
                    "white";
                  document.querySelector(".player__4").style.backgroundColor =
                    "aqua";
                }
              }

              displayNextPlayer();

              choice.length = 0;
            }
          }
        }
      }
    }, 100);
  }

  if (GridSym == "ICON") {
    imgTragetId = event.target.childNodes[1].id;
    // console.log(event)

    const GSI = localStorage.getItem("GridSize");
    for (let i = 0; i < results.length; ++i) {
      const PoId = (results[i].poID = i);
      const imgPoId = (results[i].imgpoID = i);

      if (tile_icons[0][i].id == imgTragetId) {
        if (event.srcElement.childNodes[1] == tile_icons[0][i]) {
          imgChoice.push(event.srcElement.childNodes[1]);

          if (imgChoice[0]) {
            imgChoice[0].style.visibility = "visible";
            event.srcElement.classList.add("clickOnce");

            if (imgChoice.length == 2) {
              imgChoice[1].classList.add("clickOnce");
              imgChoice[1].style.visibility = "visible";
              if (imgChoice[0].id !== imgChoice[1].id) {
                const imgChoiceOne = imgChoice[0];
                choice[0].classList.remove("clickOnce");
                setTimeout(() => {
                  imgChoiceOne.style.visibility = "hidden";
                  event.srcElement.childNodes[1].style.visibility = "hidden";
                  event.srcElement.classList.remove("clickOnce");
                }, 300);
              }
              if (imgChoice[0].id == imgChoice[1].id) {
                const imgChoiceOne = imgChoice[0];

                imgChoice[1].classList.add("clickOnce");
                setTimeout(() => {
                  imgChoiceOne.style.visibility = "visible";
                  event.srcElement.childNodes[1].style.visibility = "visible";
                }, 300);
                gameCount = gameCount + 1;
                if (GSI == "FOUR") {
                  if (gameCount == 8) {
                    clearInterval(timer);
                  }
                }
                if (GSI == "SIX") {
                  if (gameCount == 18) {
                    clearInterval(timer);
                  }
                }
              }

              if (moveCount % 1 == 0) {
                letterIndex++;
              }
              const letter = letters[letterIndex];

              function displayNextPlayer() {
                if (letterIndex >= letters.length - 1) {
                  letterIndex = 0;
                }

                const players = localStorage.getItem("Players");

                if (players == "ply_4") {
                  if (moveCount == 2) {
                    letters.unshift(0);
                    letterIndex = letterIndex + 1;
                  }
                }
                if (players == "ply_3") {
                  if (moveCount == 1) {
                    letters.unshift(0);
                    letterIndex = letterIndex + 1;
                  }
                }
                if (players == "ply_2") {
                  if (moveCount == 1) {
                    letters.unshift(0);
                  }
                }

                console.log(letter);

                if (players == "ply_4") {
                  if (letter == "C") {
                    if (imgChoice[0].id == imgChoice[1].id) {
                      ply_2_score = ply_2_score + 1;
                    }
                  }
                  if (letter == "D") {
                    if (imgChoice[0].id == imgChoice[1].id) {
                      ply_3_score = ply_3_score + 1;
                    }
                  }
                  if (letter == "A") {
                    if (imgChoice[0].id == imgChoice[1].id) {
                      ply_4_score = ply_4_score + 1;
                    }
                  }
                  if (letter == "B") {
                    if (imgChoice[0].id == imgChoice[1].id) {
                      ply_1_score = ply_1_score + 1;
                    }
                  }
                }
                if (players == "ply_3") {
                  if (letter == "C") {
                    if (imgChoice[0].id == imgChoice[1].id) {
                      ply_2_score = ply_2_score + 1;
                    }
                  }

                  if (letter == "A") {
                    if (imgChoice[0].id == imgChoice[1].id) {
                      ply_3_score = ply_3_score + 1;
                    }
                  }
                  if (letter == "B") {
                    if (imgChoice[0].id == imgChoice[1].id) {
                      ply_1_score = ply_1_score + 1;
                    }
                  }
                }
                if (players == "ply_2") {
                  if (letter == "A") {
                    if (imgChoice[0].id == imgChoice[1].id) {
                      ply_2_score = ply_2_score + 1;
                    }
                  }
                  if (letter == "B") {
                    if (imgChoice[0].id == imgChoice[1].id) {
                      ply_1_score = ply_1_score + 1;
                    }
                  }
                }
                document.querySelector(".player_1_score").innerHTML =
                  ply_1_score;
                document.querySelector(".player_2_score").innerHTML =
                  ply_2_score;
                document.querySelector(".player_3_score").innerHTML =
                  ply_3_score;
                document.querySelector(".player_4_score").innerHTML =
                  ply_4_score;

                if (letter == "A") {
                  setTimeout(() => {
                    document.querySelector(".player__1").style.backgroundColor =
                      "aqua";
                    document.querySelector(".player__2").style.backgroundColor =
                      "white";
                    document.querySelector(".player__3").style.backgroundColor =
                      "white";
                    document.querySelector(".player__4").style.backgroundColor =
                      "white";
                  }, 450);
                }
                if (letter == "B") {
                  setTimeout(() => {
                    document.querySelector(".player__1").style.backgroundColor =
                      "white";
                    document.querySelector(".player__2").style.backgroundColor =
                      "aqua";
                    document.querySelector(".player__3").style.backgroundColor =
                      "white";
                    document.querySelector(".player__4").style.backgroundColor =
                      "white";
                  }, 450);
                }
                if (letter == "C") {
                  setTimeout(() => {
                    document.querySelector(".player__1").style.backgroundColor =
                      "white";
                    document.querySelector(".player__2").style.backgroundColor =
                      "white";
                    document.querySelector(".player__3").style.backgroundColor =
                      "aqua";
                    document.querySelector(".player__4").style.backgroundColor =
                      "white";
                  }, 450);
                }
                if (letter == "D") {
                  setTimeout(() => {
                    document.querySelector(".player__1").style.backgroundColor =
                      "white";
                    document.querySelector(".player__2").style.backgroundColor =
                      "white";
                    document.querySelector(".player__3").style.backgroundColor =
                      "white";
                    document.querySelector(".player__4").style.backgroundColor =
                      "aqua";
                  }, 450);
                }
              }

              displayNextPlayer();

              imgChoice.length = 0;
              choice.length = 0;
            }
          }
        }
      }
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
  const playerCount = document.querySelector(" .player__count");
  playerCount.style.display = "flex";

  const GNI = localStorage.getItem("GridSymbol");
  const GSI = localStorage.getItem("GridSize");

  const players = localStorage.getItem("Players");
  console.log(players);

  let sec = 0;
  let min = 0;
  const timer = setInterval(function updateTimer() {
    seconds = sec % 60;
    minutes = Math.floor(min / 60);
    ele.innerHTML = minutes + ":" + seconds;

    min++;
    sec++;
  }, 1000);

  if (players == "ply_1") {
    playerCount.style.display = "none";
  }
  if (players == "ply_2") {
    playerCount.style.display = "flex";
    document.querySelector(".player__3").style.display = "none";
    document.querySelector(".player__4").style.display = "none";
    document.querySelector("#timer").style.display = "none";
    document.querySelector(".moves").style.display = "none";
    clearInterval(timer);
    letters.push("A", "B");
  }
  if (players == "ply_3") {
    document.querySelector(".player__4").style.display = "none";
    document.querySelector("#timer").style.display = "none";
    document.querySelector(".moves").style.display = "none";
    clearInterval(timer);
    letters.push("A", "B", "C");
  }
  if (players == "ply_4") {
    playerCount.style.display = "flex";
    document.querySelector("#timer").style.display = "none";
    document.querySelector(".moves").style.display = "none";
    clearInterval(timer);
    letters.push("A", "B", "C", "D");
  }

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
      for (let i = 0; i < tile.length; ++i) {
        tile[i].innerHTML = [];
      }

      const tile_icon = document.querySelectorAll(".tile__icon");
      tiles.push(tile);

      tile.forEach((tile) => {
        tile.addEventListener("click", (event) => {
          gm__play(event);
        });
      });

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
      for (let i = 0; i < tile.length; ++i) {
        tile[i].innerHTML = [];
      }

      const tile_icon = document.querySelectorAll(".tile__icon");
      console.log(tile_icon);
      tiles.push(tile);

      console.log(tile);
      tile.forEach((tile) => {
        tile.addEventListener("click", (event) => {
          gm__play(event);
        });
      });

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
      tile.forEach((tile) => {
        tile.addEventListener("click", (event) => {
          gm__play(event);
        });
      });
      return results, tile_icon;
    }
  }
}



function findHighestNumber() {
  numbers = [5, 6, 7, 8];
  let highest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }

  return highest;
}
