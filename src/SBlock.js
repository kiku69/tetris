class SBlock {

    y = 1;
    x = 5;

    shapeIndex = 0;

    height = 2;

    shapes = [
        {
            height: 2,
            shape: [
                [0, 1], [0, 2], [1, 0], [1, 1]
            ]
        }
    ];

    class = 's-block';

    moveDown() {
        this.y++;   
    }

    canMoveDown (gameBoardHeight) {
        if (this.y + this.shapes[this.shapeIndex].height == gameBoardHeight) {
            return false;
        }

        return true
    }

    stop( gameBoard ){
        this.shapes[this.shapeIndex].shape.forEach(el => {
        const y = el[0] + this.y;
        const x = el[1] + this.x;

        gameBoard.state[y][x] = this.class
        });
    }
}

export { SBlock }