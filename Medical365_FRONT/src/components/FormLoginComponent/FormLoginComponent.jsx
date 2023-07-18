import { useNavigate } from 'react-router-dom'
import * as Styled from './FormLoginComponent.style.jsx'
import { useRef } from 'react';

const registeredUser = JSON.parse(localStorage.getItem('registered-user')) || [];

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
  
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleAuth = () => {
    const inputData = {
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
    }

    const userFound = registeredUser.filter(user => ( user.email == inputData.email ))

    if (userFound.length > 0) {
      if (userFound[0].password == inputData.password) {
        redirectToLogin()
      } else {
        console.log('Wrong password')
      }
    } else {
      console.log('User not registered')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth();
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Button onClick={redirectToCreate}>Criar conta</Styled.Button>
      <Styled.Header>
        <legend>Login</legend>
      </Styled.Header>

        <Styled.InputGroup>
          <label htmlFor="email">E-mail</label>
          <input type="email" id='email' placeholder="Digite seu e-mail" ref={emailInput} />
        </Styled.InputGroup>
        <Styled.InputGroup>
          <label htmlFor="password">Senha</label>
          <input type="password" id='password' placeholder="Digite sua senha" ref={passwordInput} />
        </Styled.InputGroup>

      <Styled.Button type="submit">Entrar</Styled.Button>

      <Styled.Action>
        <span onClick={redirectToForgot}>Esqueci minha senha</span>
      </Styled.Action>
    </Styled.Form>
  )
}