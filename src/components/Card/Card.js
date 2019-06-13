import React from 'react';
import "./Card.css";

function Card(props) {
    console.log(props.name);
    return (
        <div className="col-lg-3 col-sm-6">
            <div className={`card ${props.cardcolor}`}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
            </div>
        </div>

    );
}

export default Card;