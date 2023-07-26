import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/auth.context"
import * as Styled from './ToolbarComponent.style.jsx'

export default function ToolbarComponent() {
  
    const { auth } = useContext(AuthContext);
    const loggedUser = auth.isLogged ? auth : JSON.parse(localStorage.getItem('logged-user'));
    let username = loggedUser.user.email.split('@',1)
    
  return (
    <Styled.Nav>
      ESTATÍSTICAS E INFORMAÇÕES
      <Styled.UserInfo>
        {username}
        <Styled.Icon />
      </Styled.UserInfo>
    </Styled.Nav>
  )
}
