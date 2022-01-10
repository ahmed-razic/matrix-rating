import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LinkIconAbout() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestionCircle size={25} />
      </Link>
    </div>
  );
}

export default LinkIconAbout;
