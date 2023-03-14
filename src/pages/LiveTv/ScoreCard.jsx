import * as React from 'react';

const ScoreCard = (props) => {
    return (<>
        <div class="fixture-card-main col-lg-3 col-md-6 col-sm-12 ng-scope" ng-repeat="(fixtureKey,list) in fixLiveList | orderBy:'timestamp' | limitTo:matchesListLimit" ng-if="list.MatchStatus == 'UpComing' || list.MatchStatus == 'Live'">

            <div class="fixture-card fixture-result-card ng-scope border-green" ng-if="list.MatchStatus == 'Live'" ng-class="{'match-card-multiday' : (list.CurrentInnings > 2),'border-green' : list.MatchTypeName == 'Test','border-orange':(list.MatchTypeName=='T20'),'border-sky':list.MatchTypeName == 'ODI'}">
                <div class="fixture-card-top">

                    <h5 class="fix-text"><span class="ng-binding">AUSTRALIA TOUR OF INDIA TEST SERIES 2022-23</span></h5>
                    <div class="match-top-info d-flex align-items-center justify-content-between">
                        <div class="match-card-left match-schedule">
                            <h5 class="ng-binding">9 MAR 2023 <br style={{ "display": "none;" }} /><span style={{ "display": "none;" }}>Monday</span></h5>
                        </div>
                        <div class="match-card-right match-schedule ">
                            <h5 class="text-right">
                                <div class="match-status d-flex align-items-center" style={{ "color": "#FF2100" }}>
                                    <div class="green-dot"></div>
                                    LIVE
                                </div>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="fixture-card-top match-result">

                </div>
                <div class="fixture-card-top match-result">

                    <h5 class="fix-text ng-scope" ng-if="list.Comments != undefined &amp;&amp; list.Comments != '' &amp;&amp; list.MatchBreakComments == ''"><span class="ng-binding">India Trail By 129 Runs</span></h5>
                </div>
                <div class="fixture-card-mid fixture-result-card-mid d-flex justify-content-between">
                    <div class="match-country-info">
                        <div class="match-img-bg ng-scope" ng-if="isNotNull(list.MatchHomeTeamLogo)">
                            <div class="match-coutnry-img "><img ng-src="https://scores.bcci.tv/matchcentre/teamlogos/india.png" onerror="this.src = basePath+'images/default-team-logo.png';" alt="India" class="igm-fluid" src="https://scores.bcci.tv/matchcentre/teamlogos/india.png" /></div>
                        </div>
                        <h5 class="country-name ng-binding ng-scope" ng-if="list.HomeTeamName != undefined &amp;&amp; list.HomeTeamName != ''">India</h5>

                        <div class="match-score ng-scope" ng-if="list.CurrentInnings != undefined &amp;&amp; list.CurrentInnings != '' &amp;&amp; checkMatchResult(list) &amp;&amp; list.HomeTeamID == list.SecondBattingTeamID">

                            <h4 ng-if="list['2FallWickets'] != 10" class="ng-binding ng-scope">
                                <span ng-if="list['2FallOvers'] != undefined &amp;&amp; list['2FallOvers'] != ''" class="ng-binding ng-scope">(128.3 ov)</span>
                            </h4>

                        </div>
                    </div>
                    <div class="small-seprator">vs</div>
                    {/* <!--<div class="small-seprator inn-1" ng-if="(list.MatchType != 'T20' && list.MatchType != 'One Day' && list.CurrentInnings > 2)">Inn 1</div><div class="small-seprator inn-2" ng-if="(list.MatchType != 'T20' && list.MatchType != 'One Day' && list.CurrentInnings > 2)">Inn 2</div> --> */}
                    <div class="match-country-info">
                        <div class="match-img-bg">

                            <div class="match-coutnry-img ng-scope" ng-if="isNotNull(list.MatchAwayTeamLogo)"><img ng-src="https://scores.bcci.tv/matchcentre/teamlogos/aus.png?v=6" onerror="this.src = basePath+'images/default-team-logo.png';" alt="Australia" class="igm-fluid" src="https://scores.bcci.tv/matchcentre/teamlogos/aus.png?v=6" /></div>

                        </div>

                        <h5 class="country-name ng-binding ng-scope" ng-if="list.AwayTeamName != undefined &amp;&amp; list.AwayTeamName != ''">Australia</h5>

                        {/* <!--<div class="match-score" ng-if="list.CurrentInnings == undefined || list.CurrentInnings == ''"><h4>{{list['SecondBattingSummary']}}</h4></div>--> */}

                        <div class="match-score ng-scope" ng-if="list.CurrentInnings != undefined &amp;&amp; list.CurrentInnings != '' &amp;&amp; (list.AwayTeamID == list.FirstBattingTeamID)">

                            <h4 ng-if="list['1FallWickets'] == 10" class="ng-binding ng-scope">480 <span class="ng-binding">(167.2 ov)</span></h4>

                        </div>

                    </div>
                </div>
                <div class="fixture-card-bottom">

                    <div class="fix-place ng-binding ng-scope" ng-if="widgettype == 'international'">
                        <span class="matchOrderText ng-binding ng-scope" ng-if="list.MatchOrder != undefined &amp;&amp; list.MatchOrder != ''">4th  Test - </span>
                        <span ng-if="list.GroundName != undefined &amp;&amp; list.GroundName != ''" class="ng-binding ng-scope">Narendra Modi Stadium,</span>
                    </div>
                </div>
            </div>

        </div>
    </>)
}
export default ScoreCard;