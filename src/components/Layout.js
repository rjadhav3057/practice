import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import { Row, Col, Container } from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <div>
            <Header />
            </div>
            
            <Row>
                <Router>
                    <Col xs={3} className="column1">
                        <Sidebar />
                    </Col>
                    <Col className="column2">
                        <Content />
                    </Col>
                </Router>
            </Row>
        
            <Footer />
        </div >
    )
}
