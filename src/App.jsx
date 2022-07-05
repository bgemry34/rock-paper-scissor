import React from 'react'
import JoinCreate from './Components/JoinCreate/JoinCreate'

import { BrowserRouter as Router,
    Routes,
    Route,} from "react-router-dom";
import MainRoom from './Components/MainRoom/MainRoom';
import './App.css'

function App(props) {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<JoinCreate />} />
      <Route path="/main" element={<MainRoom />} />
    </Routes>
  </Router>
  )
}

export default App;
