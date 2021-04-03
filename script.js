var h = "";
var win = "Horee, KAMU MENANG!";
var lose = "Kasihan, KAMU KALAH!";
var g = "gajah";
var s = "semut";
var o = "orang";
function getPilihanComputer() {
  var c = Math.random();
  if (c < 0.34) return "gajah";
  if (c > 0.34 && c < 0.67) return "semut";
  if (c > 0.67) return "orang";
}

function getHasil(comp, player) {
  if (comp == player) return "OK, kita SERI!";
  if (player == "gajah") return comp == "orang" ? win : lose;
  if (player == "semut") return comp == "gajah" ? win : lose;
  if (player == "orang") return comp == "semut" ? win : lose;
}

function acak() {
  const imgComputer = document.querySelector(".imgComputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".jpeg");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll(".player img");
pilihan.forEach(function (p) {
  p.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = p.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    console.log("comp : " + pilihanComputer);
    console.log("player : " + pilihanPlayer);
    console.log(hasil);

    acak();

    setTimeout(() => {
      const imgComputer = document.querySelector(".imgComputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpeg");
      const info = document.querySelector(".hasil");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   console.log("comp : " + pilihanComputer);
//   console.log("player : " + pilihanPlayer);
//   console.log(hasil);
//   const imgComputer = document.querySelector(".imgComputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpeg");
//   const info = document.querySelector(".hasil");
//   info.innerHTML = hasil;
// });
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   console.log("comp : " + pilihanComputer);
//   console.log("player : " + pilihanPlayer);
//   console.log(hasil);
//   const imgComputer = document.querySelector(".imgComputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpeg");
//   const info = document.querySelector(".hasil");
//   info.innerHTML = hasil;
// });
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   console.log("comp : " + pilihanComputer);
//   console.log("player : " + pilihanPlayer);
//   console.log(hasil);
//   const imgComputer = document.querySelector(".imgComputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpeg");
//   const info = document.querySelector(".hasil");
//   info.innerHTML = hasil;
// });
