
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Home from './pages/Home'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header />
      <h1></h1>
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  )
}

export default App
