const container = document.querySelector(".container");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let askedNumber = +prompt("Enter a number (less than 50)");
  if (askedNumber > 50) alert("Invalid number");
  else {
    container.textContent = "";
    showGrid(askedNumber);
  }
});

function showGrid(squareNumber = 16) {
  for (let i = 0; i < squareNumber; i++) {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "itemContainer");
    container.appendChild(divContainer);
    for (let j = 0; j < squareNumber; j++) {
      const div = document.createElement("div");
      div.setAttribute("class", "item");
      divContainer.appendChild(div);
      div.addEventListener("mouseleave", function () {
        div.setAttribute("style", "background-color: chocolate;");
      });
    }
  }
}

showGrid();