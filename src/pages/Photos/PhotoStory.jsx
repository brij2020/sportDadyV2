import * as React from 'react';
import { useState } from 'react';
import './photoStory.css'
// import slides from './Mockey'
import { photoDetailAction } from '../../store/slice/photo/photo.slice'
import { useDispatch, useSelector } from 'react-redux';
function toaster(message, type, timeout = 5000) {
    const body = document.body;

    if (typeof type === "undefined") {
        return;
    }

    const toast = document.createElement("div");

    toast.classList.add("toast-notification", type);
    toast.innerHTML = message;
    body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("active");
    }, 100);
    setTimeout(() => {
        toast.classList.remove("active");
    }, timeout - 500);
    setTimeout(() => {
        toast.parentNode.removeChild(toast);
    }, timeout);
}

const PhotoStory = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [contextMenuIsOpen, setContextMenuState] = useState(false);
    const timer = React.useRef(null); 
    const dispatch = useDispatch();
    let articleDetail = {};

    let imageSlides = []
    let params = new URL(document.location).searchParams;
    let articleId = params.get("cmsuid");
    React.useEffect(() => {
        dispatch(photoDetailAction(articleId))
    }, [])
    const articleList = useSelector(s => s?.photoDetailReducer);
    if (articleList && articleList?.status) {
        articleDetail = articleList?.data?.data
        if(articleDetail && Array.isArray(articleDetail?.images)) {
            imageSlides =  articleDetail?.images?.map(slide => { 
                let _slide = JSON.parse(JSON.stringify(slide))
                _slide['timeOut'] = "4000"; 
                return _slide } )
        }
    }

    console.log('articleDetail', articleDetail)




    const next = () => {

        if (activeIndex + 1 > imageSlides.length - 1) {
            setActiveIndex(0);

        } else {
            setActiveIndex(activeIndex + 1);
        }
        // setActiveIndex(activeIndex + 1);

    }
    
    // React.useEffect(() => {
    //     clearTimeout(timer.current);
    //     timer.current = setTimeout(() => {
    //         if (activeIndex < slides.length - 1) {
    //             next();
    //         } else {
    //             console.log("End of Story");
    //             toaster("End of Story for Today! &#128526;", "info");


    //         }
    //     }, slides[activeIndex]?.timeOut);
    
    // })
    const prev = () => {
        if (activeIndex === 0) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    }
    const toggeleMenu = (e, s) => {
        e.preventDefault()
        console.log('se', s)
        if (s === "open") {
            
            document.body.classList.add('menu-open');
            setContextMenuState(true);
        } else {
            setContextMenuState(false)
            document.body.classList.remove('menu-open');
        }
    }
    // Check if Slide contains video
    // function isVideo() {
    //     return slides[activeIndex].classList.contains("video");
    // }

    // function pauseVideo() {
    //     if (isVideo()) {
    //         const v = slides[activeIndex].querySelector("video");
    //         v.muted = true;
    //         v.pause();
    //     }
    // }

    // function playVideo() {
    //     if (isVideo()) {
    //         const v = slides[activeIndex].querySelector("video");
    //         v.muted = true;
    //         v.play();
    //     }
    // }

    // function stopVideo() {
    //     if (isVideo()) {
    //         const v = slides[activeIndex].querySelector("video");
    //         v.pause();
    //         v.currentTime = 0;
    //     }
    // }

    // function toggleMute() {
    //     if (isVideo()) {
    //         const v = slides[activeIndex].querySelector("video");
    //         v.muted = !v.muted;
    //     }
    // }

    // function cancelAnimation() {
    //     clearTimeout(timer.current);
    // }
    return (
        <div className='tp-section' >
        <main role="main">

            <div className="daily-stories">
                <div className="daily-stories__outer" >
                    <div className="daily-stories__container">
                        {
                            imageSlides && imageSlides.map(({ thumb:url, id, timeOut, contentType, caption, formats, static:staticpath,summary } = { url: '', ids: '90K', timeOut: "0", contentType: "" }, i) => {
                                
                                return (
                                    <div className={`pgt-slide ${i === activeIndex ? 'v-slide active' : 'hide-slide'}`} data-timeout={`${timeOut}`} key={id} >
                                        {
                                            contentType !== 'video' ? (
                                                <img src={url } alt={id} title={summary}
                                                style={{
                                                "object-fit": "contain"
                                                }}
                                                />
                                            ) : (
                                                <video src={url} preload="true" muted="muted" />
                                            )
                                        }
                                         <div className="pgt-gradient"><h3>{caption}</h3></div>
                                    </div>

                                )

                            })
                        }

                    </div>
                </div>

                <div className="progress-bars" data-count="4">
                    {
                         imageSlides &&  imageSlides.map(({ thumb:url, id:ids, timeOut, contentType, summary } = { url: '', ids: '90K', timeOut: "0", contentType: "" }, i) => {
                            return (
                                contentType !== 'video' ? (
                                    <div className={`bar ${i === activeIndex ? 'seen animate' : ''}`} data-index={`${i}`} key={ids}><span style={{ "animation-duration": `${timeOut}ms` }}></span></div>
                                ) : (
                                    <div className={`bar video-pgt ${i === activeIndex ? 'seen animate' : ''}`} data-index={`${i}`} key={ids}><span style={{ "animation-duration": `${timeOut}ms` }}></span></div>
                                ))
                        })
                    }

                </div>

                <a className="logo" href="#" title="Cretive Design Lab">
                   
                </a>

                <div className={`context-menu-container ${contextMenuIsOpen ? 'active' : ''}`}>
                    <a href="#" className="button" onClick={(e) => toggeleMenu(e, 'open')} >
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <circle fill="#ffffff" cx="7" cy="16" r="2" />
                            <circle fill="#ffffff" cx="16" cy="16" r="2" />
                            <circle fill="#ffffff" cx="25" cy="16" r="2" />
                        </svg>
                    </a>
                    <div className="context-menu">
                        <a href="#" id="c-menu_save" target="_blank" className="link">Save picture</a>
                        <a href="#" id="c-menu_share" target="_blank" className="link">Share</a>
                        <a href="https://creative-design-lab.com" id="c-menu_copy" className="link">Copy link</a>
                        <a href="#" id="c-menu_cancel" className="link" onClick={(e) => toggeleMenu(e, 'cancel')} >Cancel</a>
                    </div>
                </div>
            </div>

            <span id="pgt-prev-slide" onClick={() => prev()}></span>
            <span id="pgt-next-slide" onClick={() => next()}></span>
            <div className="central-area" data-state="playing" style={{display:"none"}}>
                <div className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="path_play" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8l6 4-6 4V8z" />
                        <path id="path_pause" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15V9M14 15V9" />
                    </svg>
                </div>
            </div>

        </main>
   </div> )
}

export default PhotoStory;