import React from 'react'

export default ({ turns }) => {
    return <ol id='log'>
    { turns.map((turn) => (
        <li key={`${turn.squareGB.row}${turn.squareGB.col}`}>
           {turn.playerSymbol} selected {turn.squareGB.row}, {turn.squareGB.col}
        </li>
    ))}
    </ol>
}