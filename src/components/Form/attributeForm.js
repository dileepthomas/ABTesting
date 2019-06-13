import React from 'react';
import './createExperience.css';

const attributeForm = (props) => {

return(
	Array.from({length:props.counter},(item,index)=>
	<div className="container-flex">
    			

						<div className="form-group row">
							<label htmlFor="name" className="col-sm-4 col-form-label"> Name</label>
							<div className="col-sm-6">
								<input type="text" className="form-control-plaintext" id="attrName" name={`attrName-${index}`} />
							</div>
						</div>

						

						<div className="form-group row">
							<label htmlFor="name" className="col-sm-4 col-form-label"> Default value</label>
							<div className="col-sm-6">
								<input type="text" className="form-control-plaintext" id="defaultValue" 
								name={`defaultValue-${index}`} />
							</div>
						</div>
						
						{
						(index+1 === props.counter  ) ? 
									<div className='form-group row'>
									<button className="addIcon" onClick={props._updateCounter}>+</button>
									</div>
								:
								null
								
						}	
						
				</div>
)
)

}

export default attributeForm;