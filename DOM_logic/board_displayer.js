//module responsible for displaying board content to DOM
export default function boardDisplayer(type, location) {
    //board can be of type 'player' or 'cpu', 
    //changing what is displayed.
    //'location determines to which div the board is generated'

    const highlightMessageLocation = document.getElementById("highlightMessage");

    for (let i = 0; i < 10; i++) {
        let row = document.createElement('div')
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement('div')
            cell.id = `${type} cell ${i}, ${j}`
            cell.classList = "cell"

            addMessageListener(cell, i, j)

            row.appendChild(cell)
        }
        row.classList = "row";
        location.appendChild(row);
    }

    function addMessageListener(cell, i, j) {
        cell.addEventListener("mouseover", () => {
            const x = String.fromCharCode(65 + j);
            const y = i + 1; 

            let playerType; 

            if (type === 1) {
                playerType = "Player"
            } else {
                playerType = "CPU"
            }
            
            
            const message = playerType + " board cell " + x + ", "+ y;
            highlightMessageLocation.textContent = message;
        })
    }
}