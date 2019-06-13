import React from 'react';
import './createExperience.css';
import AttributeForm from './attributeForm';
import { withRouter } from 'react-router';
import Modal from './Modal';

export class createExperience extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			formObj: {},
			counter: 1,
			isModal: false
		};

	}

	formOnChangeHandler = (e) => {
		let formKeys = Object.keys(this.state.formObj)

		if (formKeys.includes(e.target.name)) {
			let copy = { ...this.state.formObj }
			copy[e.target.name] = e.target.value
			this.setState({ formObj: copy })
		}

		let copy = { ...this.state.formObj }
		copy[e.target.name] = e.target.value
		this.setState({ formObj: copy })

	}

	_handleSubmit = e => {

		e.preventDefault();
		localStorage.setItem('formValues', JSON.stringify(this.state.formObj))
		this.setState({
			isModal: true
		})
	}
	_updateCounter = () => {
		this.setState({ counter: this.state.counter + 1 }, () => { });
	}

	close = () => {
		this.setState({
			isModal: false
		})
		this.props.history.push('/');
	}

	render() {
		console.log(this.state.isModal)
		return (
			<div>
				<div className="container">
					<form className="offset-sm-2 text-center formpad" onChange={this.formOnChangeHandler}
						onSubmit={this._handleSubmit}>
						<div className="form-group row">
							<label htmlFor="staticEmail" className="col-sm-2 col-form-label">Experiment Name</label>
							<div className="col-sm-6">
								<input type="text" className="form-control-plaintext" id="experimentName" name="experimentName" />
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Attributes</label>
							<div className="col-sm-6">
							<AttributeForm _updateCounter={this._updateCounter} counter={this.state.counter} />


							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Percentage</label>
							<div className="col-sm-6">
								<input type="text" className="form-control" id="percentage" name="percentage" />
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Stickyness</label>
							<div className="col-sm-6">
								<input type="text" className="form-control" id="stickyness" name="stickyness" />
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Experiment Duration</label>
							<div className="col-sm-6">
								<input type="text" className="form-control" id="duration" name="duration" />
							</div>
						</div>
						<div className="form-group row form-inlin justify-content-center">
							<button type="submit" className="btn btn-primary" 
							>Submit</button>
						</div>

					</form>

				</div>
				{
					this.state.isModal ? 
					<Modal formData={this.state.formObj} />
				// <div className="modal fade"  role="dialog">
				// 	<div className="modal-dialog">
				// 		<div className="modal-content">
				// 			<div className="modal-header">
				// 				<h4 className="modal-title">Summary</h4>
				// 			</div>
				// 			<div className="modal-body">
				// 				<div className="leftAllign">
				// 					<span>Experiment name:</span>
				// 					<span>{this.state.formObj.experimentName}</span>
				// 				</div>
				// 				<div className="leftAllign">
				// 					<span>End point:</span>
				// 					<span>API.tesco.com/AB experiment/{this.state.formObj.experimentName}</span>
				// 				</div>
				// 				<div className="leftAllign">
				// 					<span>Request body:</span>
				// 					<div className="reqBody">
				// 						<span>{"{"}</span>
				// 						<span className="dispFlex">Experiment name: {this.state.formObj.experimentName}</span>
				// 						<span className="dispFlex">Percentage: {this.state.formObj.percentage}</span>
				// 						<span className="dispFlex">Stickyness: {this.state.formObj.stickyness}</span>
				// 						<span className="dispFlex">Duration: {this.state.formObj.duration}</span>
				// 						<span>{"}"}</span>
				// 					</div>
				// 				</div>

				// 			</div>
				// 			<div className="modal-footer">
				// 				<button type="button" className="btn btn-default" onClick={this.close}>Close</button>
				// 			</div>
				// 		</div>

				// 	</div>
				// </div>
			:
			null
				}
							</div>

		);


	}
}

export default withRouter(createExperience);
