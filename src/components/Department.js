import React from 'react'

export default class Department extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getData();
    }

    getData = (name) => {
        fetch('/data/Department.json')
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
              <b>Department_Details</b>
            <table>
                    <tbody>
                        <tr>
                            <td>dept_id</td>
                            <td>dept_name</td>
                            <td>EMP_id</td>
                        </tr>
                        {this.state.data.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue.deptid}</td>
                                    <td>{listValue.deptname}</td>
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
