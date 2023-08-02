import * as Styled from './PatientInputComponent.style'

export const RegisterPatientInput = ({ inputId, inputType, inputCols, inputPlaceholder }) => {
  return (
    <Styled.InputGroup className={`col-md-${inputCols}`}>
      <Styled.Label htmlFor={inputId} className="form-label">{inputPlaceholder}</Styled.Label>
      <input type={inputType} className="form-control" id={inputId} />
    </Styled.InputGroup>
  )
}
