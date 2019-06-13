import React, {Component} from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';



class Table extends Component{
    render(){
        const {
            head,
            body
        } = this.props
        return(
            <table className="details-table">
            <tr>
            {
                head.map(heading => {
                    return(
                        <th>{heading}</th>
                    )
                })
            }
            </tr>
            {
                body.map(bodyData => {
                    const {
                        experimentName,
                    } = bodyData
                    return (
                        <tr>
                            <td><NavLink to="/analytics">{experimentName}</NavLink></td>
                        </tr>
                    )
                })
            }
            </table>
        )
    }
}

export default Table