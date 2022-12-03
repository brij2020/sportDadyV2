import '../../App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link, redirect } from 'react-router-dom';

function LiveScore() {

    const LiveSection = () => {
        return (
            <>
                <div className='live-section'>
                    <div style={{ marginRight: 40, width: '50%'  }}>
                        <h4 style={{ backgroundColor: "GhostWhite", padding: "15px", fontWeight: "bold", }}>
                            ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
                        </h4>
                        <h3 style={{ fontWeight: "bold", marginLeft: "10px", }}>
                            United States vs Namibia,
                        </h3>
                        <p style={{ color: "grey", marginLeft: "10px", }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
                        <Card style={{ width: '26rem', background: "#f5f5f5" }}>
                            <Card.Body>
                                {/* <Card.Title>USA211-7 (50 Ovs)</Card.Title> */}
                                <Card.Subtitle className="mb-2 text-muted">USA211-7 (50 Ovs)</Card.Subtitle>
                                <Card.Text style={{ fontWeight: "bold" }}>
                                    USA211-7 (50 Ovs)
                                </Card.Text>
                                <Card.Link href="#">Morrisville Samp Army won by 8 wkts</Card.Link>

                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ width: '50%'  }}>
                        <h4 style={{ backgroundColor: "GhostWhite", padding: "15px", fontWeight: "bold", }}>
                            ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
                        </h4>
                        <h3 style={{ fontWeight: "bold", marginLeft: "10px", }}>
                            United States vs Namibia,
                        </h3>
                        <p style={{ color: "grey", marginLeft: "10px", }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
                        <Card style={{ width: '26rem', background: "#f5f5f5" }}>
                            <Card.Body>
                                {/* <Card.Title>USA211-7 (50 Ovs)</Card.Title> */}
                                <Card.Subtitle className="mb-2 text-muted">USA211-7 (50 Ovs)</Card.Subtitle>
                                <Card.Text style={{ fontWeight: "bold" }}>
                                    USA211-7 (50 Ovs)
                                </Card.Text>
                                <Card.Link href="#">Morrisville Samp Army won by 8 wkts</Card.Link>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <hr />
            </>
        );
    }
    return (
        <>
            <Container>
                <h1 style={{ textAlign: "start", color: "black" }}>Live Cricket Score
                </h1>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">INTERNATIONAL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">DOMESTIC</Nav.Link>
                    </Nav.Item>
                
                </Nav>
                <hr></hr>

                <LiveSection />
                <LiveSection />
                <LiveSection />
                <LiveSection />

            </Container>
        </>
    );
}

export default LiveScore;