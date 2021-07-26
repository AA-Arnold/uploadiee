import React from "react";
import { Route, Switch } from 'react-router-dom';
// import { Transformation, Image } from 'cloudinary-react';
import { Particles } from 'react-particles-js';
import ModelsPage from './pages/ModelsPage/ModelsPage';
import HomePage from './pages/HomePage/HomePage'
import AnimatedNavbar from './components/AnimatedNavbar/AnimatedNavbar';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

function App() {

  return (
    <div >
      <Particles className='particles' params={particlesOptions} />
      <AnimatedNavbar />
      <div className='app-content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/models' component={ModelsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
