import PropTypes from 'prop-types';
import { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';

function ReviewItem({ item }) {
  const { deleteReview, editReview, selectedReview } = useContext(MovieContext);

  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button
        className='close'
        onClick={() => {
          deleteReview(item.id, selectedReview);
        }}
      >
        <FaTimes color='#fff'></FaTimes>
      </button>
      <button
        className='edit'
        onClick={() => {
          editReview(item);
        }}
      >
        <FaEdit color='#fff' />
      </button>
      <div className='num-text'>{item.text}</div>
    </Card>
  );
}

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ReviewItem;
