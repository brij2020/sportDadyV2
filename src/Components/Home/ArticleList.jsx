import * as React from 'react';

import './ArticleList.css'

import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import Heading from "../../Components/Heading"

const AricleList = (props) => {
    const homeData = useSelector(s => s?.homeReducer);
    let list = [];
   
    if (homeData?.data?.sections?.sport_daday_news_article) {
        list = homeData?.data?.sections?.sport_daday_news_article;

    }
    const [divRef, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;

    React.useEffect(() => {
        console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`, isVisible);
    }, [isVisible])
    
    return (<section className="video-home-section"> 
    <Heading primaryHeading={'Latest News and Articles'} ballImageLeftPercent={5}  visibility={isVisible} />
    <div className='bg-section' style={{ "background": 'linear-gradient(0deg, #000, #ff0000)', backgroundSize: "cover", marginBottom: "15px" }} ref={divRef}>
        <section class="content-hero " >
            <div class="constraint-wrapper">
                <div class="content-hero__container">

                    <div class="content-hero__block-layout content-hero__block-layout--lead-media-item">
                        {
                            list?.slice(0, 1).map((art, i) => (
                                <div class="content-hero__item-container content-hero__item-container--lead-media-item" data-itemlist-id={3044774 + i} key = {i}>
                                    <article class="lead-media-item  lead-media-item--no-bg" data-widget="lazy-load-images" data-initialised="true">
                                        <a class="lead-media-item__link" href={`/articleshow?cmsuid=${art?.id}`} title={art?.Title}>


                                            <header class="lead-media-item__image-container">
                                                <div class="lazy-image is-loaded">
                                                    <div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true">
                                        
                                                        <picture class=" object-fit-cover-picture ">
                                                            <source class="" srcset={art?.thumb} media="(max-width: 640px)" />
                                                            <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src={art?.thumb} alt="GettyImages-1461413884" />
                                                        </picture></div>
                                                </div>
                                            </header>

                                            <div class="lead-media-item__container">
                                                <div class="lead-media-item__tag">
                                                    <span class="lead-media-item__tag-text "></span>
                                                </div>
                                                <h1 class="lead-media-item__heading">{art?.Title}</h1>
                                                <div class="lead-media-item__meta">
                                                    <time class="lead-media-item__date">{dayjs(art?.updatedAt).format('HH MMM YY | h:mm A')}</time>
                                                </div>
                                            </div>

                                        </a>
                                    </article>
                                </div>

                            ))
                        }

                    </div>
                    <div class="content-hero__block-layout content-hero__block-layout--cards">
                        {
                            list?.slice(1).map((art, i) => (
                                <div class="content-hero__item-container content-hero__item-container--cards" data-itemlist-id="3044682">


                                    <article class="media-thumbnail   media-thumbnail--no-bg-responsive media-thumbnail--show-publish-date" data-widget="lazy-load-images" data-initialised="true">
                                        <a class="media-thumbnail__link" href={`/articleshow?cmsuid=${art?.id}`} title={art?.Title}>

                                            <header class="media-thumbnail__image-container">
                                                <div class="lazy-image is-loaded">
                                                    <div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true">
                                                              

                                                        <picture class=" object-fit-cover-picture ">
                                                            <source class="" srcset={art?.thumb} media="(max-width: 640px)" />
                                                            <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src={art?.thumb} alt={art?.Title} />
                                                        </picture></div>
                                                </div>
                                            </header>

                                            <div class="media-thumbnail__meta">
                                                <span class="media-thumbnail__tag ">{art?.Event}</span>

                                                <h1 class="media-thumbnail__heading">{art?.Title}</h1>

                                                <time class="media-thumbnail__date">{dayjs(art?.updatedAt).format('HH MMM YY | h:mm A')}</time>
                                            </div>

                                        </a>
                                    </article>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    </div>
</section>
    )
}

export default AricleList;


