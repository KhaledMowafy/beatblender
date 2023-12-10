import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import TopNavbar from './components/navbar/TopNavbar'
import Home from './pages/home'

function App() {

  return (
    <>
    <Router>
    <TopNavbar/>
    <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App
