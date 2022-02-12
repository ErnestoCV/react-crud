import {BrowserRouter as Router} from 'react-router-dom'

import Navbar from './components/Navbar'
import UserList from './components/List'


function App() {
  return (
    
    <Router>

     <Navbar />
     <UserList />

    </Router>

  );
}

export default App;
