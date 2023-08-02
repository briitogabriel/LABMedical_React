import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/Login.page'
import { Layout } from './layout/Layout'
import { HomePage } from './pages/Home/Home.page'
import { RegisterPatient } from './pages/RegisterPatient/RegisterPatient.page'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/register-patient' element={<RegisterPatient />}/>
        </Route>
        {/* <Route path='*' element={<ErrorPage/>} /> */}
      </Routes>
    </Router>
  )
}

export default App
