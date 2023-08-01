import * as Styled from './PatientCardComponent.style'
import { useNavigate } from 'react-router-dom'

// const navigate = useNavigate();

export const PatientCardComponent = ({ patientData }) => {

  const handleSeeMore = () => {
    // navigate('/')
    console.log('Ver mais')
  }
  return (
    <>
      {patientData.map((patient, index) => (
        <Styled.Card key={index}>
          <Styled.Icon>{<patient.icon size={45} />}</Styled.Icon>
          <h3>{patient.name}</h3>
          <p>{patient.age}</p>
          <p>{patient.phone}</p>
          <p>{patient.plan}</p>
          <button onClick={handleSeeMore}>Ver mais</button>
        </Styled.Card>
      ))}
    </>
  )
}
