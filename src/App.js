import React, { useState } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Project from './pages/Project';
import NotFound from './pages/404';

function App() {
  const [projectName, setProjectName] = useState();
  const [technology, setTechnology] = useState();
  const [description, setDescription] = useState();
  const [images, setImages] = useState();
 
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/skills'>
          <Skills/>
        </Route>
        <Route path='/projects'>
          <Projects setProjectName={setProjectName} setTechnology={setTechnology} setDescription={setDescription} setImages={setImages}/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/project'>
          <Project projectName={projectName} technology={technology} description={description} images={images}/>
        </Route>
        <Route path='/'>
          <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
