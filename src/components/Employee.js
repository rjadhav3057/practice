import React from 'react';
import Axios from 'axios';
import { Table, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    emp_name: Yup.string()
        .matches(
            /^[A-Z]/,
            {
                message: 'Name must start with a capital letter',
                excludeEmptyString: true,
            })
        .min(4, '*Too Short!')
        .max(8, '*Too Long!')
        .required('*Name is required')
});

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
        // this.getData
    }

    /**
  * @name : this user pass name
  * @usage : Get data from server and set to state data variable
  *
  *
  */
    getData = (emp) => {
        Axios.get('http://localhost:9000/employee/get').then((res) => {
            this.setState({
                data: res.data.data
            })
        })
    }


    searchData = (values) => {
        Axios.get('http://localhost:9000/employee/' + values.emp_id + '').then((res) => {
            if (res.data.data.length === 0) {
                alert("data not found");
            }
            this.setState({
                data: res.data.data
            })
        })
    }

    deletData = (values) => {
        Axios.post('http://localhost:9000/employee/delete/byid', { emp_id: values }).then((res) => {
            console.log(res);
            if (res.data.isSucess == true) {
                alert("data delete successfully.");
                window.location.reload();
            }
            else {
                alert("data not Found");
            }
        });
    }

    savedata = (values) => {
        Axios.post('http://localhost:9000/employee/save', values).then((res) => {
            if (res.data.isSucess == true) {
                alert("data save successfully.");
                window.location.reload();
            }
            else {
                alert("all field is mandatory or employee id already present");
            }
        });
    }

    editData = (values) => {
        Axios.post('http://localhost:9000/employee/update', values).then((res) => {
            if (res.data.affectedRows === 1) {
                alert("data edit successfully.");
                window.location.reload();
            }
        });
    }

    renderTableData = () => {
        return (
            <div>
                <div className="tours">
                    <h1>Employee Details</h1>
                </div>
                <div>
                    <Formik
                        initialValues={{
                            emp_id: '',
                            emp_name: '',
                            emp_salary: ''

                        }}
                        validationSchema={SignupSchema}
                    >
                        {props => (
                            <Form>
                                <Row>
                                    <Col xs={1}>Id:</Col>

                                    <Col xs={2}>
                                        <Field type="text" name="emp_id" />
                                    </Col>
                                    <Col xs={1}>Name:</Col>
                                    <Col xs={2}>
                                        <Field type="text" name="emp_name" />
                                        {props.errors.emp_name && props.touched.emp_name ? (
                                            <div style={{ color: "red" }}>{props.errors.emp_name}</div>
                                        ) : null}
                                    </Col>
                                    <Col xs={1}>Salary:</Col>
                                    <Col xs={2}>
                                        <Field type="text" name="emp_salary" />
                                    </Col>
                                </Row>
                                <div className="rowSapace">
                                    <Row>
                                        <Col xs={1}>
                                            <input type="button" onClick={() => this.getData()} value="GetAll" />
                                        </Col>
                                        <Col xs={1}>
                                            <input type="button" onClick={() => this.searchData(props.values)} value="Search" />
                                        </Col>
                                        <Col xs={1}>
                                            <input type="button" value="Save" onClick={() => this.savedata(props.values)} />
                                        </Col>
                                        <Col xs={1}>
                                            <input type="button" value="Delete" onClick={() => this.deletData(props.values.emp_id)} />
                                        </Col>

                                        <Col xs={1}>
                                            <input type="button" onClick={() => this.editData(props.values)} value="Edit" />
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>EMP_ID</th>
                            <th>EMP_NAME</th>
                            <th>EMP_SALARY</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue.emp_id}</td>
                                    <td>{listValue.emp_name}</td>
                                    <td>{listValue.emp_salary}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div >
        );
    }




    render() {
        return (
            <div>
                {this.renderTableData()}
            </div >

        );
    }
}
