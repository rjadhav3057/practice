import React from 'react';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

export default class Leave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = (emp) => {
        Axios.get('http://localhost:9000/leave/get').then((res) => {
            console.log(res.data);
            this.setState({
                data: res.data
            })
        })
    }
    renderTableData = () => {
        return (
            <div>
                <div className="tours">
                    <h1>Leave Details</h1>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>LEAVE_ID</th>
                            <th>LEAVE_DATE</th>
                            <th>EMP_ID</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue.leave_id}</td>
                                    <td>{listValue.leave_date}</td>
                                    <td>{listValue.emp_id}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderTableData()}
            </div>

        );
    }
}
