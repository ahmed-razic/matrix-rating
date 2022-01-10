import Card from '../components/shared/Card';
import LinkIconHome from '../components/shared/LinkIconHome';

function AboutPage() {
  return (
    <>
      <Card>
        <div className='about'>
          <h1>About This Project</h1>
          <p>This is a React app to leave a Matrix movie review </p>
          <p>Version: 1.0.0</p>
        </div>
        <LinkIconHome />
      </Card>
    </>
  );
}

export default AboutPage;
