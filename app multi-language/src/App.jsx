
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Home from './pages/Home'
import Header from './components/Header'
// import { IntlProvider } from 'react-intl'

function App() {


  return (
    <div>
      <Header />

      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
