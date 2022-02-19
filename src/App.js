import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import Error from './pages/Error'
import FormSitePage from './pages/FormSite'
import "./App.css";


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Router>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<FormSitePage />} />
            <Route path="/update/:id" element={<FormSitePage />} />
            <Route path="*" element={<Error />} />


          </Routes>
        </Router>
      </section>
    </div>
  );
}

export default App;
