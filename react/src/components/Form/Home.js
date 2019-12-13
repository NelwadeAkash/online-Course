import React, { Component } from 'react'

import RouterElement from './Router';
import Navibar from './Navibar';
import { Navbar,Card,Button } from 'react-bootstrap';


 export class Home extends Component {
     
    render() {
        return (
            <div>
               
                   <Navibar></Navibar>
                  
                   <img  height="450" width="1450" src={require('./E-image.jpg')}  />
                   <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" height="100" width="180" src={require('./code.jpg')}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                
                
                          
            </div>
        )
    }
}

export default Home
