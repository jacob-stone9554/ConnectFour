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
    const [xIsNext, setXIsNext] = useState(true); // when developing, I was thinking x and y (player x, player why) so this is what i used. redIsNext kind of makes more sense now though.
    let status;

    status = "Current Player: " + (xIsNext ? "Red" : "Yellow");

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
    const handleClick = (index) => {
        // Calculate the column by taking the modulus of the index by 7 (since there are 7 columns)
        const column = index % 7;
    
        // Find the lowest empty spot in the column
        let lowestEmptyIndex = null;
        for (let row = 5; row >= 0; row--) {  // Start from the bottom row
            const currentIndex = row * 7 + column;
            if (circles[currentIndex] === null) {
                lowestEmptyIndex = currentIndex;
                break;
            }
        }
    
        // If a valid spot was found, update the state
        if (lowestEmptyIndex !== null) {
            const newCircles = circles.slice();

            if(xIsNext) {
                newCircles[lowestEmptyIndex] = 'red';
            } else {
                newCircles[lowestEmptyIndex] = 'yellow';
            }

            setCircles(newCircles);
            setXIsNext(!xIsNext);
        }
    };
    

    return (
        <>
        <div className="status">{status}</div>
        <div className="board">
            {
            // create a 6 element array, fill the values with null.
            // map creates a new array for each element in the 6 element array (it calls a function, see next line)
            // (_, rowIndex) -> _ is a throwaway value (it is the null value assigned at that index) and rowIndex represents the index of the current element (which represents a row, ranging 0 - 6)
            Array(6).fill(null).map((_, rowIndex) => (
                // key is a special attribute that helps keep track of list items when they change
                <div key={rowIndex} className="board-row">
                    {Array(7).fill(null).map((_, colIndex) => renderCircle(rowIndex * 7 + colIndex))}
                </div>
            ))}
        </div>
        </>
    );
}
