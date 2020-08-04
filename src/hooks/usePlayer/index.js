import { useState, useCallback } from 'react';
import { TETROMINOS, getRandomTetromino } from '../../helpers/tetrominos';
import { STAGE_WIDTH } from '../../helpers/gameHelpers';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape, //getRandomTetromino().shape,
        collided: false
    });

    const updatePlayerPosition = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev, 
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided
        }))
    }

    const resetPlayer = useCallback(
        () => {
            setPlayer({
                pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
                tetromino: getRandomTetromino().shape,
                collided: false,
            })
        },
        [],
    )

    return [player, updatePlayerPosition, resetPlayer];
}