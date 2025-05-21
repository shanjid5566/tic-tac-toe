const boxs = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".resetBtn");
const newBtn = document.querySelector(".newBtn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector(".msg");
let turnO = true;

const winningPatter = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  enableBoxs();
  msgContainer.classList.add("hidden");
};

const disableBoxs = () => {
  for (let box of boxs) {
    box.disabled = true;
  }
};
const enableBoxs = () => {
  for (let box of boxs) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hidden");
  disableBoxs();
};

const checkWinner = () => {
  for (let patter of winningPatter) {
    let pos1 = boxs[patter[0]].innerText;
    let pos2 = boxs[patter[1]].innerText;
    let pos3 = boxs[patter[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("WINNER", pos1);

        showWinner(pos1);
      }
    }
  }
};
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "Y";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
