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

const pGajah = document.querySelector(".gajah");
pGajah.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGajah.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  console.log("comp : " + pilihanComputer);
  console.log("player : " + pilihanPlayer);
  console.log(hasil);
  const imgComputer = document.querySelector(".imgComputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpeg");
  const info = document.querySelector(".hasil");
  info.innerHTML = hasil;
});
const pOrang = document.querySelector(".orang");
pOrang.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pOrang.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  console.log("comp : " + pilihanComputer);
  console.log("player : " + pilihanPlayer);
  console.log(hasil);
  const imgComputer = document.querySelector(".imgComputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpeg");
  const info = document.querySelector(".hasil");
  info.innerHTML = hasil;
});
const pSemut = document.querySelector(".semut");
pSemut.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pSemut.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  console.log("comp : " + pilihanComputer);
  console.log("player : " + pilihanPlayer);
  console.log(hasil);
  const imgComputer = document.querySelector(".imgComputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpeg");
  const info = document.querySelector(".hasil");
  info.innerHTML = hasil;
});
