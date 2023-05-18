import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'


const Header = ({ allMovies, setSelectedMovie }) => {
  const history = useHistory();
  const location = useLocation()  

  const handleGoHome = () => {
    setSelectedMovie(allMovies);
    history.push('/');
  };

  return (
    <header>
      {location.pathname !== "/" && <Link to="/"> <button onClick={handleGoHome}>Go Home</button> </Link>}
      <h1>Putrid Portabellos</h1>
    </header>
  );
};

export default Header;





