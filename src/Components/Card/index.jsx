import * as React from 'react';
import './fixtures.css'
import dayjs from 'dayjs';

const Card = (props) => {
    console.log('props', props)
    const { cards: matchList = [] } = props;
    return (
        <>
            {
                matchList && matchList.map(match => {
                    return (
                        <div className="fixture-card-main col-lg-3 col-md-6 col-sm-12 ng-scope" ng-repeat="(fixtureKey,list) in fixLiveList | orderBy:'timestamp' | limitTo:matchesListLimit" ng-if="list.MatchStatus == 'UpComing' || list.MatchStatus == 'Live'">
                            <div className="fixture-card fixture-result-card ng-scope border-green" ng-if="list.MatchStatus == 'Live'" ng-className="{'match-card-multiday' : (list.CurrentInnings > 2),'border-green' : list.MatchTypeName == 'Test','border-orange':(list.MatchTypeName=='T20'),'border-sky':list.MatchTypeName == 'ODI'}">
                                <div className="fixture-card-top">

                                    <h5 className="fix-text"><span className="ng-binding">{match?.seriesName}</span></h5>
                                    <div className="match-top-info d-flex align-items-center justify-content-between">
                                        <div className="match-card-left match-schedule">
                                            <h5 className="ng-binding">{dayjs(+match.startDate).format('D MMMM YYYY')} <br style={{ "display": "none;" }} /><span style={{ "display": "none;" }}>{dayjs(+match.startDate).format('dddd')}</span></h5>
                                        </div>
                                        <div className="match-card-right match-schedule ">
                                            <h5 className="text-right">
                                                <div className="match-status d-flex align-items-center" style={{ "color": "#FF2100" }}>
                                                    <div className="green-dot"></div>
                                                    {dayjs(+match.startDate).format('HH:mm A')}
                                                </div>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="fixture-card-top match-result">

                                </div>
                                <div className="fixture-card-top match-result">

                                    <h5 className="fix-text ng-scope" ng-if="list.Comments != undefined &amp;&amp; list.Comments != '' &amp;&amp; list.MatchBreakComments == ''">
                                        <span className="ng-binding">{match?.matchDesc}</span>
                                    </h5>
                                </div>
                                <div className="fixture-card-mid fixture-result-card-mid d-flex justify-content-between">
                                    <div className="match-country-info">
                                        <div className="match-img-bg ng-scope" ng-if="isNotNull(list.MatchHomeTeamLogo)">
                                            <div className="match-coutnry-img ">
                                                <img onerror="this.src = basePath+'images/default-team-logo.png';" alt="India" className="igm-fluid"
                                                    src={match?.team1?.thumb} /></div>
                                        </div>
                                        <h5 className="country-name ng-binding ng-scope" ng-if="list.HomeTeamName != undefined &amp;&amp; list.HomeTeamName != ''">{match?.team1?.teamSName}</h5>

                                        <div className="match-score ng-scope" ng-if="list.CurrentInnings != undefined &amp;&amp; list.CurrentInnings != '' &amp;&amp; checkMatchResult(list) &amp;&amp; list.HomeTeamID == list.SecondBattingTeamID">

                                            <h4 ng-if="list['2FallWickets'] != 10" className="ng-binding ng-scope">

                                                <span ng-if="list['2FallOvers'] != undefined &amp;&amp; list['2FallOvers'] != ''" className="ng-binding ng-scope">{match?.run ? `(128.3 ov)` : ""}</span>
                                            </h4>

                                        </div>
                                    </div>
                                    <div className="small-seprator">vs</div>
                                    {/* <!--<div className="small-seprator inn-1" ng-if="(list.MatchType != 'T20' && list.MatchType != 'One Day' && list.CurrentInnings > 2)">Inn 1</div><div className="small-seprator inn-2" ng-if="(list.MatchType != 'T20' && list.MatchType != 'One Day' && list.CurrentInnings > 2)">Inn 2</div> --> */}
                                    <div className="match-country-info">
                                        <div className="match-img-bg">

                                            <div className="match-coutnry-img ng-scope" ng-if="isNotNull(list.MatchAwayTeamLogo)">
                                                <img onerror="this.src = basePath+'images/default-team-logo.png';" alt="Australia" className="igm-fluid" src={match?.team2?.thumb} />
                                            </div>

                                        </div>

                                        <h5 className="country-name ng-binding ng-scope" ng-if="list.AwayTeamName != undefined &amp;&amp; list.AwayTeamName != ''">{match?.team2?.teamSName}</h5>

                                        {/* <!--<div className="match-score" ng-if="list.CurrentInnings == undefined || list.CurrentInnings == ''"><h4>{{list['SecondBattingSummary']}}</h4></div>--> */}

                                        <div className="match-score ng-scope" ng-if="list.CurrentInnings != undefined &amp;&amp; list.CurrentInnings != '' &amp;&amp; (list.AwayTeamID == list.FirstBattingTeamID)">

                                            <h4 ng-if="list['1FallWickets'] == 10" className="ng-binding ng-scope">{match?.run2 ? `(167.2 ov)` : ""} <span className="ng-binding">{match?.run2 ? `(167.2 ov)` : ""}</span></h4>

                                        </div>

                                    </div>
                                </div>
                                <div className="fixture-card-bottom">

                                    <div className="fix-place ng-binding ng-scope" ng-if="widgettype == 'international'">
                                        <span className="matchOrderText ng-binding ng-scope" ng-if="list.MatchOrder != undefined &amp;&amp; list.MatchOrder != ''">{match?.matchDesc} - </span>
                                        <span ng-if="list.GroundName != undefined &amp;&amp; list.GroundName != ''" className="ng-binding ng-scope">
                                            {`${match?.venueInfo?.ground},
                                                ${match?.venueInfo?.city}
                                                (${match?.venueInfo?.country})`
                                            }
                                        </span>
                                    </div>
                                    <a ng-if="widgettype == 'international'" href="https://www.bcci.tv/events/100/australia-tour-of-india-test-series-2022-23/match/743/4th-test" className="match-center-btn ng-scope">Match Centre</a>
                                    <button className="match-center-btn" style={{ "display": "none;" }} onclick="location.href = 'bcci_domestic_results_individual_match_center.html';">Match Centre</button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }


        </>)
}
export default Card