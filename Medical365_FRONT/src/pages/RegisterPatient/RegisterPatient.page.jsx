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
  console.log(RegisterPatientSchema)

  const getMaxId = (patientList) => {  
    const maxId = patientList.reduce((max, item) => {
      return item.id > max ? item.id : max;
    }, patientList[0].id);
    return maxId;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterPatientSchema,
    onSubmit: (values) => {
      values.name = values.fullName.split(' ', 1)[0]
      values.icon = '/images/profile-user.png'

      const birthDate = new Date(values.birthDate);
      const today = new Date();
      const differenceInMs = today - birthDate;
      values.age = `${Math.floor(differenceInMs / 31536000000)} anos`;

      const maxIdRegistered = getMaxId(registeredPatients);
      values.id = maxIdRegistered + 1;
      
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
          {formik.touched.fullName && formik.errors.fullName && (<Styled.Error>{formik.errors.fullName}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='gender' className="form-label">Gênero</Styled.Label>
          <select id="gender" name='gender' className="form-select" onChange={formik.handleChange} value={formik.values.gender}>
            <option defaultValue >Masculino</option>
            <option>Feminino</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (<Styled.Error>{formik.errors.gender}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-2`}>
          <Styled.Label htmlFor='birthDate' className="form-label">Data Nascimento</Styled.Label>
          <input name='birthDate' type='date' className="form-control" id='birthDate' onChange={formik.handleChange} value={formik.values.birthDate} />
          {formik.touched.birthDate && formik.errors.birthDate && (<Styled.Error>{formik.errors.birthDate}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='rg' className="form-label">RG</Styled.Label>
          <input name='rg' type='text' className="form-control" id='rg' onChange={formik.handleChange} value={formik.values.rg} />
          {formik.touched.rg && formik.errors.rg && (<Styled.Error>{formik.errors.rg}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='cpf' className="form-label">CPF</Styled.Label>
          <input name='cpf' type='text' className="form-control" id='cpf' onChange={formik.handleChange} value={formik.values.cpf} />
          {formik.touched.cpf && formik.errors.cpf && (<Styled.Error>{formik.errors.cpf}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='civilState' className="form-label">Estado Civil</Styled.Label>
          <select id="civilState" name='civilState' className="form-select" onChange={formik.handleChange} value={formik.values.civilState} >
            <option defaultValue>Solteiro/a</option>
            <option>Casado/a</option>
            <option>Divorciado/a</option>
            <option>Viúvo/a</option>
          </select>
          {formik.touched.civilState && formik.errors.civilState && (<Styled.Error>{formik.errors.civilState}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='phone' className="form-label">Telefone</Styled.Label>
          <input name='phone' type='text' className="form-control" id='phone' onChange={formik.handleChange} value={formik.values.phone} />
          {formik.touched.phone && formik.errors.phone && (<Styled.Error>{formik.errors.phone}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='email' className="form-label">E-mail</Styled.Label>
          <input name='email' type='email' className="form-control" id='email' onChange={formik.handleChange} value={formik.values.email} />
          {formik.touched.email && formik.errors.email && (<Styled.Error>{formik.errors.email}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='placeOfBirth' className="form-label">Naturalidade</Styled.Label>
          <input name='placeOfBirth' type='text' className="form-control" id='placeOfBirth' onChange={formik.handleChange} value={formik.values.placeOfBirth} />
          {formik.touched.placeOfBirth && formik.errors.placeOfBirth && (<Styled.Error>{formik.errors.placeOfBirth}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='emergencyContact' className="form-label">Contato de Emergência</Styled.Label>
          <input name='emergencyContact' type='text' className="form-control" id='emergencyContact' onChange={formik.handleChange} value={formik.values.emergencyContact} />
          {formik.touched.emergencyContact && formik.errors.emergencyContact && (<Styled.Error>{formik.errors.emergencyContact}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='allergies' className="form-label">Alergias</Styled.Label>
          <input name='allergies' type='text' className="form-control" id='allergies' onChange={formik.handleChange} value={formik.values.allergies} />
          {formik.touched.allergies && formik.errors.allergies && (<Styled.Error>{formik.errors.allergies}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='specificCare' className="form-label">Cuidados Especiais</Styled.Label>
          <input name='specificCare' type='text' className="form-control" id='specificCare' onChange={formik.handleChange} value={formik.values.specificCare} />
          {formik.touched.specificCare && formik.errors.specificCare && (<Styled.Error>{formik.errors.specificCare}</Styled.Error>)}
        </Styled.InputGroup>
        
        <h3>Convênio</h3>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='insurance' className="form-label">Convênio</Styled.Label>
          <input name='insurance' type='text' className="form-control" id='insurance' onChange={formik.handleChange} value={formik.values.insurance} />
          {formik.touched.insurance && formik.errors.insurance && (<Styled.Error>{formik.errors.insurance}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='insuranceNumber' className="form-label">Número Carteira</Styled.Label>
          <input name='insuranceNumber' type='number' className="form-control" id='insuranceNumber' onChange={formik.handleChange} value={formik.values.insuranceNumber} />
          {formik.touched.insuranceNumber && formik.errors.insuranceNumber && (<Styled.Error>{formik.errors.insuranceNumber}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='validUntil' className="form-label">Validade</Styled.Label>
          <input name='validUntil' type='date' className="form-control" id='validUntil' onChange={formik.handleChange} value={formik.values.validUntil} />
          {formik.touched.validUntil && formik.errors.validUntil && (<Styled.Error>{formik.errors.validUntil}</Styled.Error>)}
        </Styled.InputGroup>
        
        <h3>Endereço</h3>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='cep' className="form-label">CEP</Styled.Label>
          <input name='cep' type='text' className="form-control" id='cep' onChange={formik.handleChange} value={formik.values.cep} />
          {formik.touched.cep && formik.errors.cep && (<Styled.Error>{formik.errors.cep}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-6`}>
          <Styled.Label htmlFor='city' className="form-label">Cidade</Styled.Label>
          <input name='city' type='text' className="form-control" id='city' onChange={formik.handleChange} value={formik.values.city} />
          {formik.touched.city && formik.errors.city && (<Styled.Error>{formik.errors.city}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-2`}>
          <Styled.Label htmlFor='state' className="form-label">Estado</Styled.Label>
          <input name='state' type='text' className="form-control" id='state' onChange={formik.handleChange} value={formik.values.state} />
          {formik.touched.state && formik.errors.state && (<Styled.Error>{formik.errors.state}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-10`}>
          <Styled.Label htmlFor='address' className="form-label">Logradouro</Styled.Label>
          <input name='address' type='text' className="form-control" id='address' onChange={formik.handleChange} value={formik.values.address} />
          {formik.touched.address && formik.errors.address && (<Styled.Error>{formik.errors.address}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-2`}>
          <Styled.Label htmlFor='addressNumber' className="form-label">Número</Styled.Label>
          <input name='addressNumber' type='number' className="form-control" id='addressNumber' onChange={formik.handleChange} value={formik.values.addressNumber} />
          {formik.touched.addressNumber && formik.errors.addressNumber && (<Styled.Error>{formik.errors.addressNumber}</Styled.Error>)}
        </Styled.InputGroup>

        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='complement' className="form-label">Complemento</Styled.Label>
          <input name='complement' type='text' className="form-control" id='complement' onChange={formik.handleChange} value={formik.values.complement} />
          {formik.touched.complement && formik.errors.complement && (<Styled.Error>{formik.errors.complement}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='district' className="form-label">Bairro</Styled.Label>
          <input name='district' type='text' className="form-control" id='district' onChange={formik.handleChange} value={formik.values.district} />
          {formik.touched.district && formik.errors.district && (<Styled.Error>{formik.errors.district}</Styled.Error>)}
        </Styled.InputGroup>
        <Styled.InputGroup className={`col-md-4`}>
          <Styled.Label htmlFor='reference' className="form-label">Ponto de Referência</Styled.Label>
          <input name='reference' type='text' className="form-control" id='reference' onChange={formik.handleChange} value={formik.values.reference} />
          {formik.touched.reference && formik.errors.reference && (<Styled.Error>{formik.errors.reference}</Styled.Error>)}
        </Styled.InputGroup>

      </form>
    </Styled.Content>
  )
}
