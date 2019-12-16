import React from 'react'

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
                <b>Leave_Details</b>
            <table>
                    <tbody>
                        <tr>
                            <td>leave_id</td>
                            <td>EMP_id</td>
                        </tr>
                        {this.state.data.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue.leaveid}</td>
                                    <td>{listValue.empid}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
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
