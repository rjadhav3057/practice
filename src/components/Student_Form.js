import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import { Row, Col} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import { Button, Modal, ButtonToolbar } from 'react-bootstrap';




const SignupSchema = Yup.object().shape({

    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(8, 'Too Long!')
        .required('*Name is required')
        .matches(
            /^[A-Z]/,
            {
                message: 'Name must start with a capital letter',
                excludeEmptyString: true,
            }
        ),

    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(8, 'Too Long!')
        .required('*Name is required')
        .matches(
            /^[A-Z]/,
            {
                message: 'Name must start with a capital letter',
                excludeEmptyString: true,
            }
        ),

    email: Yup.string()
        .email('Invalid email')
        .required('*Email is required'),

    city: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('*Name is required')
        .matches(
            /^[A-Z]/,
            {
                message: 'City must start with a capital letter',
                excludeEmptyString: true,
            }
        ),
});

export default class Student_Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            smShow: false,
            lgShow: false,
            startDate: new Date()
        };

    }



    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    setSmShow = () => {
        this.setState({
            smShow: true
        })

    }

    setSmSClose = () => {
        this.setState({
            smShow: false
        })
    }

    setLgShow = () => {
        this.setState({
            lgShow: true

        })
    }


    setLgClose = () => {
        this.setState({
            lgShow: false

        })
    }



    studentrenderform() {
        let self = this;
        return (
            <div>
                <h1>Signup</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        dob: '',
                        city: '',
                        state: '',
                        gender: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {props => (
                        <Form>

                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={2}>first-name</Col>

                                <Col xs={3}>
                                    <Field type="text" name="firstName" />
                                    {props.errors.firstName && props.touched.firstName ? (
                                        <div style={{ color: "red" }}>{props.errors.firstName}</div>
                                    ) : null}
                                </Col>

                                <Col xs={1}></Col>
                                <Col xs={1}>last-name</Col>

                                <Col xs={3}>
                                    <Field name="lastName" />
                                    {props.errors.lastName && props.touched.lastName ? (
                                        <div>{props.errors.lastName}</div>
                                    ) : null}</Col>
                            </Row>


                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={2}>Email:</Col>
                                <Col xs={3}>
                                    <Field name="email" type="email" />
                                    {props.errors.email && props.touched.email ? <div>{props.errors.email}</div> : null}
                                </Col>

                                <Col xs={1}></Col>
                                <Col xs={1}>D.O.B:</Col>
                                <Col xs={3}>
                                    <DatePicker name="dob"
                                        selected={this.state.startDate}
                                        onChange={function (value) {
                                            props.setFieldValue("dob", moment(value).format('DD-MM-YYYY'));
                                            self.setState({
                                                startDate: value//moment(value).format('DD/MM/YYYY')
                                            })
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={2}>City:</Col>
                                <Col xs={3}>

                                    <Field name="city" />
                                    {props.errors.city && props.touched.city ? <div>{props.errors.city}</div> : null}
                                </Col>

                                <Col xs={1}></Col>
                                <Col xs={1}>state</Col>
                                <Col xs={3}>
                                    <Field as="select" name="state">
                                        <option value="select">Select</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Karnatak">Karnatak</option>
                                        <option value="Gujrat">Gujrat</option>
                                    </Field>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={1}></Col>
                                <Col xs={2}>Gender:</Col>
                                <Col xs={3}>
                                    <label>
                                        <input type="radio" value="Male" name="gender" onChange={props.handleChange} />
                                        Male
                                        </label>

                                    <label>
                                        <input type="radio" value="Female" name="gender" onChange={props.handleChange} />
                                        Female
                                  </label>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={1}></Col>
                                <button type="submit">Submit</button>
                                <Col xs={1}></Col>
                                <Col xs={5}>

                                    <ButtonToolbar>


                                        <Col xs={3}>
                                            <Button onClick={this.setSmShow}>Small modal</Button>
                                        </Col>

                                        <Col xs={3}>
                                            <Button onClick={this.setLgShow}>Large modal</Button>
                                        </Col>

                                        <Modal
                                            size="sm"
                                            show={this.state.smShow}
                                            onHide={this.setSmSClose}
                                            aria-labelledby="example-modal-sizes-title-sm">
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-modal-sizes-title-sm">
                                                    Small Modal
                                             </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>...</Modal.Body>
                                        </Modal>

                                        <Modal
                                            size="lg"
                                            show={this.state.lgShow}
                                            onHide={this.setLgClose}
                                            aria-labelledby="example-modal-sizes-title-lg"
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-modal-sizes-title-lg">


                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>

                                                    <Row>
                                                        <Col xs={1}></Col>
                                                        <Col xs={2}>first-name</Col>

                                                        <Col xs={3}>
                                                            <Field type="text" name="firstName" />
                                                            {props.errors.firstName && props.touched.firstName ? (
                                                                <div style={{ color: "red" }}>{props.errors.firstName}</div>
                                                            ) : null}
                                                        </Col>

                                                        <Col xs={1}></Col>
                                                        <Col xs={1}>last-name</Col>

                                                        <Col xs={3}>
                                                            <Field name="lastName" />
                                                            {props.errors.lastName && props.touched.lastName ? (
                                                                <div>{props.errors.lastName}</div>
                                                            ) : null}</Col>
                                                    </Row>


                                                    <Row>
                                                        <Col xs={1}></Col>
                                                        <Col xs={2}>Email:</Col>
                                                        <Col xs={3}>
                                                            <Field name="email" type="email" />
                                                            {props.errors.email && props.touched.email ? <div>{props.errors.email}</div> : null}
                                                        </Col>

                                                        <Col xs={1}></Col>
                                                        <Col xs={1}>D.O.B:</Col>
                                                        <Col xs={3}>
                                                            <DatePicker name="dob"
                                                                selected={this.state.startDate}
                                                                onChange={function (value) {
                                                                    props.setFieldValue("dob", moment(value).format('DD-MM-YYYY'));
                                                                    self.setState({
                                                                        startDate: value//moment(value).format('DD/MM/YYYY')
                                                                    })
                                                                }}
                                                            />
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col xs={1}></Col>
                                                        <Col xs={2}>City:</Col>
                                                        <Col xs={3}>

                                                            <Field name="city" />
                                                            {props.errors.city && props.touched.city ? <div>{props.errors.city}</div> : null}
                                                        </Col>

                                                        <Col xs={1}></Col>
                                                        <Col xs={1}>state</Col>
                                                        <Col xs={3}>
                                                            <Field as="select" name="state">
                                                                <option value="select">Select</option>
                                                                <option value="Maharashtra">Maharashtra</option>
                                                                <option value="Karnatak">Karnatak</option>
                                                                <option value="Gujrat">Gujrat</option>
                                                            </Field>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col xs={1}></Col>
                                                        <Col xs={2}>Gender:</Col>
                                                        <Col xs={3}>
                                                            <label>
                                                                <input type="radio" value="Male" name="gender" onChange={props.handleChange} />
                                                                Male
            </label>

                                                            <label>
                                                                <input type="radio" value="Female" name="gender" onChange={props.handleChange} />
                                                                Female
      </label>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col xs={1}></Col>
                                                        <button type="submit">Submit</button>
                                                        <Col xs={1}></Col>
                                                        <Col xs={5}></Col>
                                                    </Row>
                                                  </Form>
                                            </Modal.Body>
                                        </Modal>
                                    </ButtonToolbar>
                                    </Col>          
                               
                            </Row>
                        </Form>
                            )}
                </Formik>
            </div>
                )
            }
        
    render() {
        return (
            <div>
                    {this.studentrenderform()}
                </div>
                )
            }
        }
