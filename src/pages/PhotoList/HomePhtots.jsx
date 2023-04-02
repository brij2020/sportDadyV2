import * as React from 'react'
import "./photoList.css"
import LOGO from "../../assets/logo/logo-trans.png";
import { useDispatch, useSelector } from 'react-redux';

// sport_daday_photo_gallary
const PhotoListHome = (props) => {
    const homeData = useSelector(s => s?.homeReducer);
    let list = [];

    if (homeData?.data?.sections?.sport_daday_photo_gallary) {
        list = homeData?.data?.sections?.sport_daday_photo_gallary;

    }

    return (<>
        <section class="pgt-container">

            <section class="mainContainer" style={{ marginBottom: '0px' }}>

                <section id="dataHolder" class="main-webstories">

                    <div class="web-stories" style={{ margin: "auto" }}>
                        <ul>
                            {
                                list && Array.isArray(list) ? list?.slice(1, 5)?.map(photo => {
                                    return (
                                        <li key={photo?.id}>
                                            <div class="webstories-item">
                                                <a href={`/photoshow?cmsuid=${photo?.id}`}
                                                    onclick="ga('set','dimension49','Section page'); ga('set','dimension53','web stories'); ga('send', 'event', 'Web Stories - Widget','1', 'https://www.hindustantimes.com/web-stories/nikki-tamboli-in-embellished-outfits-_NP13hJ8J0Jj6MbiPD_j');">
                                                    <div class="iconofwebstoires">
                                                        <span class="webstories-icon"></span>
                                                    </div>
                                                    <img src={photo?.thumb}
                                                        style={{ 'object-fit': 'cover' }}
                                                        alt="nikki tamboli in embellished outfits"
                                                        title="nikki tamboli in embellished outfits" />
                                                    <div class="gradient">
                                                        <h3>{photo?.summary}</h3>
                                                        <div class="time">Feb 24, 2023</div>
                                                        <img class="logo-img" src={LOGO}
                                                            alt="hindustan times" title="hindustan times" />
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    )
                                }

                                )
                                    : null
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