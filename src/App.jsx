import { useState } from 'react'
import Login from './pages/Login'
import './App.css'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Search from './pages/Search';
import Main from './pages/main';
import MultiSelect from './components/MultiSelect';
import Example from './components/MultiSelect';
function App() {
 

  return (
<>
<Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/example" element={<Example/>} />
    </Routes>

</>


    
  )
}

export default App;
