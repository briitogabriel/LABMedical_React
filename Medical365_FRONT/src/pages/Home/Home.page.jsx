import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/auth.context"
import { Navigate } from "react-router-dom";

export const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const loggedUser = JSON.parse(localStorage.getItem('logged-user'))

  const render = () => {
    return(
      <>
        <p>HomePage is Render</p>
      </>
    )
  }

  return auth.isLogged || loggedUser.isLogged ? render() : <Navigate to='/login'/>
}