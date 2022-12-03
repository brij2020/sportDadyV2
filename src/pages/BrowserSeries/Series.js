import '../../App.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import react, { useState } from 'react';
function Series() {

    // const [data, setData] = useState([])


    const Data2 = [
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },

         {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        }, {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },

        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        }, {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        }, 
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },
        {
            matches: 'ICC Cricket World Cup League Two 2019-23',
            player: 'Seddon Park, Hamilton',
            month: 'August 2019',
            date: 'Aug 14 - Dec 08',
        },

    ]

    return (
        <>
            <Container>
                <h1 style={{ textAlign: "start", color: "black" }}>Cricket Schedule All Series
                </h1>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link >INTERNATIONAL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >T20 LEAGUES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >DOMESTIC</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >WOMEN</Nav.Link>
                    </Nav.Item>
                </Nav>
                <hr></hr>

                <div>
                    <h4 style={{ backgroundColor: "GhostWhite", padding: "15px", fontWeight: "bold", }}>Month <span style={{marginLeft: 385}}>Series Name</span>
                    </h4>
                    {Data2.map((item2) => (
                        <div>
                            <Row className='ml-3 list-section' style={{ marginLeft: "8px", padding: 8 }}>
                                <Col xs={4}>
                                    <p className='month'>
                                        {item2.month}
                                    </p >
                                </Col>
                                <Col xs={6}>
                                    <p className='text'>
                                        {item2.matches}
                                    </p >
                                </Col>
                                <Col xs={2}>
                                    <p className='text'>{item2.date}
                                    </p >
                                   
                                </Col>
                            </Row>
                            <br></br>
                        </div>
                    ))}
                </div>

            </Container>

        </>
    );
}
export default Series;
