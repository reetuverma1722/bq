import React from 'react'

import "/src/assets/css/Search.css"
import Footer from '../components/Footer';
import Mid from '../components/Mid';
const Search = () => {
  return (
    <>
  <div className='container'>
    <img className="logo" src='/src/assets/images/logo1.png' alt=''/>
  <div className='mid'>
  <Mid/>
   </div>
   <h2  >Recent Save Search</h2><hr/>
   </div>
   <Footer/>
    </>
  )
}

export default Search;