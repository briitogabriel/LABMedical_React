import { useNavigate } from 'react-router-dom'
import * as Styled from './FormLoginComponent.style.jsx'

export const FormLoginComponent = () => {

  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate('/home')
  }
  const redirectToForgot = () => {
    navigate('/forgot-password')
  }
  const redirectToCreate = () => {
    navigate('/create-account')
  }

  return (
    <Styled.Form onSubmit={redirectToLogin}>
      <button onClick={redirectToCreate}>Criar conta</button>
      <Styled.Header>
        <legend>Login</legend>
      </Styled.Header>

      <Styled.InputGroup>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id='email' placeholder="Digite seu e-mail" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id='password' placeholder="Digite sua senha" />
        </div>
      </Styled.InputGroup>

      <Styled.Button type="submit">Entrar</Styled.Button>

      <Styled.Action>
        <span onClick={redirectToForgot}>Esqueci minha senha</span>
      </Styled.Action>
    </Styled.Form>
  )
}