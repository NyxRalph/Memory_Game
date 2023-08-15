const compareFn = () => 0.5 - Math.random();
const results = [];
const choice = [];
let moveCount = 0

function generateRandomNumbers() {
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

console.log(generateRandomNumbers());

function text(user) {
  return `<div class="tile" id="${user.id}">
    ${user.no}
    </div>`;
}

const tile = document.querySelectorAll(" .tile");

tile.forEach(
  addEventListener("click", (event) => {
    gm__play(event);
  })
);

function gm__play(event) {
  choice.push(event.target.id);
  console.log(choice);

  if (choice.length == 2) {
    if (choice[0] == choice[1]) {
      console.log("win");

    } else if (choice[0] !== choice[1]) {
      console.log("lose");

    }
    moveCount = moveCount + 1
    const moves = document.querySelector(" .moves")
      moves.innerHTML = moveCount
      console.log(moveCount)
    choice.length = 0;
  }
}

setTimeout(() => {
  gm__play();
}, 1000);


let i=0,
timer=setInterval(function time(){i++},1000);
console.log(timer)

time()





        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;
        setInterval(setTime, 1000);

        function setTime()
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds%60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
        }
        setTime()
        function pad(val)
        {
            var valString = val + "";
            if(valString.length < 2)
            {
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }

       pad()