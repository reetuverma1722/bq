import { useState } from 'react'
import Login from './pages/Login'
import './App.css'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Search from './pages/Search';
function App() {
 

  return (
<>
<Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/search" element={<Search/>} />
    </Routes>

</>


    
  )
}

export default App;
