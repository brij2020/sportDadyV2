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
            <Container style={{ marginBottom: 20 }}>
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

                <div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, padding: 10 }}
                    id="internation">
                    <Row className="" style={{}}>
                        <Col xs={12}>
                            <h4 style={{ backgroundColor: "GhostWhite", padding: "18px", fontWeight: "bold", borderRadius: 30, margin: 5 }}>
                                INTERNATIONAL  </h4>
                        </Col>

                        <div style={{ padding: 15 }}>
                            <div className='d-flex justify-content-between'>
                                <h2 className="time-period">2001-2005</h2>
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
                            </div>
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

                <div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, padding: 10 }}
                    id="leagues">
                    <Row className="" style={{}}>
                        <Col xs={12}>
                            <h4 style={{ backgroundColor: "GhostWhite", padding: "18px", fontWeight: "bold", borderRadius: 30, margin: 5 }}>
                                Cricket Leagues  </h4>
                        </Col>

                        <div style={{ padding: 15 }}>
                            <div className='d-flex justify-content-between'>
                                <h2 className="time-period">2001-2005</h2>
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
                            </div>
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

                <div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, padding: 10 }}
                    id="domestic">
                    <Row className="" style={{}}>
                        <Col xs={12}>
                            <h4 style={{ backgroundColor: "GhostWhite", padding: "18px", fontWeight: "bold", borderRadius: 30, margin: 5 }}>
                                Domestic  </h4>
                        </Col>

                        <div style={{ padding: 15 }}>
                            <div className='d-flex justify-content-between'>
                                <h2 className="time-period">2001-2005</h2>
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
                            </div>
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

                <div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, padding: 10 }}
                    id="women">
                    <Row className="" style={{}}>
                        <Col xs={12}>
                            <h4 style={{ backgroundColor: "GhostWhite", padding: "18px", fontWeight: "bold", borderRadius: 30, margin: 5 }}>
                                Women  </h4>
                        </Col>

                        <div style={{ padding: 15 }}>
                            <div className='d-flex justify-content-between'>
                                <h2 className="time-period">2001-2005</h2>
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
                            </div>
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
