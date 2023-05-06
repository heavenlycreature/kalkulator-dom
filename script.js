//Tampilkan angka
function display(val) {
  document.querySelector("#result").value += val;
  return val;
}
//Hapus input
function clearScreen() {
  return (document.querySelector("#result").value = "");
}
//Operasi aritmatika
function solve() {
  let y = document.querySelector("#result").value;
  let x = eval(y);
  document.querySelector("#result").value = x;
  return y;
}
