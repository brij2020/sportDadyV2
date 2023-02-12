import * as React from 'react';

import './ArticleList.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, redirect } from 'react-router-dom';
import cricketimg1 from '../../assets/images/cricketimg1.jpg';
import cricketimg2 from '../../assets/images/cricketimg2.jpeg';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.jpg';
import img7 from '../../assets/images/img7.jpg';
import img9 from '../../assets/images/img9.jpg';
const AricleList = () => {
    return (

        <section class="content-hero ">
            <div class="constraint-wrapper">
                <div class="content-hero__container">
                    <div class="content-hero__block-layout content-hero__block-layout--lead-media-item">
                        <div class="content-hero__item-container content-hero__item-container--lead-media-item" data-itemlist-id="3044774">
                            <article class="lead-media-item  lead-media-item--no-bg" data-widget="lazy-load-images" data-initialised="true">
                                <a class="lead-media-item__link" href="https://icc-cricket.com/news/3044774" title="Uncapped batter named in England limited-overs squads for Bangladesh tour">


                                    <header class="lead-media-item__image-container">
                                        <div class="lazy-image is-loaded">
                                            <div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true">
                                                {/*         <picture class=" object-fit-cover-picture ">
                            <source class="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/fe8196db-cafc-4f24-91d1-46d878285974/GettyImages-1461413884.jpg?width=360&height=270, https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/fe8196db-cafc-4f24-91d1-46d878285974/GettyImages-1461413884.jpg?width=720&height=540 2x" media="(max-width: 640px)">
                            <img class=" js-faded-image fade-in-on-load object-fit-cover-picture__img" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/fe8196db-cafc-4f24-91d1-46d878285974/GettyImages-1461413884.jpg?width=1068&height=600" alt="GettyImages-1461413884">
                </picture>
        */}
                                                <picture class=" object-fit-cover-picture ">
                                                    <source class="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/fe8196db-cafc-4f24-91d1-46d878285974/GettyImages-1461413884.jpg?width=360&amp;height=270, https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/fe8196db-cafc-4f24-91d1-46d878285974/GettyImages-1461413884.jpg?width=720&amp;height=540 2x" media="(max-width: 640px)" />
                                                    <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/fe8196db-cafc-4f24-91d1-46d878285974/GettyImages-1461413884.jpg?width=1068&amp;height=600" alt="GettyImages-1461413884" />
                                                </picture></div>
                                        </div>
                                    </header>

                                    <div class="lead-media-item__container">
                                        <div class="lead-media-item__tag">
                                            <span class="lead-media-item__tag-text "></span>
                                        </div>
                                        <h1 class="lead-media-item__heading">Uncapped batter named in England limited-overs squads for Bangladesh tour</h1>
                                        <div class="lead-media-item__meta">
                                            <time class="lead-media-item__date">20 hrs ago</time>
                                        </div>
                                    </div>

                                </a>
                            </article>
                        </div>
                    </div>
                    <div class="content-hero__block-layout content-hero__block-layout--cards">
                        <div class="content-hero__item-container content-hero__item-container--cards" data-itemlist-id="3023928">


                            <article class="media-thumbnail   media-thumbnail--no-bg-responsive media-thumbnail--show-publish-date" data-widget="lazy-load-images" data-initialised="true">
                                <a class="media-thumbnail__link" href="https://icc-cricket.com/news/3023928" title="The final group of 100% Cricket Superstars is revealed">

                                    <header class="media-thumbnail__image-container">
                                        <div class="lazy-image is-loaded">
                                            <div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true">
                                                {/*         <picture class=" object-fit-cover-picture ">
                    <source class="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/e278d8f8-7087-44f3-bb30-51b36bac63de/16x9-4-.jpg?width=200&height=112, https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/e278d8f8-7087-44f3-bb30-51b36bac63de/16x9-4-.jpg?width=400&height=224 2x" media="(max-width: 640px)">
                    <img class=" js-faded-image fade-in-on-load object-fit-cover-picture__img" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/e278d8f8-7087-44f3-bb30-51b36bac63de/16x9-4-.jpg?width=267&height=150" alt="100% Cricket Superstars">
        </picture>
 */}
                                                <picture class=" object-fit-cover-picture ">
                                                    <source class="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/e278d8f8-7087-44f3-bb30-51b36bac63de/16x9-4-.jpg?width=200&amp;height=112, https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/e278d8f8-7087-44f3-bb30-51b36bac63de/16x9-4-.jpg?width=400&amp;height=224 2x" media="(max-width: 640px)" />
                                                    <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/e278d8f8-7087-44f3-bb30-51b36bac63de/16x9-4-.jpg?width=267&amp;height=150" alt="100% Cricket Superstars" />
                                                </picture></div>
                                        </div>
                                    </header>

                                    <div class="media-thumbnail__meta">
                                        <span class="media-thumbnail__tag ">100% Cricket</span>

                                        <h1 class="media-thumbnail__heading">The final group of 100% Cricket Superstars is revealed</h1>

                                        <time class="media-thumbnail__date">16 Jan 23</time>
                                    </div>

                                </a>
                            </article>
                        </div>
                        <div class="content-hero__item-container content-hero__item-container--cards" data-itemlist-id="3044497">


                            <article class="media-thumbnail   media-thumbnail--no-bg-responsive media-thumbnail--show-publish-date" data-widget="lazy-load-images" data-initialised="true">
                                <a class="media-thumbnail__link" href="https://icc-cricket.com/news/3044497" title="South Africa lose crucial points in race to direct Cricket World Cup qualification">

                                    <header class="media-thumbnail__image-container">
                                        <div class="lazy-image is-loaded">
                                            <div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true">
                                                {/*         <picture class=" object-fit-cover-picture ">
                    <source class="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/d463d288-0a04-46c0-bc84-3680fb54df29/GettyImages-1246713547.jpg?width=200&height=112, https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/d463d288-0a04-46c0-bc84-3680fb54df29/GettyImages-1246713547.jpg?width=400&height=224 2x" media="(max-width: 640px)">
                    <img class=" js-faded-image fade-in-on-load object-fit-cover-picture__img" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/d463d288-0a04-46c0-bc84-3680fb54df29/GettyImages-1246713547.jpg?width=267&height=150" alt="GettyImages-1246713547">
        </picture>
 */}
                                                <picture class=" object-fit-cover-picture ">
                                                    <source class="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/d463d288-0a04-46c0-bc84-3680fb54df29/GettyImages-1246713547.jpg?width=200&amp;height=112, https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/d463d288-0a04-46c0-bc84-3680fb54df29/GettyImages-1246713547.jpg?width=400&amp;height=224 2x" media="(max-width: 640px)" />
                                                    <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/d463d288-0a04-46c0-bc84-3680fb54df29/GettyImages-1246713547.jpg?width=267&amp;height=150" alt="GettyImages-1246713547" />
                                                </picture></div>
                                        </div>
                                    </header>

                                    <div class="media-thumbnail__meta">
                                        <span class="media-thumbnail__tag ">South Africa news</span>

                                        <h1 class="media-thumbnail__heading">South Africa lose crucial points in race to direct Cricket World Cup qualification</h1>

                                        <time class="media-thumbnail__date">22 hrs ago</time>
                                    </div>

                                </a>
                            </article>
                        </div>
                        <div class="content-hero__item-container content-hero__item-container--cards" data-itemlist-id="3045161">


                            <article class="media-thumbnail   media-thumbnail--no-bg-responsive media-thumbnail--show-publish-date" data-widget="lazy-load-images" data-initialised="true">
                                <a class="media-thumbnail__link" href="https://icc-cricket.com/news/3045161" title="Key fast bowler returns to New Zealand's Test squad for home series against England">

                                    <header class="media-thumbnail__image-container">
                                        <div class="lazy-image is-loaded">
                                            <div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true">
                                                {/*         <picture class=" object-fit-cover-picture ">
                    <source class="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/b63ecb06-219d-4165-989d-048738516519/GettyImages-1289653243.jpg?width=200&height=112, https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/b63ecb06-219d-4165-989d-048738516519/GettyImages-1289653243.jpg?width=400&height=224 2x" media="(max-width: 640px)">
                    <img class=" js-faded-image fade-in-on-load object-fit-cover-picture__img" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/b63ecb06-219d-4165-989d-048738516519/GettyImages-1289653243.jpg?width=267&height=150" alt="GettyImages-1289653243">
        </picture>
 */}
                                                <picture class=" object-fit-cover-picture ">
                                                    <source class="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/b63ecb06-219d-4165-989d-048738516519/GettyImages-1289653243.jpg?width=200&amp;height=112, https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/b63ecb06-219d-4165-989d-048738516519/GettyImages-1289653243.jpg?width=400&amp;height=224 2x" media="(max-width: 640px)" />
                                                    <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/02/02/b63ecb06-219d-4165-989d-048738516519/GettyImages-1289653243.jpg?width=267&amp;height=150" alt="GettyImages-1289653243" />
                                                </picture></div>
                                        </div>
                                    </header>

                                    <div class="media-thumbnail__meta">
                                        <span class="media-thumbnail__tag ">New Zealand news</span>

                                        <h1 class="media-thumbnail__heading">Key fast bowler returns to New Zealand's Test squad for home series against England</h1>

                                        <time class="media-thumbnail__date">15 hrs ago</time>
                                    </div>

                                </a>
                            </article>
                        </div>
                        <div class="content-hero__item-container content-hero__item-container--cards" data-itemlist-id="3044682">


                            <article class="media-thumbnail   media-thumbnail--no-bg-responsive media-thumbnail--show-publish-date" data-widget="lazy-load-images" data-initialised="true">
                                <a class="media-thumbnail__link" href="https://icc-cricket.com/news/3044682" title="Everything you need to know about the ICC Women's T20 World Cup 2023">

                                    <header class="media-thumbnail__image-container">
                                        <div class="lazy-image is-loaded">
                                            <div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true">
                                                {/*         <picture class=" object-fit-cover-picture ">
                    <source class="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2023/01/21/8a40b32d-073b-46cd-95b7-03541edc82c4/GettyImages-1211253534.jpg?width=200&height=112, https://resources.pulse.icc-cricket.com/photo-resources/2023/01/21/8a40b32d-073b-46cd-95b7-03541edc82c4/GettyImages-1211253534.jpg?width=400&height=224 2x" media="(max-width: 640px)">
                    <img class=" js-faded-image fade-in-on-load object-fit-cover-picture__img" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/01/21/8a40b32d-073b-46cd-95b7-03541edc82c4/GettyImages-1211253534.jpg?width=267&height=150" alt="The Australian Women's T20 World Cup team celebrate after winning the ICC Women's T20 World Cup Final, at Federation Square on March 09, 2020 in Melbourne, Australia.">
        </picture>
 */}
                                                <picture class=" object-fit-cover-picture ">
                                                    <source class="" srcset="https://resources.pulse.icc-cricket.com/photo-resources/2023/01/21/8a40b32d-073b-46cd-95b7-03541edc82c4/GettyImages-1211253534.jpg?width=200&amp;height=112, https://resources.pulse.icc-cricket.com/photo-resources/2023/01/21/8a40b32d-073b-46cd-95b7-03541edc82c4/GettyImages-1211253534.jpg?width=400&amp;height=224 2x" media="(max-width: 640px)" />
                                                    <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/01/21/8a40b32d-073b-46cd-95b7-03541edc82c4/GettyImages-1211253534.jpg?width=267&amp;height=150" alt="The Australian Women's T20 World Cup team celebrate after winning the ICC Women's T20 World Cup Final, at Federation Square on March 09, 2020 in Melbourne, Australia." />
                                                </picture></div>
                                        </div>
                                    </header>

                                    <div class="media-thumbnail__meta">
                                        <span class="media-thumbnail__tag ">Women's T20 World Cup 2023</span>

                                        <h1 class="media-thumbnail__heading">Everything you need to know about the ICC Women's T20 World Cup 2023</h1>

                                        <time class="media-thumbnail__date">20 hrs ago</time>
                                    </div>

                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AricleList;


