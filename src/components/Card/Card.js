import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

function Card(props) {
  return (
    <div className="col-lg-3 col-sm-6 card-container">
      <NavLink to={`${props.pathname}`} >
      <div className={`card ${props.cardcolor}`}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        </div>
      </div>
      </NavLink>
    </div>
  );
}

export default Card;
