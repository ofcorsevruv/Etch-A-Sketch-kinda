const container = document.querySelector(".container");
const parentGrid = document.createElement("div");

container.appendChild(parentGrid);

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.addEventListener("click", () => {
    div.style.backgroundColor = "black"; // Change background color on click
  });
  container.appendChild(div);
}
