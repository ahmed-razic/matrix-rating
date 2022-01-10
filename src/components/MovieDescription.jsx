import { useContext } from 'react';
import { FaImdb } from 'react-icons/fa';
import MovieContext from '../context/MovieContext';
import matrix from '../components/assets/matrix.jpg';
import reloaded from '../components/assets/reloaded.jpg';
import revolutions from '../components/assets/revolutions.jpg';
import animatrix from '../components/assets/animatrix.jpg';
import resurrections from '../components/assets/resurrections.jpg';

function MovieDescription() {
  const { movieData, selectedMovie } = useContext(MovieContext);

  switch (selectedMovie) {
    case 'The Matrix':
      return (
        <div className='movie-description'>
          <div className='movie-img'>
            <img src={matrix} alt={movieData[0].name} />
          </div>

          <div className='movie-info'>
            <h2 style={{ display: 'inline' }}>
              {movieData[0].name} ({movieData[0].year})
            </h2>
            <p>
              <a href={movieData[0].weblink}>
                <FaImdb size={40} color='#fff' />
              </a>
            </p>
            <p>{movieData[0].description}</p>
          </div>
        </div>
      );

    case 'The Matrix Reloaded':
      return (
        <div className='movie-description'>
          <div className='movie-img'>
            <img src={reloaded} alt={movieData[1].name} />
          </div>

          <div className='movie-info'>
            <h2 style={{ display: 'inline' }}>
              {movieData[1].name} ({movieData[1].year})
            </h2>
            <p>
              <a href={movieData[1].weblink}>
                <FaImdb size={40} color='#fff' />
              </a>
            </p>
            <p>{movieData[1].description}</p>
          </div>
        </div>
      );
    case 'The Matrix Revolutions':
      return (
        <div className='movie-description'>
          <div className='movie-img'>
            <img src={revolutions} alt={movieData[2].name} />
          </div>

          <div className='movie-info'>
            <h2 style={{ display: 'inline' }}>
              {movieData[2].name} ({movieData[2].year})
            </h2>
            <p>
              <a href={movieData[2].weblink}>
                <FaImdb size={40} color='#fff' />
              </a>
            </p>
            <p>{movieData[2].description}</p>
          </div>
        </div>
      );
    case 'The Animatrix':
      return (
        <div className='movie-description'>
          <div className='movie-img'>
            <img src={animatrix} alt={movieData[3].name} />
          </div>

          <div className='movie-info'>
            <h2 style={{ display: 'inline' }}>
              {movieData[3].name} ({movieData[3].year})
            </h2>
            <p>
              <a href={movieData[3].weblink}>
                <FaImdb size={40} color='#fff' />
              </a>
            </p>
            <p>{movieData[3].description}</p>
          </div>
        </div>
      );
    case 'The Matrix Resurrections':
      return (
        <div className='movie-description'>
          <div className='movie-img'>
            <img src={resurrections} alt={movieData[4].name} />
          </div>

          <div className='movie-info'>
            <h2 style={{ display: 'inline' }}>
              {movieData[4].name} ({movieData[4].year})
            </h2>
            <p>
              <a href={movieData[4].weblink}>
                <FaImdb size={40} color='#fff' />
              </a>
            </p>
            <p>{movieData[4].description}</p>
          </div>
        </div>
      );
    default:
      console.log(`Sorry, we are out of Matrix.`);
  }
}

export default MovieDescription;
