import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MovieData from '../data/MovieData';
import ReviewDataMatrix from '../data/ReviewDataMatrix';
import ReviewDataReloaded from '../data/ReviewDataReloaded';
import ReviewDataRevolutions from '../data/ReviewDataRevolutions';
import ReviewDataAnimatrix from '../data/ReviewDataAnimatrix';
import ReviewDataResurrections from '../data/ReviewDataResurrections';
const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieData] = useState(MovieData);
  const [reviewDataMatrix, setReviewDataMatrix] = useState(ReviewDataMatrix);
  const [reviewDataReloaded, setReviewDataReloaded] =
    useState(ReviewDataReloaded);
  const [reviewDataRevolutions, setReviewDataRevolutions] = useState(
    ReviewDataRevolutions
  );
  const [reviewDataAnimatrix, setReviewDataAnimatrix] =
    useState(ReviewDataAnimatrix);
  const [reviewDataResurrections, setReviewDataResurrections] = useState(
    ReviewDataResurrections
  );
  const [selectedMovie, setSelectedMovie] = useState('The Matrix');
  const [movieDataEdit, setMovieDataEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteReview = (id) => {
    if (window.confirm('Are you sure you want to delete item?'))
      if (selectedMovie === 'The Matrix')
        setReviewDataMatrix(reviewDataMatrix.filter((item) => item.id !== id));
      else if (selectedMovie === 'The Matrix Reloaded')
        setReviewDataReloaded(
          reviewDataReloaded.filter((item) => item.id !== id)
        );
      else if (selectedMovie === 'The Matrix Revolutions')
        setReviewDataRevolutions(
          reviewDataRevolutions.filter((item) => item.id !== id)
        );
      else if (selectedMovie === 'The Animatrix')
        setReviewDataAnimatrix(
          reviewDataAnimatrix.filter((item) => item.id !== id)
        );
      else if (selectedMovie === 'The Matrix Resurrections')
        setReviewDataResurrections(
          reviewDataResurrections.filter((item) => item.id !== id)
        );
  };

  const addReview = (newReview) => {
    newReview.id = uuidv4();
    if (selectedMovie === 'The Matrix')
      setReviewDataMatrix([newReview, ...reviewDataMatrix]);
    else if (selectedMovie === 'The Matrix Reloaded')
      setReviewDataReloaded([newReview, ...reviewDataReloaded]);
    else if (selectedMovie === 'The Matrix Revolutions')
      setReviewDataRevolutions([newReview, ...reviewDataRevolutions]);
    else if (selectedMovie === 'The Animatrix')
      setReviewDataAnimatrix([newReview, ...reviewDataAnimatrix]);
    else if (selectedMovie === 'The Matrix Resurrections')
      setReviewDataResurrections([newReview, ...reviewDataResurrections]);
  };

  const editReview = (item) => {
    setMovieDataEdit({
      item: item,
      edit: true,
    });
  };

  const updateReview = (id, updItem) => {
    if (selectedMovie === 'The Matrix')
      setReviewDataMatrix(
        reviewDataMatrix.map((item) =>
          item.id === id ? { ...item, ...updItem } : item
        )
      );
    else if (selectedMovie === 'The Matrix Reloaded')
      setReviewDataReloaded(
        reviewDataReloaded.map((item) =>
          item.id === id ? { ...item, ...updItem } : item
        )
      );
    else if (selectedMovie === 'The Matrix Revolutions')
      setReviewDataRevolutions(
        reviewDataRevolutions.map((item) =>
          item.id === id ? { ...item, ...updItem } : item
        )
      );
    else if (selectedMovie === 'The Animatrix')
      setReviewDataAnimatrix(
        reviewDataAnimatrix.map((item) =>
          item.id === id ? { ...item, ...updItem } : item
        )
      );
    else if (selectedMovie === 'The Matrix Resurrections')
      setReviewDataResurrections(
        reviewDataResurrections.map((item) =>
          item.id === id ? { ...item, ...updItem } : item
        )
      );
    movieDataEdit.edit = false;
  };

  return (
    <MovieContext.Provider
      value={{
        movieData,
        selectedMovie,
        movieDataEdit,
        reviewDataMatrix,
        reviewDataReloaded,
        reviewDataRevolutions,
        reviewDataAnimatrix,
        reviewDataResurrections,
        setSelectedMovie,
        deleteReview,
        addReview,
        editReview,
        updateReview,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
