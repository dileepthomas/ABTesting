import React, {Component} from 'react';
import Table from '../Table';
import Constants from '../../constants/constant';

class ExpView extends Component{
    render(){
        const {
            tableData :  {head, body}
        } = Constants
        return(
            <>
            <Table 
                head={head}
                body={body}
            />
            </>
        )
    }
}

export default ExpView