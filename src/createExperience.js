
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
		console.log(this.state.formObj)
	}
	_updateCounter = () =>{
		this.setState({counter: this.state.counter+1},()=>{});
	}
	render() {
		return (
			<div className="container" >
				<form onChange={this.formOnChangeHandler}
					onSubmit={this._handleSubmit} >
					<div className="row">
						<div className="col-25">
							<label htmlFor="fname">Experiment name</label>
						</div>
						<div className="col-75">
							<input type="text" id="expName" name="experimentName" placeholder="Experiment name.." />
						</div>
					</div>
					<div className="row">
						<div className="col-25">
							<label htmlFor="attributes">Attributes</label>
						</div>
						
					
						<AttributeForm _updateCounter = { this._updateCounter} counter={this.state.counter} />
								

					</div>
					<div className="row">
						<div className="col-25">
							<label htmlFor="percentage">Percentage</label>
						</div>
						<div className="col-25">
							<input type="text" id="percentage" name="percentage"  />
						</div>
					</div>
					<div className="row">
						<div className="col-25">
							<label htmlFor="stickyness">Stickyness</label>
						</div>
						<div className="col-25">
							<input type="text" id="stickyness" name="stickyness"  />
						</div>
						<div className="col-25">
							<label htmlFor="stickyness">minutes</label>
						</div>
					</div>

					<div className="row">
						<div className="col-25">
							<label htmlFor="stickyness">Experiment Duration</label>
						</div>
						<div className="col-25">
							<input type="text" id="duration" name="duration"  />
						</div>
						<div className="col-25">
							<label htmlFor="stickyness">minutes</label>
						</div>
					</div>

					<div className="row">
						<input type="submit" value="Submit"  />
					</div>
				</form>
			</div>

		)


	}
}

export default createExperience;

