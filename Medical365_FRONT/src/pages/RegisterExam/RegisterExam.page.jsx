import * as Styled from './RegisterExam.style'

import { useRef } from "react"

import { useFormik } from 'formik';
import RegisterExamSchema from '../../schemas/RegisterExamSchema';
const initialValues = {
  examName: '',
  examDate: '',
  examHour: '',
  examType: '',
  lab: '',
  documentURL: '',
  results: '',
};

export const RegisterExam = () => {
  const registeredPatients = JSON.parse(localStorage.getItem('registered-patients')) || [];
  const registeredExams = JSON.parse(localStorage.getItem('registered-exams')) || [];

  const patientInput = useRef();

  const handleSearchButton = () => {
    console.log('clicou')
  }

  const getMaxId = (examList) => {
    if (registeredExams.length == 0) {
      return 0
    }
    
    const maxId = examList.reduce((max, item) => {
      return item.id > max ? item.id : max;
    }, examList[0].id);
    return maxId;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterExamSchema,
    onSubmit: (values) => {

      const maxIdRegistered = getMaxId(registeredExams);
      values.id = maxIdRegistered + 1;
      
      registeredExams.push(values)
      localStorage.setItem('registered-exams', JSON.stringify(registeredExams))
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
          <h3>Exame de [Nome do Paciente]</h3>
          <div>
            <button type='button'>Editar</button>
            <button type='button'>Deletar</button>
            <button type='submit'>Salvar</button>
          </div>
        </Styled.Header>

        <Styled.InputGroup className={`col-md-8`}>
          <Styled.Label htmlFor='examName' className="form-label">Nome do Exame</Styled.Label>
          <input name='examName' type='text' className="form-control" id='examName' onChange={formik.handleChange} value={formik.values.examName} />
          {formik.touched.examName && formik.errors.examName && (<Styled.Error>{formik.errors.examName}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-2`}>
          <Styled.Label htmlFor='examDate' className="form-label">Data do Exame</Styled.Label>
          <input name='examDate' type='date' className="form-control" id='examDate' onChange={formik.handleChange} value={formik.values.examDate} />
          {formik.touched.examDate && formik.errors.examDate && (<Styled.Error>{formik.errors.examDate}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-2`}>
          <Styled.Label htmlFor='examHour' className="form-label">Hora do Exame</Styled.Label>
          <input name='examHour' type='time' className="form-control" id='examHour' onChange={formik.handleChange} value={formik.values.examHour} />
          {formik.touched.examHour && formik.errors.examHour && (<Styled.Error>{formik.errors.examHour}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-6`}>
          <Styled.Label htmlFor='examType' className="form-label">Tipo do Exame</Styled.Label>
          <input name='examType' type='text' className="form-control" id='examType' onChange={formik.handleChange} value={formik.values.examType} />
          {formik.touched.examType && formik.errors.examType && (<Styled.Error>{formik.errors.examType}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-6`}>
          <Styled.Label htmlFor='lab' className="form-label">Laboratório</Styled.Label>
          <input name='lab' type='text' className="form-control" id='lab' onChange={formik.handleChange} value={formik.values.lab} />
          {formik.touched.lab && formik.errors.lab && (<Styled.Error>{formik.errors.lab}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-12`}>
          <Styled.Label htmlFor='documentURL' className="form-label">URL do Documento do Exame</Styled.Label>
          <input name='documentURL' type='text' className="form-control" id='documentURL' onChange={formik.handleChange} value={formik.values.documentURL} />
          {formik.touched.documentURL && formik.errors.documentURL && (<Styled.Error>{formik.errors.documentURL}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-12`}>
          <Styled.Label htmlFor='results' className="form-label">Resultado do Exame</Styled.Label>
          <textarea rows="8" name='results' className="form-control" id='results' onChange={formik.handleChange} value={formik.values.results} ></textarea>
          {formik.touched.results && formik.errors.results && (<Styled.Error>{formik.errors.results}</Styled.Error>)}
        </Styled.InputGroup>

      </form>
    </Styled.Content>
  )
}
