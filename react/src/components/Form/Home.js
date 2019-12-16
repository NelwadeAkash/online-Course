import React, { Component } from 'react'

import RouterElement from './Router';
import Navibar from './Navibar';
import { Navbar,Card,Button,Carousel } from 'react-bootstrap';
import Courselist from '../Courselist';


 export class Home extends Component {
     
    render() {
        return (
            <div>
               <div><Navibar></Navibar></div>
               {/* <img  height="450" width="1420" src={require('./Images/carosel-1.png')}  /> */}
                 <br/>
               <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height="450" width="1420"
                        src={require('./Images/carosel-1.png')}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>A Great Place To Learn</h3>
                        <p>A learning community dedicated to building respectful and responsible citizens and empowering all learners.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height="450" width="1420"
                        src={require('./Images/carosel-2.jpg')}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>A Family Of Learning</h3>
                        <p>A community of lifelong learners,responsible global citizens, and champions of our own success.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height="450" width="1420"
                        src={require('./Images/carosel-3.jpg')}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Be safe. Be kind. Be smart.</h3>
                        <p>Committed to educating and nurturing all students so they may grow towards responsible global citizenship.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
         </Carousel>



                 <br/>

                  <table>
                      <tr>
                          
                          <th>
                              <tr>
                            <Card style={{ width: '22rem' }} bg-dark>
                                <Card.Img variant="top" height="100" width="180" src={require('./Images/angular.png')}/>
                                <Card.Body>
                                    <Card.Title variant="dark">Angular</Card.Title>
                                    <Card.Text>
                                     It is a very efficient way of delivering courses online.
                                     Due to its convenience and flexibility, 
                                     the resources are available from anywhere
                                     and at any time
                                    </Card.Text>
                                    <Button variant="dark"  href="" >Buy_now</Button>
                                </Card.Body>
                             </Card>
                             </tr>
                            </th>
                              

                            <th>
                                <tr>
                            <Card style={{ width: '22rem' }}>
                                <Card.Img variant="top" height="100" width="180" src={require('./Images/java.jpg')}/>
                                <Card.Body>
                                    <Card.Title>Java</Card.Title>
                                    <Card.Text>
                                          Work hands on, on a complete project to practice what you have learned.
                                          Course starts from scratch, zero knowledge of Angular 1  or 2 is perfectly fine.
                                    </Card.Text>
                                    <Button variant="dark">Buy_now</Button>
                                </Card.Body>
                            </Card>
                            </tr>
                            </th>

                            <th>
                            <Card style={{ width: '22rem' }}>
                                <Card.Img variant="top" height="100" width="180" src={require('./Images/python.png')}/>
                                <Card.Body>
                                    <Card.Title>Python</Card.Title>
                                    <Card.Text>
                                    The joy of coding Python should be in seeing short, concise, 
                                    readable classes that express a lot of action in a small amount of clear code. 
                                    
                                    </Card.Text>
                                    <Button variant="dark">Buy_now</Button>
                                </Card.Body>
                             </Card>
                            </th>
                            
                            <th>
                            <Card style={{ width: '22rem' }}>
                                <Card.Img variant="top" height="100" width="180" src={require('./Images/javascript.png')}/>
                                <Card.Body>
                                    <Card.Title>Javascript</Card.Title>
                                    <Card.Text>
                                   
                                    It is a very efficient way of delivering courses online.
                                     Due to its convenience and flexibility, 
                                     the resources are available from anywhere
                                     and at any time
                                    </Card.Text>
                                    <Button variant="dark">Buy_now</Button>
                                </Card.Body>
                            </Card>
                            </th>





                            
                      </tr>
                 </table> 
            </div>
        )
    }
}

export default Home
