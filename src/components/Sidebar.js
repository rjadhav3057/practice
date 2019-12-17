import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Sidebar(props) {
    return (
        <div>
            <NavLink to={'/employee'}  className="nav-link">
                Employee
                </NavLink>
            <hr></hr>
            <NavLink to={'/department'}  className="nav-link">
                Department
                </NavLink>
            <hr></hr>
            <NavLink to={'/leave'}  className="nav-link">
                Leave
                </NavLink>
            <hr></hr>
            <NavLink to={'/student'}  className="nav-link">
                Student
                </NavLink>
            <hr></hr>
            </div>
    )
}
