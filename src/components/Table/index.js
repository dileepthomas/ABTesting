import React, {Component} from 'react';
import './style.css';


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
                        peopleLiked,
                        peopleDisliked,
                        result
                    } = bodyData
                    return (
                        <tr>
                            <td>{experimentName}</td>
                            <td>{peopleLiked}</td>
                            <td>{peopleDisliked}</td>
                            <td>{result}</td>
                        </tr>
                    )
                })
            }
            </table>
        )
    }
}

export default Table