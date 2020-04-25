function generate(gridSize){
    let cellSize = 512 / gridSize;
    const container = document.getElementById('container');
    for(var i=0;i<gridSize;i++){
        for(var j=0;j<gridSize;j++){
            const div = document.createElement('div');
            div.className="cell";
            div.style.width = `${cellSize}px`;
            div.style.height = `${cellSize}px`;
            container.appendChild(div);
        }
    }
    changeColor();
}
function addColour(){
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        cell.style.background = "#" + randomColor;
    }));
}
document.getElementById('rainbow').addEventListener('click', addColour);

function addBlack (){
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.background = "#000000";
    }));
}
document.getElementById('black').addEventListener('click', addBlack);

function reset () {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.background = "#ffffff");
}
document.getElementById('reset').addEventListener('click', reset);



generate(16);