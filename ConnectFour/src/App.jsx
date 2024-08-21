import { useState } from 'react';

/*
    Circle is the component that makes up the game board.
*/
function Circle() {
    return <button className="circle"></button>
}

/*
    Board is what players play on. Standard Connect4 Board is 6 columns by 7 rows (6x7)
    NOTE: This isn't very elegant. Find a better solution?
*/
export default function Board() {
    return (
        <>
            <div className="board-row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="board-row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="board-row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="board-row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="board-row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="board-row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="board-row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
        </>
    );
}
