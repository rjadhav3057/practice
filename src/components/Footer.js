import React from 'react'
import { Card } from 'react-bootstrap';


export default function Footer() {
    return (
        <div>
            <Card className="bg-dark text-white " style={{width:"1350px"}}>
            <Card.Img src="images/plain-Backgrounds1.jpg" height="100px" alt="Card image"/>
            <Card.ImgOverlay>
                <p className="foot">&copy;Copyrights by Liviano Rooms</p>
            </Card.ImgOverlay>
        </Card>
        </div>
    )
}
