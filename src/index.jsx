import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {Header} from './components/Header/Header';
import {MovieList} from './components/MovieList/MovieList';
import movies from './movies';

const App = () => (
  <>
    <Header /> 
    <MovieList movies={movies}/>   
  </>
);

render(<App />, document.querySelector('#app'));
