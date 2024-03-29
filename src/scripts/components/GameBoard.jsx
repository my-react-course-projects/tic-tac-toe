import React from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default ({ onSelectSquare, turns }) => {

    const gameBoard = initialGameBoard

    for(const turn of turns) {
      const { squareGB, playerSymbol } = turn
      const { row, col } = squareGB

      gameBoard[row][col] = playerSymbol
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // const handleSelectedSquare = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return updatedGameBoard
    //     })

    //     onSelectSquare()
    // }

    return (
      <ol id="game-board">
        { gameBoard.map((row, rowIndex) => 
          <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        {/* <button onClick={() => handleSelectedSquare(rowIndex, colIndex)}>{playerSymbol}</button> */}
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
          </li>
        )}
    </ol>
    )
}