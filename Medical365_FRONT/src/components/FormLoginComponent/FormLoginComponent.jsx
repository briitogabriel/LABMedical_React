import { useNavigate } from 'react-router-dom'
import * as Styled from './FormLoginComponent.style.jsx'

export const FormLoginComponent = () => {

  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate('/home')
  }

  return (
    <Styled.Form onSubmit={redirectToLogin}>
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
        <a href="">Esqueci minha senha</a>
        <button >Criar conta</button>
      </Styled.Action>
    </Styled.Form>
  )
}