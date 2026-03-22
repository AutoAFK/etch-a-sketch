const app = document.querySelector("#app");
const buttonSquaresAmount = document.querySelector("#squares-amount")
const colorInput = document.querySelector("#color")

const defaultSquareSize = 16;
const appWidth = app.clientWidth;

buttonSquaresAmount.addEventListener('click', (e) => {
    const width = getUserInputAsNumber("Enter the width of the grid", 100)
    const height = getUserInputAsNumber("Enter the height of the grid", 100)
    app.innerHTML = '';
    drawGrid(width, height)
})

function drawGrid(width = defaultSquareSize, height = defaultSquareSize) {
    const cellSize = appWidth / width;
    let id = 1;
    for (let column = 0; column < height; column++) {
        for (let row = 0; row < width; row++) {
            const square = document.createElement("div");
            square.style.width = `${cellSize}px`;
            square.style.height = `${cellSize}px`;
            square.id = id++;
            square.addEventListener('mouseenter', (e) => {
                const target = e.target;
                target.style.backgroundColor = colorInput.value;
            });

            app.appendChild(square);
        }
    }
}

function getUserInputAsNumber(message,max) {
    let userInput = 0;

    while(true){
        userInput = Number(prompt(message));
        if(userInput !== NaN && userInput <= max && userInput > 0){
            break;
        } else {
            alert(`Please enter a number between 1 - ${max}`)
        }
    }

    return userInput;
}

drawGrid();