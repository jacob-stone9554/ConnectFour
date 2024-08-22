import { useState } from 'react';

/*
    Circle is the component that makes up the game board.
*/
function Circle({ className, onClick }) {
    return <button className={className} onClick={onClick}></button>
}

/*
    Board is what players play on. Standard Connect4 Board is 6 columns by 7 rows (6x7)
*/
export default function Board() {
    const [circles, setCircles] = useState(Array(42).fill(null)); // the elements of the array represent the circles on the board. All are null until it is clicked (which is then assigned a value)
    const [xIsNext, setXIsNext] = useState(true);

    // helper function. takes an index, returns a Circle with key and index prop.
    const renderCircle = (index) => {
        return (
            <Circle 
            key={index} 
            index={index} 
            className={circles[index] ? `circle ${circles[index]}` : 'circle'}
            onClick={() => handleClick(index)}
            />
        );
    };

    // handleClick determines what happens to a circle when it is clicked. right now, simply change the color.
    function handleClick(index) {
        if(circles[index]) {
            return;
        }
        const newCircles = circles.slice();
        if(xIsNext) {
            newCircles[index] = 'red';
        } else {
            newCircles[index] = 'yellow';
        }
        
        console.log(`Clicked circle number: ${index}`)
        setCircles(newCircles);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="board">
            {Array(6).fill(null).map((_, rowIndex) => (
                <div key={rowIndex} className="board-row">
                    {Array(7).fill(null).map((_, colIndex) => renderCircle(rowIndex * 7 + colIndex))}
                </div>
            ))}
        </div>
    );
}
