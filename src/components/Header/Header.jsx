import React from 'react';
import camera from '../../img/camera.svg';
import './style.css';

export const Header = () => {
    return (
      <h1>
       <img className="logo" src={camera} alt="Logo" />
        V našem kině právě uvádíme
      </h1>
    )
}
