import { useHistory, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import putridPortabelloImage from '../../Assets/PUTRIDportabello.png'

import './Header.css'

const Header = () => {
  const history = useHistory()
  const location = useLocation()  

  const handleGoHome = () => {
    history.push('/')
  }

  return (
    <header>
      <img src= {putridPortabelloImage} id='header-logo' alt="Putrid Portabello" />
      <h1>Putrid Portabellos</h1> <img src= {putridPortabelloImage} id='header-logo' alt="Putrid Portabello" />
      {location.pathname !== "/" && <Link to="/"> <button onClick={handleGoHome}>Go Home</button> </Link>}
    </header>
  )
}

export default Header





