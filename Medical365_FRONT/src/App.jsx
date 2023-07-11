import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<LoginPage/>} /> */}
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </Router>
  )
}

export default App