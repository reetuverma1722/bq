import React from 'react'
import "../assets/css/Container.css"
import Menu from './Menu';
import Middle from './Middle';

const Container = () => {
  return (
   <>
<div className='contain'>
      <Menu/>
      <Middle/>
</div>

   </>
  )
}

export default Container;