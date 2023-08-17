import React from 'react'

import "../assets/css/Header.css"

import Mid from './Mid'
const Header = () => {
  return (
    <>
<div className='header'>
 <div className='logo2'> <img src='/src/assets/images/logo1.png' alt=''/></div>

<Mid/>
 {/* <button className='clear'>Clear   </button> */}
 <button className='logout'>Logout</button>
</div>

<hr/>
    </>
  )
}

export default Header;