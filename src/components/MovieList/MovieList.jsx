import React from 'react';
import { Movie } from '../Movie/Movie';
import './style.css';

export const MovieList = ({movies}) => {
    return (
        <div className="movieList">
         {movies.map(({title, poster, year, rating, director, genre, cast}, index) => <Movie key={index} title={title} year={year}
             poster={poster} rating={rating} director={director} genre={genre} cast={cast}/>)}
        </div>
    )
}
