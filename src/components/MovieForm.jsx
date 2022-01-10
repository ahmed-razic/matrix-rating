import { useContext, useState, useEffect } from 'react';
import MovieContext from '../context/MovieContext';
import Card from './shared/Card';
import MovieRatingSelect from './MovieRatingSelect';
import Button from './shared/Button';

function MovieForm() {
  const { movieDataEdit, addReview, updateReview, selectedMovie } =
    useContext(MovieContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (movieDataEdit.edit === true) {
      setBtnDisabled(false);
      setText(movieDataEdit.item.text);
      setRating(movieDataEdit.item.rating);
    }
  }, [movieDataEdit]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters long');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newReview = {
        text: text,
        rating: rating,
      };

      if (movieDataEdit.edit === true) {
        updateReview(movieDataEdit.item.id, newReview, selectedMovie);
      } else {
        addReview(newReview, selectedMovie);
      }

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>Leave your comment about the movie</h3>
        <MovieRatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />

        <div className='input-group'>
          <input
            type='text'
            onChange={handleTextChange}
            placeholder='Write a comment'
            value={text}
          />
          <Button type='submit' version={'primary'} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default MovieForm;
