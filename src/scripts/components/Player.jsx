import React, { useState } from 'react'

export default ({ name, symbol }) => {

    const [edit, setEdit] = useState(false)
    const clickHandler = () => setEdit(prevState => !edit)

    let playerName = <span className='player__name'>{name}</span>
    let buttonCaption = 'Edit'

    if(edit) { 
      playerName = <input className='player__input' type='text' required />
      buttonCaption = 'Save'
    }

    return (
        <li>
          <span className="player">
            { playerName }
            <span className='player__symbol'>{symbol}</span>
          </span>
          <button onClick={clickHandler}>{buttonCaption}</button>
        </li>
    )
}