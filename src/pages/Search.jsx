import React from 'react'
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import Search2 from '../components/Search2';
import "/src/assets/css/Search.css"
import Footer from '../components/Footer';
const Search = () => {
  return (
    <>
  <div className='container'>
    <img className="logo" src='/src/assets/images/logo1.png' alt=''/>
  <div className='mid'>
   <SearchBar/>
   <Dropdown/>
   <Search2/>
   </div>
   <h2 >Recent Save Search</h2><hr/>
   </div>
   <Footer/>
    </>
  )
}

export default Search;