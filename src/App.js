import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import ListSite from './components/List'
import CreateSite from './components/Form'
import UpdateSite from './components/FormUpdate'

import "./App.css";


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Router>

          <Navbar />

          <Routes>
            <Route path="/" element={<ListSite />} />
            <Route path="/create" element={<CreateSite />} />
            <Route path="/update/:id" element={<UpdateSite />} />


          </Routes>
        </Router>
      </section>
    </div>
  );
}

export default App;
