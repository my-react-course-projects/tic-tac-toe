import React, { useState } from 'react'

export default ({ initialName, symbol }) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [edit, setEdit] = useState(false)

    const clickHandler = () => setEdit(prevState => !edit)
    const inputChangeHandler = (event) => {
      setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className='player__name'>{playerName}</span>
    let buttonCaption = 'Edit'

    if(edit) { 
      editablePlayerName = <input className='player__input' type='text' value={playerName} onChange={inputChangeHandler} required />
      buttonCaption = 'Save'
    }

    return (
        <li>
          <span className="player">
            { editablePlayerName }
            <span className='player__symbol'>{symbol}</span>
          </span>
          <button onClick={clickHandler}>{buttonCaption}</button>
        </li>
    )
}