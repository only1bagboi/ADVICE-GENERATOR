let adviceID = document.querySelector(".adv");
let quotes = document.querySelector(".main-con p q");
let loading = document.querySelector(".loading");
let dice = document.querySelector(".dice");

let adviceData = async () => {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  loading.classList.add("d-none");
  adviceID.textContent = `ADVICE # ${data.slip.id}`;
  quotes.textContent = `${data.slip.advice}`;
};

dice.addEventListener("click", () => {
  location.reload();
});

setTimeout(() => {
  adviceData();
}, 3000);

// console.log(adviceData());
