
    let count = 0;
const num = document.getElementById('num');

document.getElementById('plus').onclick = () => {
  num.innerText = ++count;
}

document.getElementById('minus').onclick = () => {
  num.innerText = --count;
}