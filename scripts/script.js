const app = document.querySelector("#app");
const buttonSquaresAmount = document.querySelector("#squares-amount")
const colorInput = document.querySelector("#color")

const appWidth = 960;
const appHeight = 960;
const defaultSquareSize = 16;

app.style.width = `${appWidth}px`;
app.style.height = `${appHeight}px`;

buttonSquaresAmount.addEventListener('click', (e) => {
    const width = prompt("Enter the width of the grid", defaultSquareSize)
    const height = prompt("Enter the height of the grid", defaultSquareSize)
    app.innerHTML = '';
    drawGrid(width, height)
})

function drawGrid(width = defaultSquareSize, height = defaultSquareSize) {
    const squareWidth = appWidth / width;
    const squareHeight = appHeight / height;
    let id = 1;
    for (let column = 0; column < height; column++) {
        for (let row = 0; row < width; row++) {
            const square = document.createElement("div");
            square.style.width = `${squareWidth}px`;
            square.style.height = `${squareHeight}px`;
            square.id = id++;
            square.addEventListener('mouseenter', (e) => {
                const target = e.target;
                target.style.backgroundColor = colorInput.value;
            });

            app.appendChild(square);
        }
    }
}

drawGrid();