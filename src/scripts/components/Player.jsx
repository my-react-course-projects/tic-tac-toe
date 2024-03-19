import React, { useState } from 'react'

export default ({ initialName, symbol, isActive }) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [edit, setEdit] = useState(false)

    const clickHandler = () => setEdit(prevState => !edit)
    const inputChangeHandler = (event) => {
      setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>
    let buttonCaption = 'Edit'

    if(edit) { 
      editablePlayerName = <input className='player-input' type='text' value={playerName} onChange={inputChangeHandler} required />
      buttonCaption = 'Save'
    }

    return (
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            { editablePlayerName }
            <span className='player-symbol'>{symbol}</span>
          </span>
          <button onClick={clickHandler}>{buttonCaption}</button>
        </li>
    )
}