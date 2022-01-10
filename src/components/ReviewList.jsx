import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import ReviewItem from './ReviewItem';
import MovieContext from '../context/MovieContext';

function ReviewList() {
  const {
    selectedMovie,
    reviewDataMatrix,
    reviewDataReloaded,
    reviewDataRevolutions,
    reviewDataAnimatrix,
    reviewDataResurrections,
  } = useContext(MovieContext);

  switch (selectedMovie) {
    case 'The Matrix':
      return (
        <div className='movie-list'>
          <AnimatePresence>
            {reviewDataMatrix.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ReviewItem key={item.id} item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      );
    case 'The Matrix Reloaded':
      return (
        <div className='movie-list'>
          <AnimatePresence>
            {reviewDataReloaded.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ReviewItem key={item.id} item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      );
    case 'The Matrix Revolutions':
      return (
        <div className='movie-list'>
          <AnimatePresence>
            {reviewDataRevolutions.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ReviewItem key={item.id} item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      );
    case 'The Animatrix':
      return (
        <div className='movie-list'>
          <AnimatePresence>
            {reviewDataAnimatrix.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ReviewItem key={item.id} item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      );
    case 'The Matrix Resurrections':
      return (
        <div className='movie-list'>
          <AnimatePresence>
            {reviewDataResurrections.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ReviewItem key={item.id} item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      );
    default:
      console.log('No Data');
      break;
  }
}

export default ReviewList;
