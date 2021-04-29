import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
 
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/About'>
          
          <About />
        </Route>
        <Route exact path='/Skills'>
          
          <Skills/>
        </Route>
        <Route exact path='/Projects'>
          
          <Projects/>
        </Route>
        <Route exact path='/Contact'>
          
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
