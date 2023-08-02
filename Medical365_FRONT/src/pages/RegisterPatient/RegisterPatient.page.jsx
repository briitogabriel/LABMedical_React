import * as Styled from './RegisterPatient.style'

import { useFormik } from 'formik';
import RegisterPatientSchema from '../../schemas/RegisterPatientSchema';

const initialValues = {
  fullName: '',
  gender: '',
  birthDate: '',
  age: '',
  cpf: '',
  rg: '',
  civilState: '',
  phone: '',
  email: '',
  placeOfBirth: '',
  emergencyContact: '',
  allergies: [],
  specificCare: [],
  insurance: '',
  insuranceNumber: '',
  validUntil: '',
  cep: '',
  city: '',
  state: '',
  address: '',
  addressNumber: '',
  complement: '',
  district: '',
  reference: '',
};

export const RegisterPatient = () => {
  const registeredPatients = JSON.parse(localStorage.getItem('registered-patients')) || [];

  const formik = useFormik({
    initialValues,
    // validationSchema: RegisterPatientSchema,
    onSubmit: (values) => {
      values.name = values.fullName.split(' ', 1)[0]
      values.icon = '/images/profile-user.png'

      const birthDate = new Date(values.birthDate);
      const today = new Date();
      const differenceInMs = today - birthDate;
      values.age = `${Math.floor(differenceInMs / 31536000000)} anos`;
      registeredPatients.push(values)
      localStorage.setItem('registered-patients', JSON.stringify(registeredPatients))
    },
  });

  return (
    <Styled.Content>
      <h1>Preencha os campos para cadastrar</h1>

      <form className="row g-3" onSubmit={formik.handleSubmit}>
        
        <Styled.Header>
          <h3>Identificação</h3>
          <div>
            <button type='button'>Editar</button>
            <button type='button'>Deletar</button>
            <button type='submit'>Salvar</button>
          </div>
        </Styled.Header>

        <Styled.InputGroup className={`col-md-6`}>
          <Styled.Label htmlFor='fullName' className="form-label">Nome completo</Styled.Label>
          <input name='fullName' type='text' className="form-control" id='fullName' onChange={formik.handleChange} value={formik.values.fullName} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='gender' className="form-label">Gênero</Styled.Label>
          <select id="gender" name='gender' className="form-select" onChange={formik.handleChange} >
            <option defaultValue value={formik.values.gender}>Masculino</option>
            <option value={formik.values.gender}>Feminino</option>
          </select>
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-2`}>
          <Styled.Label htmlFor='birthDate' className="form-label">Data Nascimento</Styled.Label>
          <input name='birthDate' type='date' className="form-control" id='birthDate' onChange={formik.handleChange} value={formik.values.birthDate} />
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='rg' className="form-label">RG</Styled.Label>
          <input name='rg' type='text' className="form-control" id='rg' onChange={formik.handleChange} value={formik.values.rg} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='cpf' className="form-label">CPF</Styled.Label>
          <input name='cpf' type='text' className="form-control" id='cpf' onChange={formik.handleChange} value={formik.values.cpf} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='civilState' className="form-label">Estado Civil</Styled.Label>
          <select id="civilState" name='civilState' className="form-select" onChange={formik.handleChange} >
            <option defaultValue value={formik.values.civilState}>Solteiro/a</option>
            <option value={formik.values.civilState}>Casado/a</option>
            <option value={formik.values.civilState}>Divorciado/a</option>
            <option value={formik.values.civilState}>Viúvo/a</option>
          </select>
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='phone' className="form-label">Telefone</Styled.Label>
          <input name='phone' type='text' className="form-control" id='phone' onChange={formik.handleChange} value={formik.values.phone} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='email' className="form-label">E-mail</Styled.Label>
          <input name='email' type='email' className="form-control" id='email' onChange={formik.handleChange} value={formik.values.email} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='placeOfBirth' className="form-label">Naturalidade</Styled.Label>
          <input name='placeOfBirth' type='text' className="form-control" id='placeOfBirth' onChange={formik.handleChange} value={formik.values.placeOfBirth} />
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='emergencyContact' className="form-label">Contato de Emergência</Styled.Label>
          <input name='emergencyContact' type='text' className="form-control" id='emergencyContact' onChange={formik.handleChange} value={formik.values.emergencyContact} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='allergies' className="form-label">Alergias</Styled.Label>
          <input name='allergies' type='text' className="form-control" id='allergies' onChange={formik.handleChange} value={formik.values.allergies} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='specificCare' className="form-label">Cuidados Especiais</Styled.Label>
          <input name='specificCare' type='text' className="form-control" id='specificCare' onChange={formik.handleChange} value={formik.values.specificCare} />
        </Styled.InputGroup>
        
        <h3>Convênio</h3>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='insurance' className="form-label">Convênio</Styled.Label>
          <input name='insurance' type='text' className="form-control" id='insurance' onChange={formik.handleChange} value={formik.values.insurance} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='insuranceNumber' className="form-label">Número Carteira</Styled.Label>
          <input name='insuranceNumber' type='number' className="form-control" id='insuranceNumber' onChange={formik.handleChange} value={formik.values.insuranceNumber} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='validUntil' className="form-label">Validade</Styled.Label>
          <input name='validUntil' type='date' className="form-control" id='validUntil' onChange={formik.handleChange} value={formik.values.validUntil} />
        </Styled.InputGroup>
        
        <h3>Endereço</h3>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='cep' className="form-label">CEP</Styled.Label>
          <input name='cep' type='text' className="form-control" id='cep' onChange={formik.handleChange} value={formik.values.cep} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-6`}>
          <Styled.Label htmlFor='city' className="form-label">Cidade</Styled.Label>
          <input name='city' type='text' className="form-control" id='city' onChange={formik.handleChange} value={formik.values.city} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-2`}>
          <Styled.Label htmlFor='state' className="form-label">Estado</Styled.Label>
          <input name='state' type='text' className="form-control" id='state' onChange={formik.handleChange} value={formik.values.city} />
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-10`}>
          <Styled.Label htmlFor='address' className="form-label">Logradouro</Styled.Label>
          <input name='address' type='text' className="form-control" id='address' onChange={formik.handleChange} value={formik.values.address} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-2`}>
          <Styled.Label htmlFor='addressNumber' className="form-label">Número</Styled.Label>
          <input name='addressNumber' type='number' className="form-control" id='addressNumber' onChange={formik.handleChange} value={formik.values.addressNumber} />
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='complement' className="form-label">Complemento</Styled.Label>
          <input name='complement' type='text' className="form-control" id='complement' onChange={formik.handleChange} value={formik.values.complement} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='district' className="form-label">Bairro</Styled.Label>
          <input name='district' type='text' className="form-control" id='district' onChange={formik.handleChange} value={formik.values.district} />
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='reference' className="form-label">Ponto de Referência</Styled.Label>
          <input name='reference' type='text' className="form-control" id='reference' onChange={formik.handleChange} value={formik.values.reference} />
        </Styled.InputGroup>

      </form>
    </Styled.Content>
  )
}
