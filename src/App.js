import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'


import Navbar from './components/Navbar'
import ListSite from './components/List'
import CreateSite from './components/Form'
import UpdateSite from './components/FormUpdate'


function App() {
  return (
    
    <Router>

     <Navbar />

     <Routes>
       <Route path="/" element={<ListSite />} />
       <Route path="/create" element={<CreateSite />} />   
       <Route path="/update/:id" element={<UpdateSite />} />
       
     
     </Routes>
    </Router>

  );
}

export default App;
