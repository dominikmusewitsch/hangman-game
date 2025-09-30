const WORDS = [
  "suggestion",
  "device",
  "database",
  "speaker",
  "salad",
  "ear",
  "strategy",
  "product",
  "politics",
  "category",
  "housing",
  "committee",
  "garbage",
  "assistance",
  "discussion",
];

const ul = document.getElementById("abc");
const div = document.getElementById("line");
const underScore = document.getElementById("underscore");
const wrongCount = document.getElementById("wrong-count");
const gameOver = document.getElementById("game-over");

/* Utils */
const randomIndex = Math.floor(Math.random() * WORDS.length);
const randomPick = WORDS[randomIndex];
const alphabetKleinArray = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
let counter = 0;
const MAX_WRONG = 10;

const looseLetterArr = [...randomPick];
console.log(looseLetterArr);

function ABC() {
  alphabetKleinArray.forEach((letter) => {
    const li = document.createElement("li");
    li.textContent = letter;
    ul.append(li);
    li.addEventListener("click", () => {
      li.classList.add("pressed-letter");
      const pressedLetter = li.textContent;
      const isMatch = looseLetterArr.some((letter) => letter === pressedLetter);

      console.log(isMatch);

      const x = wrongCount;
      console.log(x);

      if (isMatch) {
        looseLetterArr.forEach((character, index) => {
          if (character === pressedLetter) {
            div.children[index].textContent = character; // div.chlidren = span mit Unterstrich!
          }
        });
      } else {
        counter++;
        wrongCount.textContent = counter;
      }
      if (counter >= MAX_WRONG) {
        gameOver.classList.remove("visibility");
        ul.innerHTML = "";
      }
    });
  });
}

ABC();

function underscore() {
  div.innerHTML = "";
  looseLetterArr.forEach(() => {
    const slot = document.createElement("span");
    slot.textContent = "_";
    div.append(slot);
  });
}
underscore();
