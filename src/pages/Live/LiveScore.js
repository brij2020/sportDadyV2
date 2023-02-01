import '../../App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link, redirect } from 'react-router-dom';
import ball1 from '../../assets/icons/ball2.png';
import flag1 from '../../assets/icons/us.png';
import flag2 from '../../assets/icons/nami.png';
import flag3 from '../../assets/icons/flag1.png';
import flag4 from '../../assets/icons/flag2.png';
function LiveScore() {

    const LiveSection = () => {
        return (
            <>
                <div className='d-flex justify-content-around'>
                    <div style={{ width: '48%' }}>
                        <h4 style={{ backgroundColor: "GhostWhite", padding: "15px", fontWeight: "bold", }}>
                            ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
                        </h4>
                        <h3 style={{ fontWeight: "bold", marginLeft: "10px", }}>
                            United States vs Namibia,
                        </h3>
                        <p style={{ color: "grey", marginLeft: "10px", }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
                        <div className='l-card'>
                            <h4 style={{ color: '#fff', paddingTop: 2 }}>United States vs Namibia</h4>
                            <div className='flag-contain' style={{ marginTop: 18 }}>
                                <div>
                                    <img src={flag3} style={{ height: 50, width: 50 }}></img>
                                    <p style={{ color: '#fff', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>173/3 (20)</p>
                                </div>
                                <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                                <div>
                                    <img src={flag2} style={{ height: 50, width: 50 }}></img>
                                    <p style={{ color: 'yellow', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>Innings Break</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '48%' }}>
                        <h4 style={{ backgroundColor: "GhostWhite", padding: "15px", fontWeight: "bold", }}>
                            ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
                        </h4>
                        <h3 style={{ fontWeight: "bold", marginLeft: "10px", }}>
                            United States vs Namibia,
                        </h3>
                        <p style={{ color: "grey", marginLeft: "10px", }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
                        <div className='l-card'>
                            <h4 style={{ color: '#fff', paddingTop: 2 }}>United States vs Namibia</h4>
                            <div className='flag-contain' style={{ marginTop: 18 }}>
                                <div>
                                    <img src={flag3} style={{ height: 50, width: 50 }}></img>
                                    <p style={{ color: '#fff', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>173/3 (20)</p>
                                </div>
                                <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
                                <div>
                                    <img src={flag2} style={{ height: 50, width: 50 }}></img>
                                    <p style={{ color: 'yellow', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>Innings Break</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </>
        );
    }
    return (
        <>
            <Container>
                <h1 style={{ textAlign: "start", color: "black", marginTop: 15 }}>Live Cricket Score
                </h1>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link >INTERNATIONAL
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>DOMESTIC</Nav.Link>
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