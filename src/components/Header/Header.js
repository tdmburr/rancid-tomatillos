import { useHistory, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const history = useHistory()
  const location = useLocation()  

  const handleGoHome = () => {
    history.push('/')
  }

  return (
    <header>
      <h1>Putrid Portabellos</h1>
      {location.pathname !== "/" && <Link to="/"> <button onClick={handleGoHome}>Go Home</button> </Link>}
    </header>
  )
}

export default Header





