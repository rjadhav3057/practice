import React from 'react'
import { Navbar,Image} from 'react-bootstrap';

export default function Header(props) {
    return (
        <div>
                <Navbar  className="nav" sticky="top">
                <Image src="images/LivianoUniverseLogo.jpg" rounded width="100px" height="100px"/>
                    <h1>Liviano Budget Rooms Pvt Ltd</h1>
                </Navbar>
        </div>

    )
}


