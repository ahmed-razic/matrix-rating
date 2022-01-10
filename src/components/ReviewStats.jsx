import { useContext } from 'react';
import MovieContext from '../context/MovieContext';

function ReviewStats() {
  const {
    selectedMovie,
    reviewDataMatrix,
    reviewDataReloaded,
    reviewDataRevolutions,
    reviewDataAnimatrix,
    reviewDataResurrections,
  } = useContext(MovieContext);
  let average = 0;

  switch (selectedMovie) {
    case 'The Matrix':
      average =
        reviewDataMatrix.reduce((prev, curr) => {
          return prev + curr.rating;
        }, 0) / reviewDataMatrix.length;

      average = average.toFixed(1).replace(/[.,]0$/, '');
      return (
        <div className='movie-stats'>
          <h4>{reviewDataMatrix.length} Reviews</h4>
          <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
      );
    case 'The Matrix Reloaded':
      average =
        reviewDataReloaded.reduce((prev, curr) => {
          return prev + curr.rating;
        }, 0) / reviewDataReloaded.length;

      average = average.toFixed(1).replace(/[.,]0$/, '');
      return (
        <div className='movie-stats'>
          <h4>{reviewDataReloaded.length} Reviews</h4>
          <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
      );
    case 'The Matrix Revolutions':
      average =
        reviewDataRevolutions.reduce((prev, curr) => {
          return prev + curr.rating;
        }, 0) / reviewDataRevolutions.length;

      average = average.toFixed(1).replace(/[.,]0$/, '');
      return (
        <div className='movie-stats'>
          <h4>{reviewDataRevolutions.length} Reviews</h4>
          <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
      );
    case 'The Animatrix':
      average =
        reviewDataAnimatrix.reduce((prev, curr) => {
          return prev + curr.rating;
        }, 0) / reviewDataAnimatrix.length;

      average = average.toFixed(1).replace(/[.,]0$/, '');
      return (
        <div className='movie-stats'>
          <h4>{reviewDataAnimatrix.length} Reviews</h4>
          <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
      );
    case 'The Matrix Resurrections':
      average =
        reviewDataResurrections.reduce((prev, curr) => {
          return prev + curr.rating;
        }, 0) / reviewDataResurrections.length;

      average = average.toFixed(1).replace(/[.,]0$/, '');
      return (
        <div className='movie-stats'>
          <h4>{reviewDataResurrections.length} Reviews</h4>
          <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
      );
    default:
      console.log('No Data');
  }
}
export default ReviewStats;
