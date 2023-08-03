import * as Styled from './RegisterAppointment.style'

import { useRef } from "react"

import { useFormik } from 'formik';
import RegisterAppointmentSchema from '../../schemas/RegisterAppointmentSchema';
const initialValues = {
  reason: '',
  appointmentDate: '',
  appointmentHour: '',
  description: '',
  medication: '',
  precautions: '',
};

export const RegisterAppointment = () => {
  const registeredPatients = JSON.parse(localStorage.getItem('registered-patients')) || [];
  const registeredAppointments = JSON.parse(localStorage.getItem('registered-appointments')) || [];

  const patientInput = useRef();

  const handleSearchButton = () => {
    console.log('clicou')
  }

  const getMaxId = (appointmentList) => {
    if (registeredAppointments.length == 0) {
      return 0
    }
    
    const maxId = appointmentList.reduce((max, item) => {
      return item.id > max ? item.id : max;
    }, appointmentList[0].id);
    return maxId;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterAppointmentSchema,
    onSubmit: (values) => {

      const maxIdRegistered = getMaxId(registeredAppointments);
      values.id = maxIdRegistered + 1;
      
      registeredAppointments.push(values)
      localStorage.setItem('registered-appointments', JSON.stringify(registeredAppointments))
    },
  });

  return (
    <Styled.Content>
      <h1>Encontre o paciente</h1>
      <Styled.PatientInput>
        <Styled.InputText type="text" id='patientInput' placeholder="Digite o nome, telefone ou e-mail do paciente" ref={patientInput} />
        <Styled.SearchButton type="button" onClick={handleSearchButton}>Buscar</Styled.SearchButton>
      </Styled.PatientInput>

      <form className="row g-3" onSubmit={formik.handleSubmit}>
        
        <Styled.Header>
          <h3>Identificação</h3>
          <div>
            <button type='button'>Editar</button>
            <button type='button'>Deletar</button>
            <button type='submit'>Salvar</button>
          </div>
        </Styled.Header>

        <Styled.InputGroup className={`col-md-8`}>
          <Styled.Label htmlFor='reason' className="form-label">Motivo da Consulta</Styled.Label>
          <input name='reason' type='text' className="form-control" id='reason' onChange={formik.handleChange} value={formik.values.reason} />
          {formik.touched.reason && formik.errors.reason && (<Styled.Error>{formik.errors.reason}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-2`}>
          <Styled.Label htmlFor='appointmentDate' className="form-label">Data da Consulta</Styled.Label>
          <input name='appointmentDate' type='date' className="form-control" id='appointmentDate' onChange={formik.handleChange} value={formik.values.appointmentDate} />
          {formik.touched.appointmentDate && formik.errors.appointmentDate && (<Styled.Error>{formik.errors.appointmentDate}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-2`}>
          <Styled.Label htmlFor='appointmentHour' className="form-label">Hora da Consulta</Styled.Label>
          <input name='appointmentHour' type='time' className="form-control" id='appointmentHour' onChange={formik.handleChange} value={formik.values.appointmentHour} />
          {formik.touched.appointmentHour && formik.errors.appointmentHour && (<Styled.Error>{formik.errors.appointmentHour}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-12`}>
          <Styled.Label htmlFor='description' className="form-label">Descrição do Problemas</Styled.Label>
          <textarea rows="6" name='description' className="form-control" id='description' onChange={formik.handleChange} value={formik.values.description} ></textarea>
          {formik.touched.description && formik.errors.description && (<Styled.Error>{formik.errors.description}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-12`}>
          <Styled.Label htmlFor='medication' className="form-label">Medicação Receitada</Styled.Label>
          <textarea name='medication' className="form-control" id='medication' onChange={formik.handleChange} value={formik.values.medication} ></textarea>
          {formik.touched.medication && formik.errors.medication && (<Styled.Error>{formik.errors.medication}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-12`}>
          <Styled.Label htmlFor='precautions' className="form-label">Dosagem e Precauções</Styled.Label>
          <textarea name='precautions' className="form-control" id='precautions' onChange={formik.handleChange} value={formik.values.precautions} ></textarea>
          {formik.touched.precautions && formik.errors.precautions && (<Styled.Error>{formik.errors.precautions}</Styled.Error>)}
        </Styled.InputGroup>

      </form>
    </Styled.Content>
  )
}
