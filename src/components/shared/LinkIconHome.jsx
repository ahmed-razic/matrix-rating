import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LinkIconHome() {
  return (
    <div className='about-link'>
      <Link to='/'>
        <FaHome size={25} />
      </Link>
    </div>
  );
}

export default LinkIconHome;
