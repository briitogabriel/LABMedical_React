import { useNavigate } from 'react-router-dom'
import * as Styled from './FormLoginComponent.style.jsx'
import { useRef } from 'react';

const registeredUser = JSON.parse(localStorage.getItem('registered-user')) || [{ email: 'admin@admin.com', password: 'admin123' }];

export const FormLoginComponent = () => {

  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate('/home')
  }
  const redirectToForgot = () => {
    console.log('Recurso ainda em desenvolvimento!')
  }
  
  const emailInput = useRef();
  const passwordInput = useRef();
  const newEmailInput = useRef();
  const newPasswordInput = useRef();

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

  const handleRegister = (e) => {
    e.preventDefault();

    const newInputData = {
      email: newEmailInput.current?.value,
      password: newPasswordInput.current?.value,
    }

    if (!newInputData.email || !newInputData.password) {
      return console.log('Digite um e-mail e senha')
    }

    const userFound = registeredUser.filter(user => ( user.email == newInputData.email ))

    if (userFound.length == 0) {
      registeredUser.push(newInputData)
      localStorage.setItem('registered-user', JSON.stringify(registeredUser))
      console.log(`Usuário ${newInputData.email} registrado`)
    } else {
      console.log(`Usuário ${newInputData.email} já existe!`)
    }

  }

  return (
    <>
    
      <Styled.Form onSubmit={handleSubmit}>

        <Styled.Button onClick={(e) => e.preventDefault()} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Criar conta</Styled.Button>

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
      

      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Cadastro de Usuário</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <Styled.InputGroup>
              <label htmlFor="newEmail">E-mail</label>
              <input type="email" id='newEmail' placeholder="Digite o e-mail" ref={newEmailInput} />
            </Styled.InputGroup>
            <Styled.InputGroup>
                <label htmlFor="newPassword">Senha</label>
                <input type="password" id='newPassword' placeholder="Digite uma senha" ref={newPasswordInput} />
              </Styled.InputGroup>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-primary" onClick={handleRegister}>Criar</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}