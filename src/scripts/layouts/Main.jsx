import React from 'react'
import Player from '../components/Player.jsx'

export default () => {

    return <>
            <main>
                <div id='game-container'>
                    <ol id='players'>
                        {/* Player 1 */}
                        <Player name='Player 1' symbol='X' />
                        {/* Player 2 */}
                        <Player name='Player 2' symbol='O' />
                    </ol>
                </div>
            </main>
        </>
}

