import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = ({ allMovies, setSelectedMovie }) => {
  const history = useHistory();

  const handleGoHome = () => {
    setSelectedMovie(allMovies);
    history.push('/');
  };

  return (
    <header>
      {/* ... */}
      <button onClick={handleGoHome}>Go Home</button>
    </header>
  );
};

export default Header;