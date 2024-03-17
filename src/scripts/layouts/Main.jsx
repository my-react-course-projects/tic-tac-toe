import React from 'react'
import Player from '../components/Player.jsx'
import GameBoard from '../components/GameBoard.jsx'

export default () => {

    return <>
            <main>
                <div id='game-container'>
                    <ol id='players'>
                        {/* Player 1 */}
                        <Player initialName='Player 1' symbol='X' />
                        {/* Player 2 */}
                        <Player initialName='Player 2' symbol='O' />
                    </ol>
                    <GameBoard />
                </div>
                LOG
            </main>
        </>
}

