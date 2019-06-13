import React from 'react';
import './createExperience.css';

const attributeForm = (props) => {
	console.log('TRESSSS',props.counter);
	 

return(
	Array.from({length:props.counter},(item,index)=>
	<div>
    <div className="col-25">
							<label htmlFor="lname">Name</label>
							<div className="col-75">
								<input type="text" id="attrName" name="attrName"  />
							</div>
						</div>

						<div className="col-25">
							<label htmlFor="lname">Default value</label>

							<div className="col-75">
								<input type="text" id="defaultValue" name="defaultValue"  />
							</div>
							<button className="addIcon" onClick={props._updateCounter}>+</button>
						</div>
					
				</div>
)
)

}

export default attributeForm;