const total = document.getElementById("total");

function suma() {
  total.innerHTML = Number(total.innerHTML) + 1;
}

function resta() {
  total.innerHTML = Number(total.innerHTML) - 1;
}

document.getElementById("suma").addEventListener("click", suma);
document.getElementById("resta").addEventListener("click", resta);
