import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import img from './logo.png';
import closeSVG from '../assets/svg/close_icon.svg'
import rArrow from '../assets/svg/r-arrow.svg'
import quiz from '../assets/images/quiz.gif'



const Header = (props) => {
    const [isMobile, setMobile] = React.useState(false);
    const [isHamOpen, setHamBurger] = React.useState(false);
    const [ismwebOpen, setIsmWebOpen] = React.useState(false);
    const [isSearch, setSearch] = React.useState(false);
    const handleSearch = (d) => setSearch(d)
    const handleHamBurger = () => {
        const bodyTag = document.querySelector('#main-app');
        const navSec = document.querySelector('.main-navigation__wrapper')
        if (!isHamOpen) {
            navSec.classList.add('u-blurred')
            bodyTag.classList.add('u-blurred')
        } else {
            bodyTag.classList.remove('u-blurred')
            navSec.classList.remove('u-blurred')


        }
        setHamBurger(!isHamOpen)
    }
    React.useEffect(() => {
        const isMobileCallee = () => {
            let check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
        if (typeof window !== 'undefined') {
            setMobile(isMobileCallee());
        }

    }, [])
    const handleMWebNavToggel = () => {
        console.log("hello")
        setIsmWebOpen(!ismwebOpen)
    }
    // u-body-no-scroll
    return (<>

        <div id="side-sticky-tab">
            <div>
                <div className="textwidget">
                    <div className="sticky-container">
                        <div className="callout">
                            <a className="support" href="/students/future/admissions/">Win to Cash</a>
                        </div>
                        <div class="slideout">
                            <div class="inner">
                                 <a href="/"> <img src={quiz} width="100" height="100" alt='quiz' ></img></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className={`main-navigation__wrapper `} style={{
            background:'#323d94'}}>

            {/* desktop menu */}
            <div className="main-navigation__header u-hide-desktop">

                <a href="/" className="main-navigation__logo" title="label.returnToHomepage">
                    <img src={img} width="60" height="60" alt="logo" />
                </a>
                
                <div className="main-navigation__desktop-navigation u-hide-desktop">


                    <nav id="" className="main-navigation__desktop-list js-desktop-nav" aria-label="Header Navigation"
                        role="navigation">
                        <header className="linked-list__header u-show-desktop">
                            <a href="http://icc-cricket.com/search" className="linked-list__header-search">
                                <svg className="icon " aria-hidden="true">
                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-search-new-hp"></use>
                                </svg>
                            </a>
                            <span className="js-mobile-nav-btn">

                                <svg className="icon linked-list__header-close-icn" aria-hidden="true">
                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-cross"></use>
                                </svg>
                            </span>
                        </header>
                        <ul className="linked-list js-dynamic-list">

                            <li className="linked-list__item   ">
                                <a className="linked-list__link  is-active" href="/">
                                <i className="fa fa-fw fa-home" style={{ fontSize: "25px"}}></i>
                                </a>
                            </li>

                            <li className="linked-list__item  has-children ">
                                <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                    Scores

                                    <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                        </use>
                                    </svg>
                                </button>

                                <ul className="linked-list__dropdown x-bg-ul" role="group" aria-expanded="false" aria-hidden="true">
                                    <header className="linked-list__dropdown-header u-show-desktop">
                                        <button className="linked-list__back-btn js-back-btn"
                                            aria-label="Return to previous menu level">
                                            <svg className="icon " aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                            livescore
                                        </button>
                                    </header>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                            Men's

                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn score-men"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>
                                                    Men's
                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="#">
                                                    Fixtures
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="#">
                                                    Results
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn score-women" aria-haspopup="true">
                                            Women's

                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>
                                                    Women's
                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="#">
                                                    Fixtures
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="#">
                                                    Results
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item   ">
                                        <a className="linked-list__link " href="/livescore">
                                            Live Scores
                                        </a>
                                    </li>

                                    <li className="linked-list__item linked-list__item--wider u-hide-desktop">

                                    </li>
                                    <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                                        <div className="main-navigation__social-container">
                                            <nav className="social-follow ">
                                                <h6 className="social-follow__title">Follow Us</h6>
                                                <a href="https://www.facebook.com/" target="_blank"
                                                    className="social-follow__item social-follow__item--facebook">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.facebook</span></a>
                                                <a href="https://twitter.com/" target="_blank"
                                                    className="social-follow__item social-follow__item--twitter">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.twitter</span>
                                                </a>
                                                <a href="https://www.instagram.com/" target="_blank"
                                                    className="social-follow__item social-follow__item--instagram">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.instagram</span>
                                                </a>
                                                <a href="https://www.youtube.com/" target="_blank"
                                                    className="social-follow__item social-follow__item--youtube">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                                        </use>
                                                    </svg>
                                                    {/*  <span className="u-screen-reader">label.follow.youtube</span> */}
                                                </a>
                                            </nav>

                                            <svg style={{ "width": 0, height: 0, position: "absolute" }} aria-hidden="true"
                                                focusable="false">
                                                <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                                    <stop offset="0%" stop-color="#4c68d6"></stop>
                                                    <stop offset="33%" stop-color="#b22d98"></stop>
                                                    <stop offset="65%" stop-color="#e85a50"></stop>
                                                    <stop offset="100%" stop-color="#fbbb59"></stop>
                                                </linearGradient>
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="linked-list__item  has-children ">
                                <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                    Rankings

                                    <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                        </use>
                                    </svg>
                                </button>

                                <ul className="linked-list__dropdown x-bg-ul" role="group" aria-expanded="false" aria-hidden="true">
                                    <header className="linked-list__dropdown-header u-show-desktop">
                                        <button className="linked-list__back-btn js-back-btn"
                                            aria-label="Return to previous menu level">
                                            <svg className="icon " aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                            Rankings
                                        </button>
                                    </header>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                            Men's

                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>
                                                    Men's
                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/overview">
                                                    Overview
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/team-rankings">
                                                    Team Rankings
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/player-rankings">
                                                    Players Rankings
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/rankings-predictor/test">
                                                    Team Rankings Predictor
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                            Women's

                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>
                                                    Women's
                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/womens/overview">
                                                    Overview
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/womens/team-rankings">
                                                    Team Rankings
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/womens/player-rankings">
                                                    Player Rankings
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">


                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>

                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/player-rankings/comparison">
                                                    Player Head to Head
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/about">
                                                    About Rankings
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/faqs">
                                                    Rankings FAQs
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item linked-list__item--wider u-hide-desktop">

                                    </li>
                                    <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                                        <div className="main-navigation__social-container">
                                            <nav className="social-follow ">
                                                <h6 className="social-follow__title">Follow Us</h6>
                                                <a href="https://www.facebook.com/icc/" target="_blank"
                                                    className="social-follow__item social-follow__item--facebook">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.facebook</span></a>
                                                <a href="https://twitter.com/ICC" target="_blank"
                                                    className="social-follow__item social-follow__item--twitter">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.twitter</span>
                                                </a>
                                                <a href="https://www.instagram.com/icc/" target="_blank"
                                                    className="social-follow__item social-follow__item--instagram">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.instagram</span>
                                                </a>
                                                <a href="https://www.youtube.com/user/CricketICC?cbrd=1" target="_blank"
                                                    className="social-follow__item social-follow__item--youtube">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.youtube</span>
                                                </a>
                                            </nav>

                                            <svg style={{ "width": 0, height: 0, position: "absolute" }} aria-hidden="true"
                                                focusable="false">
                                                <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                                    <stop offset="0%" stop-color="#4c68d6"></stop>
                                                    <stop offset="33%" stop-color="#b22d98"></stop>
                                                    <stop offset="65%" stop-color="#e85a50"></stop>
                                                    <stop offset="100%" stop-color="#fbbb59"></stop>
                                                </linearGradient>
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="linked-list__item  has-children ">
                                <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                    Events

                                    <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                        </use>
                                    </svg>
                                </button>

                                <ul className="linked-list__dropdown x-bg-ul" role="group" aria-expanded="false" aria-hidden="true">
                                    <header className="linked-list__dropdown-header u-show-desktop">
                                        <button className="linked-list__back-btn js-back-btn"
                                            aria-label="Return to previous menu level">
                                            <svg className="icon " aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                            Events
                                        </button>
                                    </header>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                            Men's Events

                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>
                                                    Men's Events
                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="https://www.icc-cricket.com/news/2914163">
                                                    ICC Cricket World Cup
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="https://2022.t20worldcup.com">
                                                    ICC T20 World Cup
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/world-test-championship">
                                                    ICC World Test Championship
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/u19-world-cup/">
                                                    ICC U19 Cricket World Cup
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/cricket-world-cup-super-league/fixtures">
                                                    ICC CWC Super League
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/cricket-world-cup-challenge-league/news">
                                                    ICC CWC Challenge League
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/cricket-world-cup-league-two/news">
                                                    ICC CWC League 2
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                            Women's Events

                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>
                                                    Women's Events
                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="https://www.t20worldcup.com/">
                                                    ICC T20 World Cup
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="https://www.cricketworldcup.com/">
                                                    ICC Cricket World Cup
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="https://www.u19worldcup.com/">
                                                    ICC U19 T20 World Cup
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/womens-championship">
                                                    ICC Women's Championship
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item linked-list__item--wider u-hide-desktop">

                                    </li>
                                    <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                                        <div className="main-navigation__social-container">
                                            <nav className="social-follow ">
                                                <h6 className="social-follow__title">Follow Us</h6>
                                                <a href="https://www.facebook.com/icc/" target="_blank"
                                                    className="social-follow__item social-follow__item--facebook">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.facebook</span></a>
                                                <a href="https://twitter.com/ICC" target="_blank"
                                                    className="social-follow__item social-follow__item--twitter">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.twitter</span>
                                                </a>
                                                <a href="https://www.instagram.com/icc/" target="_blank"
                                                    className="social-follow__item social-follow__item--instagram">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.instagram</span>
                                                </a>
                                                <a href="https://www.youtube.com/user/CricketICC?cbrd=1" target="_blank"
                                                    className="social-follow__item social-follow__item--youtube">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.youtube</span>
                                                </a>
                                            </nav>

                                            <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true"
                                                focusable="false">
                                                <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                                    <stop offset="0%" stop-color="#4c68d6"></stop>
                                                    <stop offset="33%" stop-color="#b22d98"></stop>
                                                    <stop offset="65%" stop-color="#e85a50"></stop>
                                                    <stop offset="100%" stop-color="#fbbb59"></stop>
                                                </linearGradient>
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="linked-list__item   ">
                                <a className="linked-list__link " href="/archives">
                                    archives
                                </a>
                            </li>
                            {/* Start new Navigatio */}

                            <li className="linked-list__item  has-children ">
                                <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                    News

                                    <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                        </use>
                                    </svg>
                                </button>

                                <ul className="linked-list__dropdown x-bg-ul" role="group" aria-expanded="false" aria-hidden="true">
                                    <header className="linked-list__dropdown-header u-show-desktop">
                                        <button className="linked-list__back-btn js-back-btn"
                                            aria-label="Return to previous menu level">
                                            <svg className="icon " aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                            Rankings
                                        </button>
                                    </header>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                            Men's

                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>
                                                    Men's
                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/overview">
                                                    Overview
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/team-rankings">
                                                    Team Rankings
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/player-rankings">
                                                    Players Rankings
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/rankings-predictor/test">
                                                    Team Rankings Predictor
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                            Women's

                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>
                                                    Women's
                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/womens/overview">
                                                    Overview
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/womens/team-rankings">
                                                    Team Rankings
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/womens/player-rankings">
                                                    Player Rankings
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">


                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>

                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/player-rankings/comparison">
                                                    Player Head to Head
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/about">
                                                    About Rankings
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/faqs">
                                                    Rankings FAQs
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item linked-list__item--wider u-hide-desktop">

                                    </li>
                                    <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                                        <div className="main-navigation__social-container">
                                            <nav className="social-follow ">
                                                <h6 className="social-follow__title">Follow Us</h6>
                                                <a href="https://www.facebook.com/icc/" target="_blank"
                                                    className="social-follow__item social-follow__item--facebook">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.facebook</span></a>
                                                <a href="https://twitter.com/ICC" target="_blank"
                                                    className="social-follow__item social-follow__item--twitter">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.twitter</span>
                                                </a>
                                                <a href="https://www.instagram.com/icc/" target="_blank"
                                                    className="social-follow__item social-follow__item--instagram">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.instagram</span>
                                                </a>
                                                <a href="https://www.youtube.com/user/CricketICC?cbrd=1" target="_blank"
                                                    className="social-follow__item social-follow__item--youtube">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.youtube</span>
                                                </a>
                                            </nav>

                                            <svg style={{ "width": 0, height: 0, position: "absolute" }} aria-hidden="true"
                                                focusable="false">
                                                <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                                    <stop offset="0%" stop-color="#4c68d6"></stop>
                                                    <stop offset="33%" stop-color="#b22d98"></stop>
                                                    <stop offset="65%" stop-color="#e85a50"></stop>
                                                    <stop offset="100%" stop-color="#fbbb59"></stop>
                                                </linearGradient>
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            {/* End */}
                            {/* Start Team Navigation */}

                            <li className="linked-list__item  has-children ">
                                <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                    Teams

                                    <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                        </use>
                                    </svg>
                                </button>

                                <ul className="linked-list__dropdown x-bg-ul" role="group" aria-expanded="false" aria-hidden="true">
                                    <header className="linked-list__dropdown-header u-show-desktop">
                                        <button className="linked-list__back-btn js-back-btn"
                                            aria-label="Return to previous menu level">
                                            <svg className="icon " aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                            Rankings
                                        </button>
                                    </header>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                            Men's

                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>
                                                    Men's
                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/overview">
                                                    India
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="#">
                                                    Sri Lanka
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="#">
                                                    Pakistan
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/mens/rankings-predictor/test">
                                                    Bangladesh
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                            Women's

                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>

                                        <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                            <header className="linked-list__dropdown-header u-show-desktop">
                                                <button className="linked-list__back-btn js-back-btn"
                                                    aria-label="Return to previous menu level">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                        </use>
                                                    </svg>
                                                    Women's
                                                </button>
                                            </header>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/womens/overview">
                                                    India
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/womens/team-rankings">
                                                    Sri Lanka
                                                </a>
                                            </li>

                                            <li className="linked-list__item   ">
                                                <a className="linked-list__link " href="/rankings/womens/player-rankings">
                                                    Pakistan
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="linked-list__item  has-children ">
                                        <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">


                                            <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                </use>
                                            </svg>
                                        </button>


                                    </li>

                                    <li className="linked-list__item linked-list__item--wider u-hide-desktop">

                                    </li>
                                    <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                                        <div className="main-navigation__social-container">
                                            <nav className="social-follow ">
                                                <h6 className="social-follow__title">Follow Us</h6>
                                                <a href="https://www.facebook.com/icc/" target="_blank"
                                                    className="social-follow__item social-follow__item--facebook">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.facebook</span></a>
                                                <a href="https://twitter.com/ICC" target="_blank"
                                                    className="social-follow__item social-follow__item--twitter">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.twitter</span>
                                                </a>
                                                <a href="https://www.instagram.com/icc/" target="_blank"
                                                    className="social-follow__item social-follow__item--instagram">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.instagram</span>
                                                </a>
                                                <a href="https://www.youtube.com/user/CricketICC?cbrd=1" target="_blank"
                                                    className="social-follow__item social-follow__item--youtube">
                                                    <svg className="icon " aria-hidden="true">
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                                        </use>
                                                    </svg>
                                                    <span className="u-screen-reader">label.follow.youtube</span>
                                                </a>
                                            </nav>

                                            <svg style={{ "width": 0, height: 0, position: "absolute" }} aria-hidden="true"
                                                focusable="false">
                                                <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                                    <stop offset="0%" stop-color="#4c68d6"></stop>
                                                    <stop offset="33%" stop-color="#b22d98"></stop>
                                                    <stop offset="65%" stop-color="#e85a50"></stop>
                                                    <stop offset="100%" stop-color="#fbbb59"></stop>
                                                </linearGradient>
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            {/* End */}

                            <li className="linked-list__item   ">
                                <a className="linked-list__link" href="#">
                                    Awards
                                </a>
                            </li>

                            <li className="linked-list__item   ">
                                <a className="linked-list__link " href="/video">
                                    Videos
                                </a>
                            </li>

                            <li className="linked-list__item   ">
                                <a className="linked-list__link " href="/schedule">
                                    Schedule
                                </a>
                            </li>

                            <li className="linked-list__item   ">
                                <a className="linked-list__link " href="/archives">
                                    Download the Mobile App
                                </a>
                            </li>
                            <li className="linked-list__item" onClick={e => handleSearch(true)}>
                            {!isSearch ? (<a className="linked-list__link" href="#" id="search"><i class="fa fa-search"></i></a>) : null}
                            </li>

                            <li className="linked-list__item no-border u-show-desktop  ">
                                <span className="linked-list__title">Explore ICC</span>
                            </li>
                            <li className="linked-list__item linked-list__item--promo u-show-desktop">
                                <section className="app-promo">
                                    <div className="app-promo__top">
                                        <span className="app-promo__icon icn icn-app-icon"></span>
                                        <span className="app-promo__text">Download the official ICC App today</span>
                                    </div>
                                    <div className="app-promo__bottom">
                                        <a target="_blank"
                                            href="https://itunes.apple.com/gb/app/icc-world-twenty20-india-2016/id956440606?mt=8"
                                            className="app-promo__cta icn icn-apple-badge"></a>
                                        <a target="_blank"
                                            href="https://play.google.com/store/apps/details?id=com.pl.cwc_2015&amp;hl=en_GB"
                                            className="app-promo__cta icn icn-android-badge"></a>
                                    </div>
                                </section>
                            </li>
                            <li className="linked-list__item linked-list__item--social u-show-desktop">
                                <div className="main-navigation__social-container">
                                    <nav className="social-follow ">
                                        <h6 className="social-follow__title">Follow Us</h6>
                                        <a href="https://www.facebook.com/icc/" target="_blank"
                                            className="social-follow__item social-follow__item--facebook">
                                            <svg className="icon " aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                                </use>
                                            </svg>
                                            <span className="u-screen-reader">label.follow.facebook</span></a>
                                        <a href="https://twitter.com/ICC" target="_blank"
                                            className="social-follow__item social-follow__item--twitter">
                                            <svg className="icon " aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                                </use>
                                            </svg>
                                            <span className="u-screen-reader">label.follow.twitter</span>
                                        </a>
                                        <a href="https://www.instagram.com/icc/" target="_blank"
                                            className="social-follow__item social-follow__item--instagram">
                                            <svg className="icon " aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                                </use>
                                            </svg>
                                            <span className="u-screen-reader">label.follow.instagram</span>
                                        </a>
                                        <a href="https://www.youtube.com/user/CricketICC?cbrd=1" target="_blank"
                                            className="social-follow__item social-follow__item--youtube">
                                            <svg className="icon " aria-hidden="true">
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                                </use>
                                            </svg>
                                            <span className="u-screen-reader">label.follow.youtube</span>
                                        </a>
                                    </nav>

                                    <svg style={{ "width": 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
                                        <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                            <stop offset="0%" stop-color="#4c68d6"></stop>
                                            <stop offset="33%" stop-color="#b22d98"></stop>
                                            <stop offset="65%" stop-color="#e85a50"></stop>
                                            <stop offset="100%" stop-color="#fbbb59"></stop>
                                        </linearGradient>
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <a href="http://icc-cricket.com/search" className="main-navigation__search">
                        <svg className="icon " aria-hidden="true">
                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-search-new-hp"></use>
                        </svg>
                    </a>
                </div>

                 <div className={`search-form ${isSearch ? 'active': '' }`}>
                    <form>
                        <input type="text" placeholder="Search" />
                    </form> 
                </div>
                <a className={`close ${isSearch ? 'active': '' }`} onClick={e => handleSearch(false) }><i className="fa fa-times"></i></a>
                <button className="hamburger js-sidebar-btn " type="button" aria-label="Menu"
                    aria-controls="sidebar-menu"
                    onClick={handleHamBurger}
                >
                    <span className="hamburger__line hamburger__line--top"></span>
                    <span className="hamburger__line hamburger__line--middle"></span>
                    <span className="hamburger__line hamburger__line--bottom"></span>
                </button>
            </div>
            <div className="main-navigation__mobile u-show-desktop" data-widget="mobile-navigation">

                <a href="/" className="main-navigation__logo" title="label.returnToHomepage">
                    <span className="icn icn-logo-icc-nav"></span>
                    <span className="u-screen-reader">label.ICCHome</span>
                </a>

                <div className="main-navigation__sub-menu">


                    <nav className="sub-menu">
                        <a className="sub-menu__link " href="/">
                            <i className="fa fa-fw fa-home" style={{ fontSize: "20px"}}></i>
                        </a>
                        {/*
                        <a className="sub-menu__link " href="/livescore">
                            Scores
                        </a>
                        <a className="sub-menu__link " href="#">
                            Rankings
                        </a>
                        <a className="sub-menu__link "
                            href="#">
                            Awards
                        </a>*/}
                       
                       {!isSearch ? <a className="sub-menu__link" href="#" id="search" onClick={e => handleSearch(true)} ><i class="fa fa-search"></i></a>:null}
                         <div className={`search-form ${isSearch ? 'active':''}`}>
                            <form>
                                    <input type="text" placeholder="Search" />
                                </form> 
                            </div>
                            <a className={`close ${isSearch?'active':''}`} onClick={e => handleSearch(false)}><i className="fa fa-times"></i></a>
                    </nav>
                   
                </div>

                <button className={`hamburger js-mobile-nav-btn m-nav-cross ${ismwebOpen ? 'is-active' : ''} `} onClick={handleMWebNavToggel} type="button" aria-label="Menu" aria-controls="mobile-menu">
                    <span className="hamburger__line hamburger__line--top"></span>
                    <span className="hamburger__line hamburger__line--middle"></span>
                    <span className="hamburger__line hamburger__line--bottom"></span>
                    <span className="u-screen-reader">label.toggleMobileNavigation</span>
                </button>


                <nav id="mobile-menu" className={"main-navigation__mobile-list js-mobile-nav" + ` ${ismwebOpen ? 'is-open' : ''} `} aria-label="Header Navigation"
                    role="navigation">
                    <header className="linked-list__header u-show-desktop">
                        <a href="http://icc-cricket.com/search" className="linked-list__header-search">
                            <svg className="icon " aria-hidden="true">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-search-new-hp"></use>
                            </svg>
                        </a>
                        <span className="js-mobile-nav-btn" onClick={handleMWebNavToggel} aria-label="button">

                            <img src={closeSVG} alt="iconClose" className="icon linked-list__header-close-icn" />
                            {/*<svg className="icon linked-list__header-close-icn" aria-hidden="true">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-cross"></use>
                            </svg>
                            */}
                        </span>
                    </header>
                    <ul className="linked-list js-dynamic-list">

                        <li className="linked-list__item   ">
                            <a className="linked-list__link " href="/homepage">
                            <i className="fa fa-fw fa-home" style={{ fontSize: "20px"}}></i>
                            </a>
                        </li>

                        <li className="linked-list__item  has-children ">
                            <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                Scores
                                <img src={rArrow} alt="close" className="icon linked-list__header-close-icn" style={{

                                    background: "white",
                                    width: "18px",
                                    height: "18px"
                                }} />
                                {/*<svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                    </use>
                                </svg>
                                */}
                            </button>

                            <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                <header className="linked-list__dropdown-header u-show-desktop">
                                    <button className="linked-list__back-btn js-back-btn"
                                        aria-label="Return to previous menu level">
                                        <img src={rArrow} alt="r-arrow" className="icon " />
                                        {/*<svg className="icon " aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>*/}
                                        Scores
                                    </button>
                                </header>

                                <li className="linked-list__item  has-children ">
                                    <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                        Men's

                                        <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>
                                    </button>

                                    <ul className="linked-list__dropdown " role="group" aria-expanded="false" aria-hidden="true">
                                        <header className="linked-list__dropdown-header u-show-desktop">
                                            <button className="linked-list__back-btn js-back-btn"
                                                aria-label="Return to previous menu level">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                    </use>
                                                </svg>
                                                Men's
                                            </button>
                                        </header>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/mens-schedule/list">
                                                Fixtures
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/live-cricket/mens-results">
                                                Results
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="linked-list__item  has-children ">
                                    <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                        Women's

                                        <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>
                                    </button>

                                    <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                        <header className="linked-list__dropdown-header u-show-desktop">
                                            <button className="linked-list__back-btn js-back-btn"
                                                aria-label="Return to previous menu level">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                    </use>
                                                </svg>
                                                Women's
                                            </button>
                                        </header>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/womens-schedule/list">
                                                Fixtures
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/live-cricket/womens-results">
                                                Results
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="/live-cricket/live">
                                        Live Scores
                                    </a>
                                </li>

                                <li className="linked-list__item linked-list__item--wider u-hide-desktop">

                                </li>
                                <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                                    <div className="main-navigation__social-container">
                                        <nav className="social-follow ">
                                            <h6 className="social-follow__title">Follow Us</h6>
                                            <a href="https://www.facebook.com/icc/" target="_blank"
                                                className="social-follow__item social-follow__item--facebook">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.facebook</span></a>
                                            <a href="https://twitter.com/ICC" target="_blank"
                                                className="social-follow__item social-follow__item--twitter">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.twitter</span>
                                            </a>
                                            <a href="https://www.instagram.com/icc/" target="_blank"
                                                className="social-follow__item social-follow__item--instagram">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.instagram</span>
                                            </a>
                                            <a href="https://www.youtube.com/user/CricketICC?cbrd=1" target="_blank"
                                                className="social-follow__item social-follow__item--youtube">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.youtube</span>
                                            </a>
                                        </nav>

                                        <svg style={{ "width": 0, height: 0, position: "absolute" }} aria-hidden="true"
                                            focusable="false">
                                            <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                                <stop offset="0%" stop-color="#4c68d6"></stop>
                                                <stop offset="33%" stop-color="#b22d98"></stop>
                                                <stop offset="65%" stop-color="#e85a50"></stop>
                                                <stop offset="100%" stop-color="#fbbb59"></stop>
                                            </linearGradient>
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li className="linked-list__item  has-children ">
                            <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                Rankings

                                <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                    </use>
                                </svg>
                            </button>

                            <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                <header className="linked-list__dropdown-header u-show-desktop">
                                    <button className="linked-list__back-btn js-back-btn"
                                        aria-label="Return to previous menu level">
                                        <svg className="icon " aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>
                                        Rankings
                                    </button>
                                </header>

                                <li className="linked-list__item  has-children ">
                                    <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                        Men's

                                        <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>
                                    </button>

                                    <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                        <header className="linked-list__dropdown-header u-show-desktop">
                                            <button className="linked-list__back-btn js-back-btn"
                                                aria-label="Return to previous menu level">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                    </use>
                                                </svg>
                                                Men's
                                            </button>
                                        </header>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/rankings/mens/overview">
                                                Overview
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/rankings/mens/team-rankings">
                                                Team Rankings
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/rankings/mens/player-rankings">
                                                Players Rankings
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/rankings/mens/rankings-predictor/test">
                                                Team Rankings Predictor
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="linked-list__item  has-children ">
                                    <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                        Women's

                                        <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>
                                    </button>

                                    <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                        <header className="linked-list__dropdown-header u-show-desktop">
                                            <button className="linked-list__back-btn js-back-btn"
                                                aria-label="Return to previous menu level">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                    </use>
                                                </svg>
                                                Women's
                                            </button>
                                        </header>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/rankings/womens/overview">
                                                Overview
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/rankings/womens/team-rankings">
                                                Team Rankings
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/rankings/womens/player-rankings">
                                                Player Rankings
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="linked-list__item  has-children ">
                                    <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">


                                        <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>
                                    </button>

                                    <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                        <header className="linked-list__dropdown-header u-show-desktop">
                                            <button className="linked-list__back-btn js-back-btn"
                                                aria-label="Return to previous menu level">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                    </use>
                                                </svg>

                                            </button>
                                        </header>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/rankings/mens/player-rankings/comparison">
                                                Player Head to Head
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/rankings/about">
                                                About Rankings
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/rankings/faqs">
                                                Rankings FAQs
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="linked-list__item linked-list__item--wider u-hide-desktop">

                                </li>
                                <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                                    <div className="main-navigation__social-container">
                                        <nav className="social-follow ">
                                            <h6 className="social-follow__title">Follow Us</h6>
                                            <a href="https://www.facebook.com/icc/" target="_blank"
                                                className="social-follow__item social-follow__item--facebook">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.facebook</span></a>
                                            <a href="https://twitter.com/ICC" target="_blank"
                                                className="social-follow__item social-follow__item--twitter">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.twitter</span>
                                            </a>
                                            <a href="https://www.instagram.com/icc/" target="_blank"
                                                className="social-follow__item social-follow__item--instagram">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.instagram</span>
                                            </a>
                                            <a href="https://www.youtube.com/user/CricketICC?cbrd=1" target="_blank"
                                                className="social-follow__item social-follow__item--youtube">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.youtube</span>
                                            </a>
                                        </nav>

                                        <svg style={{ "width": 0, height: 0, position: "absolute" }} aria-hidden="true"
                                            focusable="false">
                                            <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                                <stop offset="0%" stop-color="#4c68d6"></stop>
                                                <stop offset="33%" stop-color="#b22d98"></stop>
                                                <stop offset="65%" stop-color="#e85a50"></stop>
                                                <stop offset="100%" stop-color="#fbbb59"></stop>
                                            </linearGradient>
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li className="linked-list__item  has-children ">
                            <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                Events

                                <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                    </use>
                                </svg>
                            </button>

                            <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                <header className="linked-list__dropdown-header u-show-desktop">
                                    <button className="linked-list__back-btn js-back-btn"
                                        aria-label="Return to previous menu level">
                                        <svg className="icon " aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>
                                        Events
                                    </button>
                                </header>

                                <li className="linked-list__item  has-children ">
                                    <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                        Men's Events

                                        <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>
                                    </button>

                                    <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                        <header className="linked-list__dropdown-header u-show-desktop">
                                            <button className="linked-list__back-btn js-back-btn"
                                                aria-label="Return to previous menu level">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                    </use>
                                                </svg>
                                                Men's Events
                                            </button>
                                        </header>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="https://www.icc-cricket.com/news/2914163">
                                                ICC Cricket World Cup
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="https://2022.t20worldcup.com">
                                                ICC T20 World Cup
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/world-test-championship">
                                                ICC World Test Championship
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/u19-world-cup/">
                                                ICC U19 Cricket World Cup
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/cricket-world-cup-super-league/fixtures">
                                                ICC CWC Super League
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/cricket-world-cup-challenge-league/news">
                                                ICC CWC Challenge League
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/cricket-world-cup-league-two/news">
                                                ICC CWC League 2
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="linked-list__item  has-children ">
                                    <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                        Women's Events

                                        <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>
                                    </button>

                                    <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                        <header className="linked-list__dropdown-header u-show-desktop">
                                            <button className="linked-list__back-btn js-back-btn"
                                                aria-label="Return to previous menu level">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                                    </use>
                                                </svg>
                                                Women's Events
                                            </button>
                                        </header>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="https://www.t20worldcup.com/">
                                                ICC T20 World Cup
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="https://www.cricketworldcup.com/">
                                                ICC Cricket World Cup
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="https://www.u19worldcup.com/">
                                                ICC U19 T20 World Cup
                                            </a>
                                        </li>

                                        <li className="linked-list__item   ">
                                            <a className="linked-list__link " href="/womens-championship">
                                                ICC Women's Championship
                                            </a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="linked-list__item linked-list__item--wider u-hide-desktop">

                                </li>
                                <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                                    <div className="main-navigation__social-container">
                                        <nav className="social-follow ">
                                            <h6 className="social-follow__title">Follow Us</h6>
                                            <a href="https://www.facebook.com/icc/" target="_blank"
                                                className="social-follow__item social-follow__item--facebook">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.facebook</span></a>
                                            <a href="https://twitter.com/ICC" target="_blank"
                                                className="social-follow__item social-follow__item--twitter">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.twitter</span>
                                            </a>
                                            <a href="https://www.instagram.com/icc/" target="_blank"
                                                className="social-follow__item social-follow__item--instagram">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.instagram</span>
                                            </a>
                                            <a href="https://www.youtube.com/user/CricketICC?cbrd=1" target="_blank"
                                                className="social-follow__item social-follow__item--youtube">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.youtube</span>
                                            </a>
                                        </nav>

                                        <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true"
                                            focusable="false">
                                            <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                                <stop offset="0%" stop-color="#4c68d6"></stop>
                                                <stop offset="33%" stop-color="#b22d98"></stop>
                                                <stop offset="65%" stop-color="#e85a50"></stop>
                                                <stop offset="100%" stop-color="#fbbb59"></stop>
                                            </linearGradient>
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li className="linked-list__item   ">
                            <a className="linked-list__link " href="/news">
                                News
                            </a>
                        </li>

                        <li className="linked-list__item   ">
                            <a className="linked-list__link is-active" href="/awards/most-valuable-player">
                                Awards
                            </a>
                        </li>

                        <li className="linked-list__item   ">
                            <a className="linked-list__link " href="/video">
                                Videos
                            </a>
                        </li>

                        <li className="linked-list__item   ">
                            <a className="linked-list__link " href="https://icc.tv">
                                ICC.TV
                            </a>
                        </li>

                        <li className="linked-list__item   ">
                            <a className="linked-list__link " href="https://www.icc-cricket.com/shop/">
                                Shop
                            </a>
                        </li>

                        <li className="linked-list__item  has-children ">
                            <button className="linked-list__dropdown-label js-dropdown-btn" aria-haspopup="true">
                                More

                                <svg className="icon linked-list__dropdown-has-children" aria-hidden="true">
                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                    </use>
                                </svg>
                            </button>

                            <ul className="linked-list__dropdown" role="group" aria-expanded="false" aria-hidden="true">
                                <header className="linked-list__dropdown-header u-show-desktop">
                                    <button className="linked-list__back-btn js-back-btn"
                                        aria-label="Return to previous menu level">
                                        <svg className="icon " aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-chevron-right-new-hp">
                                            </use>
                                        </svg>
                                        More
                                    </button>
                                </header>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="/teams">
                                        Teams
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="https://fancraze.com/">
                                        Crictos
                                        <svg className="icon external-link" aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-external-new-hp">
                                            </use>
                                        </svg>
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="/awards/overview">
                                        ICC Awards
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="/hall-of-fame">
                                        Hall of Fame
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="https://www.criiio.com/">
                                        criiio
                                        <svg className="icon external-link" aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-external-new-hp">
                                            </use>
                                        </svg>
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="/100percentcricket">
                                        100% Cricket
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="/mobile">
                                        Official ICC App
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="/about">
                                        About ICC
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="https://www.icc-cricket.com/media-zone">
                                        Online Media Zone
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="/media-releases">
                                        Media Releases
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="/photos">
                                        Photos
                                    </a>
                                </li>

                                <li className="linked-list__item   ">
                                    <a className="linked-list__link " href="/news/318971">
                                        Commercial Opportunities
                                    </a>
                                </li>

                                <li className="linked-list__item linked-list__item--wider u-hide-desktop">

                                </li>
                                <li className="linked-list__item linked-list__item--full-width u-hide-desktop">
                                    <div className="main-navigation__social-container">
                                        <nav className="social-follow ">
                                            <h6 className="social-follow__title">Follow Us</h6>
                                            <a href="https://www.facebook.com/icc/" target="_blank"
                                                className="social-follow__item social-follow__item--facebook">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.facebook</span></a>
                                            <a href="https://twitter.com/ICC" target="_blank"
                                                className="social-follow__item social-follow__item--twitter">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.twitter</span>
                                            </a>
                                            <a href="https://www.instagram.com/icc/" target="_blank"
                                                className="social-follow__item social-follow__item--instagram">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.instagram</span>
                                            </a>
                                            <a href="https://www.youtube.com/user/CricketICC?cbrd=1" target="_blank"
                                                className="social-follow__item social-follow__item--youtube">
                                                <svg className="icon " aria-hidden="true">
                                                    <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                                    </use>
                                                </svg>
                                                <span className="u-screen-reader">label.follow.youtube</span>
                                            </a>
                                        </nav>

                                        <svg style={{ width: 0, height: 0, position: "absolute;" }} aria-hidden="true"
                                            focusable="false">
                                            <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                                <stop offset="0%" stop-color="#4c68d6"></stop>
                                                <stop offset="33%" stop-color="#b22d98"></stop>
                                                <stop offset="65%" stop-color="#e85a50"></stop>
                                                <stop offset="100%" stop-color="#fbbb59"></stop>
                                            </linearGradient>
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li className="linked-list__item no-border u-show-desktop  ">
                            <span className="linked-list__title">Explore Sport Daday</span>
                        </li>
                        
                        <li className="linked-list__item linked-list__item--promo u-show-desktop">
                            <section className="app-promo">
                                <div className="app-promo__top">
                                    <span className="app-promo__icon icn icn-app-icon"></span>
                                    <span className="app-promo__text">Download the official Sport Daday App today</span>
                                </div>
                                <div className="app-promo__bottom">
                                    <a target="_blank"
                                        href="https://itunes.apple.com/gb/app/icc-world-twenty20-india-2016/id956440606?mt=8"
                                        className="app-promo__cta icn icn-apple-badge"></a>
                                    <a target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.pl.cwc_2015&amp;hl=en_GB"
                                        className="app-promo__cta icn icn-android-badge"></a>
                                </div>
                            </section>
                        </li>
                        <li className="linked-list__item linked-list__item--social u-show-desktop">
                            <div className="main-navigation__social-container">
                                <nav className="social-follow ">
                                    <h6 className="social-follow__title">Follow Us</h6>
                                    <a href="https://www.facebook.com/icc/" target="_blank"
                                        className="social-follow__item social-follow__item--facebook">
                                        <svg className="icon " aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-facebook-color">
                                            </use>
                                        </svg>
                                        <span className="u-screen-reader">label.follow.facebook</span></a>
                                    <a href="https://twitter.com/ICC" target="_blank"
                                        className="social-follow__item social-follow__item--twitter">
                                        <svg className="icon " aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-twitter-color">
                                            </use>
                                        </svg>
                                        <span className="u-screen-reader">label.follow.twitter</span>
                                    </a>
                                    <a href="https://www.instagram.com/icc/" target="_blank"
                                        className="social-follow__item social-follow__item--instagram">
                                        <svg className="icon " aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-instagram-new-hp">
                                            </use>
                                        </svg>
                                        <span className="u-screen-reader">label.follow.instagram</span>
                                    </a>
                                    <a href="https://www.youtube.com/user/CricketICC?cbrd=1" target="_blank"
                                        className="social-follow__item social-follow__item--youtube">
                                        <svg className="icon " aria-hidden="true">
                                            <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="/resources/prod/v8.28.5/i/svg-output/icons.svg#icn-youtube-color">
                                            </use>
                                        </svg>
                                        <span className="u-screen-reader">label.follow.youtube</span>
                                    </a>
                                </nav>

                                <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
                                    <linearGradient id="instagram" x2="1" y2="1" gradientTransform="rotate(45)">
                                        <stop offset="0%" stop-color="#4c68d6"></stop>
                                        <stop offset="33%" stop-color="#b22d98"></stop>
                                        <stop offset="65%" stop-color="#e85a50"></stop>
                                        <stop offset="100%" stop-color="#fbbb59"></stop>
                                    </linearGradient>
                                </svg>
                            </div>
                        </li>
                    </ul>
                    
                </nav>
                
            </div>
        </section>
        <div className={`sidebar-nav js-navigation-sidebar u-hide-desktop ${isHamOpen ? 'is-open' : ""}`} data-widget="sidebar-navigation" data-initialised="true" aria-expanded="true" aria-hidden="true">
            <header className="sidebar-nav__header">
                <span className="sidebar-nav__title">
                    More
                </span>
                <span className="sidebar-nav__close js-sidebar-btn" onClick={handleHamBurger}>
                    <img src={closeSVG} alt="closei" className="icon sidebar-nav__close-icn" />
                    {/*<svg className="icon sidebar-nav__close-icn" aria-hidden="true">
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-cross"></use>
                        </svg>*/}
                </span>
            </header>
            <div className="sidebar-nav__menu" tabindex="0">
                <ul>
                    <li className="sidebar-nav__item  " data-label="Teams">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="/teams">
                            Teams
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="Crictos">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="https://fancraze.com/">
                            Crictos
                            <svg className="icon external-link" aria-hidden="true">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-external"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="ICC Awards">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="/awards/overview">
                            ICC Awards
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="Hall of Fame">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="/hall-of-fame">
                            Hall of Fame
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="criiio">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="https://www.criiio.com/">
                            criiio
                            <svg className="icon external-link" aria-hidden="true">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-external"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="100% Cricket">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="/100percentcricket">
                            100% Cricket
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="Official ICC App">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="/mobile">
                            Official ICC App
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="About ICC">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="/about">
                            About ICC
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="Online Media Zone">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="https://www.icc-cricket.com/media-zone">
                            Online Media Zone
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="Media Releases">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="/media-releases">
                            Media Releases
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="Photos">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="/photos">
                            Photos
                        </a>
                    </li>
                    <li className="sidebar-nav__item  " data-label="Commercial Opportunities">
                        <a className="sidebar-nav__link sidebar-nav__link--in-sidebar-nav" href="/news/318971">
                            Commercial Opportunities
                        </a>
                    </li>
                </ul>
               
                </div>

        </div>
    </>
    )
}
export default Header;