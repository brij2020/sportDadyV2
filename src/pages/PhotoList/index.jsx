import * as React from 'react'
import "./photoList.css"
import LOGO from "../../assets/logo/logo-trans.png";
import PageHeading from '../../Components/pageHead'
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoListAction } from '../../store/slice/photo/photo.slice'
import dayjs from 'dayjs';
import { LoadMore } from '../../Components/LoadMore'



const PhotoListPage = (props) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getPhotoListAction({
            pageno: 1,
            perpage: 10
        }))
    }, [])
    const articleList = useSelector(s => s?.photoListReducer);
    let list = [];
    if (articleList?.status && articleList?.data) {
        list = articleList?.data?.data

    }
    console.log('photo lois', list)
    return (<>
        <section class="pgt-container">

            <section class="mainContainer">

                {/* <div class="breadcrumbs">
                <a href="/">Home</a>
                <span>/</span>
                Web Stories

            </div>  */}

                <section id="dataHolder" class="main-webstories">
                    {/* <div class="secHdg">
                        <span class="hdgTexure"></span>
                        <div class="hdgStyle">
                            <span>[</span>
                            <h1>Web Stories</h1>
                            <span>]</span>
                        </div>
                    </div> */}
                    <PageHeading heading="Web Stories" />
                    <div class="web-stories">
                        <ul>
                            {
                                list && Array.isArray(list) ? list?.map(photo => {
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
                                                        <div class="time">{dayjs(photo?.updatedAt)?.format('HH MMM YY')}</div>
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
                    <LoadMore />
                </section>
            </section>
        </section>
        <section class="blackOverlay"></section>

    </>
    )
}

export default PhotoListPage;