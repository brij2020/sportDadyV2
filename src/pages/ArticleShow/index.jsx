import * as React from 'react';
import './articleShow.css';
import { articledetailAction } from '../../store/slice/artlist/article.slice'
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import WhatAppIcon from '../../assets/icons/shareIcon/whtsapp.svg';
import InAppIcon from '../../assets/icons/shareIcon/in.svg';
import FbAppIcon from '../../assets/icons/shareIcon/fb.svg';



const ArticleShow = (props) => {


    const dispatch = useDispatch();
    let articleDetail = {};
    let detail = {}
    let relatedList = []
    let params = new URL(document.location).searchParams;
    let articleId = params.get("cmsuid");
    React.useEffect(() => {
        dispatch(articledetailAction(articleId))
    }, [])
    const articleList = useSelector(s => s?.artDetailReducer);
    if (articleList && articleList?.status) {
        articleDetail = articleList?.data?.data
        detail = articleDetail?.['sections']?.detail;
        relatedList = articleDetail?.['sections']?.relatedArticles;
    }

    console.log('articleDetail', articleDetail)
    return (
        <section class="article-section">
            <div class="container">
                <div class="row artshow">
                    <div class="col-sm-9 col-12">

                        <div class="article-heading">
                            <h1 style={{ fontSize: '25px' }}>{detail?.Title}</h1>
                        </div>
                        <div class="row artshow">
                            <div class="col-sm-8 col-md-9 col-12">
                                <div class="new-loc-date-stamp" style={{ paddingBottom: "10px" }}>
                                    <div><span class="statebullet">Noida, Sec 40, UP- India &nbsp;
                                    </span>
                                        <span>
                                            Updated: {dayjs(detail?.updatedAt)?.format('HH MMM YYYY | hh:mm A')} IST
                                        </span>
                                    </div>
                                    <div> </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-md-3 col-12">
                                <div class="article-share-data">
                                    <div class="social-icon-circle" >
                                        <a rel="noreferrer" data-action="share/whatsapp/share">
                                            <span className='span-art'>
                                                <span className='span-span-as'>
                                                    <img alt="" aria-hidden="true" src={WhatAppIcon} className='cals-social-image' /></span>
                                                <img alt="Share On WhatsApp" src={WhatAppIcon} decoding="async" data-nimg="intrinsic" className="thumb-whtsapp cls-fig" srcset={WhatAppIcon} />

                                                <noscript></noscript>
                                            </span>
                                        </a>

                                        <a rel="noreferrer" data-action="share/whatsapp/share">
                                            <span className='span-art'>
                                                <span className='span-span-as'>
                                                    <img alt="" aria-hidden="true" src={InAppIcon} className='cals-social-image' /></span>
                                                <img alt="Share On WhatsApp" src={InAppIcon} decoding="async" data-nimg="intrinsic" className="thumb-in cls-fig" srcset={InAppIcon} />

                                                <noscript></noscript>
                                            </span>
                                        </a>
                                        <a rel="noreferrer" data-action="share/whatsapp/share">
                                            <span className='span-art'>
                                                <span className='span-span-as'>
                                                    <img alt="" aria-hidden="true" src={FbAppIcon} className='cals-social-image' /></span>
                                                <img alt="Share On WhatsApp" src={FbAppIcon} decoding="async" data-nimg="intrinsic" className="thumb-fb cls-fig" srcset={FbAppIcon} />

                                                <noscript></noscript>
                                            </span>
                                        </a>


                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-12" style={{
                                paddingRight: "17px",
                                paddingLeft: "12px"

                            }}>
                                <div class="article-main-img"><span className='span-art'><span className='span-span-as'>
                                    <img alt="" aria-hidden="true" src={
                                        detail?.thumb
                                    } className='cals-social-image' /></span>
                                    <img alt="" srcset={detail?.thumb} decoding="async" data-nimg="intrinsic" class="img-fluid" className='cls-fig' /></span></div>
                                <div class="img-stamp" style={{ display: 'none' }}>
                                    <div class="img-copy">
                                        <p><i class="fa fa-cameras"></i>
                                            <div style={{ "min-height": "auto;" }}>
                                                {
                                                    detail?.editor || "Editor Detail"
                                                }
                                            </div>
                                        </p>
                                    </div>
                                    <div class="img-share-twt"><a href="javascript:void(0)" target="_blank" rel="noreferrer" class="socialshare-tw"><i class="fa fa-twitter"></i>Follow Us</a></div>
                                </div>
                                <div class="story-highlights">
                                    <h2 class="story-highlightshead">Story highlights</h2>
                                    <div class="story-hightligsummry">
                                        <p>
                                            <strong>
                                                <div><p style={{ color: 'white' }}>{detail?.summary}&nbsp;</p>
                                                </div></strong></p>
                                    </div>
                                </div>
                                <div class="row artshow" >
                                    <div class="col-sm-9 col-12 order-sm-last">
                                        <div class="article-main-data">
                                            <div>
                                                <p className="pb-show">{detail?.Article}.&nbsp;</p>
                                            </div>
                                            <div class="ads-box-300x250">
                                                <div class="ads-placeholder-internal">
                                                    <div>
                                                        <div id="div-gpt-ad-1539257793131-0"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <section class="cre-liketoread" style={{ "display": "none" }}>
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-sm-12 col-12">
                                                            <div class="accordion">
                                                                <div class="accordion-item">
                                                                    <button data-toggle="collapse" data-target="#collapse-liketoread" aria-expanded="true" aria-controls="collapse-liketoread">
                                                                        <h2 class="title">RELATED STORIES</h2>
                                                                        <span class="icon" aria-hidden="true"></span>
                                                                    </button>
                                                                    <div class="collapse show" id="collapse-liketoread">
                                                                        <div class="likeToRead">
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="http://www.wionews.com/business-economy/us-fed-rate-hike-latest-update-check-date-time-expected-hike-know-when-interest-rate-cuts-are-expected-557960">
                                                                                        <div class="leftImg">
                                                                                            <img src="https://cdn.wionews.com/sites/default/files/styles/story_page/public/2023/02/01/329548-capture.PNG" class="img-resp" alt="" /></div>
                                                                                        <div class="rightTxt">
                                                                                            <p>US FOMC (Fed) Meeting 2023 Today: Check time &amp; expected hike; know when interest rate cuts are expected</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://www.wionews.com/trending/income-tax-calculator-2023-salaried-senior-citizens-can-save-more-with-new-tax-regime-heres-how-557948">
                                                                                        <div class="leftImg">
                                                                                            <img src="https://cdn.wionews.com/sites/default/files/styles/story_page/public/2023/02/01/329540-calculator.png" class="img-resp" alt="" /></div>
                                                                                        <div class="rightTxt">
                                                                                            <p>Income Tax Calculator 2023: Salaried &amp; senior citizens can save more with new tax regime? Here's how</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://www.wionews.com/south-asia/police-nab-suspects-involved-in-pakistan-mosque-blast-investigate-security-lapse-557943">
                                                                                        <div class="leftImg"><img src="https://cdn.wionews.com/sites/default/files/styles/story_page/public/2023/02/01/329537-untitled-design-2023-02-01t174234165.png" class="img-resp" alt="" /></div>
                                                                                        <div class="rightTxt">
                                                                                            <p>Police nab suspects involved in Pakistan mosque blast, investigate security lapse</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://www.wionews.com/india-news/union-budget-2023-new-vs-old-tax-regime-which-one-is-better-557885">
                                                                                        <div class="leftImg"><img src="https://cdn.wionews.com/sites/default/files/styles/story_page/public/2023/02/01/329496-untitled-design-2023-02-01t154151933.png" class="img-resp" alt="" /></div>
                                                                                        <div class="rightTxt">
                                                                                            <p>Union Budget 2023: New vs old tax regime; which one is better?</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="http://www.wionews.com/world/who-is-nikki-haley-the-indian-american-top-gun-with-strong-political-views-teased-to-challenge-biden-in-2024-557874">
                                                                                        <div class="leftImg"><img src="https://cdn.wionews.com/sites/default/files/styles/story_page/public/2023/02/01/329491-untitled-design-60.png" class="img-resp" alt="" /></div>
                                                                                        <div class="rightTxt">
                                                                                            <p>Who is Nikki Haley? The Indian-American top gun with strong political views teased to challenge Biden in 2024</p>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>


                                        </div>


                                    </div>
                                </div>
                                <div class="col-sm-3 col-12">
                                    <div class="row related-container related-container-mob">
                                        <div class="col-sm-12 col-12">
                                            <div class="section-heading-large small">
                                                <h2> RELATED STORIES</h2>
                                            </div>
                                        </div>
                                        <div class="content-listing__container">
                                            {
                                                relatedList && Array.isArray(relatedList) ? relatedList?.map(relArt => {
                                                    return (
                                                        <article class="media-thumbnail-horizontal  media-thumbnail-horizontal--mobile-compact " data-widget="lazy-load-images" data-initialised="true">
                                                            <a class="media-thumbnail-horizontal__link" href={`/articleshow?cmsuid=${relArt?.id}`} title={relArt?.Title}>
                                                                <div class="media-thumbnail-horizontal__container">
                                                                    <div class="media-thumbnail-horizontal__meta">
                                                                        <span class="media-thumbnail-horizontal__tag theme theme-wtc">{relArt?.Event}</span>
                                                                        <h1 class="media-thumbnail-horizontal__heading">{relArt?.Title}</h1>
                                                                        <time class="media-thumbnail-horizontal__date">{dayjs(relArt?.updatedAt)?.format('HH MMM YY | h:mm A')} IST</time></div>
                                                                    <header class="media-thumbnail-horizontal__image-container"><div class="lazy-image is-loaded">
                                                                        <div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true">
                                                                            <picture class=" object-fit-cover-picture ">
                                                                                <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src={relArt?.thumb} alt="Bumrah-Stokes" />
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                    </header>
                                                                </div>
                                                            </a>
                                                        </article>
                                                    )
                                                }) : null
                                            }


                                            {/* <article class="media-thumbnail-horizontal  media-thumbnail-horizontal--mobile-compact " data-widget="lazy-load-images" data-initialised="true"><a class="media-thumbnail-horizontal__link" href="https://icc-cricket.com/news/3118641" title="Five of the best matches in this World Test Championship period"><div class="media-thumbnail-horizontal__container"><div class="media-thumbnail-horizontal__meta"><span class="media-thumbnail-horizontal__tag theme theme-wtc">World Test Championship</span><h1 class="media-thumbnail-horizontal__heading">Five of the best matches in this World Test Championship period</h1><time class="media-thumbnail-horizontal__date">23 Mar 23</time></div><header class="media-thumbnail-horizontal__image-container"><div class="lazy-image is-loaded"><div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true"><picture class=" object-fit-cover-picture ">
                                                <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/03/22/c63ebc94-ccb3-4399-b13e-6697428d7950/Bumrah-Stokes.jpg?width=114&amp;height=114" alt="Bumrah-Stokes" /></picture></div></div></header></div></a></article> */}
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )

}
export default ArticleShow;