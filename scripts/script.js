const app = document.querySelector("#app");
const buttonSquaresAmount = document.querySelector("#squares-amount")
const colorInput = document.querySelector("#color")
const defaultSize = 16;

buttonSquaresAmount.addEventListener('click', (e) => {
    const width = prompt("Enter the width of the grid", defaultSize)
    const height = prompt("Enter the height of the grid", defaultSize)
    app.innerHTML = '';
    drawGrid(width, height)
})

function drawGrid(width = defaultSize, height = defaultSize) {

    for (let column = 0; column <= height; column++) {
        for (let row = 0; row <= width; row++) {
            const square = document.createElement("div");

            square.addEventListener('mouseenter', (e) => {
                const target = e.target;
                target.style.backgroundColor = colorInput.value;
            });

            app.appendChild(square);
        }
    }
}

drawGrid();