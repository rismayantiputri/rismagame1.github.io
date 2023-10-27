const jerami = document.querySelectorAll(".jerami");
const kucing = document.querySelectorAll(".kucing");
const papanSkor = document.querySelector(".papan-skor");
const pop = document.querySelector("#pop");

let jeramiSebelumnya;
let selesai;
let skor;

function randomJerami(jerami) {
  const t = Math.floor(Math.random() * jerami.length);
  const tRandom = jerami[t];
  if (tRandom == jeramiSebelumnya) {
    randomJerami(jerami);
  }
  jeramiSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanKucing() {
  const tRandom = randomJerami(jerami);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add("muncul");

  setTimeout(() => {
    tRandom.classList.remove("muncul");
    if (!selesai) {
      munculkanKucing();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanKucing();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove("muncul");
  pop.play();
  papanSkor.textContent = skor;
}

kucing.forEach((t) => {
  t.addEventListener("click", pukul);
});
