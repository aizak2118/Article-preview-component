const Circle = document.querySelector(".circle");
const Balloon = document.querySelector(".balloon");
const Share = document.querySelector(".share");

Circle.addEventListener("mouseover", function () {
  Balloon.style.visibility = "visible";
  Circle.style.cursor = "pointer";
  Circle.style.backgroundColor = "var(--deep-blue)";
  Share.style.color = "var(--white)";
});
Circle.addEventListener("mouseout", function () {
  Balloon.style.visibility = "hidden";
  Circle.style.backgroundColor = "var(--bg-blue)";
  Share.style.color = "var(--body-text)";
});
