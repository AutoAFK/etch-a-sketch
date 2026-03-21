const app = document.querySelector("#app");

function setup() {

    const squaresAmount = 16;
    for (let column = 0; column <= squaresAmount; column++) {
        for (let row = 0; row <= squaresAmount; row++) {
            const square = document.createElement("div");
            
            square.addEventListener('mouseenter', (e) => {
                const target = e.target;
                target.classList.toggle('hover-effect');
            });

            square.addEventListener('mouseleave', (e) => {
                const target = e.target;
                target.classList.toggle('hover-effect')
            })

            app.appendChild(square);
        }
    }

    app.addEventListener('mouseenter', (e) => {
        console.log(e);
    })
}

setup();