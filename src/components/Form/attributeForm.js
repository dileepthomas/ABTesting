import React from 'react';
import './createExperience.css';

const attributeForm = (props) => {

return(
	Array.from({length:props.counter},(item,index)=>
	<div>
    				<div className="col-25">
							<label htmlFor="lname">Name</label>
							<div className="col-75">
								<input type="text" id="attrName" name={`attrName-${index}`} />
							</div>
						</div>

						<div className="col-25">
							<label htmlFor="lname">Default value</label>
							<div className="col-75">
								<input type="text" id="defaultValue" name={`defaultValue-${index}`}  />
							</div>
						</div>
						{
							console.log(index, props.counter)
						}
						{
						(index+1 === props.counter  ) ? 
									<button className="addIcon" onClick={props._updateCounter}>+</button>
								:
								null
								
						}	
						
				</div>
)
)

}

export default attributeForm;