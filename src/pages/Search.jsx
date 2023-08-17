import React from 'react'
import logo from "../assets/images/logo1.png"
import "/src/assets/css/Search.css"
import Footer from '../components/Footer';
import Mid from '../components/Mid';
const Search = () => {
  return (
    <>
  {/* <div className='container'>
    <img className="logo" src='/src/assets/images/logo1.png' alt=''/>
  <div className='mid'>
  <Mid/>
   </div>
   <h2  >Recent Save Search</h2><hr/>
   </div> */}


   <div className='page homePage'>
    <div className='top-bar'>
      <span>Logout</span></div>
        <div className='searchWrap homePageHeader'>


          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 searchUpper'>
                <div className='logo'>
                  <img src={logo} alt=''/>
                </div>

                <div className='searchLeft'>

                  <div className='form-group inputWrap'>
                  <input type="text" class="form-control place" placeholder="Search by company name, address, website, ticker, industry classification" value=""/>


                    <select>
                      <option>All</option>
                      <option>Industry</option>
                      <option>Company</option>
                      <option></option>
                    </select>
                  </div>


                  <div className='btnWrap'>


                    <button className='btn btn-primary'> Search <i class="fa fa-search" aria-hidden="true"></i></button>
                 <em>Clear</em>
                 
                  </div>
                  <div className='menuWrap'>
                    <span>Logout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='recentQuesWrap'>
            <div className='recentQuestion recommend'>
              <div className='recentHead'>
                <h3> Browser Recommended Searches</h3>
              </div>
              <div className='bodyWrap'>
                <div className='recentBody favourite'>
                  <div className='wrap-list'>


                    <div className='item'>
                      <em>Popular Cities</em>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      
                    </div>
                    <div className='item'>


                    <em>Popular Countries</em>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                      <li>Los Angles</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>


   </div>
   <Footer/>
    </>
  )
}

export default Search;