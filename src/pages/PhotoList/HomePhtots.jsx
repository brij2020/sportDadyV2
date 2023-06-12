import * as React from 'react'
import "./photoList.css"
import LOGO from "../../assets/logo/logo-trans.png";
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import LazyImage from '../../Components/LazyImage';
import PhotoSkeleton from '../../Components/Skelton/PhotoSkeleton'
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import Heading from "../../Components/Heading"
// sport_daday_photo_gallary
const PhotoListHome = (props) => {
    const [imgLoad, setImageLoaded] = React.useState(false)
    const homeData = useSelector(s => s?.homeReducer);
    let list = [];

    if (homeData?.data?.sections?.sport_daday_photo_gallary) {
        list = homeData?.data?.sections?.sport_daday_photo_gallary;

    }
    const ul_ref = React.useRef(null);

    const [divRef, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;

    React.useEffect(() => {
        console.log(`The component is ${isVisible ? 'visible' : 'not visible'}.`, isVisible);
    }, [isVisible])

    return (<>
    
        <section class="video-home-section" style={{ "padding": "10px;" }}>
         <Heading primaryHeading={'Photos Gallery'} ballImageLeftPercent={10} visibility={isVisible}/>
            <div class="container-video-pgt">
                <section class="pgt-container" ref={divRef}>

                    <section class="mainContainer" style={{ marginBottom: '0px' }}>

                        <section id="dataHolder" class="main-webstories">

                            <div class="web-stories" style={{ margin: "auto" }}>
                                <ul ref={ul_ref}>
                                    {
                                        list && Array.isArray(list) ? list?.slice(1, 5)?.map(photo => {
                                            return (
                                                <li key={photo?.id}>
                                                    <div class={`webstories-item ${!imgLoad ? 'skeleton-gray card-skltn' : ''}`} >
                                                        <a href={`/photoshow?cmsuid=${photo?.id}`}
                                                            className={`${!imgLoad ? 'skeleton-white' : ''} `}
                                                        >
                                                            <div class="iconofwebstoires">
                                                                <span class="webstories-icon"></span>
                                                            </div>
                                                            <LazyImage
                                                                src={photo?.thumb}
                                                                ref={ul_ref}
                                                                st={{ 'object-fit': 'cover' }}
                                                                loadImageState={setImageLoaded}
                                                            />
                                                            {/* <img src={photo?.thumb}
                                            style={{ 'object-fit': 'cover' }}
                                            alt="nikki tamboli in embellished outfits"
                                            title="nikki tamboli in embellished outfits" /> */}
                                                            <div class="gradient">
                                                                <h3>{photo?.summary}</h3>
                                                                <div class="time">{dayjs(photo?.updatedAt)?.format('HH MMM YY')}</div>
                                                                <img class="logo-img" src={LOGO}
                                                                    alt="hindustan times" title="hindustan times" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </li>
                                            )
                                        })
                                            : null
                                    }
                                    {
                                        !Object.keys(homeData?.data)?.length ? (
                                            [1, 2, 3, 4]?.map(photo => {
                                                return (
                                                    <>
                                                        <li key={photo?.id}>
                                                            <div class="webstories-item pgt-seltn">

                                                                <PhotoSkeleton />

                                                            </div>
                                                        </li>
                                                    </>
                                                )
                                            }
                                            )
                                        )
                                            : ''
                                    }


                                </ul>
                            </div>
                        </section>
                    </section>
                </section>
                <div className="more-news " style={{ margin: "23px 0 10px" }}>
                    <a href="/photos-stories" style={{ border: 'none' }}>More Photos</a>
                </div>
                <section class="blackOverlay"></section>
            </div>
        </section>

    </>
    )
}

export default PhotoListHome;