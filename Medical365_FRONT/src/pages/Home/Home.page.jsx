import { useContext, useRef } from "react"
import { AuthContext } from "../../contexts/auth/auth.context"
import { Navigate } from "react-router-dom";
import { StatisticComponent } from "../../components/StatisticComponent/StatisticComponent";

import { BiSolidUserCircle } from 'react-icons/bi';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { FaNotesMedical } from 'react-icons/fa';
import { GiMedicalDrip } from 'react-icons/gi';

import * as Styled from './Home.style'
import { PatientCardComponent } from "../../components/PatientCardComponent/PatientCardComponent";

export const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const loggedUser = JSON.parse(localStorage.getItem('logged-user'))
  
  const patientInput = useRef();

  const handleSearchButton = () => {
    console.log('clicou')
  }

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
          <StatisticComponent icon={IoPeopleCircleOutline} amount={99} statisticTitle={'Pacientes'} />
          <StatisticComponent icon={FaNotesMedical} amount={10} statisticTitle={'Consultas'} />
          <StatisticComponent icon={GiMedicalDrip} amount={51} statisticTitle={'Exames'} />
        </Styled.StatisticCards>

        
        <h1>Informações Rápidas de Pacientes</h1>
        <Styled.PatientInput>
          <Styled.InputText type="text" id='patientInput' placeholder="Digite o nome, telefone ou e-mail do paciente" ref={patientInput} />
          <Styled.SearchButton type="button" onClick={handleSearchButton}>Buscar</Styled.SearchButton>
        </Styled.PatientInput>
        <Styled.GridContainer>
          <PatientCardComponent patientData={patientData} />
        </Styled.GridContainer>

      </Styled.Homepage>
    )
  }

  return auth.isLogged || loggedUser.isLogged ? render() : <Navigate to='/login'/>
}