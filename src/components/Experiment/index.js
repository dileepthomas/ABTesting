import React, { Component } from 'react';
import ExpCreate from '../ExpCreate';
import ExpView from '../ExpView';

class Experiment extends Component{
    render(){
        return(
            <div>
                <ExpCreate />
                <ExpView />
            </div>
        )
    }
}

export default Experiment;
