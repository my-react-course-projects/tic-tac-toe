import React, { useState } from 'react'
import Player from '../components/Player.jsx'
import GameBoard from '../components/GameBoard.jsx'
import Log from '../components/Log.jsx'

export default () => {
    const [gameTurns, setGameTurns] = useState([])
    const [activePlayer, setActivePlayer] = useState('X')

    const handleSelectSquare = (rowIndex, colIndex) => {
        setActivePlayer((currentActivePlayer) => (currentActivePlayer === 'X' ? 'O' : 'X'))
        setGameTurns((prevTurns) => {

            let currentPlayer = 'X'

            if(prevTurns.length > 0 && prevTurns[0].playerSymbol === 'X') {
                currentPlayer = 'O'
            }

            const updatedTurns = [ 
                { squareGB: { row: rowIndex, col: colIndex }, playerSymbol: currentPlayer },
                 ...prevTurns
            ]
            return updatedTurns
        })
    } 

    return <>
            <main>
                <div id='game-container'>
                    <ol id='players' className='highlight-player'>
                        {/* Player 1 */}
                        <Player initialName='Player 1' symbol='X' isActive={ activePlayer === 'X'}/>
                        {/* Player 2 */}
                        <Player initialName='Player 2' symbol='O' isActive={ activePlayer === 'O'} />
                    </ol>
                    <GameBoard 
                      onSelectSquare={handleSelectSquare} 
                      turns={gameTurns}
                    />
                </div>
                <Log turns={gameTurns} />
            </main>
        </>
}

