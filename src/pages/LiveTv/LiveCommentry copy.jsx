import * as React from 'react';
import './liveCommentry.css'
const LiveCommentry = (props) => {
   const [isCommentry, setICurrent] = React.useState(true);
   const eventOnLink = (e) => {
      console.log(e.target?.className)
      if (e.target?.className === 'ct') {
         setICurrent(true)
      } else {
         setICurrent(false)
      }
   }
   const defaultBatter = {
      balls: 0,
      fours: 0,
      id: 8733,
      name: "KL Rahul",
      nickName: "KL Rahul",
      runs: 54,
      strkRate: "125.58"
   }
   const defaultBowler = {
      economy: "0",
      id: '',
      name: "",
      overs: "",
      runs: 0
   }
   const { miniScore } = props;

   const { batsmanStriker = defaultBatter, batsmanNonStriker = defaultBatter
      , bowlerNonStriker = defaultBowler, bowlerStriker = defaultBowler


   } = miniScore ?? { batsmanStriker: undefined, batsmanNonStriker: undefined, bowlerNonStriker: undefined, bowlerStriker: undefined };


   return (
      <div class="mcContainer">
         {/* Full Scorecard Menu Section */}
         <div class="tabLinkscontainer">
            <ul id="scorecardTabs" class="mcTabs no-scrollbar">
               <li class={`${isCommentry ? 'current' : ''} `} onClick={eventOnLink} ng-class="{'current' : scorecardType == 'international' &amp;&amp; internationalPulseMatches != 1}" ng-show="commentary_menu &amp;&amp; IsMatchLive &amp;&amp; internationalPulseMatches != 1 &amp;&amp; scorecardType == 'international'" data-tab="commentPage" ng-click="scorecardTabsChange('commentPage')"> <span className='ct'>Commentary </span> </li>
               <li class={`${!isCommentry ? 'current' : ''} `} onClick={eventOnLink} ng-class="{'current' : scorecardType != 'international' || internationalPulseMatches == 1}" data-tab="fullScoreContent" ng-click="scorecardTabsChange('fullScoreContent')"> <span className='cd'>Scorecard </span> </li>
               {/* <li class="" ng-show="showVideos" data-tab="videostreamPage" ng-click="scorecardTabsChange('videostreamPage')"> <span>Videos </span> </li>
               <li class="current" ng-show="photostream_menu || scorecardType == 'international'" data-tab="photostreamPage" ng-click="scorecardTabsChange('photostreamPage')"> <span>Photos </span> </li>
               <li class="" data-tab="matchDetailsContent"> <span class="showMobOnly">Match Details </span> </li>
               <li class="ng-hide" ng-show="news_menu" data-tab="newsPage" ng-click="scorecardTabsChange('newsPage')"> <span>News </span> </li> */}
            </ul>
         </div>
         {/* Full Scorecard Section */}
         <div id="fullScoreContent" class={`mcTabContent ${!isCommentry ? 'current' : ''}`} ng-class="{'current' : scorecardType != 'international' || internationalPulseMatches == 1}">
            {/* Panel Header */}
            <div class="scorecardHeader" style={{ display: "none"}}>
               <select class="mcSelectDefault inningsList ng-pristine ng-untouched ng-valid ng-not-empty" data-ng-options="innData.name for innData in inningsList track by innData.innNo" data-ng-model="selectedInnList" data-ng-change="constructScoreCard(matchSummary.MatchID,'dropdownInnChange','innchange')">
                  <option label="Australia 1st Innings" value="1">Australia 1st Innings</option>
                  <option label="India 1st Innings" value="2">India 1st Innings</option>
                  <option label="Australia 2nd Innings" value="3" selected="selected">Australia 2nd Innings</option>
               </select>
               <div class="inningsTabsList">
                  {/* ngRepeat: list in inningsList */}
                  <span class="inningsTabsItemsList ng-scope" ng-repeat="list in inningsList" ng-click="inningsTabsChange(matchSummary.MatchID,'dropdownInnChange','innchange',list.innNo)" ng-class="{'active' : currentInnText == 'Innings'+list.innNo}">
                     <div class="inningsTabsItemsRow"> <span class="inningsTabsTeamName ng-binding">Australia </span> <span class="inningsTabsInnsText ng-binding">1st Inns </span> </div>
                     <div class="inningsTabsItemsRow">
                        {/* ngIf: matchSummary[list.innNo+'FallWickets'] != 10 && matchSummary[list.innNo+'FallWickets'] != '' */} {/* ngIf: matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == ''">480 </span>{/* end ngIf: matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == '' */} {/* ngIf: matchSummary[list.innNo+'RunRate'] != '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'RunRate'] != ''">RR: 2.87 </span>{/* end ngIf: matchSummary[list.innNo+'RunRate'] != '' */}
                     </div>
                  </span>
                  {/* end ngRepeat: list in inningsList */}
                  <span class="inningsTabsItemsList ng-scope" ng-repeat="list in inningsList" ng-click="inningsTabsChange(matchSummary.MatchID,'dropdownInnChange','innchange',list.innNo)" ng-class="{'active' : currentInnText == 'Innings'+list.innNo}">
                     <div class="inningsTabsItemsRow"> <span class="inningsTabsTeamName ng-binding">India </span> <span class="inningsTabsInnsText ng-binding">1st Inns </span> </div>
                     <div class="inningsTabsItemsRow">
                        {/* ngIf: matchSummary[list.innNo+'FallWickets'] != 10 && matchSummary[list.innNo+'FallWickets'] != '' */} {/* ngIf: matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == ''">571 </span>{/* end ngIf: matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == '' */} {/* ngIf: matchSummary[list.innNo+'RunRate'] != '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'RunRate'] != ''">RR: 3.19 </span>{/* end ngIf: matchSummary[list.innNo+'RunRate'] != '' */}
                     </div>
                  </span>
                  {/* end ngRepeat: list in inningsList */}
                  <span class="inningsTabsItemsList ng-scope active" ng-repeat="list in inningsList" ng-click="inningsTabsChange(matchSummary.MatchID,'dropdownInnChange','innchange',list.innNo)" ng-class="{'active' : currentInnText == 'Innings'+list.innNo}">
                     <div class="inningsTabsItemsRow"> <span class="inningsTabsTeamName ng-binding">Australia </span> <span class="inningsTabsInnsText ng-binding">2nd Inns </span> </div>
                     <div class="inningsTabsItemsRow">
                        {/* ngIf: matchSummary[list.innNo+'FallWickets'] != 10 && matchSummary[list.innNo+'FallWickets'] != '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'FallWickets'] != 10 &amp;&amp; matchSummary[list.innNo+'FallWickets'] != ''">3 - 0 </span>{/* end ngIf: matchSummary[list.innNo+'FallWickets'] != 10 && matchSummary[list.innNo+'FallWickets'] != '' */} {/* ngIf: matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == '' */} {/* ngIf: matchSummary[list.innNo+'RunRate'] != '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'RunRate'] != ''">RR: 0.5 </span>{/* end ngIf: matchSummary[list.innNo+'RunRate'] != '' */}
                     </div>
                  </span>
                  {/* end ngRepeat: list in inningsList */}
               </div>
               <span id="printScorecardIcon" ng-show="scorecardPrint == 'true' &amp;&amp; printScoreData.length > 0" title="Print Scorecard" class="ng-hide"></span> {/* ngIf: extras.FallWickets != 10  */}
               <div class="innScore vclickable ng-binding ng-scope" ng-click="playInnVideo(battingCard[0].InningsNo)" ng-if="extras.FallWickets != 10 ">
                  3/0 (6.0 Overs) {/* ngIf: matchSummary.MatchType != 'Multi Day' */}
               </div>
               {/* end ngIf: extras.FallWickets != 10  */} {/* ngIf: extras.FallWickets == 10 */}
            </div>
            {/* Left Panel */}
            <div id="leftPanel" class="col s12 m12 l8">
               <div class="scorecardHeader"  style={{ display: 'none'}}>
                  <span id="printScorecardIcon" ng-show="scorecardPrint == 'true' &amp;&amp; printScoreData.length > 0" title="Print Scorecard" class="ng-hide"></span> {/* ngIf: extras.FallWickets != 10  */}
                  <div class="innScore vclickable ng-binding ng-scope" ng-click="playInnVideo(battingCard[0].InningsNo)" ng-if="extras.FallWickets != 10 ">
                     3/0 (6.0 Overs) {/* ngIf: matchSummary.MatchType != 'Multi Day' */}
                  </div>
                  {/* end ngIf: extras.FallWickets != 10  */} {/* ngIf: extras.FallWickets == 10 */}
               </div>
               {/* BattingCard */}
               <div class="battingCardMC" data-active="">
                  <div class="mcRowHead">
                     <div class="mcGrid_6 tt">Batters </div>
                     <div class="mcGrid_6 alignC">
                        <div class="mcGrid_2 icon-play vclickable" ng-click="playOverAllVideo('runs')">R </div>
                        <div class="mcGrid_2 icon-play vclickable" ng-click="playInnVideo(battingCard[0].InningsNo)">B </div>
                        <div class="mcGrid_2 hide-on-small-only">SR </div>
                        <div class="mcGrid_2 icon-play vclickable" ng-class="{'mcGrid_1' : scorecardType == 'international' &amp;&amp; inningsMediaList.length > 0}" ng-click="playOverAllVideo('fours')">4's </div>
                        <div class="mcGrid_2 icon-play vclickable" ng-class="{'mcGrid_1' : scorecardType == 'international' &amp;&amp; inningsMediaList.length > 0}" ng-click="playOverAllVideo('sixes')">6's </div>
                        {/* ngIf: scorecardType == 'international' && inningsMediaList.length > 0 */} {/* ngIf: !internationalArchive */}
                        {/* <div class="mcGrid_2 ng-scope" ng-if="!internationalArchive"> <span class="select-play-bt viewPlayerDet hide-on-small-only">More </span> 
                  </div> */}
                        {/* end ngIf: !internationalArchive */}
                     </div>
                  </div>
                  {/* Batting Data */} {/* ngRepeat: battingCardResult in battingCard | filter:notEmptyOrNull */}
                  <div class="mcRowData playerWagonBatting ng-scope" ng-repeat="battingCardResult in battingCard | filter:notEmptyOrNull">
                     <div class="mcRowData-Inner">
                        <div class="mcGrid_6 sc-first-row">
                           {/* ngIf: isNotNull(battingCardResult.PlayerImage) */}<img class="ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(battingCardResult.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/slbPvyM5zi16766163481050.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Matthew Kuhnemann " src="https://scores.bcci.tv/matchcentre/playerimages/slbPvyM5zi16766163481050.png" />{/* end ngIf: isNotNull(battingCardResult.PlayerImage) */} {/* ngIf: !isNotNull(battingCardResult.PlayerImage) */}
                           <div class="sc-pnam">
                              <span class="playerName vclickable ng-binding" ng-click="playVideo(battingCardResult.PlayerID,'all')">
                                 {batsmanStriker?.name}  {/* ngIf: !checkMatchEnd(matchSummary.MatchID) && matchSummary.CurrentStrikerID == battingCardResult.PlayerID */}
                                 <icon class="strikerIcon ng-scope" ng-if="!checkMatchEnd(matchSummary.MatchID) &amp;&amp; matchSummary.CurrentStrikerID == battingCardResult.PlayerID"></icon>
                                 {/* end ngIf: !checkMatchEnd(matchSummary.MatchID) && matchSummary.CurrentStrikerID == battingCardResult.PlayerID */}
                              </span>
                              <span class="dismissalSmall vclickable ng-binding pvclickable b__notout" ng-class="{pvclickable : checkVideoclickables('wicket'),b__notout : battingCardResult.OutDesc == 'not out'}" ng-click="playVideo(battingCardResult.PlayerID,'wicket')" ng-bind="battingCardResult.OutDesc">not out</span>
                           </div>
                        </div>
                        <div class="mcGrid_6 alignC plyData">
                           <div class="mcGrid_2 icon-play btRuns vclickable ng-binding novideo" ng-class="{novideo : battingCardResult.Runs=='0'}" ng-click="playVideo(battingCardResult.PlayerID,'runs')" ng-bind="battingCardResult.Runs">{batsmanStriker?.runs}</div>
                           <div class="mcGrid_2 icon-play vclickable ng-binding" ng-class="{novideo : battingCardResult.Balls=='0'}" ng-click="playVideo(battingCardResult.PlayerID,'all')" ng-bind="battingCardResult.Balls">{batsmanStriker?.balls}</div>
                           <div class="mcGrid_2 hide-on-small-only ng-binding" ng-bind="battingCardResult.StrikeRate">{parseInt(batsmanStriker?.strkRate)}</div>
                           <div class="mcGrid_2 icon-play vclickable ng-binding pvclickable novideo" ng-class="{pvclickable : checkVideoclickables('four'),novideo : battingCardResult.Fours=='0','mcGrid_1' : scorecardType == 'international' &amp;&amp; inningsMediaList.length > 0}" ng-click="playVideo(battingCardResult.PlayerID,'four')" ng-bind="battingCardResult.Fours">{batsmanStriker?.fours}</div>
                           <div class="mcGrid_2 icon-play vclickable ng-binding pvclickable novideo" ng-class="{pvclickable : checkVideoclickables('six'),novideo : battingCardResult.Sixes=='0','mcGrid_1' : scorecardType == 'international' &amp;&amp; inningsMediaList.length > 0}" ng-click="playVideo(battingCardResult.PlayerID,'six')" ng-bind="battingCardResult.Sixes">{batsmanStriker?.sixes ?? 0}</div>
                           {/* <div class="mcGrid_2 playerpopup  ng-hide" ng-show="battingCardResult.wicketVideo != undefined &amp;&amp; battingCardResult.wicketVideo.mediaId != undefined &amp;&amp; battingCardResult.wicketVideo.mediaId != '' &amp;&amp; scorecardType == 'international' &amp;&amp; battingCardResult.OutDesc != '' &amp;&amp; battingCardResult.OutDesc != 'not out' &amp;&amp; inningsMediaList.length > 0" data-mediaid="" data-videotitle="" data-description="" data-videoview="" data-videoid=""> <img src="https://www.bcci.tv/assets/images/Play.png" style={{"width":"20px",height:"20px",display:"inline-block",cursor:"pointer;"}} alt="" /> </div> */}
                           {/* <div class="mcGrid_2  ng-hide" ng-show="scorecardType == 'international' &amp;&amp;( battingCardResult.OutDesc == '' || battingCardResult.OutDesc == 'not out' || battingCardResult.wicketVideo.mediaId == '' || battingCardResult.wicketVideo.mediaId == undefined) &amp;&amp; inningsMediaList.length > 0"></div> */}
                           {/* ngIf: !internationalArchive */}
                           {/* <div class="mcGrid_2 viewBatData ng-scope" ng-if="!internationalArchive" ng-click="viewIndvPlayerData(battingCardResult.PlayerID)" id="viewPl_2022-100mb00000001050-7674b6b8ed4e11"> <span class="icon-plus-circled tr-expand viewPlayerDet"></span> </div> */}
                           {/* end ngIf: !internationalArchive */}
                        </div>
                     </div>
                     <div class="mcPlyBat">
                        <div class="perform-graphs">
                           <div class="col s12 m12 l6 no-padding">
                              <ul class="perform-score" ng-class="{noborder : (battingCardResult.BoundaryFrequency == '' || battingCardResult.BoundaryFrequency == 0) &amp;&amp; (battingCardResult.BoundaryPercentage == '' || battingCardResult.BoundaryPercentage == 0) &amp;&amp; (battingCardResult.DotBalls == '' || battingCardResult.DotBalls == 0)}">
                                 {/* ngIf: battingCardResult.BoundaryPercentage != '' && battingCardResult.BoundaryPercentage != 0 */} {/* ngIf: battingCardResult.BoundaryFrequency != '' && battingCardResult.BoundaryFrequency != 0 */} {/* ngIf: battingCardResult.DotBalls != '' && battingCardResult.DotBalls != 0 */}
                                 <li ng-if="battingCardResult.DotBalls != '' &amp;&amp; battingCardResult.DotBalls != 0" class="ng-scope">
                                    {/* ngIf: battingCardResult.DotBalls !='' */}<span class="c3 ng-scope" ng-if="battingCardResult.DotBalls !=''">Dot Balls <i class="ng-binding">18</i> </span>{/* end ngIf: battingCardResult.DotBalls !='' */}
                                 </li>
                                 {/* end ngIf: battingCardResult.DotBalls != '' && battingCardResult.DotBalls != 0 */}
                              </ul>
                              <ul class="perform-score no-border">
                                 {/* ngIf: battingCardResult.DotBallPercentage != '' && battingCardResult.DotBallPercentage != 0 */}
                                 <li ng-if="battingCardResult.DotBallPercentage != '' &amp;&amp; battingCardResult.DotBallPercentage != 0" class="ng-scope">
                                    {/* ngIf: battingCardResult.DotBallPercentage !='' */}<span class="c3 ng-scope" ng-if="battingCardResult.DotBallPercentage !=''">DB % <i class="ng-binding">100.00</i> </span>{/* end ngIf: battingCardResult.DotBallPercentage !='' */}
                                 </li>
                                 {/* end ngIf: battingCardResult.DotBallPercentage != '' && battingCardResult.DotBallPercentage != 0 */} {/* ngIf: battingCardResult.DotBallFrequency != '' && battingCardResult.DotBallFrequency != 0 */}
                                 <li ng-if="battingCardResult.DotBallFrequency != '' &amp;&amp; battingCardResult.DotBallFrequency != 0" class="ng-scope">
                                    {/* ngIf: battingCardResult.DotBallFrequency !='' */}<span class="c4 ng-scope" ng-if="battingCardResult.DotBallFrequency !=''">DB Frequency <i class="ng-binding">1.00</i> </span>{/* end ngIf: battingCardResult.DotBallFrequency !='' */}
                                 </li>
                                 {/* end ngIf: battingCardResult.DotBallFrequency != '' && battingCardResult.DotBallFrequency != 0 */} {/* ngIf: battingCardResult.StrikeRate != '' && battingCardResult.StrikeRate != 0 */}
                              </ul>
                              <div class="perform-bat" data-dimension="82" data-text="38%" data-info="Fast Balls" data-width="4" data-fontsize="12" data-percent="38" data-fgcolor="#15baaa" data-bgcolor="#e1e1e1"></div>
                              <div class="perform-bat" data-dimension="82" data-text="3%" data-info="Spin Balls" data-width="4" data-fontsize="12" data-percent="10" data-fgcolor="#15baaa" data-bgcolor="#e1e1e1"></div>
                              <div class="perform-video hide">
                                 <div class="fl w1 perform-video-title"> Choose your favourite videos of <span class="player-name-dis ng-binding">abhishek reddy </span> </div>
                                 <div class="chooseFavList" data-id="row_bd909005e7b74260"> <span class="favlistItems all" data-val="all">All </span> <span class="favlistItems ones" data-val="ones">1s </span> <span class="favlistItems twos" data-val="twos">2s </span> <span class="favlistItems threes" data-val="threes">3s </span> <span class="favlistItems fours" data-val="fours">4s </span> <span class="favlistItems six" data-val="six">6s </span> </div>
                                 <div class="fl w1"> <span class="favPlayBtn">Play </span> </div>
                                 <span style={{ "display": "none;" }} class="inputLabel playerIndvSelectionPlay"> <i class="icons play-all"></i> </span>
                              </div>
                              <ul class="wagon-points uniform-grid">
                                 <li class="all"> <span class="allP">All </span> </li>
                                 <li class="wc1P"> <span>1s <i class="ng-binding">0</i> </span> </li>
                                 <li class="wc2P"> <span>2s <i class="ng-binding">0</i> </span> </li>
                                 <li class="wc3P"> <span>3s <i class="ng-binding">0</i> </span> </li>
                                 <li class="wc4P"> <span>4s <i class="ng-binding">0</i> </span> </li>
                                 <li class="wc6P"> <span>6s <i class="ng-binding">0</i> </span> </li>
                              </ul>
                              <div class="playAllVideo"> <span class="play--video" ng-click="playVideo(battingCardResult.PlayerID,'all')">Play All </span> </div>
                           </div>
                           <div class="col s12 m12 l6 no-padding">
                              <div class="perform-right" style={{ "text-align": "center", "text-transform": "uppercase", color: "#aaa" }}>
                                 <div class="playerWagonwheelCon">
                                    <div id="2022-100mb00000001050-7674b6b8ed4e11" class="playerWW" style={{ "width": "220px", height: "220px" }}></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col s12 m12 l12 no-padding">
                           {/* ngIf: indvPlayerH2HData.length > 0 */}
                        </div>
                     </div>
                     {/* END .mcRowData */}
                  </div>
                  {/* end ngRepeat: battingCardResult in battingCard | filter:notEmptyOrNull */}
                  <div class="mcRowData playerWagonBatting ng-scope" ng-repeat="battingCardResult in battingCard | filter:notEmptyOrNull">
                     <div class="mcRowData-Inner">
                        <div class="mcGrid_6 sc-first-row">
                           {/* ngIf: isNotNull(battingCardResult.PlayerImage) */}<img class="ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(battingCardResult.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/yOqhwq86Ir167585734037.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Travis Head " src="https://scores.bcci.tv/matchcentre/playerimages/yOqhwq86Ir167585734037.png" />{/* end ngIf: isNotNull(battingCardResult.PlayerImage) */} {/* ngIf: !isNotNull(battingCardResult.PlayerImage) */}
                           <div class="sc-pnam">
                              <span class="playerName vclickable ng-binding" ng-click="playVideo(battingCardResult.PlayerID,'all')">
                                 {batsmanNonStriker?.name}  {/* ngIf: !checkMatchEnd(matchSummary.MatchID) && matchSummary.CurrentStrikerID == battingCardResult.PlayerID */}
                              </span>
                              <span class="dismissalSmall vclickable ng-binding pvclickable b__notout" ng-class="{pvclickable : checkVideoclickables('wicket'),b__notout : battingCardResult.OutDesc == 'not out'}" ng-click="playVideo(battingCardResult.PlayerID,'wicket')" ng-bind="battingCardResult.OutDesc">not out</span>
                           </div>
                        </div>
                        <div class="mcGrid_6 alignC plyData">
                           <div class="mcGrid_2 icon-play btRuns vclickable ng-binding" ng-class="{novideo : battingCardResult.Runs=='0'}" ng-click="playVideo(battingCardResult.PlayerID,'runs')" ng-bind="battingCardResult.Runs">{batsmanNonStriker?.runs}</div>
                           <div class="mcGrid_2 icon-play vclickable ng-binding" ng-class="{novideo : battingCardResult.Balls=='0'}" ng-click="playVideo(battingCardResult.PlayerID,'all')" ng-bind="battingCardResult.Balls">{batsmanNonStriker?.balls}</div>
                           <div class="mcGrid_2 hide-on-small-only ng-binding" ng-bind="battingCardResult.StrikeRate">{parseInt(batsmanNonStriker?.strkRate)}</div>
                           <div class="mcGrid_2 icon-play vclickable ng-binding pvclickable novideo" ng-class="{pvclickable : checkVideoclickables('four'),novideo : battingCardResult.Fours=='0','mcGrid_1' : scorecardType == 'international' &amp;&amp; inningsMediaList.length > 0}" ng-click="playVideo(battingCardResult.PlayerID,'four')" ng-bind="battingCardResult.Fours">{batsmanNonStriker?.fours}</div>
                           <div class="mcGrid_2 icon-play vclickable ng-binding pvclickable novideo" ng-class="{pvclickable : checkVideoclickables('six'),novideo : battingCardResult.Sixes=='0','mcGrid_1' : scorecardType == 'international' &amp;&amp; inningsMediaList.length > 0}" ng-click="playVideo(battingCardResult.PlayerID,'six')" ng-bind="battingCardResult.Sixes">{batsmanNonStriker?.sixes ?? 0}</div>
                           {/* <div class="mcGrid_2 playerpopup  ng-hide" ng-show="battingCardResult.wicketVideo != undefined &amp;&amp; battingCardResult.wicketVideo.mediaId != undefined &amp;&amp; battingCardResult.wicketVideo.mediaId != '' &amp;&amp; scorecardType == 'international' &amp;&amp; battingCardResult.OutDesc != '' &amp;&amp; battingCardResult.OutDesc != 'not out' &amp;&amp; inningsMediaList.length > 0" data-mediaid="" data-videotitle="" data-description="" data-videoview="" data-videoid=""> <img src="https://www.bcci.tv/assets/images/Play.png" style={{ "width":"20px",height:"20px",display:"inline-block",cursor:"pointer"}} alt="" /> </div> */}
                           {/* <div class="mcGrid_2  ng-hide" ng-show="scorecardType == 'international' &amp;&amp;( battingCardResult.OutDesc == '' || battingCardResult.OutDesc == 'not out' || battingCardResult.wicketVideo.mediaId == '' || battingCardResult.wicketVideo.mediaId == undefined) &amp;&amp; inningsMediaList.length > 0"></div> */}
                           {/* ngIf: !internationalArchive */}
                           {/* <div class="mcGrid_2 viewBatData ng-scope" ng-if="!internationalArchive" ng-click="viewIndvPlayerData(battingCardResult.PlayerID)" id="viewPl_2018-100mb00000000037-4e250de6f88a11"> <span class="icon-plus-circled tr-expand viewPlayerDet"></span> </div> */}
                           {/* end ngIf: !internationalArchive */}
                        </div>
                     </div>
                     <div class="mcPlyBat">
                        <div class="perform-graphs">
                           <div class="col s12 m12 l6 no-padding">
                              <ul class="perform-score" ng-class="{noborder : (battingCardResult.BoundaryFrequency == '' || battingCardResult.BoundaryFrequency == 0) &amp;&amp; (battingCardResult.BoundaryPercentage == '' || battingCardResult.BoundaryPercentage == 0) &amp;&amp; (battingCardResult.DotBalls == '' || battingCardResult.DotBalls == 0)}">
                                 {/* ngIf: battingCardResult.BoundaryPercentage != '' && battingCardResult.BoundaryPercentage != 0 */} {/* ngIf: battingCardResult.BoundaryFrequency != '' && battingCardResult.BoundaryFrequency != 0 */} {/* ngIf: battingCardResult.DotBalls != '' && battingCardResult.DotBalls != 0 */}
                                 <li ng-if="battingCardResult.DotBalls != '' &amp;&amp; battingCardResult.DotBalls != 0" class="ng-scope">
                                    {/* ngIf: battingCardResult.DotBalls !='' */}<span class="c3 ng-scope" ng-if="battingCardResult.DotBalls !=''">Dot Balls <i class="ng-binding">15</i> </span>{/* end ngIf: battingCardResult.DotBalls !='' */}
                                 </li>
                                 {/* end ngIf: battingCardResult.DotBalls != '' && battingCardResult.DotBalls != 0 */}
                              </ul>
                              <ul class="perform-score no-border">
                                 {/* ngIf: battingCardResult.DotBallPercentage != '' && battingCardResult.DotBallPercentage != 0 */}
                                 <li ng-if="battingCardResult.DotBallPercentage != '' &amp;&amp; battingCardResult.DotBallPercentage != 0" class="ng-scope">
                                    {/* ngIf: battingCardResult.DotBallPercentage !='' */}<span class="c3 ng-scope" ng-if="battingCardResult.DotBallPercentage !=''">DB % <i class="ng-binding">83.33</i> </span>{/* end ngIf: battingCardResult.DotBallPercentage !='' */}
                                 </li>
                                 {/* end ngIf: battingCardResult.DotBallPercentage != '' && battingCardResult.DotBallPercentage != 0 */} {/* ngIf: battingCardResult.DotBallFrequency != '' && battingCardResult.DotBallFrequency != 0 */}
                                 <li ng-if="battingCardResult.DotBallFrequency != '' &amp;&amp; battingCardResult.DotBallFrequency != 0" class="ng-scope">
                                    {/* ngIf: battingCardResult.DotBallFrequency !='' */}<span class="c4 ng-scope" ng-if="battingCardResult.DotBallFrequency !=''">DB Frequency <i class="ng-binding">1.20</i> </span>{/* end ngIf: battingCardResult.DotBallFrequency !='' */}
                                 </li>
                                 {/* end ngIf: battingCardResult.DotBallFrequency != '' && battingCardResult.DotBallFrequency != 0 */} {/* ngIf: battingCardResult.StrikeRate != '' && battingCardResult.StrikeRate != 0 */}
                                 <li ng-if="battingCardResult.StrikeRate != '' &amp;&amp; battingCardResult.StrikeRate != 0" class="ng-scope">
                                    {/* ngIf: battingCardResult.StrikeRate !='' */}<span class="c4 ng-scope" ng-if="battingCardResult.StrikeRate !=''">Strike Rate <i class="ng-binding">16.67</i> </span>{/* end ngIf: battingCardResult.StrikeRate !='' */}
                                 </li>
                                 {/* end ngIf: battingCardResult.StrikeRate != '' && battingCardResult.StrikeRate != 0 */}
                              </ul>
                              <div class="perform-bat" data-dimension="82" data-text="38%" data-info="Fast Balls" data-width="4" data-fontsize="12" data-percent="38" data-fgcolor="#15baaa" data-bgcolor="#e1e1e1"></div>
                              <div class="perform-bat" data-dimension="82" data-text="3%" data-info="Spin Balls" data-width="4" data-fontsize="12" data-percent="10" data-fgcolor="#15baaa" data-bgcolor="#e1e1e1"></div>
                              <div class="perform-video hide">
                                 <div class="fl w1 perform-video-title"> Choose your favourite videos of <span class="player-name-dis ng-binding">abhishek reddy </span> </div>
                                 <div class="chooseFavList" data-id="row_bd909005e7b74260"> <span class="favlistItems all" data-val="all">All </span> <span class="favlistItems ones" data-val="ones">1s </span> <span class="favlistItems twos" data-val="twos">2s </span> <span class="favlistItems threes" data-val="threes">3s </span> <span class="favlistItems fours" data-val="fours">4s </span> <span class="favlistItems six" data-val="six">6s </span> </div>
                                 <div class="fl w1"> <span class="favPlayBtn">Play </span> </div>
                                 <span style={{ "display": "none" }} class="inputLabel playerIndvSelectionPlay"> <i class="icons play-all"></i> </span>
                              </div>
                              <ul class="wagon-points uniform-grid">
                                 <li class="all"> <span class="allP">All </span> </li>
                                 <li class="wc1P"> <span>1s <i class="ng-binding">3</i> </span> </li>
                                 <li class="wc2P"> <span>2s <i class="ng-binding">0</i> </span> </li>
                                 <li class="wc3P"> <span>3s <i class="ng-binding">0</i> </span> </li>
                                 <li class="wc4P"> <span>4s <i class="ng-binding">0</i> </span> </li>
                                 <li class="wc6P"> <span>6s <i class="ng-binding">0</i> </span> </li>
                              </ul>
                              <div class="playAllVideo"> <span class="play--video" ng-click="playVideo(battingCardResult.PlayerID,'all')">Play All </span> </div>
                           </div>
                           <div class="col s12 m12 l6 no-padding">
                              <div class="perform-right" style={{ "text-align": 'center', textTransform: "uppercase", color: "#aaa" }}>
                                 <div class="playerWagonwheelCon">
                                    <div id="2018-100mb00000000037-4e250de6f88a11" class="playerWW" style={{ "width": "220px", height: "220px;" }}></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col s12 m12 l12 no-padding">
                           {/* ngIf: indvPlayerH2HData.length > 0 */}
                        </div>
                     </div>
                     {/* END .mcRowData */}
                  </div>
                  {/* end ngRepeat: battingCardResult in battingCard | filter:notEmptyOrNull */} {/* Extra & Total Score */}
                  <div class="mcExtras">
                     <div class="mcGrid_6">
                        <span class="ng-binding">Run Rate </span>
                        <span>
                           {/* ( <a class="ng-binding">b 0,</a> <a class="ng-binding">lb 0,</a> <a class="ng-binding">w 0,</a> <a class="ng-binding">nb 0</a> ngIf: extras.Penalty != undefined && extras.Penalty != '')  */}
                        </span>
                     </div>
                     <div class="mcGrid_6 alignC vclickable" ng-click="playInnExtras('all',battingCard[0].InningsNo)">
                        <div class="mcGrid_2 icon-play extRuns alignC ng-binding" ng-bind="extras.TotalExtras">{miniScore?.crr}</div>
                     </div>
                  </div>
                  <div class="mcTotal">
                     <div class="mcGrid_6"> <span class="ng-binding">Total </span> </div>
                     <div class="mcGrid_6 alignR">
                        {/*<span class="mcGrid_2 ng-binding vclickable" ng-click="playOverAllVideo('runs')"><span class="icon-play"></span>{{extras.FallScore}} </span> */} {/* ngIf: extras.FallWickets != 10  */}
                        <div class="innScore vclickable ng-binding ng-scope" ng-click="playInnVideo(battingCard[0].InningsNo)" ng-if="extras.FallWickets != 10 ">
                           {miniScore?.inningsScores?.[0]?.inningsScore?.[0]?.runs} / {miniScore?.inningsScores?.[0]?.inningsScore?.[0]?.wickets}
                           &nbsp; ({miniScore?.inningsScores?.[0]?.inningsScore?.[0]?.overs})
                           &nbsp; Overs
                           {/* ngIf: matchSummary.MatchType != 'Multi Day' */}
                        </div>
                        {/* end ngIf: extras.FallWickets != 10  */} {/* ngIf: extras.FallWickets == 10 */}
                     </div>
                  </div>
               </div>
               {/* Did Not Batting */} {/* ngIf: didNotBatList.length!=0 */}
               <div class="mcNotBat ng-scope" ng-if="didNotBatList.length!=0" style={{ display: 'none' }}>
                  {/* ngIf: IsMatchEnd == 1 */} {/* ngIf: IsMatchEnd == 0 */}
                  <h4 ng-if="IsMatchEnd == 0" class="ng-scope">Yet To Bat</h4>
                  {/* end ngIf: IsMatchEnd == 0 */} {/* ngRepeat: (key,list) in didNotBatList */}
                  <span ng-repeat="(key,list) in didNotBatList" class="ng-binding ng-scope">
                     Usman Khawaja  {/* ngIf: key!=didNotBatList.length-1 */}<span ng-if="key!=didNotBatList.length-1" class="ng-scope"> , </span>{/* end ngIf: key!=didNotBatList.length-1 */}
                  </span>
                  {/* end ngRepeat: (key,list) in didNotBatList */}
                  <span ng-repeat="(key,list) in didNotBatList" class="ng-binding ng-scope">
                     Marnus Labuschagne  {/* ngIf: key!=didNotBatList.length-1 */}<span ng-if="key!=didNotBatList.length-1" class="ng-scope"> , </span>{/* end ngIf: key!=didNotBatList.length-1 */}
                  </span>
                  {/* end ngRepeat: (key,list) in didNotBatList */}
                  <span ng-repeat="(key,list) in didNotBatList" class="ng-binding ng-scope">
                     Steven Smith (c) {/* ngIf: key!=didNotBatList.length-1 */}<span ng-if="key!=didNotBatList.length-1" class="ng-scope"> , </span>{/* end ngIf: key!=didNotBatList.length-1 */}
                  </span>
                  {/* end ngRepeat: (key,list) in didNotBatList */}
                  <span ng-repeat="(key,list) in didNotBatList" class="ng-binding ng-scope">
                     Peter Handscomb  {/* ngIf: key!=didNotBatList.length-1 */}<span ng-if="key!=didNotBatList.length-1" class="ng-scope"> , </span>{/* end ngIf: key!=didNotBatList.length-1 */}
                  </span>
                  {/* end ngRepeat: (key,list) in didNotBatList */}
                  <span ng-repeat="(key,list) in didNotBatList" class="ng-binding ng-scope">
                     Cameron Green  {/* ngIf: key!=didNotBatList.length-1 */}<span ng-if="key!=didNotBatList.length-1" class="ng-scope"> , </span>{/* end ngIf: key!=didNotBatList.length-1 */}
                  </span>
                  {/* end ngRepeat: (key,list) in didNotBatList */}
                  <span ng-repeat="(key,list) in didNotBatList" class="ng-binding ng-scope">
                     Alex Carey (wk) {/* ngIf: key!=didNotBatList.length-1 */}<span ng-if="key!=didNotBatList.length-1" class="ng-scope"> , </span>{/* end ngIf: key!=didNotBatList.length-1 */}
                  </span>
                  {/* end ngRepeat: (key,list) in didNotBatList */}
                  <span ng-repeat="(key,list) in didNotBatList" class="ng-binding ng-scope">
                     Mitchell Starc  {/* ngIf: key!=didNotBatList.length-1 */}<span ng-if="key!=didNotBatList.length-1" class="ng-scope"> , </span>{/* end ngIf: key!=didNotBatList.length-1 */}
                  </span>
                  {/* end ngRepeat: (key,list) in didNotBatList */}
                  <span ng-repeat="(key,list) in didNotBatList" class="ng-binding ng-scope">
                     Nathan Lyon  {/* ngIf: key!=didNotBatList.length-1 */}<span ng-if="key!=didNotBatList.length-1" class="ng-scope"> , </span>{/* end ngIf: key!=didNotBatList.length-1 */}
                  </span>
                  {/* end ngRepeat: (key,list) in didNotBatList */}
                  <span ng-repeat="(key,list) in didNotBatList" class="ng-binding ng-scope">
                     Todd Murphy  {/* ngIf: key!=didNotBatList.length-1 */}
                  </span>
                  {/* end ngRepeat: (key,list) in didNotBatList */}
               </div>
               {/* end ngIf: didNotBatList.length!=0 */} {/* Fall of Wickets */} {/* ngIf: fallofWickets.length>0 */} {/* BowlingCard */}
               <div class="bowlingCardMC">
                  <div class="mcRowHead">
                     <div class="mcGrid_6 tt">Bowlers </div>
                     <div class="mcGrid_6 alignC">
                        <div class="mcGrid_2 icon-play mini-score-bowl" >O </div>
                        {/* ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                        {
                           bowlerStriker?.med ? (<div class="mcGrid_2 icon-play  hide-on-small-only ng-scope mini-score-bowl" >Md </div>) : null 
                        }
                        
                        {/* end ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                        <div class="mcGrid_2 icon-play mini-score-bowl" >R </div>
                        <div class="mcGrid_2 icon-play mini-score-bowl" >WKT </div>
                        {/* ngIf: matchSummary.MatchType == 'Twenty20 Match' */}
                        <div class="mcGrid_2 hide-on-small-only">ECO </div>
                        {/* <div class="mcGrid_2"> <span class="select-play-bt viewPlayerDet hide-on-small-only">More </span> </div> */}
                     </div>
                  </div>
                  {/* ngRepeat: bowlingCardResult in bowlingCard */}{/* ngIf: bowlingCardResult.PlayerName != '' && bowlingCardResult.PlayerName != '0' */}
                  <div class="mcRowData playerWagonBowling ng-scope" ng-repeat="bowlingCardResult in bowlingCard" ng-if="bowlingCardResult.PlayerName != '' &amp;&amp; bowlingCardResult.PlayerName != '0'">
                     <div class="mcRowData-Inner">
                        <div class="mcGrid_6 sc-first-row " ng-click="playVideo(bowlingCardResult.PlayerID,'bowlerall')">
                           {/* ngIf: isNotNull(bowlingCardResult.PlayerImage) */}<img class="ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(bowlingCardResult.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/bTLfoujBIP167585701745.png" onerror="this.src = basePath+'images/player-thumb.jpg';" title="" alt="" src="https://scores.bcci.tv/matchcentre/playerimages/bTLfoujBIP167585701745.png" />{/* end ngIf: isNotNull(bowlingCardResult.PlayerImage) */} {/* ngIf: !isNotNull(bowlingCardResult.PlayerImage) */}
                           <div class="sc-pnam">
                              <span class="playerName ng-binding">
                                 {bowlerStriker?.name} {/* ngIf: !checkMatchEnd(matchSummary.MatchID) && matchSummary.CurrentBowlerID == bowlingCardResult.PlayerID */}
                              </span>
                           </div>
                        </div>
                        <div class="mcGrid_6 alignC plyData">
                           <div class="mcGrid_2 icon-play btRuns vclickable ng-binding" >{bowlerStriker?.overs}</div>
                           {/* ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                           {
                              bowlerStriker?.med ? ( <div class="mcGrid_2 icon-play vclickable hide-on-small-only ng-binding ng-scope" >{bowlerStriker?.med}</div>) : null
                           }
                          
                           {/* end ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                           <div class="mcGrid_2 icon-play vclickable ng-binding" >{bowlerStriker?.runs}</div>
                           <div class="mcGrid_2 icon-play vclickable ng-binding pvclickable novideo" >{bowlerStriker?.wickets ?? 0}</div>
                           {/* ngIf: matchSummary.MatchType == 'Twenty20 Match' */}
                           <div class="mcGrid_2 hide-on-small-only ng-binding" ng-bind="bowlingCardResult.Economy">{bowlerStriker?.economy}</div>
                           <div class="mcGrid_2 viewBowData" id="viewBl_2018-100mb00000000045-f658f1b6f88a11" ng-click="viewIndvBowlerData(bowlingCardResult.PlayerID)"> <span class="icon-plus-circled tr-expand viewPlayerDet"></span> </div>
                        </div>
                     </div>
                     <div class="mcPlyBow">
                        <div class="mcXL-12 mcLA-12 mcMED-12 mcSML-12 mcColumn no-padding">
                           <ul class="perform-score">
                              {/* ngIf: bowlingCardResult.Wides !='' && bowlingCardResult.Wides !=0 */} {/* ngIf: bowlingCardResult.NoBalls !='' && bowlingCardResult.NoBalls !=0 */} {/* ngIf: bowlingCardResult.BdryPercent !='' && bowlingCardResult.BdryPercent !=0 */} {/* ngIf: bowlingCardResult.BdryFreq !='' && bowlingCardResult.BdryFreq !=0 */} {/* ngIf: bowlingCardResult.DBPercent !='' && bowlingCardResult.DBPercent !=0 */}
                              <li ng-if="bowlingCardResult.DBPercent !='' &amp;&amp; bowlingCardResult.DBPercent !=0" class="ng-scope"> <span class="c3 ng-scope"> <i class="ng-binding">94.44</i> DB% </span> </li>
                              {/* end ngIf: bowlingCardResult.DBPercent !='' && bowlingCardResult.DBPercent !=0 */} {/* ngIf: bowlingCardResult.DBFrequency !='' && bowlingCardResult.DBFrequency !=0 */}
                              <li ng-if="bowlingCardResult.DBFrequency !='' &amp;&amp; bowlingCardResult.DBFrequency !=0" class="ng-scope"> <span class="c3 ng-scope"> <i class="ng-binding">1.06</i> DB Frequency </span> </li>
                              {/* end ngIf: bowlingCardResult.DBFrequency !='' && bowlingCardResult.DBFrequency !=0 */} {/* ngIf: bowlingCardResult.Economy !='' && bowlingCardResult.Economy !=0 */}
                              <li ng-if="bowlingCardResult.Economy !='' &amp;&amp; bowlingCardResult.Economy !=0" class="ng-scope"> <span class="c3 ng-scope"> <i class="ng-binding">0.33</i> Economy </span> </li>
                              {/* end ngIf: bowlingCardResult.Economy !='' && bowlingCardResult.Economy !=0 */}
                           </ul>
                           <div class="perform-bat" data-dimension="82" data-text="38%" data-info="Fast Balls" data-width="4" data-fontsize="12" data-percent="38" data-fgcolor="#15baaa" data-bgcolor="#e1e1e1"></div>
                           <div class="perform-bat" data-dimension="82" data-text="3%" data-info="Spin Balls" data-width="4" data-fontsize="12" data-percent="10" data-fgcolor="#15baaa" data-bgcolor="#e1e1e1"></div>
                           <div class="perform-video hide">
                              <div class="fl w1 perform-video-title"> Choose your favourite videos of <span class="player-name-dis ng-binding">abhishek reddy </span> </div>
                              <div class="chooseFavList" data-id="row_bd909005e7b74260"> <span class="favlistItems all" data-val="all">All </span> <span class="favlistItems ones" data-val="ones">1s </span> <span class="favlistItems twos" data-val="twos">2s </span> <span class="favlistItems threes" data-val="threes">3s </span> <span class="favlistItems fours" data-val="fours">4s </span> <span class="favlistItems six" data-val="six">6s </span> </div>
                              <div class="fl w1"> <span class="favPlayBtn">Play </span> </div>
                              <span style={{ "display": "none;" }} class="inputLabel playerIndvSelectionPlay"> <i class="icons play-all"></i> </span>
                           </div>
                        </div>
                        <div class="mcXL-12 mcLA-12 mcMED-12 mcSML-12 mcColumn no-padding">
                           {/* ngIf: indvBowH2HData.length > 0 */}
                        </div>
                     </div>
                  </div>
                  {/* end ngIf: bowlingCardResult.PlayerName != '' && bowlingCardResult.PlayerName != '0' */}{/* end ngRepeat: bowlingCardResult in bowlingCard */}{/* ngIf: bowlingCardResult.PlayerName != '' && bowlingCardResult.PlayerName != '0' */}
                  <div class="mcRowData playerWagonBowling ng-scope" ng-repeat="bowlingCardResult in bowlingCard" ng-if="bowlingCardResult.PlayerName != '' &amp;&amp; bowlingCardResult.PlayerName != '0'">
                     <div class="mcRowData-Inner">
                        <div class="mcGrid_6 sc-first-row vclickable" ng-click="playVideo(bowlingCardResult.PlayerID,'bowlerall')">
                           {/* ngIf: isNotNull(bowlingCardResult.PlayerImage) */}<img class="ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(bowlingCardResult.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/WCzNz6fFDp167585695146.png" onerror="this.src = basePath+'images/player-thumb.jpg';" title="" alt="" src="https://scores.bcci.tv/matchcentre/playerimages/WCzNz6fFDp167585695146.png" />{/* end ngIf: isNotNull(bowlingCardResult.PlayerImage) */} {/* ngIf: !isNotNull(bowlingCardResult.PlayerImage) */}
                           <div class="sc-pnam">
                              <span class="playerName ng-binding">
                                 {bowlerNonStriker?.name} {/* ngIf: !checkMatchEnd(matchSummary.MatchID) && matchSummary.CurrentBowlerID == bowlingCardResult.PlayerID */}
                              </span>
                           </div>
                        </div>
                        <div class="mcGrid_6 alignC plyData">
                           <div class="mcGrid_2 icon-play btRuns vclickable ng-binding">{bowlerNonStriker?.overs}</div>
                           {/* ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                           
                           {/* end ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                           {
                              bowlerNonStriker?.med ? (<div class="mcGrid_2 icon-play vclickable hide-on-small-only ng-binding ng-scope" ng-class="{novideo : bowlingCardResult.Maidens == '0'}" ng-if="matchSummary.MatchType != 'Twenty20 Match'" ng-click="playVideo(bowlingCardResult.PlayerID,'maiden')" ng-bind="bowlingCardResult.Maidens">{bowlerNonStriker?.med}</div>) : null
                           }
                           <div class="mcGrid_2 icon-play vclickable ng-binding" ng-class="{novideo : bowlingCardResult.Runs == '0'}" ng-click="playVideo(bowlingCardResult.PlayerID,'runsconceded')" ng-bind="bowlingCardResult.Runs">{bowlerNonStriker?.runs}</div>
                           <div class="mcGrid_2 icon-play vclickable ng-binding pvclickable novideo" ng-click="playVideo(bowlingCardResult.PlayerID,'wicketstaken')" ng-class="{pvclickable : checkVideoclickables('wicket'),novideo : bowlingCardResult.Wickets == '0'}" ng-bind="bowlingCardResult.Wickets">{bowlerNonStriker?.wickets ?? 0}</div>
                           {/* ngIf: matchSummary.MatchType == 'Twenty20 Match' */}
                           <div class="mcGrid_2 hide-on-small-only ng-binding" ng-bind="bowlingCardResult.Economy">0.5</div>
                           <div class="mcGrid_2 viewBowData" id="viewBl_2018-100mb00000000046-06b5ba89f88b11" ng-click="viewIndvBowlerData(bowlingCardResult.PlayerID)"> <span class="icon-plus-circled tr-expand viewPlayerDet"></span> </div>
                        </div>
                     </div>
                     <div class="mcPlyBow">
                        <div class="mcXL-12 mcLA-12 mcMED-12 mcSML-12 mcColumn no-padding">
                           <ul class="perform-score">
                              {/* ngIf: bowlingCardResult.Wides !='' && bowlingCardResult.Wides !=0 */} {/* ngIf: bowlingCardResult.NoBalls !='' && bowlingCardResult.NoBalls !=0 */} {/* ngIf: bowlingCardResult.BdryPercent !='' && bowlingCardResult.BdryPercent !=0 */} {/* ngIf: bowlingCardResult.BdryFreq !='' && bowlingCardResult.BdryFreq !=0 */} {/* ngIf: bowlingCardResult.DBPercent !='' && bowlingCardResult.DBPercent !=0 */}
                              <li ng-if="bowlingCardResult.DBPercent !='' &amp;&amp; bowlingCardResult.DBPercent !=0" class="ng-scope"> <span class="c3 ng-scope"> <i class="ng-binding">91.67</i> DB% </span> </li>
                              {/* end ngIf: bowlingCardResult.DBPercent !='' && bowlingCardResult.DBPercent !=0 */} {/* ngIf: bowlingCardResult.DBFrequency !='' && bowlingCardResult.DBFrequency !=0 */}
                              <li ng-if="bowlingCardResult.DBFrequency !='' &amp;&amp; bowlingCardResult.DBFrequency !=0" class="ng-scope"> <span class="c3 ng-scope"> <i class="ng-binding">1.09</i> DB Frequency </span> </li>
                              {/* end ngIf: bowlingCardResult.DBFrequency !='' && bowlingCardResult.DBFrequency !=0 */} {/* ngIf: bowlingCardResult.Economy !='' && bowlingCardResult.Economy !=0 */}
                              <li ng-if="bowlingCardResult.Economy !='' &amp;&amp; bowlingCardResult.Economy !=0" class="ng-scope"> <span class="c3 ng-scope"> <i class="ng-binding">0.5</i> Economy </span> </li>
                              {/* end ngIf: bowlingCardResult.Economy !='' && bowlingCardResult.Economy !=0 */}
                           </ul>
                           <div class="perform-bat" data-dimension="82" data-text="38%" data-info="Fast Balls" data-width="4" data-fontsize="12" data-percent="38" data-fgcolor="#15baaa" data-bgcolor="#e1e1e1"></div>
                           <div class="perform-bat" data-dimension="82" data-text="3%" data-info="Spin Balls" data-width="4" data-fontsize="12" data-percent="10" data-fgcolor="#15baaa" data-bgcolor="#e1e1e1"></div>
                           <div class="perform-video hide">
                              <div class="fl w1 perform-video-title"> Choose your favourite videos of <span class="player-name-dis ng-binding">abhishek reddy </span> </div>
                              <div class="chooseFavList" data-id="row_bd909005e7b74260"> <span class="favlistItems all" data-val="all">All </span> <span class="favlistItems ones" data-val="ones">1s </span> <span class="favlistItems twos" data-val="twos">2s </span> <span class="favlistItems threes" data-val="threes">3s </span> <span class="favlistItems fours" data-val="fours">4s </span> <span class="favlistItems six" data-val="six">6s </span> </div>
                              <div class="fl w1"> <span class="favPlayBtn">Play </span> </div>

                           </div>
                        </div>
                        <div class="mcXL-12 mcLA-12 mcMED-12 mcSML-12 mcColumn no-padding">
                           {/* ngIf: indvBowH2HData.length > 0 */}
                        </div>
                     </div>
                  </div>
                  {/* end ngIf: bowlingCardResult.PlayerName != '' && bowlingCardResult.PlayerName != '0' */}{/* end ngRepeat: bowlingCardResult in bowlingCard */}{/* ngIf: bowlingCardResult.PlayerName != '' && bowlingCardResult.PlayerName != '0' */}
                  <div class="mcRowData playerWagonBowling ng-scope" ng-repeat="bowlingCardResult in bowlingCard" ng-if="bowlingCardResult.PlayerName != '' &amp;&amp; bowlingCardResult.PlayerName != '0'" style={{ display:'none'}}>
                     <div class="mcRowData-Inner">
                        <div class="mcGrid_6 sc-first-row vclickable" ng-click="playVideo(bowlingCardResult.PlayerID,'bowlerall')">
                           {/* ngIf: isNotNull(bowlingCardResult.PlayerImage) */}<img class="ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(bowlingCardResult.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/UA4od4di5h167585700047.png" onerror="this.src = basePath+'images/player-thumb.jpg';" title="" alt="" src="https://scores.bcci.tv/matchcentre/playerimages/UA4od4di5h167585700047.png" />{/* end ngIf: isNotNull(bowlingCardResult.PlayerImage) */} {/* ngIf: !isNotNull(bowlingCardResult.PlayerImage) */}
                           <div class="sc-pnam">
                              <span class="playerName ng-binding">
                                 Mohammad Shami {/* ngIf: !checkMatchEnd(matchSummary.MatchID) && matchSummary.CurrentBowlerID == bowlingCardResult.PlayerID */}
                                 <icon class="currentBowlerIcon ng-scope" ng-if="!checkMatchEnd(matchSummary.MatchID) &amp;&amp; matchSummary.CurrentBowlerID == bowlingCardResult.PlayerID"></icon>
                                 {/* end ngIf: !checkMatchEnd(matchSummary.MatchID) && matchSummary.CurrentBowlerID == bowlingCardResult.PlayerID */}
                              </span>
                           </div>
                        </div>
                        <div class="mcGrid_6 alignC plyData">
                           <div class="mcGrid_2 icon-play btRuns vclickable ng-binding" ng-click="playVideo(bowlingCardResult.PlayerID,'overs')" ng-class="{novideo : bowlingCardResult.Overs == '0'}" ng-bind="bowlingCardResult.Overs">1</div>
                           {/* ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                           <div class="mcGrid_2 icon-play vclickable hide-on-small-only ng-binding ng-scope novideo" ng-class="{novideo : bowlingCardResult.Maidens == '0'}" ng-if="matchSummary.MatchType != 'Twenty20 Match'" ng-click="playVideo(bowlingCardResult.PlayerID,'maiden')" ng-bind="bowlingCardResult.Maidens">0</div>
                           {/* end ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                           <div class="mcGrid_2 icon-play vclickable ng-binding" ng-class="{novideo : bowlingCardResult.Runs == '0'}" ng-click="playVideo(bowlingCardResult.PlayerID,'runsconceded')" ng-bind="bowlingCardResult.Runs">1</div>
                           <div class="mcGrid_2 icon-play vclickable ng-binding pvclickable novideo" ng-click="playVideo(bowlingCardResult.PlayerID,'wicketstaken')" ng-class="{pvclickable : checkVideoclickables('wicket'),novideo : bowlingCardResult.Wickets == '0'}" ng-bind="bowlingCardResult.Wickets">0</div>
                           {/* ngIf: matchSummary.MatchType == 'Twenty20 Match' */}
                           <div class="mcGrid_2 hide-on-small-only ng-binding" ng-bind="bowlingCardResult.Economy">1</div>
                           <div class="mcGrid_2 viewBowData" id="viewBl_2018-100mb00000000047-1bfc8ff2f88b11" ng-click="viewIndvBowlerData(bowlingCardResult.PlayerID)"> <span class="icon-plus-circled tr-expand viewPlayerDet"></span> </div>
                        </div>
                     </div>
                     <div class="mcPlyBow">
                        <div class="mcXL-12 mcLA-12 mcMED-12 mcSML-12 mcColumn no-padding">
                           <ul class="perform-score">
                              {/* ngIf: bowlingCardResult.Wides !='' && bowlingCardResult.Wides !=0 */} {/* ngIf: bowlingCardResult.NoBalls !='' && bowlingCardResult.NoBalls !=0 */} {/* ngIf: bowlingCardResult.BdryPercent !='' && bowlingCardResult.BdryPercent !=0 */} {/* ngIf: bowlingCardResult.BdryFreq !='' && bowlingCardResult.BdryFreq !=0 */} {/* ngIf: bowlingCardResult.DBPercent !='' && bowlingCardResult.DBPercent !=0 */}
                              <li ng-if="bowlingCardResult.DBPercent !='' &amp;&amp; bowlingCardResult.DBPercent !=0" class="ng-scope"> <span class="c3 ng-scope"> <i class="ng-binding">83.33</i> DB% </span> </li>
                              {/* end ngIf: bowlingCardResult.DBPercent !='' && bowlingCardResult.DBPercent !=0 */} {/* ngIf: bowlingCardResult.DBFrequency !='' && bowlingCardResult.DBFrequency !=0 */}
                              <li ng-if="bowlingCardResult.DBFrequency !='' &amp;&amp; bowlingCardResult.DBFrequency !=0" class="ng-scope"> <span class="c3 ng-scope"> <i class="ng-binding">1.20</i> DB Frequency </span> </li>
                              {/* end ngIf: bowlingCardResult.DBFrequency !='' && bowlingCardResult.DBFrequency !=0 */} {/* ngIf: bowlingCardResult.Economy !='' && bowlingCardResult.Economy !=0 */}
                              <li ng-if="bowlingCardResult.Economy !='' &amp;&amp; bowlingCardResult.Economy !=0" class="ng-scope"> <span class="c3 ng-scope"> <i class="ng-binding">1</i> Economy </span> </li>
                              {/* end ngIf: bowlingCardResult.Economy !='' && bowlingCardResult.Economy !=0 */}
                           </ul>
                           <div class="perform-bat" data-dimension="82" data-text="38%" data-info="Fast Balls" data-width="4" data-fontsize="12" data-percent="38" data-fgcolor="#15baaa" data-bgcolor="#e1e1e1"></div>
                           <div class="perform-bat" data-dimension="82" data-text="3%" data-info="Spin Balls" data-width="4" data-fontsize="12" data-percent="10" data-fgcolor="#15baaa" data-bgcolor="#e1e1e1"></div>
                           <div class="perform-video hide">
                              <div class="fl w1 perform-video-title"> Choose your favourite videos of <span class="player-name-dis ng-binding">abhishek reddy </span> </div>
                              <div class="chooseFavList" data-id="row_bd909005e7b74260"> <span class="favlistItems all" data-val="all">All </span> <span class="favlistItems ones" data-val="ones">1s </span> <span class="favlistItems twos" data-val="twos">2s </span> <span class="favlistItems threes" data-val="threes">3s </span> <span class="favlistItems fours" data-val="fours">4s </span> <span class="favlistItems six" data-val="six">6s </span> </div>
                              <div class="fl w1"> <span class="favPlayBtn">Play </span> </div>

                           </div>
                        </div>
                        <div class="mcXL-12 mcLA-12 mcMED-12 mcSML-12 mcColumn no-padding">
                           {/* ngIf: indvBowH2HData.length > 0 */}
                        </div>
                     </div>
                  </div>
                  {/* end ngIf: bowlingCardResult.PlayerName != '' && bowlingCardResult.PlayerName != '0' */}{/* end ngRepeat: bowlingCardResult in bowlingCard */}
               </div>
               {/* END BowlingCard */} {/* Partnership Chart */}
               <div class="partnerChart">
                  <h4 class="performHeader no-padding">Partnership Chart</h4>
                  <ul class="partnerContent">
                     {/* ngRepeat: data in PartnerShipRuns */}
                     <li ng-repeat="data in PartnerShipRuns" class="ng-scope">
                        <div class="partners-name vclickable" ng-click="playPartnership('striker',data.StrikerID,data.NonStrikerID)"> <span class="prName ng-binding">{ batsmanStriker?.name} </span> <span class="prScore ng-binding">0 <i class="ng-binding">(18)</i> </span> </div>
                        <div class="parters-chart">
                           <div class="prTot vclickable" ng-click="playPartnership('all',data.StrikerID,data.NonStrikerID)">Partnership - <span class="ng-binding">{ miniScore?.partnership} </span> </div>
                           <div class="bar-wrap">
                              <div class="indv-bar hrz-bg1" style={{ "width": "0%" }}></div>
                              {/* ngIf: data.ExtraWid != 0 */}
                              <div class="indv-bar hrz-bg2" style={{ "width": "6%" }}></div>
                           </div>
                           <div class="prExtra">Extras - <span class="vclickable ng-binding" ng-click="playPartnership('extras',data.StrikerID,data.NonStrikerID)">0 </span> </div>
                        </div>
                        <div class="partners-name vclickable" ng-click="playPartnership('nonstriker',data.StrikerID,data.NonStrikerID)"> <span class="prName ng-binding">T{batsmanNonStriker?.name} </span> <span class="prScore ng-binding">3 <i class="ng-binding">(18)</i> </span> </div>
                     </li>
                     {/* end ngRepeat: data in PartnerShipRuns */}
                  </ul>
               </div>
            </div>
            {/* END Left Panel */} {/* Right Panel */}
            <div id="rightPanel" class="col s12 m12 l4">
               {/* ngIf: ((preMatchCommentary != undefined && preMatchCommentary !='') || (matchSummary.PreMatchCommentary != undefined && matchSummary.PreMatchCommentary !='')) && (matchInn == 1 || matchInn == '') */}
               <div class="widget matchDetails hideMobOnly">
                  <h4 class="widgetTitle">Match Details</h4>
                  <div class="widgetContent" style={{ "overflow": "hidden", outline: "none" }} tabindex="1">
                     <ul>
                        {/* ngIf: selectedCompetition.CompetitionName != 'All Live Matches' && (matchSummary.CompetitionName == undefined || matchSummary.CompetitionName=='') */} {/* ngIf: (matchSummary.CompetitionName != undefined && matchSummary.CompetitionName!='') */}
                        <li ng-if="(matchSummary.CompetitionName != undefined &amp;&amp; matchSummary.CompetitionName!='')" class="ng-scope"> <span>Tournament </span> <span class="ng-binding">AUSTRALIA TOUR OF INDIA TEST SERIES 2022-23 </span> </li>
                        {/* end ngIf: (matchSummary.CompetitionName != undefined && matchSummary.CompetitionName!='') */} {/* ngIf: matchSummary.MatchName!='' */}
                        <li ng-if="matchSummary.MatchName!=''" class="ng-scope"> <span>Match </span> <span ng-bind="matchSummary.MatchName" class="ng-binding">India VS Australia</span> </li>
                        {/* end ngIf: matchSummary.MatchName!='' */} {/* ngIf: matchSummary.TossDetails!='' */}
                        <li ng-if="matchSummary.TossDetails!=''" class="ng-scope"> <span>Toss Details </span> <span ng-bind="matchSummary.TossDetails" class="ng-binding">Australia won the Toss and elected to bat</span> </li>
                        {/* end ngIf: matchSummary.TossDetails!='' */} {/* ngIf: matchSummary.GroundName!='' */}
                        <li ng-if="matchSummary.GroundName!=''" class="ng-scope"> <span>Venue </span> <span ng-bind="matchSummary.GroundName" class="ng-binding">Narendra Modi Stadium, Ahmedabad</span> </li>
                        {/* end ngIf: matchSummary.GroundName!='' */} {/* ngIf: (matchSummary.Umpire1Name!= undefined && matchSummary.Umpire1Name!='' ) || (matchSummary.Umpire2Name!= undefined && matchSummary.Umpire2Name!='') || (matchSummary.Umpire3Name!= undefined && matchSummary.Umpire3Name!='') */}
                        <li ng-if="(matchSummary.Umpire1Name!= undefined &amp;&amp; matchSummary.Umpire1Name!='' ) || (matchSummary.Umpire2Name!= undefined &amp;&amp; matchSummary.Umpire2Name!='') || (matchSummary.Umpire3Name!= undefined &amp;&amp; matchSummary.Umpire3Name!='')" class="ng-scope">
                           <span>Umpires </span>
                           <span>
                              {/* ngIf: matchSummary.Umpire1Name!= undefined && matchSummary.Umpire1Name!='' */}
                              <text ng-if="matchSummary.Umpire1Name!= undefined &amp;&amp; matchSummary.Umpire1Name!=''" class="ng-binding ng-scope">Nitin Menon</text>
                              {/* end ngIf: matchSummary.Umpire1Name!= undefined && matchSummary.Umpire1Name!='' */} {/* ngIf: matchSummary.Umpire2Name!= undefined && matchSummary.Umpire2Name!='' */}
                              <text ng-if="matchSummary.Umpire2Name!= undefined &amp;&amp; matchSummary.Umpire2Name!=''" class="ng-binding ng-scope"> , Richard Kettleborough</text>
                              {/* end ngIf: matchSummary.Umpire2Name!= undefined && matchSummary.Umpire2Name!='' */} {/* ngIf: matchSummary.Umpire3Name!= undefined && matchSummary.Umpire3Name!='' */}
                              <text ng-if="matchSummary.Umpire3Name!= undefined &amp;&amp; matchSummary.Umpire3Name!=''" class="ng-binding ng-scope"> , Joel Wilson</text>
                              {/* end ngIf: matchSummary.Umpire3Name!= undefined && matchSummary.Umpire3Name!='' */}
                           </span>
                        </li>
                        {/* end ngIf: (matchSummary.Umpire1Name!= undefined && matchSummary.Umpire1Name!='' ) || (matchSummary.Umpire2Name!= undefined && matchSummary.Umpire2Name!='') || (matchSummary.Umpire3Name!= undefined && matchSummary.Umpire3Name!='') */} {/* ngIf: matchSummary.Referee != undefined && matchSummary.Referee!='' */}
                        <li ng-if="matchSummary.Referee != undefined &amp;&amp; matchSummary.Referee!=''" class="ng-scope"> <span>Referee </span> <span class="ng-binding">Chris Broad </span> </li>
                        {/* end ngIf: matchSummary.Referee != undefined && matchSummary.Referee!='' */} {/* ngIf: ((matchSummary.Scorer1Name!=undefined && matchSummary.Scorer1Name!='') || (matchSummary.Scorer2Name!=undefined && matchSummary.Scorer2Name!='')) && showScorerInMatchDetails */} {/* ngIf: matchSummary.MOM!=undefined && matchSummary.MOM!='' */}
                     </ul>
                  </div>
                  {/* END .matchDetails */}
               </div>
               {/* ngIf: matchNotes.length > 0 && widgettype == 'domestic' */} {/* ngIf: squad */}
               <div class="widget playingXI hideMobOnly ng-scope" ng-if="squad">
                  <h4 class="widgetTitle">playing XI</h4>
                  <div class="widgetContent">
                     <div class="team">
                        <a class="ng-binding">
                           <span class="tLogo">
                              {/* ngIf: isNotNull(squadATeamLogo) */}<img ng-if="isNotNull(squadATeamLogo)" ng-src="https://scores.bcci.tv/matchcentre/teamlogos/india.png" onerror="this.src = basePath+'images/default-team-logo.png';" class="ng-scope" src="https://scores.bcci.tv/matchcentre/teamlogos/india.png" />{/* end ngIf: isNotNull(squadATeamLogo) */} {/* ngIf: !isNotNull(list.squadATeamLogo) && DisplayLocalTeamLogo */} {/* ngIf: !isNotNull(squadATeamLogo) && !DisplayLocalTeamLogo */}
                           </span>
                           India
                        </a>
                        <ul class="squadList">
                           {/* ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}
                                    <img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/Emz8uR8Qkn16758568836.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Rohit Sharma (c)" src="https://scores.bcci.tv/matchcentre/playerimages/Emz8uR8Qkn16758568836.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */}
                                    <span class="playingXI-playerName ng-binding" />
                                    Rohit Sharma (c) </span>

                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/r06GPRxsvG167585707462.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Shubman Gill " src="https://scores.bcci.tv/matchcentre/playerimages/r06GPRxsvG167585707462.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Shubman Gill  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/joDUJSup1y167585696749.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Cheteshwar Pujara " src="https://scores.bcci.tv/matchcentre/playerimages/joDUJSup1y167585696749.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Cheteshwar Pujara  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/8dc0Nz6Kmb16758569132.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Virat Kohli " src="https://scores.bcci.tv/matchcentre/playerimages/8dc0Nz6Kmb16758569132.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Virat Kohli  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/WCzNz6fFDp167585695146.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Ravindra Jadeja " src="https://scores.bcci.tv/matchcentre/playerimages/WCzNz6fFDp167585695146.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Ravindra Jadeja  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/ujENTsOHZH1675856934365.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Srikar Bharat (wk)" src="https://scores.bcci.tv/matchcentre/playerimages/ujENTsOHZH1675856934365.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Srikar Bharat (wk) </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/oBnOKs0hG91675856895110.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Axar Patel " src="https://scores.bcci.tv/matchcentre/playerimages/oBnOKs0hG91675856895110.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Axar Patel  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/bTLfoujBIP167585701745.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Ravichandran Ashwin " src="https://scores.bcci.tv/matchcentre/playerimages/bTLfoujBIP167585701745.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Ravichandran Ashwin  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/6HA9GxcrEA167585705521.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Umesh Yadav " src="https://scores.bcci.tv/matchcentre/playerimages/6HA9GxcrEA167585705521.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Umesh Yadav  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/UA4od4di5h167585700047.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Mohammad Shami " src="https://scores.bcci.tv/matchcentre/playerimages/UA4od4di5h167585700047.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Mohammad Shami  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                           <li ng-repeat="(key ,list) in squadA" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/AhPVBaUYqZ167654041312.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Shreyas Iyer " src="https://scores.bcci.tv/matchcentre/playerimages/AhPVBaUYqZ167654041312.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Shreyas Iyer  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadA */}
                        </ul>
                     </div>
                     <div class="team">
                        <a class="ng-binding">
                           <span class="tLogo">
                              {/* ngIf: isNotNull(squadBTeamLogo) */}<img ng-if="isNotNull(squadBTeamLogo)" ng-src="https://scores.bcci.tv/matchcentre/teamlogos/aus.png?v=6" onerror="this.src = basePath+'images/default-team-logo.png';" class="ng-scope" src="https://scores.bcci.tv/matchcentre/teamlogos/aus.png?v=6" />{/* end ngIf: isNotNull(squadBTeamLogo) */} {/* ngIf: !isNotNull(list.squadBTeamLogo) && DisplayLocalTeamLogo */} {/* ngIf: !isNotNull(squadBTeamLogo) && !DisplayLocalTeamLogo */}
                           </span>
                           Australia
                        </a>
                        <ul class="squadList">
                           {/* ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/jRMWogrmk01675857460194.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Steven Smith (c)" src="https://scores.bcci.tv/matchcentre/playerimages/jRMWogrmk01675857460194.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Steven Smith (c) </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/yOqhwq86Ir167585734037.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Travis Head " src="https://scores.bcci.tv/matchcentre/playerimages/yOqhwq86Ir167585734037.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Travis Head  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/lRbumX73aX167585735938.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Usman Khawaja " src="https://scores.bcci.tv/matchcentre/playerimages/lRbumX73aX167585735938.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Usman Khawaja  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/nz2PxGLii1167585741156.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Marnus Labuschagne " src="https://scores.bcci.tv/matchcentre/playerimages/nz2PxGLii1167585741156.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Marnus Labuschagne  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/QqcIifngwx167585732034.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Peter Handscomb " src="https://scores.bcci.tv/matchcentre/playerimages/QqcIifngwx167585732034.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Peter Handscomb  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/J8zbmBetvN1675857389550.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Cameron Green " src="https://scores.bcci.tv/matchcentre/playerimages/J8zbmBetvN1675857389550.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Cameron Green  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/JNZJ0esAWa167585726526.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Alex Carey (wk)" src="https://scores.bcci.tv/matchcentre/playerimages/JNZJ0esAWa167585726526.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Alex Carey (wk) </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/Q8E4xTyLIj167765688231.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Mitchell Starc " src="https://scores.bcci.tv/matchcentre/playerimages/Q8E4xTyLIj167765688231.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Mitchell Starc  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/DsJASn4Sxd167585737339.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Nathan Lyon " src="https://scores.bcci.tv/matchcentre/playerimages/DsJASn4Sxd167585737339.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Nathan Lyon  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/RD6BhJMUdY16758575611707.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Todd Murphy " src="https://scores.bcci.tv/matchcentre/playerimages/RD6BhJMUdY16758575611707.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Todd Murphy  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                           <li ng-repeat="(key ,list) in squadB" class="ng-scope">
                              <div class="squadListPlayerName">
                                 <span class="playingXI-View-span">
                                    {/* ngIf: isNotNull(list.PlayerImage) */}<img class="playingXI-BrowserView playingXI-playerImg ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(list.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/slbPvyM5zi16766163481050.png" alt="" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Matthew Kuhnemann " src="https://scores.bcci.tv/matchcentre/playerimages/slbPvyM5zi16766163481050.png" />{/* end ngIf: isNotNull(list.PlayerImage) */} {/* ngIf: !isNotNull(list.PlayerImage) */} <span class="playingXI-playerName ng-binding">Matthew Kuhnemann  </span>
                                 </span>
                              </div>
                           </li>
                           {/* end ngRepeat: (key ,list) in squadB */}
                        </ul>
                     </div>
                  </div>
                  {/* END .playingXI */} {/* ngIf: widgettype == 'domestic' */}
               </div>
               {/* end ngIf: squad */} {/* Top Performer */}
            </div>
            {/* END Right Panel */}
         </div>
         {/*commentary block*/}
         <div id="commentPage" class={`mcTabContent ${isCommentry ? 'current' : ''}`} ng-class="{'current' : scorecardType == 'international' &amp;&amp; internationalPulseMatches != 1}">
            {/* Panel Header */}
            <div class="scorecardHeader" style={{ display: 'none'}}>
               <select class="mcSelectDefault inningsList commentryinningsList ng-pristine ng-valid ng-not-empty ng-touched" data-ng-options="innData.name for innData in inningsList track by innData.innNo" data-ng-model="selectedCInnList" data-ng-change="constructScoreCard(matchSummary.MatchID,'dropdownCInnChange','innchange')">
                  <option label="Australia 1st Innings" value="1">Australia 1st Innings</option>
                  <option label="India 1st Innings" value="2">India 1st Innings</option>
                  <option label="Australia 2nd Innings" value="3" selected="selected">Australia 2nd Innings</option>
               </select>
               <div class="innOverInfo">
                  <p class="ng-binding">Over 6.0</p>
                  <p class="ng-binding">RR: 0.5</p>
                  {/* ngIf: extras.FallWickets != 10  */}
                  <p ng-if="extras.FallWickets != 10 " class="ng-binding ng-scope">3/0</p>
                  {/* end ngIf: extras.FallWickets != 10  */} {/* ngIf: extras.FallWickets == 10  */}
               </div>
               <div class="inningsTabsList">
                  {/* ngRepeat: list in inningsList */}
                  <span class="inningsTabsItemsList ng-scope" ng-repeat="list in inningsList" ng-click="inningsTabsChange(matchSummary.MatchID,'dropdownCInnChange','innchange',list.innNo)" ng-class="{'active' : currentInnText == 'Innings'+list.innNo}">
                     <div class="inningsTabsItemsRow"> <span class="inningsTabsTeamName ng-binding">Australia </span> <span class="inningsTabsInnsText ng-binding">1st Inns </span> </div>
                     <div class="inningsTabsItemsRow">
                        {/* ngIf: matchSummary[list.innNo+'FallWickets'] != 10 && matchSummary[list.innNo+'FallWickets'] != '' */} {/* ngIf: matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == ''">480 </span>{/* end ngIf: matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == '' */} {/* ngIf: matchSummary[list.innNo+'RunRate'] != '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'RunRate'] != ''">RR: 2.87 </span>{/* end ngIf: matchSummary[list.innNo+'RunRate'] != '' */}
                     </div>
                  </span>
                  {/* end ngRepeat: list in inningsList */}
                  <span class="inningsTabsItemsList ng-scope" ng-repeat="list in inningsList" ng-click="inningsTabsChange(matchSummary.MatchID,'dropdownCInnChange','innchange',list.innNo)" ng-class="{'active' : currentInnText == 'Innings'+list.innNo}">
                     <div class="inningsTabsItemsRow"> <span class="inningsTabsTeamName ng-binding">India </span> <span class="inningsTabsInnsText ng-binding">1st Inns </span> </div>
                     <div class="inningsTabsItemsRow">
                        {/* ngIf: matchSummary[list.innNo+'FallWickets'] != 10 && matchSummary[list.innNo+'FallWickets'] != '' */} {/* ngIf: matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == ''">571 </span>{/* end ngIf: matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == '' */} {/* ngIf: matchSummary[list.innNo+'RunRate'] != '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'RunRate'] != ''">RR: 3.19 </span>{/* end ngIf: matchSummary[list.innNo+'RunRate'] != '' */}
                     </div>
                  </span>
                  {/* end ngRepeat: list in inningsList */}
                  <span class="inningsTabsItemsList ng-scope active" ng-repeat="list in inningsList" ng-click="inningsTabsChange(matchSummary.MatchID,'dropdownCInnChange','innchange',list.innNo)" ng-class="{'active' : currentInnText == 'Innings'+list.innNo}">
                     <div class="inningsTabsItemsRow"> <span class="inningsTabsTeamName ng-binding">Australia </span> <span class="inningsTabsInnsText ng-binding">2nd Inns </span> </div>
                     <div class="inningsTabsItemsRow">
                        {/* ngIf: matchSummary[list.innNo+'FallWickets'] != 10 && matchSummary[list.innNo+'FallWickets'] != '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'FallWickets'] != 10 &amp;&amp; matchSummary[list.innNo+'FallWickets'] != ''">3 - 0 </span>{/* end ngIf: matchSummary[list.innNo+'FallWickets'] != 10 && matchSummary[list.innNo+'FallWickets'] != '' */} {/* ngIf: matchSummary[list.innNo+'FallWickets'] == 10 || matchSummary[list.innNo+'FallWickets'] == '' */} {/* ngIf: matchSummary[list.innNo+'RunRate'] != '' */}<span class="inningsTabsTeamScore ng-binding ng-scope" ng-if="matchSummary[list.innNo+'RunRate'] != ''">RR: 0.5 </span>{/* end ngIf: matchSummary[list.innNo+'RunRate'] != '' */}
                     </div>
                  </span>
                  {/* end ngRepeat: list in inningsList */}
               </div>
               {/* ngIf: extras.FallWickets != 10  */}
               <div class="innScore vclickable ng-binding ng-scope" ng-click="playInnVideo(battingCard[0].InningsNo)" ng-if="extras.FallWickets != 10 ">
                  3/0 (6.0 Overs) {/* ngIf: matchSummary.MatchType != 'Multi Day' */}
               </div>
               {/* end ngIf: extras.FallWickets != 10  */} {/* ngIf: extras.FallWickets == 10 */}
            </div>
            {/* ngIf: IsMatchEnd != 1 && scorecardType == 'international' && internationalPulseMatches != 1 && (matchInn == matchSummary.CurrentInnings || matchInn == '') */}
            <div id="miniscoreCard" class="ng-scope" ng-if="IsMatchEnd != 1 &amp;&amp; scorecardType == 'international' &amp;&amp; internationalPulseMatches != 1 &amp;&amp; (matchInn == matchSummary.CurrentInnings || matchInn == '')">
               {/* Current Batting & Bowling */}
               <div class="battingCardMC battingCardMC_mini" data-active="">
                  <div class="mcRowHead">
                     <div class="mcGrid_7 tt">Batters </div>
                     <div class="mcGrid_5 alignC">
                        <div class="mcGrid_3 icon-play vclickable" ng-click="playOverAllVideo('runs')">R </div>
                        <div class="mcGrid_3 icon-play vclickable" ng-click="playInnVideo(battingCard[0].InningsNo)">B </div>
                        <div class="mcGrid_3 icon-play vclickable" ng-click="playOverAllVideo('fours')">4's </div>
                        <div class="mcGrid_3 icon-play vclickable" ng-click="playOverAllVideo('sixes')">6's </div>
                        {/* <div class="mcGrid_2 ">SR</div> */}
                     </div>
                  </div>
                  {/* Batting Data */}
                  <div class="mcRowData playerWagonBatting stricker">
                     <div class="mcRowData-Inner">
                        <div class="mcGrid_7 sc-first-row">
                           {/* ngIf: isNotNull(CurrentStrikerData.PlayerImage) */}
                           <img class="ng-scope active"  src="https://scores.bcci.tv/matchcentre/playerimages/slbPvyM5zi16766163481050.png" />{/* end ngIf: isNotNull(CurrentStrikerData.PlayerImage) */} {/* ngIf: !isNotNull(CurrentStrikerData.PlayerImage) */}
                           <div class="sc-pnam">
                              <span class="playerName vclickable ng-binding" ng-click="playVideo(CurrentStrikerData.PlayerID,'all')">{batsmanStriker?.name} </span> {/* ngIf: matchSummary.CurrentStrikerID == CurrentStrikerData.PlayerID */}
                              <icon class="strikerIcon ng-scope" ng-if="matchSummary.CurrentStrikerID == CurrentStrikerData.PlayerID"></icon>
                              <span class="dismissalSmall vclickable ng-binding pvclickable" >not out</span>
                           </div>
                        </div>
                        <div class="mcGrid_5 alignC plyData">
                           <div class="mcGrid_3 icon-play btRuns vclickable ng-binding novideo" >{batsmanStriker?.runs}</div>
                           <div class="mcGrid_3 icon-play vclickable ng-binding" ng-class="{novideo : CurrentStrikerData.Balls=='0'}" ng-click="playVideo(CurrentStrikerData.PlayerID,'all')" ng-bind="CurrentStrikerData.Balls">{batsmanStriker?.balls}</div>
                           <div class="mcGrid_3 icon-play vclickable ng-binding pvclickable novideo" ng-class="{pvclickable : checkVideoclickables('four'),novideo : CurrentStrikerData.Fours=='0'}" ng-click="playVideo(CurrentStrikerData.PlayerID,'four')" ng-bind="CurrentStrikerData.Fours">{batsmanStriker?.fours}</div>
                           <div class="mcGrid_3 icon-play vclickable ng-binding pvclickable novideo" ng-class="{pvclickable : checkVideoclickables('six'),novideo : CurrentStrikerData.Sixes=='0'}" ng-click="playVideo(CurrentStrikerData.PlayerID,'six')" ng-bind="CurrentStrikerData.Sixes">{batsmanStriker?.sixes ?? 0}</div>
                           {/* <div class="mcGrid_2" ng-bind="CurrentStrikerData.StrikeRate">{batsmanStriker?.strkRate}</div> */}
                        </div>
                     </div>
                     {/* END .mcRowData */}
                  </div>
                  <div class="mcRowData playerWagonBatting stricker">
                     <div class="mcRowData-Inner">
                        <div class="mcGrid_7 sc-first-row">
                           {/* ngIf: isNotNull(CurrentNonStrikerData.PlayerImage) */}<img class="ng-scope active"  src="https://scores.bcci.tv/matchcentre/playerimages/yOqhwq86Ir167585734037.png" />{/* end ngIf: isNotNull(CurrentNonStrikerData.PlayerImage) */} {/* ngIf: !isNotNull(CurrentNonStrikerData.PlayerImage) */}
                           <div class="sc-pnam"> <span class="playerName vclickable ng-binding" ng-click="playVideo(CurrentNonStrikerData.PlayerID,'all')">{batsmanNonStriker?.name} </span> 
                           <span class="dismissalSmall vclickable ng-binding pvclickable" ng-class="{pvclickable : checkVideoclickables('wicket')}" ng-click="playVideo(CurrentNonStrikerData.PlayerID,'wicket')" ng-bind="CurrentNonStrikerData.OutDesc">not out</span> </div>
                        </div>
                        <div class="mcGrid_5 alignC plyData">
                           <div class="mcGrid_3 icon-play btRuns vclickable ng-binding" ng-class="{novideo : CurrentNonStrikerData.Runs=='0'}" ng-click="playVideo(CurrentNonStrikerData.PlayerID,'runs')" ng-bind="CurrentNonStrikerData.Runs">{batsmanNonStriker?.runs}</div>
                           <div class="mcGrid_3 icon-play vclickable ng-binding" ng-class="{novideo : CurrentNonStrikerData.Balls=='0'}" ng-click="playVideo(CurrentNonStrikerData.PlayerID,'all')" ng-bind="CurrentNonStrikerData.Balls">{batsmanNonStriker?.balls}</div>
                           <div class="mcGrid_3 icon-play vclickable ng-binding pvclickable novideo" ng-class="{pvclickable : checkVideoclickables('four'),novideo : CurrentNonStrikerData.Fours=='0'}" ng-click="playVideo(CurrentNonStrikerData.PlayerID,'four')" ng-bind="CurrentNonStrikerData.Fours">{batsmanNonStriker?.fours ?? 0}</div>
                           <div class="mcGrid_3 icon-play vclickable ng-binding pvclickable novideo" ng-class="{pvclickable : checkVideoclickables('six'),novideo : CurrentNonStrikerData.Sixes=='0'}" ng-click="playVideo(CurrentNonStrikerData.PlayerID,'six')" ng-bind="CurrentNonStrikerData.Sixes">{ batsmanNonStriker?.sixes ?? 0}</div>
                           {/*<div class="mcGrid_2" ng-bind="CurrentNonStrikerData.StrikeRate"></div> */}
                        </div>
                     </div>
                     {/* END .mcRowData */}
                  </div>
               </div>
               {/* END Current Batting & Bowling */} {/* BowlingCard */}
               <div class="bowlingCardMC bowlingCardMC_mini">
                  <div class="mcRowHead">
                     <div class="mcGrid_6 tt">Bowler </div>
                     <div class="mcGrid_6 alignC">
                        <div class="mcGrid_2 icon-play vclickable" ng-click="playOverAllVideo('Overs')">O </div>
                        {/* ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                        {/* <div class="mcGrid_2 icon-play vclickable hide-on-small-only ng-scope" ng-if="matchSummary.MatchType != 'Twenty20 Match'" ng-click="playOverAllVideo('maiden')">Md </div> */}
                        {/* end ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                        <div class="mcGrid_2 icon-play vclickable" ng-click="playOverAllVideo('runs')">R </div>
                        <div class="mcGrid_2 icon-play vclickable" ng-click="playOverAllVideo('wicketstaken')">WKTS </div>
                        {/* ngIf: matchSummary.MatchType == 'Twenty20 Match' */}
                        <div class="mcGrid_2 hide-on-small-only">Econ </div>
                     </div>
                  </div>
                  {/* ngIf: CurrentBowlerData.PlayerName != '' && CurrentBowlerData.PlayerName != '0' */}
                  <div class="mcRowData playerWagonBowling Bowler ng-scope" ng-if="CurrentBowlerData.PlayerName != '' &amp;&amp; CurrentBowlerData.PlayerName != '0'">
                     <div class="mcRowData-Inner">
                        <div class="mcGrid_6 sc-first-row vclickable" ng-click="playVideo(CurrentBowlerData.PlayerID,'bowlerall')">
                           {/* ngIf: isNotNull(CurrentBowlerData.PlayerImage) */}<img class="ng-scope active" ng-class="{'active' : scorecardType == 'international' &amp;&amp; !internationalArchive}" ng-if="isNotNull(CurrentBowlerData.PlayerImage)" ng-src="https://scores.bcci.tv/matchcentre/playerimages/UA4od4di5h167585700047.png" onerror="this.src = basePath+'images/player-thumb.jpg';" title="Mohammad Shami" alt="" src="https://scores.bcci.tv/matchcentre/playerimages/UA4od4di5h167585700047.png" />{/* end ngIf: isNotNull(CurrentBowlerData.PlayerImage) */} {/* ngIf: !isNotNull(CurrentBowlerData.PlayerImage) */}
                           <div class="sc-pnam">
                              <span class="playerName ng-binding">{bowlerStriker?.name} </span> {/* ngIf: matchSummary.CurrentBowlerID == CurrentBowlerData.PlayerID */}
                              <icon class="currentBowlerIcon ng-scope" ng-if="matchSummary.CurrentBowlerID == CurrentBowlerData.PlayerID"></icon>
                              {/* end ngIf: matchSummary.CurrentBowlerID == CurrentBowlerData.PlayerID */}
                           </div>
                        </div>
                        <div class="mcGrid_6 alignC plyData">
                           <div class="mcGrid_2 icon-play btRuns vclickable ng-binding" ng-click="playVideo(CurrentBowlerData.PlayerID,'overs')" ng-class="{novideo : CurrentBowlerData.Overs == '0'}" ng-bind="CurrentBowlerData.Overs">{bowlerStriker?.overs ?? 0}</div>
                           {/* ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                           {/* <div class="mcGrid_2 icon-play vclickable hide-on-small-only ng-binding ng-scope novideo" ng-class="{novideo : CurrentBowlerData.Maidens == '0'}" ng-if="matchSummary.MatchType != 'Twenty20 Match'" ng-click="playVideo(CurrentBowlerData.PlayerID,'maiden')" ng-bind="CurrentBowlerData.Maidens">0</div> */}
                           {/* end ngIf: matchSummary.MatchType != 'Twenty20 Match' */}
                           <div class="mcGrid_2 icon-play vclickable ng-binding" ng-class="{novideo : CurrentBowlerData.Runs == '0'}" ng-click="playVideo(CurrentBowlerData.PlayerID,'runsconceded')" ng-bind="CurrentBowlerData.Runs">{bowlerStriker?.runs}</div>
                           <div class="mcGrid_2 icon-play vclickable ng-binding pvclickable novideo" ng-click="playVideo(CurrentBowlerData.PlayerID,'wicketstaken')" ng-class="{pvclickable : checkVideoclickables('wicket'),novideo : CurrentBowlerData.Wickets == '0'}" ng-bind="CurrentBowlerData.Wickets">{bowlerStriker?.wickets ?? 0}</div>
                           {/* ngIf: matchSummary.MatchType == 'Twenty20 Match' */}
                           <div class="mcGrid_2 hide-on-small-only ng-binding" ng-bind="CurrentBowlerData.Economy">{bowlerStriker?.economy ?? 0}</div>
                        </div>
                     </div>
                  </div>
                  {/* end ngIf: CurrentBowlerData.PlayerName != '' && CurrentBowlerData.PlayerName != '0' */}
               </div>
               {/* END BowlingCard */}
            </div>
            {/* end ngIf: IsMatchEnd != 1 && scorecardType == 'international' && internationalPulseMatches != 1 && (matchInn == matchSummary.CurrentInnings || matchInn == '') */}
            <div id="cmdBlockSmipl" class="col s12 m12 l8  l12" ng-class="{'l12' : matchNotes == undefined || matchNotes.length == 0 || matchNotes == '','widget':matchNotes.length > 0 &amp;&amp; windowWdt > 480}" >
               {/* ngIf: ((postMatchCommentary != undefined && postMatchCommentary !='') || (matchSummary.PostMatchCommentary != undefined && matchSummary.PostMatchCommentary !='')) && (matchInn == matchSummary.CurrentInnings || matchInn == '') */}
               <div class="prepostMatchCommentry ng-scope" ng-if="((postMatchCommentary != undefined &amp;&amp; postMatchCommentary !='') || (matchSummary.PostMatchCommentary != undefined &amp;&amp; matchSummary.PostMatchCommentary !='')) &amp;&amp; (matchInn == matchSummary.CurrentInnings || matchInn == '')" style={{ display:'none'}}>
                  <p class="ppCmd">
                     <svg enable-background="new 0 0 475.082 475.081" version="1.1" viewBox="0 0 475.08 475.08" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                        <path d="m164.45 219.27h-63.954c-7.614 0-14.087-2.664-19.417-7.994-5.327-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177 7.139-37.401 21.416-51.678 14.276-14.272 31.503-21.411 51.678-21.411h18.271c4.948 0 9.229-1.809 12.847-5.424 3.616-3.617 5.424-7.898 5.424-12.847v-36.548c0-4.948-1.809-9.233-5.424-12.85-3.617-3.612-7.898-5.424-12.847-5.424h-18.271c-19.797 0-38.684 3.858-56.673 11.563-17.987 7.71-33.545 18.132-46.68 31.267-13.134 13.129-23.553 28.688-31.262 46.677-7.709 17.987-11.564 36.879-11.564 56.674v200.99c0 15.235 5.327 28.171 15.986 38.834 10.66 10.657 23.606 15.985 38.832 15.985h109.64c15.225 0 28.167-5.328 38.828-15.985 10.657-10.663 15.987-23.599 15.987-38.834v-109.63c0-15.232-5.33-28.168-15.994-38.832-10.656-10.656-23.603-15.986-38.828-15.986z"></path>
                        <path d="m459.1 235.26c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61 0-14.089-2.664-19.41-7.994-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177 7.139-37.401 21.409-51.678 14.271-14.272 31.497-21.411 51.682-21.411h18.267c4.949 0 9.233-1.809 12.848-5.424 3.613-3.617 5.428-7.898 5.428-12.847v-36.548c0-4.948-1.814-9.233-5.428-12.85-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808 0-38.691 3.858-56.685 11.563-17.984 7.71-33.537 18.132-46.672 31.267-13.135 13.129-23.559 28.688-31.265 46.677-7.707 17.987-11.567 36.879-11.567 56.674v200.99c0 15.235 5.332 28.171 15.988 38.834 10.657 10.657 23.6 15.985 38.828 15.985h109.63c15.229 0 28.171-5.328 38.827-15.985 10.664-10.663 15.985-23.599 15.985-38.834v-109.63c1e-3 -15.233-5.321-28.168-15.978-38.832z"></path>
                     </svg>
                  </p>
                  {/* ngIf: matchSummary.PostMatchCommentary != undefined && matchSummary.PostMatchCommentary !='' */}
                  <div class="ppText ng-binding ng-scope" ng-if="matchSummary.PostMatchCommentary != undefined &amp;&amp; matchSummary.PostMatchCommentary !=''" ng-bind-html="matchSummary.PostMatchCommentary | to_trusted" >
                     <p><strong>Day 1:&nbsp;</strong><strong><span style={{ "color": "#f39c12" }}>Australia- 255/4 (90 overs, 2.8 rpo, 36x4, 0x6)</span></strong></p>
                     <p><strong>Day 2:&nbsp;<span style={{ "color": "#f39c12" }}>Australia- 225/6 (77.2 overs, 2.9 rpo, 27x4, 0x6) </span><span style={{ "color": "#000000" }}>|| </span><span style={{ "color": "#2980b9" }}>India- 36/0 (10 overs, 3.6 rpo, 3x4, 1x6)</span></strong></p>
                     <p><strong>Day 3:&nbsp;</strong><strong><span style={{ "color": "#2980b9" }}>India- 253/3 (89 overs, 2.8 rpo, 20x4, 2x6)</span></strong></p>
                     <p><strong>Day 4:&nbsp;</strong><strong><span style={{ "color": "#2980b9" }}>India- 282/6 (79.5 overs, 3.5 rpo, 20x4, 7x6)&nbsp;</span></strong><strong><span style={{ "color": "#000000" }}>||&nbsp;</span></strong><strong><span style={{ "color": "#f39c12" }}>Australia- 3/0 (6 overs, 0.5 rpo, 0x4, 0x6)</span></strong></p>
                  </div>
                  {/* end ngIf: matchSummary.PostMatchCommentary != undefined && matchSummary.PostMatchCommentary !='' */} {/* ngIf: matchSummary.PostMatchCommentary == undefined || matchSummary.PostMatchCommentary =='' */}
               </div>
               {/* end ngIf: ((postMatchCommentary != undefined && postMatchCommentary !='') || (matchSummary.PostMatchCommentary != undefined && matchSummary.PostMatchCommentary !='')) && (matchInn == matchSummary.CurrentInnings || matchInn == '') */} {/* ngIf: IsMatchEnd == 1 && preMatchCommentary != undefined && preMatchCommentary !='' && false */} {/* ngRepeat: (key, list) in overHistory */}
               <div id="byb__comment" ng-repeat="(key, list) in overHistory" class="ng-scope">
                  <div class="endOverInfo">
                     <p class="firstChild ng-binding">Over 6</p>
                     <p class="secondChild">
                        {/* ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.6">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.5">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.4">1</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.3">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.2">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="5.1">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}
                     </p>
                     {/* <p class="totRun alignR fr" ng-if="IsMatchEnd == 0">{{list[0].TotalRuns}}/{{list[0].TotalWickets}}</p> */} {/* <p class="totRun alignR fr" ng-if="list[list.length - 1].BallID != ''">{{list[list.length - 1].TotalRuns}}/{{list[list.length - 1].TotalWickets}}</p> */} {/* ngIf: list[0].BallID != '' */}
                     <p class="totRun alignR fr ng-binding ng-scope" ng-if="list[0].BallID != ''">3/0</p>
                     {/* end ngIf: list[0].BallID != '' */} {/* ngIf: list[0].BallID == '' */}
                  </div>
                  {/* ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 5.6 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">
                        <p>Mohammad Shami bowling to Matthew Kuhnemann, short of good length ball, pitching outside off stump, Matthew Kuhnemann plays a defensive shot on back foot, no run, and that brings us to the end of the day. <strong>Stumps on Day 4!</strong></p>
                     </div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 5.5 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Mohammad Shami bowling to Matthew Kuhnemann, short of good length ball, pitching outside off stump, Matthew Kuhnemann uncomfortably  plays a defensive shot on back foot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">1</i> 5.4 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Mohammad Shami bowling to Travis Head, short of good length ball, pitching outside off stump, Travis Head plays an aggressive on drive off the back foot for a single</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 5.3 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Mohammad Shami bowling to Travis Head, short of good length ball, pitching outside off stump, Travis Head uncomfortably  plays a defensive shot on back foot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 5.2 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Mohammad Shami bowling to Travis Head, short of good length ball, pitching outside off stump, Travis Head plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 5.1 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">
                        <p><span style={{ "color": "#2980b9" }}><strong>Seam introduced into the attack!</strong></span> Mohammad Shami bowling to Travis Head, short of good length ball, pitching outside off stump, Travis Head plays a defensive shot on back foot, no run</p>
                     </div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
               </div>
               {/* end ngRepeat: (key, list) in overHistory */}
               <div id="byb__comment" ng-repeat="(key, list) in overHistory" class="ng-scope">
                  <div class="endOverInfo">
                     <p class="firstChild ng-binding">Over 5</p>
                     <p class="secondChild">
                        {/* ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="4.6">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="4.5">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="4.4">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="4.3">1</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="4.2">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="4.1">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}
                     </p>
                     {/* <p class="totRun alignR fr" ng-if="IsMatchEnd == 0">{{list[0].TotalRuns}}/{{list[0].TotalWickets}}</p> */} {/* <p class="totRun alignR fr" ng-if="list[list.length - 1].BallID != ''">{{list[list.length - 1].TotalRuns}}/{{list[list.length - 1].TotalWickets}}</p> */} {/* ngIf: list[0].BallID != '' */}
                     <p class="totRun alignR fr ng-binding ng-scope" ng-if="list[0].BallID != ''">2/0</p>
                     {/* end ngIf: list[0].BallID != '' */} {/* ngIf: list[0].BallID == '' */}
                  </div>
                  {/* ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 4.6 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Matthew Kuhnemann, good length ball, pitching outside off stump, Matthew Kuhnemann uncomfortably  plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 4.5 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Matthew Kuhnemann, full length ball, pitching outside leg stump, Matthew Kuhnemann plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 4.4 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Matthew Kuhnemann, good length ball, pitching outside leg stump, Matthew Kuhnemann plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">1</i> 4.3 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Travis Head, good length ball, pitching on off stump, Travis Head plays a defensive back foot push for a single</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 4.2 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Travis Head, full length ball, pitching on off stump, Travis Head plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 4.1 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Travis Head, good length ball, pitching on middle stump, Travis Head plays a defensive back foot push, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
               </div>
               {/* end ngRepeat: (key, list) in overHistory */}
               <div id="byb__comment" ng-repeat="(key, list) in overHistory" class="ng-scope">
                  <div class="endOverInfo">
                     <p class="firstChild ng-binding">Over 4</p>
                     <p class="secondChild">
                        {/* ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="3.6">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="3.5">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="3.4">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="3.3">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="3.2">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="3.1">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}
                     </p>
                     {/* <p class="totRun alignR fr" ng-if="IsMatchEnd == 0">{{list[0].TotalRuns}}/{{list[0].TotalWickets}}</p> */} {/* <p class="totRun alignR fr" ng-if="list[list.length - 1].BallID != ''">{{list[list.length - 1].TotalRuns}}/{{list[list.length - 1].TotalWickets}}</p> */} {/* ngIf: list[0].BallID != '' */}
                     <p class="totRun alignR fr ng-binding ng-scope" ng-if="list[0].BallID != ''">1/0</p>
                     {/* end ngIf: list[0].BallID != '' */} {/* ngIf: list[0].BallID == '' */}
                  </div>
                  {/* ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 3.6 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">
                        <p>Ravindra Jadeja bowling to Matthew Kuhnemann, good length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot, no run. Another maiden over!</p>
                     </div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 3.5 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravindra Jadeja bowling to Matthew Kuhnemann, full length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 3.4 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravindra Jadeja bowling to Matthew Kuhnemann, good length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 3.3 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravindra Jadeja bowling to Matthew Kuhnemann, good length ball, pitching outside off stump, Matthew Kuhnemann uncomfortably  plays a forward defensive shot, no run, Appeal from the fielding side</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 3.2 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravindra Jadeja bowling to Matthew Kuhnemann, good length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 3.1 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravindra Jadeja bowling to Matthew Kuhnemann, good length ball, pitching outside off stump, Matthew Kuhnemann uncomfortably  plays a defensive forward push, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
               </div>
               {/* end ngRepeat: (key, list) in overHistory */}
               <div id="byb__comment" ng-repeat="(key, list) in overHistory" class="ng-scope">
                  <div class="endOverInfo">
                     <p class="firstChild ng-binding">Over 3</p>
                     <p class="secondChild">
                        {/* ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="2.6">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="2.5">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="2.4">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="2.3">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="2.2">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="2.1">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}
                     </p>
                     {/* <p class="totRun alignR fr" ng-if="IsMatchEnd == 0">{{list[0].TotalRuns}}/{{list[0].TotalWickets}}</p> */} {/* <p class="totRun alignR fr" ng-if="list[list.length - 1].BallID != ''">{{list[list.length - 1].TotalRuns}}/{{list[list.length - 1].TotalWickets}}</p> */} {/* ngIf: list[0].BallID != '' */}
                     <p class="totRun alignR fr ng-binding ng-scope" ng-if="list[0].BallID != ''">1/0</p>
                     {/* end ngIf: list[0].BallID != '' */} {/* ngIf: list[0].BallID == '' */}
                  </div>
                  {/* ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 2.6 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">
                        <p>Ravichandran Ashwin bowling to Travis Head, good length ball, pitching outside off stump, Travis Head plays a defensive shot on back foot, no run. Consecutive maidens by Ashwin!</p>
                     </div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 2.5 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Travis Head, good length ball, pitching on off stump, Travis Head plays a defensive back foot push, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 2.4 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Travis Head, good length ball, pitching outside off stump, Travis Head plays an aggressive cover drive on the front foot, straight to the fielder </div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 2.3 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Travis Head, good length ball, pitching on leg stump, Travis Head plays a defensive back foot push, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 2.2 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Travis Head, short of good length ball, pitching outside off stump, Travis Head plays a defensive back foot push, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 2.1 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Travis Head, good length ball, pitching outside off stump, Travis Head plays a defensive forward push, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
               </div>
               {/* end ngRepeat: (key, list) in overHistory */}
               <div id="byb__comment" ng-repeat="(key, list) in overHistory" class="ng-scope">
                  <div class="endOverInfo">
                     <p class="firstChild ng-binding">Over 2</p>
                     <p class="secondChild">
                        {/* ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="1.6">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="1.5">1</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="1.4">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="1.3">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="1.2">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="1.1">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}
                     </p>
                     {/* <p class="totRun alignR fr" ng-if="IsMatchEnd == 0">{{list[0].TotalRuns}}/{{list[0].TotalWickets}}</p> */} {/* <p class="totRun alignR fr" ng-if="list[list.length - 1].BallID != ''">{{list[list.length - 1].TotalRuns}}/{{list[list.length - 1].TotalWickets}}</p> */} {/* ngIf: list[0].BallID != '' */}
                     <p class="totRun alignR fr ng-binding ng-scope" ng-if="list[0].BallID != ''">1/0</p>
                     {/* end ngIf: list[0].BallID != '' */} {/* ngIf: list[0].BallID == '' */}
                  </div>
                  {/* ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 1.6 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravindra Jadeja bowling to Matthew Kuhnemann, good length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">1</i> 1.5 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">
                        <p>Ravindra Jadeja bowling to Travis Head, good length ball, pitching on off stump, Travis Head plays an aggressive front foot flick for a single. First runs on the board for Australia!</p>
                     </div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 1.4 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravindra Jadeja bowling to Travis Head, good length ball, pitching outside off stump, Travis Head plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 1.3 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravindra Jadeja bowling to Travis Head, full length ball, pitching outside off stump, Travis Head plays a defensive forward push, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 1.2 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '')" ng-bind-html="overHistoryData.Commentry | to_trusted">Ravindra Jadeja bowling to Travis Head, full length ball, pitching outside off stump, Travis Head uncomfortably  plays a defensive forward push, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 1.1 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">
                        <p><span style={{ "color": "#2980b9" }}><strong>Ravindra Jadeja to share the new ball with Ashwin! </strong></span>Bowling to Travis Head, full length ball, pitching outside off stump, Travis Head plays a defensive forward push, no run</p>
                     </div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
               </div>
               {/* end ngRepeat: (key, list) in overHistory */}
               <div id="byb__comment" ng-repeat="(key, list) in overHistory" class="ng-scope">
                  <div class="endOverInfo">
                     <p class="firstChild ng-binding">Over 1</p>
                     <p class="secondChild">
                        {/* ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="0.6">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="0.5">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="0.4">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="0.3">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="0.2">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}{/* ngIf: overHistoryData.BallID !='' */}<i ng-repeat="overHistoryData in list" ng-if="overHistoryData.BallID !=''" class="mcBall mcBall mcBall mcBall mcBall mcBall" title="0.1">0</i>{/* end ngIf: overHistoryData.BallID !='' */}{/* end ngRepeat: overHistoryData in list */}
                     </p>
                     {/* <p class="totRun alignR fr" ng-if="IsMatchEnd == 0">{{list[0].TotalRuns}}/{{list[0].TotalWickets}}</p> */} {/* <p class="totRun alignR fr" ng-if="list[list.length - 1].BallID != ''">{{list[list.length - 1].TotalRuns}}/{{list[list.length - 1].TotalWickets}}</p> */} {/* ngIf: list[0].BallID != '' */}
                     <p class="totRun alignR fr ng-binding ng-scope" ng-if="list[0].BallID != ''">0/0</p>
                     {/* end ngIf: list[0].BallID != '' */} {/* ngIf: list[0].BallID == '' */}
                  </div>
                  {/* ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 0.6 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">
                        <p>Ravichandran Ashwin bowling to Matthew Kuhnemann, full length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot, no run. Ashwin starts with a maiden!</p>
                     </div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 0.5 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Matthew Kuhnemann, full length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 0.4 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Matthew Kuhnemann, good length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot and is beaten</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 0.3 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Matthew Kuhnemann, full length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 0.2 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */}
                     <div class="cmdText ng-binding ng-scope" ng-if="overHistoryData.BallID !='' &amp;&amp; overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '' &amp;&amp; (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted">Ravichandran Ashwin bowling to Matthew Kuhnemann, full length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot, no run</div>
                     {/* end ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
                  <div class="cmdEvent fourCmd mcBall mcBall mcBall mcBall mcBall mcBall" ng-repeat="overHistoryData in list">
                     {/* ngIf: overHistoryData.BallID !='' */}
                     <p class="cmdOver mcBall mcBall mcBall mcBall mcBall mcBall" ng-if="overHistoryData.BallID !=''"> <i class="ovRun mcBall mcBall mcBall mcBall mcBall mcBall">0</i> 0.1 </p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '' && (overHistoryData.OverImage == undefined || overHistoryData.OverImage == '') */} {/* ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */}
                     <div class="overManualCommentary overCommentaryWithImage ng-scope" ng-if="overHistoryData.OverImage != undefined &amp;&amp; overHistoryData.OverImage != '' &amp;&amp; overHistoryData.BallID !=''">
                        <div class="ppText">
                           <div class="imgComment"> <img ng-src="https://scores.bcci.tv/matchcentre/commentaryFiles/Australia-tour-of-India-Test-series-2022-23/India-VS-Australia-(09-Mar-2023)/File_3-1-288301.png" ng-click="showCommentaryImgPreview(overHistoryData.OverImage)" src="https://scores.bcci.tv/matchcentre/commentaryFiles/Australia-tour-of-India-Test-series-2022-23/India-VS-Australia-(09-Mar-2023)/File_3-1-288301.png" /> </div>
                           {/* ngIf: (overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '') */}
                           <div ng-if="(overHistoryData.UPDCommentry != undefined &amp;&amp; overHistoryData.UPDCommentry != '')" ng-bind-html="overHistoryData.UPDCommentry | to_trusted" class="overCommentaryText cmdText ng-binding ng-scope">
                              <p><strong>Nightwatchman Matthew Kuhnemann walks in to bat alongside Travis Head! Ravichandran Ashwin to start the proceedings with the ball! </strong>Bowling to Matthew Kuhnemann, good length ball, pitching outside off stump, Matthew Kuhnemann plays a forward defensive shot, no run</p>
                           </div>
                           {/* end ngIf: (overHistoryData.UPDCommentry != undefined && overHistoryData.UPDCommentry != '') */} {/* ngIf: overHistoryData.Commentry != '' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */}
                        </div>
                     </div>
                     {/* end ngIf: overHistoryData.OverImage != undefined && overHistoryData.OverImage != '' && overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID !='' && (overHistoryData.UPDCommentry == undefined || overHistoryData.UPDCommentry == '') */} {/* ngIf: overHistoryData.BallID !='' */}
                     <p ng-if="overHistoryData.BallID !=''" class="cmdOver icon-play vclickable cmdPlay ng-scope"></p>
                     {/* end ngIf: overHistoryData.BallID !='' */} {/* ngIf: overHistoryData.BallID =='' */}
                  </div>
                  {/* end ngRepeat: overHistoryData in list */}
               </div>
               {/* end ngRepeat: (key, list) in overHistory */} {/* ngIf: ((preMatchCommentary != undefined && preMatchCommentary !='') || (matchSummary.PreMatchCommentary != undefined && matchSummary.PreMatchCommentary !='')) && (matchInn == 1 || matchInn == '') && currentInnText == 'Innings1' */} {/* ngIf: IsMatchEnd == 1 && postMatchCommentary != undefined && postMatchCommentary !='' && false */}
            </div>
            {/* ngIf: matchNotes.length > 0 */}
         </div>

      </div>
   )
}
export default LiveCommentry
