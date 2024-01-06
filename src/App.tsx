import './App.css'
// import Sidebar from './components/sidebar/Sidebar'
// import TopNavbar from './components/navbar/TopNavbar'
import Home from './pages/home'
import WhoWeAre from './pages/WhoWeAre';
import { Navigation } from 'moffbar';

function App() {
  const data=[
    {link: "/", name:"home"},
    {link:"/whoweare", name:"Who We Are"}
  ]

  return (
    <>
     <Navigation data={data} bgcolor="radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(77,1,1,1) 0%, rgba(11,0,0,1) 100%)" textColor="black" textStroke='white' closeButton='black' closeActive='white'>
        <Home/>
        <WhoWeAre/>
     </Navigation>
     
    </>
  )
}

export default App
