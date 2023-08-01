import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/auth.context"
import { Navigate } from "react-router-dom";
import { StatisticComponent } from "../../components/StatisticComponent/StatisticComponent";

import { BiSolidUserCircle } from 'react-icons/bi';
import * as Styled from './Home.style'
import { PatientCardComponent } from "../../components/PatientCardComponent/PatientCardComponent";

export const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const loggedUser = JSON.parse(localStorage.getItem('logged-user'))

  const patientData = [
    {
      icon: BiSolidUserCircle,
      name: 'Cesar Abascal',
      age: '30 anos',
      phone: '(55) 9 9999-9999',
      plan: 'Unimed'
    },
    {
      icon: BiSolidUserCircle,
      name: 'Cesar Abascal',
      age: '30 anos',
      phone: '(55) 9 9999-9999',
      plan: 'Unimed'
    },
    {
      icon: BiSolidUserCircle,
      name: 'Cesar Abascal',
      age: '30 anos',
      phone: '(55) 9 9999-9999',
      plan: 'Unimed'
    },
    {
      icon: BiSolidUserCircle,
      name: 'Cesar Abascal',
      age: '30 anos',
      phone: '(55) 9 9999-9999',
      plan: 'Unimed'
    },
    {
      icon: BiSolidUserCircle,
      name: 'Cesar Abascal',
      age: '30 anos',
      phone: '(55) 9 9999-9999',
      plan: 'Unimed'
    },
  ]

  const render = () => {
    return(
      <Styled.Homepage>
        <h1>Estatísticas do Sistema</h1>
        <Styled.StatisticCards>
          <StatisticComponent />
          <StatisticComponent />
          <StatisticComponent />
        </Styled.StatisticCards>

        
        <h1>Informações Rápidas de Pacientes</h1>
        <Styled.GridContainer>
          <PatientCardComponent patientData={patientData} />
        </Styled.GridContainer>

      </Styled.Homepage>
    )
  }

  return auth.isLogged || loggedUser.isLogged ? render() : <Navigate to='/login'/>
}