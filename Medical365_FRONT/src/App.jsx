import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/Login.page'
import { Layout } from './layout/Layout'
import { HomePage } from './pages/Home/Home.page'
import { RegisterPatient } from './pages/RegisterPatient/RegisterPatient.page'
import { RegisterAppointment } from './pages/RegisterAppointment/RegisterAppointment.page'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/registrar-paciente' element={<RegisterPatient />}/>
          <Route path='/registrar-consulta' element={<RegisterAppointment />}/>
          <Route path='*' element={<h1>Página não encontrada!</h1>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
