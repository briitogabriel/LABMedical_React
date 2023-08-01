import * as Styled from './PatientCardComponent.style'

export const PatientCardComponent = ({ patientData }) => {
  return (
    <>
      {patientData.map((patient, index) => (
        <Styled.Card key={index}>
          <Styled.Icon>{<patient.icon size={45} />}</Styled.Icon>
          <h3>{patient.name}</h3>
          <p>{patient.age}</p>
          <p>{patient.phone}</p>
          <p>{patient.plan}</p>
        </Styled.Card>
      ))}
    </>
  )
}
