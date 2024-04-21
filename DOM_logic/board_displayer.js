//module responsible for displaying board content to DOM
export default function boardDisplayer(type, location) {
    //board can be of type 'player' or 'cpu', 
    //changing what is displayed.
    //'location determines to which div the board is generated'


    for (let i = 0; i < 10; i++) {
        let row = document.createElement('div')
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement('div')
            cell.id = `${type} cell ${i}, ${j}`
            cell.classList = "cell"
            row.appendChild(cell)
        }
        row.classList = "row";
        location.appendChild(row);
    }


}