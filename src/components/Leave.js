import React from 'react';
import {Table} from 'react-bootstrap';

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

    getData = (name) => {
        fetch('/data/Leave.json')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.state.data = result;
                    this.setState({
                        data: result
                    })

                },
                (error) => {

                }
            )
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
