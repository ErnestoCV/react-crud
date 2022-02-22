import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import Error from './pages/Error'
import FormSitePage from './pages/FormSite'
import FormAccountPage from './pages/FormAccount'
import ListOfAccountsPage from './pages/ListOfAccounts'
import "./App.css";


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Router>

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createSite" element={<FormSitePage />} />
            <Route path="/updateSite/:id" element={<FormSitePage />} />
            <Route path="/createAccount/" element={<FormAccountPage />} />
            <Route path="/updateAccount/:id" element={<FormAccountPage />} />
            <Route path="/sites/:id/accounts" element={<ListOfAccountsPage />} />
            <Route path="*" element={<Error />} />


          </Routes>
        </Router>
      </section>
    </div>
  );
}

export default App;
