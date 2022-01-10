import { useContext } from 'react';
import MovieContext from '../context/MovieContext';

function MovieSelect() {
  const { movieData, setSelectedMovie } = useContext(MovieContext);

  const handleChange = (e) => {
    setSelectedMovie(e.currentTarget.value);
  };

  return (
    <div className='movie-select'>
      <label htmlFor='movies'>Select a movie</label>
      <div className='select'>
        <select name='movies' id='movies' onChange={handleChange}>
          {movieData.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default MovieSelect;
