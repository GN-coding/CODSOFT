let TypedText = document.getElementById("TypedText");
let i = 0;
let txt = "Frontend Developer";
let speed = 150;

function typing() {
  if (i < txt.length) {
    TypedText.textContent += txt.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}

typing();
