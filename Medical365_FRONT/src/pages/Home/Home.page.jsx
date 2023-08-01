import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/auth.context"
import { Navigate } from "react-router-dom";
import { StatisticComponent } from "../../components/StatisticComponent/StatisticComponent";

import * as Styled from './Home.style'

export const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const loggedUser = JSON.parse(localStorage.getItem('logged-user'))

  const render = () => {
    return(
      <Styled.Homepage>
        <h1>Estatísticas do Sistema</h1>
        <Styled.StatisticCards>
          <StatisticComponent />
          <StatisticComponent />
          <StatisticComponent />
        </Styled.StatisticCards>
      </Styled.Homepage>
    )
  }

  return auth.isLogged || loggedUser.isLogged ? render() : <Navigate to='/login'/>
}