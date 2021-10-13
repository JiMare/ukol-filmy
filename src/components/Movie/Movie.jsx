import React from 'react'
import { Actor } from '../Actor/Actor';
import './style.css';

export const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return (
        <div className="movie">
            <div className="stick">
                   <div className="rating"><b>{rating}</b> /10</div>
            </div>
            <div className="poster">
                 <img src={`/assets/${poster}`} /> 
            </div>
            <div className="content">
                <h2>{title}</h2>
                <div className="description">
                    <p><b>Rok vydání: </b> {year}</p>
                    <p><b>Žánr: </b> {genre}</p>
                    <p><b>Režie: </b> {director}</p>
                </div>
                <div className="actors">
                <h3>V hlavních rolích: </h3>
                <div className="cast">
                    {cast.map(({name, as}) => <Actor key={name} name={name} as={as}/>)}
                </div>  
                </div>  
            </div>
        </div>
    )
}
