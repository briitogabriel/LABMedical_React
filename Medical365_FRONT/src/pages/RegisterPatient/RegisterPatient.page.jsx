import { RegisterPatientInput } from "../../components/PatientInputComponent/PatientInputComponent"

import * as Styled from './RegisterPatient.style'


export const RegisterPatient = () => {
  return (
    <Styled.Content>
      <h1>Preencha os campos para cadastrar</h1>
      <Styled.Header>
        <h3>Identificação</h3>
        <div>
          <button>Editar</button>
          <button>Deletar</button>
          <button>Salvar</button>
        </div>
      </Styled.Header>
      <form className="row g-3">

        <RegisterPatientInput inputId={'fullName'} inputType={'text'} inputCols={6} inputPlaceholder={'Nome completo'} />
        <RegisterPatientInput inputId={'gender'} inputType={'select'} inputCols={4} inputPlaceholder={'Gênero'} />
        <RegisterPatientInput inputId={'birthDate'} inputType={'date'} inputCols={2} inputPlaceholder={'Data Nascimento'} />

        <RegisterPatientInput inputId={'rg'} inputType={'text'} inputCols={4} inputPlaceholder={'RG'} />
        <RegisterPatientInput inputId={'cpf'} inputType={'text'} inputCols={4} inputPlaceholder={'CPF'} />
        <RegisterPatientInput inputId={'civilState'} inputType={'select'} inputCols={4} inputPlaceholder={'Estado Civil'} />

        <RegisterPatientInput inputId={'phone'} inputType={'text'} inputCols={4} inputPlaceholder={'Telefone'} />
        <RegisterPatientInput inputId={'email'} inputType={'email'} inputCols={4} inputPlaceholder={'E-mail'} />
        <RegisterPatientInput inputId={'placeOfBirth'} inputType={'text'} inputCols={4} inputPlaceholder={'Naturalidade'} />
        
        <h3>Convênio</h3>

        <RegisterPatientInput inputId={'ensurance'} inputType={'text'} inputCols={4} inputPlaceholder={'Convênio'} />
        <RegisterPatientInput inputId={'ensuranceNumber'} inputType={'number'} inputCols={4} inputPlaceholder={'Número Carteira'} />
        <RegisterPatientInput inputId={'validUntil'} inputType={'date'} inputCols={4} inputPlaceholder={'Validade'} />
        
        <h3>Endereço</h3>

        <RegisterPatientInput inputId={'cep'} inputType={'text'} inputCols={4} inputPlaceholder={'CEP'} />
        <RegisterPatientInput inputId={'city'} inputType={'text'} inputCols={6} inputPlaceholder={'Cidade'} />
        <RegisterPatientInput inputId={'state'} inputType={'text'} inputCols={2} inputPlaceholder={'Estado'} />

        <RegisterPatientInput inputId={'address'} inputType={'text'} inputCols={10} inputPlaceholder={'Logradouro'} />
        <RegisterPatientInput inputId={'addressNumber'} inputType={'number'} inputCols={2} inputPlaceholder={'Número'} />

        <RegisterPatientInput inputId={'complement'} inputType={'text'} inputCols={4} inputPlaceholder={'Complemento'} />
        <RegisterPatientInput inputId={'district'} inputType={'text'} inputCols={4} inputPlaceholder={'Bairro'} />
        <RegisterPatientInput inputId={'reference'} inputType={'text'} inputCols={4} inputPlaceholder={'Ponto de Referência'} />

      </form>
    </Styled.Content>
  )
}
