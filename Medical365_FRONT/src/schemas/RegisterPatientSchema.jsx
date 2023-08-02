import * as Yup from 'yup';

const RegisterPatientSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Nome completo é obrigatório')
    .min(5, 'Nome completo deve ter pelo menos 5 caracteres')
    .max(50, 'Nome completo deve ter no máximo 50 caracteres'),
  gender: Yup.string().required('Gênero é obrigatório'),
  birthDate: Yup.date().required('Data de nascimento é obrigatória'),
  age: Yup.string(),
  cpf: Yup.string()
    .required('CPF é obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
  rg: Yup.string().max(20, 'RG deve ter no máximo 20 caracteres'),
  civilState: Yup.string().required('Estado civil é obrigatório'),
  phone: Yup.string()
    .required('Telefone é obrigatório')
    .matches(/^\(\d{2}\) \d{4}-\d{4}$|^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
  email: Yup.string().email('E-mail inválido'),
  placeOfBirth: Yup.string()
    .required('Naturalidade é obrigatória')
    .min(5, 'Naturalidade deve ter pelo menos 5 caracteres')
    .max(50, 'Naturalidade deve ter no máximo 50 caracteres'),
  emergencyContact: Yup.string().matches(/^\(\d{2}\) \d{4}-\d{4}$|^\(\d{2}\) \d{5}-\d{4}$/, 'Contato de emergência inválido'),
  allergies: Yup.array(),
  specificCare: Yup.array(),
  insurance: Yup.string(),
  insuranceNumber: Yup.string(),
  validUntil: Yup.date(),
  cep: Yup.string().required('CEP é obrigatório'),
  city: Yup.string().required('Cidade é obrigatória'),
  state: Yup.string().required('Estado é obrigatório'),
  address: Yup.string().required('Logradouro é obrigatório'),
  addressNumber: Yup.string(),
  complement: Yup.string(),
  district: Yup.string(),
  reference: Yup.string(),
});

export default RegisterPatientSchema;
