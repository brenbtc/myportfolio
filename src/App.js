// Dependencies \\
import { Routes, Route } from 'react-router-dom';

// Components \\
import Footer from './components/Footer'
import Nav from './components/Nav'


// Pages \\
import Home from './Pages/Home';



import './App.css';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';




function App() {
  return (
    <main className="App">
      <header> <Nav/> </header>
      <Routes>

        <Route
        path='/'
        element={ <Home/> }
        />

        <Route
        path='/projects'
        element={ <Projects/> }
        />

        <Route
        path='/resume'
        element={ <Resume/> }
        />

      </Routes>
      <footer> <Footer/> </footer>
    </main>
  );
}

export default App;
