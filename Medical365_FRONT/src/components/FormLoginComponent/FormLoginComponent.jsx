import { useNavigate } from 'react-router-dom'
import * as Styled from './FormLoginComponent.style.jsx'
import { useRef } from 'react';

const registeredUser = JSON.parse(localStorage.getItem('registered-user')) || [{ email: 'admin@admin.com', password: 'admin123' }];

export const FormLoginComponent = () => {

  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate('/home')
  }
  
  const emailInput = useRef();
  const passwordInput = useRef();
  const newEmailInput = useRef();
  const newPasswordInput = useRef();
  const newPasswordConfirm = useRef();

  const handleAuth = () => {
    const inputData = {
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
    }

    const userFound = registeredUser.filter(user => ( user.email == inputData.email ))

    const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')
    const appendAlert2 = (message, type) => {
      alertPlaceholder2.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
    }

    if (userFound.length > 0) {
      if (userFound[0].password == inputData.password) {
        redirectToLogin()
      } else {
        return appendAlert2('Senha incorreta', 'danger')
      }
    } else {
      return appendAlert2('Usuário não registrado', 'danger')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth();
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  const isValidPassword = (password) => {
    return password.length >= 8;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    
    const newInputData = {
      email: newEmailInput.current?.value,
      password: newPasswordInput.current?.value,
      passwordConfirm: newPasswordConfirm.current?.value,
    }

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
      alertPlaceholder.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
    }

    if (!newInputData.email || !isValidEmail(newInputData.email)) {
      return appendAlert('Digite um endereço de e-mail válido', 'danger')
    } else if (!isValidPassword(newInputData.password)) {
      return appendAlert('A senha deve ter no mínimo 8 caracteres', 'danger')
    } else if (newInputData.password != newInputData.passwordConfirm) {
      return appendAlert('As senhas não são iguais', 'danger')
    }

    const userFound = registeredUser.filter(user => ( user.email == newInputData.email ))

    if (userFound.length == 0) {
      registeredUser.push({
        email: newEmailInput.current?.value,
        password: newPasswordInput.current?.value,
      })
      localStorage.setItem('registered-user', JSON.stringify(registeredUser))
      appendAlert(`Usuário ${newInputData.email} registrado`, 'success')
    } else {
      appendAlert(`Usuário ${newInputData.email} já existe!`, 'danger')
    }

  }

  return (
    <>
    
      <Styled.Form onSubmit={handleSubmit}>

        <Styled.Button onClick={(e) => e.preventDefault()} data-bs-toggle="modal" data-bs-target="#backdrop">Criar conta</Styled.Button>

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
        
        <div id="liveAlertPlaceholder2"></div>

        <Styled.Action>
          <span data-bs-toggle="modal" data-bs-target="#exampleModal">Esqueci minha senha</span>
        </Styled.Action>

      </Styled.Form>
      

      {/* <!-- Modal Register User --> */}
      <div className="modal fade" id="backdrop" tabIndex="-1" aria-labelledby="backdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="backdropLabel">Cadastro de Usuário</h1>
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
            <Styled.InputGroup>
                <label htmlFor="newPasswordConfirm">Confirmar senha</label>
                <input type="password" id='newPasswordConfirm' placeholder="Digite novamente a senha" ref={newPasswordConfirm} />
              </Styled.InputGroup>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" className="btn btn-primary" onClick={handleRegister}>Criar</button>
            </div>
            <div id="liveAlertPlaceholder"></div>
          </div>
        </div>
      </div>

      {/* <!-- Modal  --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Aviso "Esqueci minha senha"</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Recurso ainda em desenvolvimento!</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}