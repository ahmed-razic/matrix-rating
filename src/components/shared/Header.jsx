import PropTypes from 'prop-types';
import LinkIconAbout from './LinkIconAbout';

function Header({ textColor, bgColor, text }) {
  const headerStyle = {
    color: textColor,
    backgroundColor: bgColor,
    text: text,
  };
  return (
    <>
      <header style={headerStyle}>
        {text}
        <LinkIconAbout />
      </header>
    </>
  );
}

Header.defaultProps = {
  textColor: '#fff',
  bgColor: '#0b5034',
  text: 'Rate-a-matrix',
};

Header.propTypes = {
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Header;
