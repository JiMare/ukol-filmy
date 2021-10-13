import React from 'react';
import './style.css';

export const Actor = ({name, as}) => {
    return (
        <div className="actor">
            <h4>{name}</h4>
            <p className="as">as {as}</p>
        </div>
    )
}
