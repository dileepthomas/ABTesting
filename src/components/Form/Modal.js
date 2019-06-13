import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './modal.css'

class Modal extends Component {

    closeClick = () => {
		this.props.history.push('/');
    }

    render() {
        const {
            experimentName,
            percentage,
            stickyness,
            duration
           
        } = this.props.formData
        return (
            <div className='modal' style={{'display': 'block'}}>
                <div className="modal-contents">
                <span class="close" onClick={this.closeClick}>&times;</span>

                    <div className="">
                        <span><b>Experiment name:</b></span>
                        <span>{experimentName}</span>
                    </div>
                    <div className="">
                        <span><b>End point:</b></span>
                        <span>API.tesco.com/AB experiment/{experimentName}</span>
                    </div>
                    <div className="">
                        <span><b>Request body:</b></span>
                        <div className="request-container">
                            <p>{"{"}</p>
                            <p className="">Experiment name: {experimentName}</p>
                            <p className="">Percentage: {percentage}</p>
                            <p className="">Stickyness: {stickyness}</p>
                            <p className="">Duration: {duration}</p>
                            <p>{"}"}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Modal)