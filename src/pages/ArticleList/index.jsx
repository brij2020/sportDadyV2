import * as React from 'react'

import PageHeading from '../../Components/pageHead';
import './articlesList.css'
import { getArticleListAction } from '../../store/slice/artlist/article.slice'
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs'


const Articles = (props) => {
    
    let articlesList = []
    const dispatch = useDispatch();
    React.useState(() => {
      dispatch(getArticleListAction())
    },[])
    const articleList = useSelector(s => s?.artListReducer);
    if(articleList && articleList?.status) {
        console.log(articleList?.status?.data?.data)
        articlesList = articleList?.data?.data
    }
    
    return (<>
        <PageHeading heading={'News and Articles '} />
        <div class="content-listing__container">
            {
                articlesList.slice(0,1)?.map(art => {
                    return (
                        <figure class="_YVis IEy0a   undefined false" data-videomsid="99037214">
                            <a href={`/articleshow?cmsuid=${art?.id}`} class="Hn2z7 undefined" data-newga="" target="" frmappuse="1">
                            <div class="yCs_c  "><div class="Bw78m cardactive">
                                <img src={art?.thumb} placeholdersrc={art?.thumb} alt={art.Title} offsetvertical="300" imgsize="23456" resizemode="4" title="" placeholdermsid="" msid="" type="thumb" class="" /></div></div>
                                <div class="hoid1  ">
                                    <i class="">
                                        </i><figcaption>{ art?.summary || art?.Title }</figcaption>
                                </div></a>
                        </figure>
                    )
                })
            }
        
        {
            articlesList?.slice(1)?.map(art => (
            <article class="media-thumbnail-horizontal  media-thumbnail-horizontal--mobile-compact " data-widget="lazy-load-images" data-initialised="true" key={art?.id}>
                <a class="media-thumbnail-horizontal__link" href={`/articleshow?cmsuid=${art?.id}`} title={art?.Title}>
                    <div class="media-thumbnail-horizontal__container">
                        <div class="media-thumbnail-horizontal__meta">
                        <span class="media-thumbnail-horizontal__tag theme theme-wtc">{art?.Title}</span>
                        <h3 class="media-thumbnail-horizontal__heading">{art?.summary}</h3>
                        <time class="media-thumbnail-horizontal__date">{dayjs(art?.updatedAt)?.format('HH MMM YY | h:mm A')} IST</time>
                        </div>
                        <header class="media-thumbnail-horizontal__image-container">
                        <div class="lazy-image is-loaded">
                            <div class="js-lazy-load u-observed lazy-image-wrapper is-loaded" data-picture-in-view="true">
                                
                                <picture class=" object-fit-cover-picture ">
                                    <img class="js-faded-image fade-in-on-load object-fit-cover-picture__img is-loaded" src={art?.thumb} alt="Bumrah-Stokes" />
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