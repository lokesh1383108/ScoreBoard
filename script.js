const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', () => {
  curValue++;
  mainTitle.textContent = curValue;
});

btnDecrement.addEventListener('click', () => {
  curValue--;
  mainTitle.textContent = curValue;
});

btnReset.addEventListener('click', () => {
  curValue = 0;
  mainTitle.textContent = curValue;
});

const mainTitle1 = document.querySelector('#title1');
let curValue1 = 0;

const btnDecrement1 = document.querySelector('#decrement1');
const btnReset1 = document.querySelector('#reset1');
const btnIncrement1 = document.querySelector('#increment1');

btnIncrement1.addEventListener('click', () => {
  curValue1++;
  mainTitle1.textContent = curValue1;
});

btnDecrement1.addEventListener('click', () => {
  curValue1--;
  mainTitle1.textContent = curValue1;
});

btnReset1.addEventListener('click', () => {
  curValue1 = 0;
  mainTitle1.textContent = curValue1;
});

const gmbutton = document.getElementById('gameoverbtn');

function redirectToNewPage() {
  // Replace "newpage.html" with the URL of the page you want to redirect to
  window.location.href = "win.html";
}
function redirectToNewPage2() {
  // Replace "newpage.html" with the URL of the page you want to redirect to
  window.location.href = "win2.html";
}
function redirectToNewPage3() {
  // Replace "newpage.html" with the URL of the page you want to redirect to
  window.location.href = "tie.html";
}

gmbutton.addEventListener('click', ()=>{
  if (curValue > curValue1) {
    document.getElementById("gameoverbtn").onclick = redirectToNewPage;
  } else if (curValue < curValue1) {
    document.getElementById("gameoverbtn").onclick = redirectToNewPage2;
  } else {
    document.getElementById("gameoverbtn").onclick = redirectToNewPage3;
  }
});





