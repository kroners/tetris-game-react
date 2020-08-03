import { useState, useEffect } from 'react';
import { createStage } from '../../helpers/gameHelpers';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = prevStage => {
            // First flush the stage
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell )),
            );

            // Then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        
                    }
                })
            })
        };
        setStage(prev => updateStage(prev));
    }, []);

    return [stage, setStage];
}