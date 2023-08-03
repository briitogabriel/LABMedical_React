import * as Yup from 'yup';

const RegisterExamSchema = Yup.object().shape({
  examName: Yup.string()
    .required('Nome do exame é obrigatório')
    .min(5, 'Nome do exame deve ter pelo menos 5 caracteres')
    .max(50, 'Nome do exame não pode ter mais de 50 caracteres'),
  examDate: Yup.date().required('Data do exame é obrigatória'),
  examHour: Yup.string().required('Horário do exame é obrigatório'),
  examType: Yup.string()
    .required('Tipo do exame é obrigatório')
    .min(5, 'Tipo do exame deve ter pelo menos 5 caracteres')
    .max(30, 'Tipo do exame não pode ter mais de 30 caracteres'),
  lab: Yup.string()
    .required('Laboratório é obrigatório')
    .min(5, 'Laboratório deve ter pelo menos 5 caracteres')
    .max(30, 'Laboratório não pode ter mais de 30 caracteres'),
  documentURL: Yup.string(),
  results: Yup.string()
    .required('Resultados são obrigatórios')
    .min(15, 'Resultados devem ter pelo menos 15 caracteres')
    .max(1000, 'Resultados não podem ter mais de 1000 caracteres'),
});

export default RegisterExamSchema;
