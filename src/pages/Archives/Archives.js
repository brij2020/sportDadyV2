import '../../App.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import cricketimg2 from '../../assets/images/cricketimg2.jpeg';
import Dropdown from 'react-bootstrap/Dropdown';

function Archives() {

    // const [data, setData] = useState([])

    const Data = [
        {
            heading: 'Afghanistan tour of Sri Lanka, ',
            date: '2022 Nov 25 - Nov 30'
        },
        {
            heading: 'India tour of New Zealand, ',
            date: '2022 Nov 18 - Nov 30'
        },
        {
            heading: 'ICC Mens T20 World Cup Sub Regional Africa Qualifier A ',
            date: '2022 Nov 17 - Nov 25'
        },
        {
            heading: 'Desert Cup T20I Series ',
            date: '2022 Nov 14 - Nov 21'
        },
        {
            heading: 'United Arab Emirates tour of Nepal, ',
            date: '2022 Nov 14 - Nov 18'
        },
        {
            heading: 'Spain Triangular T20I Series, 2022-23 Nov 04 - Nov 06',
            date: '2022-23 Nov 04 - Nov 06'
        },
        {
            heading: 'Rwanda tour of Tanzania, ',
            date: '2022 Oct 31 - Nov 06'
        },
        {
            heading: 'ICC Mens T20 World Cup ',
            date: '2022 Oct 16 - Nov 13'
        },
        {
            heading: 'ICC Mens T20 World Cup East Asia Pacific Qualifier B ',
            date: '2022 Oct 15 - Oct 18'
        },


    ]

    const Data2 = [
        {
            matches: 'New Zealand vs India, 2nd ODI',
            player: 'Seddon Park, Hamilton',
            date_2: '01:30 AM GMT / 02:30 PM LOCAL',
            date: '7:00 AM',
        },
        {
            matches: 'New Zealand vs India, 2nd ODI',
            player: 'Seddon Park, Hamilton',
            date_2: '01:30 AM GMT / 02:30 PM LOCAL',
            date: '7:00 AM',
        },
        {
            matches: 'New Zealand vs India, 2nd ODI',
            player: 'Seddon Park, Hamilton',
            date_2: '01:30 AM GMT / 02:30 PM LOCAL',
            date: '7:00 AM',
        },

    ]

    return (
        <>
            <Container>
                <h1 style={{ textAlign: "start", color: "black" }}>Cricket Match Archives
                </h1>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href='#internation'>INTERNATIONAL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#leagues'>T20 LEAGUES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#domestic'>DOMESTIC</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#women'>WOMEN</Nav.Link>
                    </Nav.Item>
                </Nav>
                <hr></hr>

                <div
                    id="internation">
                    <Row className="mt-5" style={{}}>
                        <Col xs={9}>
                            <h4 style={{ backgroundColor: "GhostWhite", padding: "16px", fontWeight: "bold", }}>
                                INTERNATIONAL  </h4>

                        </Col>
                        <Col xs={3}>
                            <Dropdown >
                                <Dropdown.Toggle variant="GhostWhite" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{
                                    width: 200,
                                }}>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2021 - 2022</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2011 - 2020</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2001 - 2010</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1991 - 2000</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1981 - 1990</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1971 - 1980</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1961 - 1970</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1951 - 1960</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1941 - 1950</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1931 - 1940</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1921 - 1930</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1911 - 1920</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1901 - 1910</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1891 - 1900</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1881 - 1890</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <div style={{ padding: 15 }}>
                            <h2 className="time-period">2001-2005</h2>
                            {Data.map((item) => (
                                <Row className="mt-5 list-section">
                                    <Col xs={9}>
                                        <p className='plain-list'>
                                            {item.heading}
                                        </p>
                                    </Col>
                                    <Col xs={3}>
                                        <p className='date'>
                                            {item.date}
                                        </p>
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </Row>
                </div>

                <div id="leagues">
                    <Row className="mt-5" style={{}}>
                        <Col xs={9}>
                            <h4 style={{ backgroundColor: "GhostWhite", padding: "16px", fontWeight: "bold", }}>
                                T20 LEAGUES </h4>

                        </Col>
                        <Col xs={3}>
                            <Dropdown >
                                <Dropdown.Toggle variant="GhostWhite" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{
                                    width: 200,
                                }}>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2021 - 2022</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2011 - 2020</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2001 - 2010</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1991 - 2000</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1981 - 1990</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1971 - 1980</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1961 - 1970</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1951 - 1960</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1941 - 1950</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1931 - 1940</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1921 - 1930</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1911 - 1920</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1901 - 1910</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1891 - 1900</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1881 - 1890</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <div style={{ padding: 15 }}>
                            <h2 className="time-period">2001-2005</h2>
                            {Data.map((item) => (
                                <Row className="mt-5 list-section">
                                    <Col xs={9}>
                                        <p className='plain-list'>
                                            {item.heading}
                                        </p>
                                    </Col>
                                    <Col xs={3}>
                                        <p className='date'>
                                            {item.date}
                                        </p>
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </Row>
                </div>

                <div id="domestic">
                    <Row className="mt-5" style={{}} id="domestic">
                        <Col xs={9}>
                            <h4 style={{ backgroundColor: "GhostWhite", padding: "16px", fontWeight: "bold", }}>
                                DOMESTIC  </h4>

                        </Col>
                        <Col xs={3}>
                            <Dropdown >
                                <Dropdown.Toggle variant="GhostWhite" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{
                                    width: 200,
                                }}>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2021 - 2022</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2011 - 2020</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2001 - 2010</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1991 - 2000</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1981 - 1990</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1971 - 1980</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1961 - 1970</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1951 - 1960</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1941 - 1950</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1931 - 1940</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1921 - 1930</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1911 - 1920</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1901 - 1910</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1891 - 1900</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1881 - 1890</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <div style={{ padding: 15 }}>
                            <h2 className="time-period">2001-2005</h2>
                            {Data.map((item) => (
                                <Row className="mt-5 list-section">
                                    <Col xs={9}>
                                        <p className='plain-list'>
                                            {item.heading}
                                        </p>
                                    </Col>
                                    <Col xs={3}>
                                        <p className='date'>
                                            {item.date}
                                        </p>
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </Row>
                </div>

                <div id="women">
                    <Row className="mt-5" style={{}}>
                        <Col xs={9}>
                            <h4 style={{ backgroundColor: "GhostWhite", padding: "16px", fontWeight: "bold", }}>
                                WOMEN  </h4>

                        </Col>
                        <Col xs={3}>
                            <Dropdown >
                                <Dropdown.Toggle variant="GhostWhite" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{
                                    width: 200,
                                }}>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2021 - 2022</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2011 - 2020</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">2001 - 2010</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1991 - 2000</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1981 - 1990</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1971 - 1980</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1961 - 1970</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1951 - 1960</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1941 - 1950</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1931 - 1940</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1921 - 1930</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1911 - 1920</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1901 - 1910</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1891 - 1900</Dropdown.Item>
                                    <Dropdown.Item className='dropdown-text' href="#/action-1">1881 - 1890</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <div style={{ padding: 15 }}>
                            <h2 className="time-period">2001-2005</h2>
                            {Data.map((item) => (
                                <Row className="mt-5 list-section">
                                    <Col xs={9}>
                                        <p className='plain-list'>
                                            {item.heading}
                                        </p>
                                    </Col>
                                    <Col xs={3}>
                                        <p className='date'>
                                            {item.date}
                                        </p>
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </Row>
                </div>

            </Container>

        </>
    );
}
export default Archives;
