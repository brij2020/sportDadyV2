import * as React from 'react'

import PageHeading from '../../Components/pageHead';
import './articlesList.css'
const Articles = (props) => {
    return (<>
        <PageHeading heading={'News and Articles '} />
        <div class="content-listing__container">
        <figure class="_YVis IEy0a   undefined false" data-videomsid="99037214">
            <a href="/articleshow" class="Hn2z7 undefined" data-newga="" target="" frmappuse="1"><div class="yCs_c  "><div class="Bw78m cardactive">
                <img src="https://static.toiimg.com/thumb/imgsize-80830,msid-99037214,width-375,resizemode-4/99037214.jpg" width="375" placeholdersrc="https://static.toiimg.com/photo/msid-25581306/25581306.jpg" alt="Record heat waves push India closer to limit of human survival" offsetvertical="300" imgsize="23456" resizemode="4" title="" placeholdermsid="" msid="" type="thumb" class="" /></div></div>
                <div class="hoid1  ">
                    <i class="">
                        </i><figcaption>Record heat waves push India closer to limit of human survival</figcaption>
                </div></a>
        </figure>
        {
            [1,2,3,4].map(article => (
            <article class="media-thumbnail-horizontal  media-thumbnail-horizontal--mobile-compact " data-widget="lazy-load-images" data-initialised="true">
                <a class="media-thumbnail-horizontal__link" href="/articleshow" title="Five of the best matches in this World Test Championship period">
                    <div class="media-thumbnail-horizontal__container">
                        <div class="media-thumbnail-horizontal__meta">
                        <span class="media-thumbnail-horizontal__tag theme theme-wtc">World Test Championship</span>
                        <h1 class="media-thumbnail-horizontal__heading">Five of the best matches in this World Test Championship period</h1>
                        <time class="media-thumbnail-horizontal__date">23 Mar 23</time>
                        </div>
                        <header class="media-thumbnail-horizontal__image-container">
                        <div class="lazy-image is-loaded">
                            <div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true">
                                
                                <picture class=" object-fit-cover-picture ">
                                    <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src="https://resources.pulse.icc-cricket.com/photo-resources/2023/03/22/c63ebc94-ccb3-4399-b13e-6697428d7950/Bumrah-Stokes.jpg?width=114&amp;height=114" alt="Bumrah-Stokes" />
                                </picture>
                            </div>
                        </div>
                        </header>
                    </div>
                </a>
            </article>
            ))
        }
        
        
        <div className="more-news">
        <a href="">More Articles</a></div>
    </div>
    </>
        
    )
}
export default Articles;