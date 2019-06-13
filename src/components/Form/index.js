import React from 'react';
import './createExperience.css';
import AttributeForm from './attributeForm';

export class createExperience extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			formObj: {},
			counter: 1

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
	}
	_updateCounter = () => {
		this.setState({ counter: this.state.counter + 1 }, () => { });
	}
	render() {
		return (
			<div className="form-container" >
				<form onChange={this.formOnChangeHandler}
					onSubmit={this._handleSubmit} >
					<div className="row">
						<div className="col-25">
							<label htmlFor="fname">Experiment name</label>
						</div>
						<div className="col-50">
							<input type="text" id="expName" name="experimentName" placeholder="Experiment name.." />
						</div>
					</div>
					<div className="row a">
						<div className="col-25">
							<label htmlFor="attributes">Attributes</label>
						</div>

							<AttributeForm _updateCounter={this._updateCounter} counter={this.state.counter} />

					</div>

					<div className="row disPercentage">
						<div className="col-25">
							<label htmlFor="percentage">Percentage</label>
						</div>
						<div className="col-25">
							<input type="text" id="percentage" name="percentage" />
						</div>
					</div>
					<div className="row">
						<div className="col-25">
							<label htmlFor="stickyness">Stickyness</label>
						</div>
						<div className="col-25">
							<input type="text" id="stickyness" name="stickyness" />
						</div>
						<div className="col-1">
							<label htmlFor="stickyness">minutes</label>
						</div>
					</div>

					<div className="row">
						<div className="col-25">
							<label htmlFor="duration">Experiment Duration</label>
						</div>
						<div className="col-25">
							<input type="text" id="duration" name="duration" />
						</div>
						<div className="col-1">
							<label htmlFor="duration">minutes</label>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-12">
							<input type="submit" value="Submit" data-toggle="modal" data-target="#myModal" />
						</div>
					</div>
				</form>


				<div className="modal fade" id="myModal" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Summary</h4>
							</div>
							<div className="modal-body">
								<div className="leftAllign">
									<span>Experiment name:</span>
									<span>{this.state.formObj.experimentName}</span>
								</div>
								<div className="leftAllign">
									<span>End point:</span>
									<span>API.tesco.com/AB experiment/{this.state.formObj.experimentName}</span>
								</div>
								<div className="leftAllign">
									<span>Request body:</span>
									<div className="reqBody">
										<span>{"{"}</span>
										<span className="dispFlex">Experiment name: {this.state.formObj.experimentName}</span>
										<span className="dispFlex">Percentage: {this.state.formObj.percentage}</span>
										<span className="dispFlex">Stickyness: {this.state.formObj.stickyness}</span>
										<span className="dispFlex">Duration: {this.state.formObj.duration}</span>
										<span>{"}"}</span>
									</div>
								</div>

							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							</div>
						</div>

					</div>
				</div>

			</div>




		)


	}
}

export default createExperience;
