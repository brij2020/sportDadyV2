import * as React from 'react';

// import "./icc-ranking.css"
const ICCRanking = (props) => {
    const [isPlayer, setPlayer] = React.useState(true);
    const [isMen, setMen] = React.useState(true);
    const [format, setFormat] = React.useState(0); // 0 => TEST 1 => ODI, 2 => T20
    const [isMenTeam, setMenTeam] = React.useState(true);

    const handleMenState  = () => setMen(true);
    const handleWomanState = () => setMen(false);
    const handlePlayer = () => setPlayer(true);
    const handleTeam = () => setPlayer(false);
    const handleTeamMenW = () =>  setMenTeam(true);
    const handleTeamWomanM = () => setMenTeam(false);
    const handleTest = () => setFormat(0);
    const handleOdi = () => setFormat(1);
    const handleT20 = () => setFormat(2);
	return (
	 <div className="body-content js-body-content">
        <main id="main-content">
           
            <section className="rankings" data-widget="rankings" data-script="icc-cricket_rankings">
                <div className="constraint-wrapper">
                    <div className="rankings__container">
                        <div className="rankings__widget-header-container">
                         

                            <a href="https://www.icc-cricket.com/rankings/mens/overview"
                                className="btn rankings__widget-header-button u-hide-tablet" title="View All Rankings">View
                                All Rankings</a>

                            <button className={`rankings__tab-button ${isPlayer ? 'is-active' : ''} js-player-rankings` } title="Show Player Stats"
                            onClick ={ handlePlayer }
                            >
                                Player rankings
                            </button>
                            <button onClick ={ handleTeam }
                            className={`rankings__tab-button  js-team-rankings ${!isPlayer ? 'is-active' : ''} `} title="Show Team Stats">
                                Team rankings
                            </button>
                        </div>

                        <div className={`rankings__content js-player-rankings-panel  ${ isPlayer ? '' : 'u-visually-hidden' }`}>
                            <div className="rankings__players">
                                <div className="rankings__filters">
                                    <div className="rankings__filters-gender">
                                        <button className={`rankings__panel-button js-stats-players-men ${isMen ? 'is-active': '' }`}
                                            title="Show Mens Stats" onClick={handleMenState} >Mens</button>
                                        <button className={`rankings__panel-button js-stats-players-women ${!isMen ? 'is-active' : ''}`}
                                            title="Show Womens Stats" onClick={ handleWomanState }>Womens</button>
                                    </div>
                                    <div className="rankings__filters-type">
                                        {
                                            isMen ? (
                                            <button title="Show Test Stats"
                                            onClick={handleTest}
                                            className={`rankings__panel-button js-type-test  ${format === 0 ? 'is-active' : ''} `}>Test</button>):null
                                        }
                                        
                                        <button onClick={handleOdi}  title="Show ODI Stats"
                                            className={`rankings__panel-button js-type-odi ${format === 1 ? 'is-active' : ''}`}>ODI</button>
                                        <button onClick={handleT20} title="Show T20I Stats"
                                            className={`rankings__panel-button js-type-t20i ${format === 2 ? 'is-active' : ''}`}>T20I</button>
                                    </div>
                                </div>

                                <div className={`rankings__content js-stats-players-panel-men ${isMen ? '':'u-visually-hidden' }`}>
                                    <div className={`rankings__content-panel js-panel-test-men ${isMen && format === 0 ? '': "u-visually-hidden" }`}>
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-test">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/4029.png"
                                                                        alt="Marnus Labuschagne" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            test
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BATTING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Marnus</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Labuschagne
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AUS no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Marnus</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Labuschagne
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            929</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Steve</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Smith
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            892</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 PAK"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Babar</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Azam
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            862</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Travis</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Head
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            841</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Joe</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Root
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            826</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/player-rankings/test/batting"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-test">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/488.png"
                                                                        alt="Pat Cummins" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            test
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BOWLING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Pat</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Cummins
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AUS no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Pat</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Cummins
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            878</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">James</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Anderson
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            835</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Jasprit</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Bumrah
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            812</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Ravichandran</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ashwin
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            812</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Ollie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Robinson
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            805</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/player-rankings/test/bowling"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-test">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/9.png"
                                                                        alt="Ravindra Jadeja" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            test
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            All-Rounder
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Ravindra</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Jadeja
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 IND no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Ravindra</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Jadeja
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            369</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Ravichandran</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ashwin
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            343</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 BAN"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Shakib</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Al
                                                                                Hasan
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            329</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Ben</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Stokes
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            324</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Mitchell</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Starc
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            275</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/player-rankings/test/all-rounder"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`rankings__content-panel js-panel-odi-men ${isMen && format === 1 ? '': "u-visually-hidden" }`}>
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/2759.png"
                                                                        alt="Babar Azam" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BATTING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Babar</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Azam
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 PAK no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 PAK"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Babar</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Azam
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            887</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Rassie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                van
                                                                                der
                                                                                Dussen
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            766</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Quinton</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                de
                                                                                Kock
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            759</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">David</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Warner
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            747</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 PAK"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Imam-ul-Haq</span>
                                                                            <span className="rankings-card__player-surname">

                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            740</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/player-rankings/odi/batting"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/3840.png"
                                                                        alt="Mohammed Siraj" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BOWLING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Mohammed</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Siraj
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 IND no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Mohammed</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Siraj
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            729</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Josh</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Hazlewood
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            727</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Trent</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Boult
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            708</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Mitchell</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Starc
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            665</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AFG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Rashid</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Khan
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            659</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/player-rankings/odi/bowling"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/201.png"
                                                                        alt="Shakib Al Hasan" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            All-Rounder
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Shakib</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Al
                                                                                Hasan
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 BAN no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 BAN"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Shakib</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Al
                                                                                Hasan
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            389</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AFG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Mohammad</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Nabi
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            310</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 BAN"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Mehedi</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Hasan
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            284</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AFG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Rashid</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Khan
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            280</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Mitchell</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Santner
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            269</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/player-rankings/odi/all-rounder"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`rankings__content-panel js-panel-t20i-men ${isMen && format === 2 ? '': "u-visually-hidden" }`}>
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/108.png"
                                                                        alt="Suryakumar Yadav" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BATTING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Suryakumar</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Yadav
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 IND no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Suryakumar</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Yadav
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            908</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 PAK"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Mohammad</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Rizwan
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            836</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Devon</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Conway
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            788</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 PAK"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Babar</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Azam
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            778</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Aiden</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Markram
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            748</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/player-rankings/t20i/batting"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/2885.png"
                                                                        alt="Rashid Khan" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BOWLING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Rashid</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Khan
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AFG no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AFG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Rashid</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Khan
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            698</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SL"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Wanindu</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Hasaranga
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            695</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Adil</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Rashid
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            692</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Josh</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Hazlewood
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            690</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Sam</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Curran
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            688</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/player-rankings/t20i/bowling"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/201.png"
                                                                        alt="Shakib Al Hasan" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            All-Rounder
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Shakib</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Al
                                                                                Hasan
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 BAN no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 BAN"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Shakib</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Al
                                                                                Hasan
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            252</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AFG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Mohammad</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Nabi
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            233</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Hardik</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Pandya
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            219</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <div
                                                                                className="rankings-card__player-movement rankings-card__player-movement--up">
                                                                                <svg width="10" height="7"
                                                                                    viewBox="0 0 10 7" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9 6L5 2L1 6"
                                                                                        stroke="#24D657"
                                                                                        stroke-width="2" />
                                                                                </svg>
                                                                                <span
                                                                                    className="rankings-card__player-pos-difference">1</span>
                                                                            </div>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SL"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Wanindu</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Hasaranga
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            175</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">

                                                                            <div
                                                                                className="rankings-card__player-movement rankings-card__player-movement--up">
                                                                                <svg width="10" height="7"
                                                                                    viewBox="0 0 10 7" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9 6L5 2L1 6"
                                                                                        stroke="#24D657"
                                                                                        stroke-width="2" />
                                                                                </svg>
                                                                            </div>

                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NAM"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">J.J.</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Smit
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            174</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/player-rankings/t20i/all-rounder"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`rankings__content js-stats-players-panel-women  ${!isMen ? '':'u-visually-hidden' }`}>
                                    <div className={`rankings__content-panel js-panel-odi-women ${!isMen && format === 1 ? '': "u-visually-hidden" }`}>
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul
                                                    className="js-content-slider-content js-slider-women-odi content-slider__inner-wrapper">

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/466.png"
                                                                        alt="Alyssa Healy" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BATTING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Alyssa</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Healy
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AUS no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Alyssa</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Healy
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            762</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Beth</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Mooney
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            754</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Laura</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Wolvaardt
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            732</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Natalie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Sciver
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            731</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">

                                                                            <div
                                                                                className="rankings-card__player-movement rankings-card__player-movement--up">
                                                                                <svg width="10" height="7"
                                                                                    viewBox="0 0 10 7" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9 6L5 2L1 6"
                                                                                        stroke="#24D657"
                                                                                        stroke-width="2" />
                                                                                </svg>
                                                                            </div>

                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Meg</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Lanning
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            717</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/womens/player-rankings/odi/batting"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/3337.png"
                                                                        alt="Sophie Ecclestone" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BOWLING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Sophie</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Ecclestone
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 ENG no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Sophie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ecclestone
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            751</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Jess</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Jonassen
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            723</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Shabnim</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ismail
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            722</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Megan</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Schutt
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            704</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Jhulan</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Goswami
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            698</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/womens/player-rankings/odi/bowling"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/3126.png"
                                                                        alt="Hayley Matthews" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            odi
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            All-Rounder
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Hayley</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Matthews
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 WI no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 WI"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Hayley</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Matthews
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            373</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Natalie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Sciver
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            371</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Ellyse</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Perry
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            366</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Marizanne</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Kapp
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            349</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Amelia</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Kerr
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            336</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/womens/player-rankings/odi/all-rounder"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`rankings__content-panel js-panel-t20i-women ${!isMen && format === 2 ? '': "u-visually-hidden" }`}>
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/4138.png"
                                                                        alt="Tahlia McGrath" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BATTING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Tahlia</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                McGrath
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AUS no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Tahlia</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                McGrath
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            814</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Beth</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Mooney
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            760</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Smriti</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Mandhana
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            736</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Sophie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Devine
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            714</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Meg</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Lanning
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            689</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/womens/player-rankings/t20i/batting"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/3337.png"
                                                                        alt="Sophie Ecclestone" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            BOWLING
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Sophie</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Ecclestone
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 ENG no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Sophie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ecclestone
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            763</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Sarah</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Glenn
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            726</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Deepti</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Sharma
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            723</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Nonkululeko</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Mlaba
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            716</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">

                                                                            <div
                                                                                className="rankings-card__player-movement rankings-card__player-movement--up">
                                                                                <svg width="10" height="7"
                                                                                    viewBox="0 0 10 7" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M9 6L5 2L1 6"
                                                                                        stroke="#24D657"
                                                                                        stroke-width="2" />
                                                                                </svg>
                                                                            </div>

                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Shabnim</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Ismail
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            693</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/womens/player-rankings/t20i/bowling"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header">
                                                                    <img className="rankings-card__player-image"
                                                                        src="https://resources.pulse.icc-cricket.com/players/130x150/4128.png"
                                                                        alt="Ashleigh Gardner" />

                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            t20i
                                                                        </div>
                                                                        <div className="rankings-card__player-role">
                                                                            All-Rounder
                                                                        </div>
                                                                    </div>

                                                                    <div className="rankings-card__top-player-info">
                                                                        <div className="rankings-card__top-player-name">
                                                                            <span
                                                                                className="rankings-card__top-player-first-name">Ashleigh</span>
                                                                            <span
                                                                                className="rankings-card__top-player-surname">

                                                                                Gardner
                                                                            </span>
                                                                        </div>
                                                                        <span className="flag-20 AUS no-border"></span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Ashleigh</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Gardner
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            417</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Deepti</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Sharma
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            394</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Sophie</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Devine
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            389</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 WI"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Hayley</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Matthews
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            374</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">


                                                                            <svg width="8" height="8" viewBox="0 0 8 8"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <circle opacity="0.1" cx="4" cy="4"
                                                                                    r="4" fill="#0D1635" />
                                                                            </svg>


                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            <span
                                                                                className="rankings-card__player-first-name">Amelia</span>
                                                                            <span className="rankings-card__player-surname">

                                                                                Kerr
                                                                            </span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            357</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/womens/player-rankings/t20i/all-rounder"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`rankings__content js-team-rankings-panel ${ !isPlayer ? '' : 'u-visually-hidden' }`}>
                            <div className="rankings__teams">
                                <div className="rankings__filters">
                                    <div className="rankings__filters-gender">
                                        <button  onClick={handleTeamMenW} className={`rankings__panel-button js-stats-team-men ${isMenTeam ? 'is-active' : '' }`}
                                            title="Show Mens Stats">Mens</button>
                                        <button onClick={handleTeamWomanM} className={`rankings__panel-button js-stats-team-women ${!isMenTeam ? 'is-active' : '' }`}
                                            title="Show Womens Stats">Womens</button>
                                    </div>
                                </div>
                                <div className={`rankings__content js-stats-team-panel-men ${isMenTeam ? '' : 'u-visually-hidden'} `}>
                                    <div className="rankings__content-panel">
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">


                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-test">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header-team">
                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            test
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="rankings-card__top-teams">
                                                                    <div
                                                                        className="rankings-card__top-team rankings-card__top-team--first">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                1
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 AUS no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">AUS</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                2
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 IND no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">IND</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                3
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 ENG no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">ENG</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            Australia</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            126</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            India</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            115</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            England</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            107</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            South Africa</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            102</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            New Zealand</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            99</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/team-rankings/test"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header-team">
                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            odi
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="rankings-card__top-teams">
                                                                    <div
                                                                        className="rankings-card__top-team rankings-card__top-team--first">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                1
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 IND no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">IND</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                2
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 ENG no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">ENG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                3
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 AUS no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">AUS</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            India</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            114</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            England</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            113</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            Australia</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            112</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            New Zealand</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            111</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 PAK"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            Pakistan</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            106</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/team-rankings/odi"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header-team">
                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            t20i
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="rankings-card__top-teams">
                                                                    <div
                                                                        className="rankings-card__top-team rankings-card__top-team--first">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                1
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 IND no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">IND</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                2
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 ENG no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">ENG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                3
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 PAK no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">PAK</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            India</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            267</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            England</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            266</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 PAK"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            Pakistan</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            258</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            South Africa</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            256</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            New Zealand</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            252</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/mens/team-rankings/t20i"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`rankings__content js-stats-team-panel-women ${!isMenTeam ? '' : 'u-visually-hidden'}`}>
                                    <div className="rankings__content-panel">
                                        <div className="content-slider">
                                            <div className="content-slider__wrapper js-scroll-list">
                                                <ul className="js-content-slider-content content-slider__inner-wrapper">


                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-odi">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header-team">
                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            odi
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="rankings-card__top-teams">
                                                                    <div
                                                                        className="rankings-card__top-team rankings-card__top-team--first">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                1
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 AUS no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">AUS</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                2
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 ENG no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">ENG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                3
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 SA no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">SA</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            Australia</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            172</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            England</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            119</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            South Africa</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            119</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            India</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            104</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            New Zealand</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            102</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/womens/team-rankings/odi"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>

                                                    <li className="content-slider__item js-thumb">
                                                        <div className="rankings-card__card theme-t20i">
                                                            <div className="rankings-card__card-gradient">
                                                                <div className="rankings-card__card-header-team">
                                                                    <div className="rankings-card__format-info">
                                                                        <div className="rankings-card__format">
                                                                            t20i
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="rankings-card__top-teams">
                                                                    <div
                                                                        className="rankings-card__top-team rankings-card__top-team--first">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                1
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 AUS no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">AUS</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                2
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 ENG no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">ENG</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rankings-card__top-team ">
                                                                        <div className="rankings-card__top-team-header">
                                                                            <div
                                                                                className="rankings-card__top-team-header-position">
                                                                                3
                                                                            </div>
                                                                        </div>
                                                                        <div className="rankings-card__top-team-flag">
                                                                            <span className="flag-40 NZ no-border"></span>
                                                                            <span
                                                                                className="rankings-card__top-team-name">NZ</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="rankings-card__player-stats">
                                                                <table className="rankings-card__table">
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            1</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 AUS"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            Australia</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            299</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            2</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 ENG"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            England</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            283</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            3</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 NZ"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            New Zealand</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            271</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            4</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 IND"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            India</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            267</td>
                                                                    </tr>
                                                                    <tr className="rankings-card__table-row">
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--index">
                                                                            5</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--position">
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--flag">
                                                                            <span className="flag-20 SA"></span>
                                                                        </td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--name">
                                                                            South Africa</td>
                                                                        <td
                                                                            className="rankings-card__table-cell rankings-card__table-cell--rating">
                                                                            246</td>
                                                                    </tr>
                                                                </table>
                                                            </div>

                                                            <div className="rankings-card__view-link">
                                                                <a href="https://www.icc-cricket.com/rankings/womens/team-rankings/t20i"
                                                                    className="widget-header-link  "
                                                                    title="View <span className=''>Full Rankings</span>">
                                                                    View <span className=''>Full Rankings</span> <svg
                                                                        className="icon widget-header-link__icon"
                                                                        aria-hidden="true">
                                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            xlinkHref="/resources/icc-prod/v1.3.5/i/svg-output/icons.svg#icn-chevron-right">
                                                                        </use>
                                                                    </svg>

                                                                </a>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    </div>
	)
}

export default ICCRanking;