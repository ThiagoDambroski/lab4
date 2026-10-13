let counter = 0;

const countButton = document.getElementById("countButton");
const counterText = document.getElementById("counter");
const photo = document.getElementById("photo");
const hoverArea = document.getElementById("hoverArea");
const moveArea = document.getElementById("moveArea");
const position = document.getElementById("position");

countButton.addEventListener("click", () => {
    counter++;
    counterText.textContent = counter;
});

photo.addEventListener("dblclick", () => {
    photo.style.border = photo.style.border ? "" : "5px solid blue";
});

hoverArea.addEventListener("mouseover", () => {
    hoverArea.textContent = "mouse is inside";
    hoverArea.style.backgroundColor = "lightblue";
});

hoverArea.addEventListener("mouseout", () => {
    hoverArea.textContent = "move the mouse here";
    hoverArea.style.backgroundColor = "white";
});

moveArea.addEventListener("mousemove", (event) => {
    position.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`;
});
