import * as React from 'react';
import '../ArticleShow/articleShow.css';
import { videoDetailAction } from '../../store/slice/video/video.slice'
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import WhatAppIcon from '../../assets/icons/shareIcon/whtsapp.svg';
import InAppIcon from '../../assets/icons/shareIcon/in.svg';
import FbAppIcon from '../../assets/icons/shareIcon/fb.svg';
import PlayIcon from '../../assets/icons/play.svg';

const ArticleShow = (props) => {


    const dispatch = useDispatch();
    let articleDetail = {};
    let detail = {}
    let relatedList = []
    let params = new URL(document.location).searchParams;
    let articleId = params.get("cmsuid");
    let [isPlayed, setPlayed] = React.useState(false);
    React.useEffect(() => {
        dispatch(videoDetailAction(articleId))
    }, [])
    const articleList = useSelector(s => s?.videoDetailReducer);
    if (articleList && articleList?.status) {
        articleDetail = articleList?.data?.data
        detail = articleDetail?.['sections']?.detail;
        relatedList = articleDetail?.['sections']?.relatedArticles;
    }
    const handlePlay = () => {
      
        setPlayed(!isPlayed)
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
                                {
                                    isPlayed ? (
                                        <video
                                            id="my-video"
                                            class="video-js"
                                            controls
                                            preload="auto"
                                            width="640"
                                            height="264"
                                            poster={detail?.thumb}
                                            data-setup="{}"
                                            style={{
                                                width: "100%",
                                                marginBottom: "10px",
                                                'border-top-left-radius': '15px',
                                                'border-top-right-radius': "15px",
                                                height: "20%",
                                                backgroundColor: 'transparent'

                                            }}
                                        >
                                            <source src={detail?.stream} type="video/mp4" />
                                            <source src="MY_VIDEO.webm" type="video/webm" />

                                        </video>) : (
                                        <div class="article-main-img" onClick={handlePlay}>
                                            <span className='span-art'>
                                                <img src={PlayIcon}
                                                    style={{
                                                        position: "absolute",
                                                        'z-index': "1",
                                                        width: "54px",
                                                        top: "80px",
                                                        left: "170px"
                                                    }}
                                                />

                                                <span className='span-span-as' onClick={handlePlay}>
                                                    <img alt="" aria-hidden="true" src={
                                                        detail?.thumb
                                                    } className='cals-social-image' />

                                                </span>
                                                <img alt="" srcset={detail?.thumb} decoding="async" data-nimg="intrinsic" class="img-fluid" className='cls-fig' onClick={handlePlay} /></span>

                                        </div>
                                    )

                                }


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

                                <div class="col-sm-3 col-12">
                                    <div class="row related-container related-container-mob">
                                        <div class="col-sm-12 col-12">
                                            <div class="section-heading-large small">
                                                <h2> RELATED VIDEOS</h2>
                                            </div>
                                        </div>
                                        <div class="content-listing__container" style={{
                                            gap: 1,
                                            marginBottom: "30px"
                                        }}>
                                            {
                                                relatedList && Array.isArray(relatedList) ? relatedList?.map(relArt => {
                                                    return (
                                                        <article class="media-thumbnail-horizontal  media-thumbnail-horizontal--mobile-compact " data-widget="lazy-load-images" data-initialised="true">

                                                            <a class="media-thumbnail-horizontal__link" href={`/videoshow?cmsuid=${relArt?.id}`} title={relArt?.Title}>
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
                                                                {/* <i class="fa fa-play-circle-o" 

                                                                    style={{"font-size":"48px",color:"red",
                                                                    fontSize: "48px",
                                                                    color: "red",
                                                                    position: "absolute",
                                                                    top: "12%",
                                                                    right: "13px",
                                                                    'z-index': "12"

                                                                    }}></i> */}
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