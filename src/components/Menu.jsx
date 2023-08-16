import React from 'react'
import "../assets/css/Menu.css"



const Menu = () => {
  return (
    <>
<div className='menu'>
<h4><span className='span1'><i className="fa-solid fa-bars "></i></span>Menu<span> <i className="fa-solid fa-arrow-left"></i></span> </h4>

<div className="sidebar">
  <a href="#home"><i className="fa fa-fw fa-home"></i> Save Search</a>
 <a href="#services"><i className="fa fa-fw fa-wrench"></i> Search Filter</a>

 <div className='filter-list'> 
 <div className='scroll' >
  <select>
            <option value=' 1' >Location State</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
        </select>
<div>
<select><option value=' 1' >Company Legal structure</option>
            <option value=' 2'>Multi-entity U.S structure</option>
            <option value=' 3'>Single entity organisation </option>    
        </select>
</div>
<div>
<select>
            <option value=' 1' >IRS Sector  </option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
        </select>
</div>
<div>
<select>
            <option value=' 1' >IRS  sub sector</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
        </select>
</div>

<div>
<select>
            <option value=' 1' >IRS Industry Name</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
        </select>
</div>

<div>
<select>
            <option value=' 1' >Company legal status</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
        </select>
</div>
<div>
<select>
            <option value=' 1' >Company legal form</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
        </select>
</div>

<div>
<select>
            <option value=' 1' >Year founded</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
        </select>
</div>
<div>
<select><option value=' 1' >Company Status </option>
            <option value=' 2'>Active</option>
            <option value=' 3'>Inactive </option>    
      </select>
</div>
<div>
<select> <option value=' 1' >Public Or Private</option>
            <option value=' 2'>Public</option>
            <option value=' 3'>Private</option>
            
        </select>
</div>
<div>
<select>
            <option value=' 1' >Revenue status</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
        </select>
</div>
<div>
<select>
            <option value=' 1' >Company Type</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
            
        </select>
</div>
<div>
<select>
            <option value=' 1' >Headcount Range</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
            
        </select>
</div>
<div>
<select>
            <option value=' 1' >Legal Jurisdiction State    </option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
            
        </select>
</div>
<div>
<select>
            <option value=' 1' >Congressional  District Name</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            <option value=' 2'>Employer</option>
            <option value=' 3'>Sole Proprietor</option>
            
            
        </select>
</div>
 </div>
 </div>
  <button className='btn-filter'>Clear all filters</button>
</div>
</div>

    </>
  )
}

export default Menu;