import React from 'react';
import Axios from 'axios';


/**
 * @usage :  
 * 
 * @author_name : Rahul Jadhav
 */


export default class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getData();

    }

    renderTableData = () => {
        return (
            <div>
               <b>Employee_Details</b>
                <table>
                    <tbody>
                        <tr>
                            <td>EMP_id</td>
                            <td>EMP_name</td>
                            <td>EMP_salary</td>
                        </tr>
                        {this.state.data.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue.empid}</td>
                                    <td>{listValue.empname}</td>
                                    <td>{listValue.salary}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }


    /**
     * @name : this user pass name
     * @usage : Get data from server and set to state data variable
     * 
     * 
     */
    getData = (emp) => {
        Axios.get('/data/Employee.json').then((res) => {
            console.log(res);
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.renderTableData()}
            </div>

        );
    }
}
