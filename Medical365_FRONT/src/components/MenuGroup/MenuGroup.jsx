import * as Styled from './MenuGroup.style';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/auth.context.jsx';

export default function MenuGroup({ title, btn1, icon1, btn2, icon2, open }) {
  
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleRedirect = (route) => {
    if (route == '/login') {
      let user = JSON.parse(localStorage.getItem('logged-user'))
      user.isLogged = false 
      setAuth(user)
      localStorage.setItem('logged-user', JSON.stringify(user))
    } 
      navigate(route)
  }

  return (
    <>
      <Styled.Title $open={open}>{title}</Styled.Title>
      <Styled.Button $open={open} onClick={() => handleRedirect(btn1.navigation)}>{icon1}  {open ? `${btn1.text}` : ''}</Styled.Button>
      <Styled.Button $open={open} onClick={() => handleRedirect(btn2.navigation)}>{icon2}  {open ? `${btn2.text}` : ''}</Styled.Button>
    </>
  )
}
