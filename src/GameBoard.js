class GameBoard {
    
    gameBoardDiv = document.getElementById('game-board');
    width = 12;
    height = 24;

    state = Array.from(new Array(this.height), () => Array.from(new Array(this.width), () => ''));

    constructor () {

        this.gameBoardDiv.style.gridTemplateColumns = `repeat(${this.width}, 24px)`;
        this.gameBoardDiv.style.gridTemplateRows = `repeat(${this.height}, 24px)`;
    
    }

    draw ( block ) {

        this.gameBoardDiv.innerHTML = '';
        
        for ( let y = 0; y < this.height; y++ ) {
        
            for ( let x = 0; x < this.width; x++ ) {
        
                const cellDiv = document.createElement('div');

                const cellClass = this.state[y][x];
                if (cellClass) {
                    cellDiv.classList.add(cellClass)
                }

                const shape = block.shapes[block.shapeIndex].shape;

                shape.forEach(el => {
                    if ( y == el[0] + block.y && x == el[1] + block.x){
                        cellDiv.classList.add(block.class)
                    }
                });
                
                this.gameBoardDiv.appendChild(cellDiv);
        
            }
        
        }
        
    }
}
export { GameBoard }