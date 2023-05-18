import { useHistory } from 'react-router-dom';


const Header = ({ allMovies, setSelectedMovie, isMovieSelected }) => {
  const history = useHistory();

  const handleGoHome = () => {
    setSelectedMovie(allMovies);
    history.push('/');
  };

  return (
    <header>
      {<h1>Putrid Portabellos</h1>}
      {isMovieSelected && <button onClick={handleGoHome}>Go Home</button>}
    </header>
  );
};

export default Header;





