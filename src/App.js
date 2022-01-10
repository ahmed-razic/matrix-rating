import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Header from './components/shared/Header';
import MovieSelect from './components/MovieSelect';
import MovieDescription from './components/MovieDescription';
import MovieForm from './components/MovieForm';
import ReviewStats from './components/ReviewStats';
import ReviewList from './components/ReviewList';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <div className='container main'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <MovieSelect />
                  <MovieDescription />
                  <MovieForm />
                  <ReviewStats />
                  <ReviewList />
                </>
              }
            />
            <Route exact path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
