import React from 'react';

function Card() {

    return (
        <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="card gradient-1">
                <i className="fas fa-flask"></i>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;