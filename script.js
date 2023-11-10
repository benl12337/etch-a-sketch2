let container = document.querySelector('.container');
let setSize = document.querySelector('.setSize');
let input = document.querySelector('.input');
let randomised = document.querySelector('.randomise');
function createGrid(num) {
    container.innerHTML = ""
    num = num > 100 ? 100 : num;
    for (let i = 0; i < num; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = "rowDiv"
        for (let j = 0; j < num; j++) {
            let colDiv = document.createElement('div');
            colDiv.classList.add("colDiv")
            rowDiv.appendChild(colDiv);
        }
        container.appendChild(rowDiv)
    }
}

input.addEventListener("change", () => {
    randomised.innerText = "OFF";
    console.log(input.value);
});


setSize.addEventListener('click', () => {
    randomised.innerText = "OFF";
    let size = prompt("Grid size: ");
    createGrid(size);

    let pixels = document.querySelectorAll('.colDiv');

    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", evt => {
            if (evt.buttons === 1) {
                if (randomised.innerText == "OFF") {
                    pixel.style.backgroundColor = input.value;
                } else {
                    pixel.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                }
            };
        });
    });

    let clearButton = document.querySelector('.clearCanvas');
    clearButton.addEventListener('click', () => {
        pixels.forEach(pixel => {
            pixel.style.backgroundColor = "white";
        });
       // alert("Canvas cleared!");
    });
});

randomised.addEventListener('click', () => {
    randomised.innerText = randomised.innerText == "OFF" ? "ON" : "OFF";
});









