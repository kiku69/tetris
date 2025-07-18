
import { Block } from "./Block.js";

class ZBlock extends Block {

    shapes = [
        {   
            'height': 2,
            'width': 3,
            'shape': [[0, 0], [0, 1], [1, 1], [1, 2]]
        },
        {   
            'height': 3,
            'width': 2,
            'shape': [[0, 1], [1, 0], [1, 1], [2, 0]]
        },
    ];

    class = 'z-block';
    
    constructor ( gb ) {
        
        super();

        this.y = 0 - this.shapes[0].height;
        this.x = Math.floor((gb.width - this.shapes[0].width) / 2);
    
    }
    
}

export { ZBlock }
