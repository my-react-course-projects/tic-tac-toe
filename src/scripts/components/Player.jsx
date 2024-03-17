import React, { useState } from 'react'

export default ({ name, symbol }) => {

    const [edit, setEdit] = useState(false)
    const clickHandler = () => setEdit(true)

    let playerName = <span className='player__name'>{name}</span>

    if(edit) { playerName = <input type='text' required /> }

    return (
        <li>
          <span className="player">
            { playerName }
            <span className='player__symbol'>{symbol}</span>
          </span>
          <button onClick={clickHandler}>Edit</button>
        </li>
    )
}