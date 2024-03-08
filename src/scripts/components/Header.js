import React from 'react'
import LogoImage from '../../images/game-logo.png'

const Header = () => {
    return (
        <header>
            <img src={LogoImage} alt='logo-image' />
            <h1>Tic Tac Toe</h1>
        </header>
    )
}

export default Header