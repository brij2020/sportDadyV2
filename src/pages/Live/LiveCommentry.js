import '../../App.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import react, { useState } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import { Link } from 'react-router-dom';
import cricketimg1 from '../../assets/images/cricketimg1.jpg';
import cricketimg2 from '../../assets/images/cricketimg2.jpeg';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.jpg';
import img7 from '../../assets/images/img7.jpg';
import img9 from '../../assets/images/img9.jpg';
import newzteam from '../../assets/images/teams/newzteam.jpeg';

function LiveCommentry() {

    const { speak } = useSpeechSynthesis();

    const [commentry, setCommentry] = useState(true)
    const [scorecard, setScorecard] = useState(false)
    const [squads, setSquads] = useState(false)
    const [highlights, setHighlights] = useState(false)
    const [matchFacts, setMatchFacts] = useState(false)
    const [photos, setPhotos] = useState(false)
    const [news, setNews] = useState(false)
    const [mute, setMute] = useState(true)


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

    const CommentaryData = [
        {
            num: '19.6',
            commentry: 'Payne to Finch, FOUR, Finch ends on a high, slower ball wide outside off, Finch reaches out and smashes it over extra-cover, runs away to the fence. The Scorchers win by 10 runs',
        },
        {
            num: '19.5',
            commentry: 'Payne to Finch, SIX, back of a length outside off, Finch arcs back and slashes it away, uses the pace and it flies all the way over third man, a little too late',
        },
        {
            num: '19.4',
            commentry: 'Payne to Prestwidge, leg byes, 1 run, short on the stumps, Prestwidge pulls and misses, is hit on the helmet, flush and it carries to short third man, no concussion test as Prestwidge is at the other end, that was a meaty blow to the helmet too',
        },
        {
            num: '19.3',
            commentry: 'Payne to Prestwidge, no run, back of a length and pacey outside off, Prestwidge pulls and misses',
        },
        {
            num: '19.2',
            commentry: 'Payne to Prestwidge, SIX, slower ball on a length just outside off, Prestwidge smashes it off the back foot, gets a lot of bat and clears wide long-on',
        },
        {
            num: '19.1',
            commentry: 'Payne to Finch, 1 run, full and angling away from Finch who mistimes the loft to long-on',
        },

        {
            num: '18.6',
            commentry: 'Hardie to Prestwidge, no run, slower ball outside off, Prestwidge slogs straight to the fielder at mid-wicket, good over from Hardie',
        },
        {
            num: '18.5',
            commentry: 'Hardie to Prestwidge, FOUR, Prestwidge gets lucky, swings at the slower ball on a length, the thick inside-edge runs wide of the stumps and to the fine-leg fence',
        },
        {
            num: '18.4',
            commentry: 'Hardie to Sutherland, out Caught by Eskinazi!! Straight up and caught at deep mid-wicket, another slower ball on a length on the stumps, Sutherland heaves and a good catch as it went a long way up. Sutherland c Eskinazi b Hardie 30(18) [4s-2 6s-1] Hardie to Sutherland, THATS OUT!! Caught!!',
        },
        {
            num: '18.3',
            commentry: 'Hardie to Finch, leg byes, 1 run, slower ball and angling into Finch who swings early and is hit on the body, they sneak a quick legbye',
        },
        {
            num: '18.2',
            commentry: "Hardie to Finch, 2 runs, dropped by long-on running to his right, Behrendorff the man. An almighty slog to leg, and more height than distance, the pacer runs and gets his hands to his right, but can't hang on",
        },
        {
            num: '18.1',
            commentry: "Hardie to Sutherland, 1 run, dropped by Tye from long-on. And there's blood on Tye now. Length delivery on the stumps, Sutherland makes room and lofts, Tye comes in and it bursts through his reverse-cupped hands, hits him on the nose I think, blood oozes out and off he goes",
        },

        {
            num: '17.6',
            commentry: 'Hardie to Finch, leg byes, 1 run, slower ball and angling into Finch who swings early and is hit on the body, they sneak a quick legbye',
        },
        {
            num: '17.5',
            commentry: 'Hardie to Prestwidge, FOUR, Prestwidge gets lucky, swings at the slower ball on a length, the thick inside-edge runs wide of the stumps and to the fine-leg fence',
        },
        {
            num: '17.4',
            commentry: 'Hardie to Sutherland, out Caught by Eskinazi!! Straight up and caught at deep mid-wicket, another slower ball on a length on the stumps, Sutherland heaves and a good catch as it went a long way up. Sutherland c Eskinazi b Hardie 30(18) [4s-2 6s-1]',
        },
        {
            num: '17.3',
            commentry: "Hardie to Finch, 2 runs, dropped by long-on running to his right, Behrendorff the man. An almighty slog to leg, and more height than distance, the pacer runs and gets his hands to his right, but can't hang on",
        },
        {
            num: '17.2',
            commentry: 'Hardie to Prestwidge, no run, slower ball outside off, Prestwidge slogs straight to the fielder at mid-wicket, good over from Hardie',
        },
        {
            num: '17.1',
            commentry: 'Tye to Finch, SIX, massive. Monster from Finch. Picks the full delivery on the stumps, strikes it cleanly and sends it into the second tier almost at deep mid-wicket - 31 off the over, the most expensive over of the season',
        },
    ]
    return (
        <>
            <div style={{ width: '90%', margin: 'auto' }}>
                <h1 style={{ textAlign: "start", color: "black", marginTop: 15, }}>
                    Perth Scorchers vs Melbourne Renegades, 52nd Match - Live Cricket Score, Commentary
                </h1>
                <div className='d-flex justify-content-around'>
                    <p className='text l-text-info'><strong>Series: </strong>Big Bash League 2022-23</p>
                    <p className='text l-text-info'><strong>Venue: </strong>Perth Stadium, Perth</p>
                    <p className='text l-text-info'><strong>Date & Time: </strong>Jan 22, 04:15 PM LOCAL</p>
                </div>
                <Nav justify variant="tabs" defaultActiveKey="/home" className='mt-2'>
                    <Nav.Item id="tablinks" onmouseover="openCity(event, 'London')">
                        <Nav.Link onClick={() => {
                            setCommentry(true);
                            setScorecard(false);
                            setSquads(false);
                            setHighlights(false);
                            setPhotos(false);
                            setMatchFacts(false);
                            setNews(false);
                        }}>Commentary</Nav.Link>
                    </Nav.Item>
                    <Nav.Item id="tablinks" onmouseover="openCity(event, 'Paris')">
                        <Nav.Link onClick={() => {
                            setCommentry(false);
                            setScorecard(true);
                            setSquads(false);
                            setHighlights(false);
                            setPhotos(false);
                            setMatchFacts(false);
                            setNews(false);
                        }}>Scorecard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {
                            setCommentry(false);
                            setScorecard(false);
                            setSquads(true);
                            setHighlights(false);
                            setPhotos(false);
                            setMatchFacts(false);
                            setNews(false);
                        }}>Squads</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {
                            setCommentry(false);
                            setScorecard(false);
                            setSquads(false);
                            setHighlights(true);
                            setPhotos(false);
                            setMatchFacts(false);
                            setNews(false);
                        }}>Highlights</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {
                            setCommentry(false);
                            setScorecard(false);
                            setSquads(false);
                            setHighlights(false);
                            setPhotos(false);
                            setMatchFacts(true);
                            setNews(false);
                        }}>Match Facts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {
                            setCommentry(false);
                            setScorecard(false);
                            setSquads(false);
                            setHighlights(false);
                            setPhotos(true);
                            setMatchFacts(false);
                            setNews(false);
                        }}>Photos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => {
                            setCommentry(false);
                            setScorecard(false);
                            setSquads(false);
                            setHighlights(false);
                            setPhotos(false);
                            setMatchFacts(false);
                            setNews(true);
                        }}>News</Nav.Link>
                    </Nav.Item>

                </Nav>
                <hr></hr>

                {commentry == true ?
                    < div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, padding: 10, marginBottom: 25 }}>
                        <div className='d-flex'>
                            <div style={{ padding: 17 }} className="web-score">
                                <h2 className='black-head'>PRS 212/5 (20)</h2>
                                <h2 className='gray-head'>MLR 202/5 (20)</h2>
                                <p className='blue-text'>Perth Scorchers won by 10 runs</p>
                                <div style={{ marginTop: 20 }}>
                                    <h5 className='black-head'>PLAYER OF THE MATCH</h5>
                                    <p className='text'>Cameron Bancroft</p>
                                </div>
                            </div>

                            <div className='screen'>
                                <div className='d-flex justify-content-between' style={{ padding: 10 }}>
                                    <div>
                                        {mute == true ?
                                            <i
                                                onClick={() => {
                                                    speak({
                                                        lang: "hi",
                                                        text: 'Payne to Prestwidge, SIX, slower ball on a length just outside off, Prestwidge smashes it off the back foot, gets a lot of bat and clears wide long-on... Payne to Finch, FOUR, Finch ends on a high, slower ball wide outside off, Finch reaches out and smashes it over extra-cover, runs away to the fence. The Scorchers win by 10 runs'
                                                    }); setMute(false)
                                                }}
                                                class="fa fa-volume-up text-white" aria-hidden="true" style={{ fontSize: 30 }}></i>
                                            :
                                            <i
                                                onClick={() => {
                                                    speak({
                                                        lang: "hi",
                                                        text: ''
                                                    }); setMute(true)
                                                }}
                                                class="fa fa-volume-off text-white" aria-hidden="true" style={{ fontSize: 30 }}></i>
                                        }
                                    </div>
                                    <div>
                                        <p className='live-text'>Live</p>
                                        <p className="live-animate"></p>
                                    </div>

                                </div>
                                <p className='screen-text'>4 Run</p>
                            </div>
                        </div>
                        <div style={{ padding: 17 }} className="mobile-score">
                            <h2 className='black-head'>PRS 212/5 (20)</h2>
                            <h2 className='gray-head'>MLR 202/5 (20)</h2>
                            <p className='blue-text'>Perth Scorchers won by 10 runs</p>
                            <div style={{ marginTop: 20 }}>
                                <h5 className='black-head'>PLAYER OF THE MATCH</h5>
                                <p className='text'>Cameron Bancroft</p>
                            </div>
                        </div>
                        <hr className='hr-line' />
                        {CommentaryData.map((item) => (
                            <div>
                                <Row className='list-section'>
                                    <Col xs={1}>
                                        <p className='color-circle'>
                                            {item.num}
                                        </p >
                                    </Col>
                                    <Col xs={11}>
                                        <p className='text l-text'>
                                            {item.commentry}
                                        </p >
                                    </Col>
                                </Row>
                                <hr className='hr-line' />
                            </div>
                        ))}
                    </div>
                    :
                    scorecard == true ?
                        <div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, marginBottom: 25, paddingBottom: 20 }}>
                            <div style={{}}>
                                <Row style={{
                                    backgroundColor: "GhostWhite", paddingTop: 16, height: 50, borderTopLeftRadius: 40,
                                    borderTopRightRadius: 40, width: '100%', margin: 'auto', padding: 10, paddingLeft: 20
                                }}>
                                    <Col xs={3}>
                                        <p style={{ color: "#000" }}>Batter</p>
                                    </Col>
                                    <Col xs={4}>
                                        <p style={{ color: "#000" }}></p>
                                    </Col>
                                    <Col xs={1}>
                                        <p style={{ color: "#000" }}>R
                                        </p>
                                    </Col>
                                    <Col xs={1}>
                                        <p style={{ color: "#000" }}>B
                                        </p>
                                    </Col>
                                    <Col xs={1}>
                                        <p style={{ color: "#000" }}>4s
                                        </p>
                                    </Col>
                                    <Col xs={1}>
                                        <p style={{ color: "#000" }}>6s
                                        </p>
                                    </Col>
                                    <Col xs={1}>
                                        <p style={{ color: "#000" }}>SR
                                        </p>
                                    </Col>
                                </Row>

                                {Data2.map((item) => (
                                    <div>
                                        <Row className='' style={{ height: 50, marginTop: -5, paddingLeft: 20, paddingRight: 20 }}>
                                            <Col xs={3}>
                                                <p style={{ color: "grey" }}>Stevie Eskinazi</p>
                                            </Col>
                                            <Col xs={4}>
                                                <h2 style={{ color: "grey" }}>c Jack Prestwidge b Rocchiccioli</h2>
                                            </Col>
                                            <Col xs={1}>
                                                <h2 style={{ color: "grey" }}>54</h2>
                                            </Col>
                                            <Col xs={1}>
                                                <h2 style={{ color: "grey" }}>36</h2>
                                            </Col>
                                            <Col xs={1}>
                                                <h2 style={{ color: "grey" }}>6</h2>
                                            </Col>
                                            <Col xs={1}>
                                                <h2 style={{ color: "grey" }}>3</h2>
                                            </Col>
                                            <Col xs={1}>
                                                <h2 style={{ color: "grey" }}>180.35</h2>
                                            </Col>
                                        </Row>
                                        <hr style={{ backgroundColor: 'black' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        :
                        squads == true ?
                            < div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, marginBottom: 25 }}>
                                <div style={{}}>
                                    <Row style={{
                                        backgroundColor: "GhostWhite", paddingTop: 16, height: 50, borderTopLeftRadius: 40,
                                        borderTopRightRadius: 40, width: '100%', margin: 'auto', padding: 10, paddingLeft: 30
                                    }}>
                                        <Col xs={6}>
                                            <p style={{ color: "#000" }}>PRS</p>
                                        </Col>
                                        <Col xs={6}>
                                            <p style={{ color: "#000" }}>MLR</p>
                                        </Col>
                                    </Row>

                                    {Data2.map((item) => (
                                        <div>
                                            <Row className='' style={{ height: 85, paddingLeft: 30, paddingRight: 20, marginTop: -20 }}>
                                                <Col xs={6}>
                                                    <h2 style={{ color: "grey" }}>Stephen Eskinazi</h2>
                                                    <p style={{ color: "grey" }}>WK-RHB</p>
                                                </Col>
                                                <Col xs={6}>
                                                    <h2 style={{ color: "grey" }}>Shaun Marsh</h2>
                                                    <p style={{ color: "grey" }}>RHB</p>
                                                </Col>
                                            </Row>
                                            <hr style={{ backgroundColor: 'black' }} />
                                        </div>
                                    ))}
                                </div>

                            </div>
                            :
                            highlights == true ?
                                < div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, padding: 10, marginBottom: 25 }}>
                                    {CommentaryData.map((item) => (
                                        <div>
                                            <Row className='list-section'>
                                                <Col xs={1}>
                                                    <p className='color-circle' style={{ backgroundColor: 'purple' }}>
                                                        {item.num}
                                                    </p >
                                                </Col>
                                                <Col xs={11}>
                                                    <p className='text l-text'>
                                                        {item.commentry}
                                                    </p >
                                                </Col>
                                            </Row>
                                            <hr className='hr-line' />
                                        </div>
                                    ))}
                                </div>
                                :
                                matchFacts == true ?
                                    < div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, padding: 10, marginBottom: 25 }}>
                                        <h4 style={{ backgroundColor: "GhostWhite", padding: 18, paddingLeft: 30, fontWeight: "bold", borderRadius: 30, margin: 5 }}>Match Info
                                        </h4>
                                        <div style={{ padding: 15, paddingLeft: 30 }}>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Match:</p>
                                                <p className='gray-text'>IND vs NZ, 3rd ODI, New Zealand tour of India, 2023</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Date:</p>
                                                <p className='gray-text'>Tuesday, January 24, 2023</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Toss:</p>
                                                <p className='gray-text'>New Zealand won the toss and opt to bowl</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Time:</p>
                                                <p className='gray-text'>1:30 PM</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Venue:</p>
                                                <p className='gray-text'>Holkar Cricket Stadium, Indore</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Umpires:</p>
                                                <p className='gray-text'>Nitin Menon, Jayaraman Madanagopal</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Third Umpire:</p>
                                                <p className='gray-text'>Anil Kumar Chaudhary</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Match Referee:</p>
                                                <p className='gray-text'>Javagal Srinath</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>India Squad:</p>
                                                <p className='gray-text'></p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Playing:</p>
                                                <p className='gray-text'>Rohit Sharma (c), Shubman Gill, Virat Kohli, Ishan Kishan (wk), Suryakumar Yadav, Hardik Pandya, Washington Sundar, Shardul Thakur, Kuldeep Yadav, Yuzvendra Chahal, Umran Malik</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Bench:</p>
                                                <p className='gray-text'>Srikar Bharat, Rajat Patidar, Shahbaz Ahmed, Mohammed Shami, Mohammed Siraj</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>New Zealand Squad:</p>
                                                <p className='gray-text'></p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Playing:</p>
                                                <p className='gray-text'>Finn Allen, Devon Conway, Henry Nicholls, Daryl Mitchell, Tom Latham (c & wk), Glenn Phillips, Michael Bracewell, Mitchell Santner, Jacob Duffy, Lockie Ferguson, Blair Tickner</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Bench:</p>
                                                <p className='gray-text'>Mark Chapman, Ish Sodhi, Doug Bracewell, Henry Shipley</p>
                                            </div>
                                        </div>

                                        <h4 style={{ backgroundColor: "GhostWhite", padding: 18, paddingLeft: 30, fontWeight: "bold", borderRadius: 30, margin: 5 }}>
                                            Venue Guide
                                        </h4>
                                        <div style={{ padding: 15, paddingLeft: 30 }}>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Stadium:</p>
                                                <p className='gray-text'>Holkar Cricket Stadium</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>City:</p>
                                                <p className='gray-text'>Indore</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Hosts to:</p>
                                                <p className='gray-text'>Madhya Pradesh</p>
                                            </div>

                                        </div>

                                        <h4 style={{ backgroundColor: "GhostWhite", padding: 18, paddingLeft: 30, fontWeight: "bold", borderRadius: 30, margin: 5 }}>
                                            Broadcast Guide
                                        </h4>
                                        <div style={{ padding: 15, paddingLeft: 30 }}>

                                            <div className='d-flex'>
                                                <p className='bold-text'>Streaming</p>
                                                <p className='gray-text'>Disney+ Hotstar</p>
                                            </div>

                                            <div className='d-flex'>
                                                <p className='bold-text'>TV</p>
                                                <p className='gray-text'>Star Sports Network,DD Sports</p>
                                            </div>

                                        </div>

                                    </div>
                                    :
                                    photos == true ?
                                        <div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, padding: 10, marginBottom: 25 }}>
                                            <h2 className='heading mt-2'>Highlighted Photos</h2>
                                            <div class="containerv">
                                                <div class="main-box">
                                                    <div class="box one">
                                                        <img src={cricketimg1}
                                                            height={"100%"}
                                                            width={"100%"}>
                                                        </img>
                                                    </div>
                                                    <div class="box two">
                                                        <img src={cricketimg2}
                                                            height={"100%"}
                                                            width={"100%"}>
                                                        </img>
                                                    </div>
                                                    <div class="box three">
                                                        <img src={img3}
                                                            height={"100%"}
                                                            width={"100%"}>
                                                        </img>
                                                    </div>
                                                    <div class="box four">
                                                        <img src={img4}
                                                            height={"100%"}
                                                            width={"100%"}>
                                                        </img>
                                                    </div>
                                                    <div class="box five">
                                                        <img src={img7}
                                                            height={"100%"}
                                                            width={"100%"}>
                                                        </img>
                                                    </div>
                                                    <div class="box six">
                                                        <img src={img9}
                                                            height={"100%"}
                                                            width={"100%"}>
                                                        </img>
                                                    </div>
                                                    <div class="box six">
                                                        <img src={newzteam}
                                                            height={"100%"}
                                                            width={"100%"}>
                                                        </img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        news == true ?
                                            <div style={{ boxShadow: '1px 2px 9px #c93a3e', marginTop: 25, borderRadius: 40, paddingLeft: 30, paddingRight: 30, padding: 20, marginBottom: 25 }}>
                                                <h2 className='heading'>Cricket News and Editorials</h2>
                                                <div className='new-part'>
                                                    <Row>
                                                        <Col xs={4}><img className='news-img' src={cricketimg1} width="80%" height="auto"></img>
                                                        </Col>
                                                        <Col xs={8}>
                                                            <Link><h3 className='news-heading'>Rain threat looms large as India eye series-levelling win</h3>
                                                            </Link>
                                                            <p style={{ textAlign: "start", color: "grey", }}>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                                                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                                                                of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                                                classical Latin literature from 45 BC,
                                                                <br />
                                                            </p>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <p className='p-gray'>Nov 26 2022</p>
                                                                <p className='see-more'><Link>View More</Link></p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <hr className='hr-line' />
                                                <div className='new-part'>
                                                    <Row>
                                                        <Col xs={4}><img className='news-img' src={cricketimg2} width="80%" height="auto"></img>
                                                        </Col>
                                                        <Col xs={8}>
                                                            <Link><h3 className='news-heading'>Rain threat looms large as India eye series-levelling win</h3>
                                                            </Link>
                                                            <p style={{ textAlign: "start", color: "grey", }}>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                                                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                                                                of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                                                classical Latin literature from 45 BC,
                                                                <br />
                                                            </p>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <p className='p-gray'>Nov 26 2022</p>
                                                                <p className='see-more'><Link>View More</Link></p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <hr className='hr-line' />
                                                <div className='new-part'>
                                                    <Row>
                                                        <Col xs={4}><img className='news-img' src={cricketimg1} width="80%" height="auto"></img>
                                                        </Col>
                                                        <Col xs={8}>
                                                            <Link><h3 className='news-heading'>Rain threat looms large as India eye series-levelling win</h3>
                                                            </Link>
                                                            <p style={{ textAlign: "start", color: "grey", }}>
                                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                                                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                                                                of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                                                classical Latin literature from 45 BC,
                                                                <br />
                                                            </p>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <p className='p-gray'>Nov 26 2022</p>
                                                                <p className='see-more'><Link>View More</Link></p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                            :

                                            null
                }


            </div>

        </>
    );
}
export default LiveCommentry;
// https://dev.to/shubhamtiwari909/text-to-speech-in-reactjs-52ml

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';

// export default function LiveCommentry() {
//     return (
//         <div style={{ display: 'block', width: 700, padding: 30 }}>
//             <h4>React-Bootstrap Tab Component</h4>
//             <Tabs defaultActiveKey="second">
//                 <Tab eventKey="first" title="Dashboard" className='text'>
//                     Hii, I am 1st tab content
//                     Hii, I am 1st tab content
//                     Hii, I am 1st tab content
//                     Hii, I am 1st tab content
//                 </Tab>
//                 <Tab eventKey="second" title="Setting">
//                     Hii, I am 2nd tab content
//                 </Tab>
//                 <Tab eventKey="third" title="Aboutus">
//                     Hii, I am 3rd tab content
//                 </Tab>
//             </Tabs>
//         </div>
//     );
// }
