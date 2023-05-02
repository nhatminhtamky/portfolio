import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Education from './components/education/education';
import Works from './components/works/works';

function App() {

  return (
    <>
      <div className='intro'>
      <Navbar/>
      <Header/>
      </div>
      <div className='section'>
        <About ></About>
        <Education></Education>
        <Works></Works>
        <Contact></Contact>
      </div>
    </>
    
  );
}

export default App;
