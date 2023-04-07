import * as React from 'react'
import "./photoList.css"
import LOGO from "../../assets/logo/logo-trans.png";
import { useDispatch, useSelector } from 'react-redux';
import LazyImage from '../../Components/LazyImage';
import dayjs from 'dayjs';
import PhotoSkeleton from '../../Components/Skelton/PhotoSkeleton'

// sport_daday_photo_gallary
const PhotoListHome = (props) => {
    const [imgLoad, setImageLoaded ] = React.useState(false)
    const homeData = useSelector(s => s?.homeReducer);
    let list = [];

    if (homeData?.data?.sections?.sport_daday_photo_gallary) {
        list = homeData?.data?.sections?.sport_daday_photo_gallary;

    }
    const ul_ref  = React.useRef(null)
    
    return (<>
        <section class="pgt-container">

            <section class="mainContainer" style={{ marginBottom: '0px' }}>

                <section id="dataHolder" class="main-webstories">

                    <div class="web-stories" style={{ margin: "auto" }}>
                        <ul ref = { ul_ref}>
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
                                                        ref={ ul_ref} 
                                                        st={{ 'object-fit': 'cover' }}
                                                        loadImageState = { setImageLoaded }
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
                                !Object.keys(homeData?.data)?.length ?  (
                                    [1,2,3,4]?.map(photo => {
                                        return (
                                            <>
                                            <li key={photo?.id}>
                                            <div class="webstories-item pgt-seltn">
                                                
                                                <PhotoSkeleton />
                                                
                                                </div>
                                            </li>
                                            </>
                                            )}
                                    )
                                )
                                : ''
                            }


                        </ul>
                    </div>
                </section>
            </section>
        </section>
        <section class="blackOverlay"></section>

    </>
    )
}

export default PhotoListHome;