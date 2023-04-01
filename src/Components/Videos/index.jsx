import * as React from 'react';
import './video.css'
import { getVideoListAction } from '../../store/slice/video/video.slice'
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs'
import PlayIcon from '../../assets/icons/play.svg';



const Video = () => {

    const homeData = useSelector(s => s?.homeReducer);
    let list = [];

    if (homeData?.data?.sections?.sport_daday_vidoehub) {
        list = homeData?.data?.sections?.sport_daday_vidoehub;
    }
    console.log('api video lsit', list)
    return (
        <section className="video-home-section" style={{ padding: "10px 10px 10px", "border-raduis": "10px" }}>
            <div className="container-video">
                <div className="row">
                    <div className="col-sm-12 col-12">
                        <div className="section-heading-large">
                            <h2><a href="/videos">Videos</a></h2>
                            <div className="in-text-items pull-right">
                                <a href="/videos">More Videos</a>
                                <span className="arrow"> »</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-12">
                        {
                            list && Array.isArray(list) ? list.slice(0, 1).map((v_art, i) => {
                                return (
                                    <div className="video-section-big">
                                        <a href={`/videoshow?cmsuid=${v_art?.id}`}>
                                            <div className="video-big-img">
                                                <a href={v_art?.thumb}>
                                                    <span style={{
                                                        "box-sizing": "border-box",
                                                        display: "inline-block",
                                                        overflow: "hidden",
                                                        width: "initial",
                                                        height: "initial",
                                                        background: "none",
                                                        opacity: 1,
                                                        border: "0px",
                                                        margin: "0px",
                                                        padding: "0px",
                                                        position: "relative",
                                                        maxWidth: "100%"
                                                    }}>
                                                        <span style={{
                                                            "box-sizing": "border-box",
                                                            display: "block",
                                                            width: "initial",
                                                            height: "initial",
                                                            background: "none",
                                                            opacity: 1,
                                                            border: "0px",
                                                            margin: "0px",
                                                            padding: "0px",
                                                            maxWidth: "100%"
                                                        }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27780%27%20height=%27450%27/%3e"
                                                                style={{
                                                                    "display": "block",
                                                                    maxWidth: "100%",
                                                                    width: "initial",
                                                                    height: "initial",
                                                                    background: "none",
                                                                    opacity: 1,
                                                                    border: "0px",
                                                                    margin: "0px",
                                                                    padding: "0px"
                                                                }} />
                                                        </span>
                                                        <img alt="" src={v_art?.thumb} decoding="async" data-nimg="intrinsic" className="img-fluid" style={{
                                                            "position": "absolute", inset: "0px", "box-sizing": "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"
                                                        }} srcset={
                                                            v_art?.thumb
                                                        } />
                                                        <noscript></noscript>
                                                    </span>
                                                </a>
                                                <div className="play-btn">
                                                    <span style={{
                                                        "box-sizing": "border-box",
                                                        display: "inline-block",
                                                        overflow: "hidden",
                                                        width: "initial",
                                                        height: "initial",
                                                        background: "none",
                                                        opacity: 1,
                                                        border: "0px",
                                                        margin: "0px",
                                                        padding: "0px",
                                                        position: "relative",
                                                        maxWidth: "100%"
                                                    }}>
                                                        <span style={{
                                                            "box-sizing": "border-box",
                                                            display: "block",
                                                            width: "initial",
                                                            height: "initial",
                                                            background: "none",
                                                            opacity: 1,
                                                            border: "0px",
                                                            margin: "0px",
                                                            padding: "0px",
                                                            maxWidth: "100%"
                                                        }}>
                                                            <img alt="" aria-hidden="true" src={PlayIcon}
                                                                style={{
                                                                    "display": 'block',
                                                                    maxWidth: "100%",
                                                                    width: 'initial',
                                                                    height: 'initial',
                                                                    background: 'none',
                                                                    opacity: 1,
                                                                    border: "0px",
                                                                    margin: '0px',
                                                                    padding: "0px"
                                                                }} /></span>
                                                        <img alt="play-icon" src={PlayIcon} decoding="async" data-nimg="intrinsic"
                                                            style={{
                                                                "position": "sticky",
                                                                inset: "0px",
                                                                boxSizing: "border-box",
                                                                padding: "0px",
                                                                border: "none",
                                                                margin: "auto",
                                                                display: "block",
                                                                width: "0px",
                                                                height: "0px",
                                                                minWidth: "100%",
                                                                maxWidth: "100%",
                                                                minHeight: "100%",
                                                                maxHeight: "100%"
                                                            }} srcset={PlayIcon} /><noscript></noscript>
                                                    </span></div><a href="/videos/ukraine-vows-to-keep-defending-bakhmut-amid-constant-attacks-by-russian-forces-569397"><p>{
                                                        v_art?.summary}</p>
                                                </a>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }) : null
                        }

                    </div>
                    <div className="col-sm-4 col-12">
                        {
                            list && Array.isArray(list) ? list.slice(1).map((v_art, i) => {
                                return (
                                    <div className="video-small-list">
                                        <a href={`/videoshow?cmsuid=${v_art?.id}`}>
                                            <div className="video-small-img">
                                                <a href={`/videoshow?cmsuid=${v_art?.id}`}>
                                                    <span
                                                        style={{
                                                            "box-sizing": "border-box",
                                                            display: "inline-block",
                                                            overflow: "hidden",
                                                            width: "initial",
                                                            height: "initial",
                                                            background: "none",
                                                            opacity: 1,
                                                            border: "0px",
                                                            margin: "0px",
                                                            padding: "0px",
                                                            position: "relative",
                                                            maxWidth: "100%"
                                                        }}><span style={{
                                                            "box-sizing": "border-box",
                                                            display: "block",
                                                            width: "initial",
                                                            height: "initial",
                                                            background: "none",
                                                            opacity: 1,
                                                            border: "0px",
                                                            margin: "0px",
                                                            padding: "0px",
                                                            maxWidth: "100%"
                                                        }}>
                                                            <img alt="" aria-hidden="true" src={v_art?.thumb}
                                                                style={{
                                                                    "display": "block",
                                                                    maxWidth: "100%",
                                                                    width: "initial",
                                                                    height: "initial",
                                                                    background: "none",
                                                                    opacity: 1,
                                                                    border: "0px",
                                                                    margin: "0px",
                                                                    padding: "0px"
                                                                }} /></span>
                                                        <img alt="" src={PlayIcon} decoding="async" data-nimg="intrinsic" className="img-fluid videoimg"
                                                            style={{
                                                                "position": "absolute",
                                                                inset: "0px",
                                                                boxSizing: "border-box",
                                                                padding: "0px",
                                                                border: "none",
                                                                margin: "auto",
                                                                display: "block",
                                                                width: "0px",
                                                                height: "40%",
                                                                minWidth: "100%",
                                                                maxWidth: "100%",
                                                                minHeight: "100%",
                                                                maxHeight: "100%",
                                                                maxWidth: 0,
                                                                minHeight: 0
                                                            }} srcset={PlayIcon} /><noscript></noscript>
                                                    </span></a><div className="playbottombtn"><a href="/videos/china-sets-gdp-target-of-around-5-for-2023-indias-q3-gdp-growth-slows-to-44-569423"><span
                                                        style={{
                                                            "box-sizing": "border-box",
                                                            display: "inline-block",
                                                            overflow: "hidden",
                                                            width: "initial",
                                                            height: "initial",
                                                            background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"
                                                        }}>
                                                        <span style={{ "box-sizing": "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2725%27%20height=%2725%27/%3e" style={{ "display": "block", maxWidth: '100%', width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} /></span>
                                                        <img alt="play-icon" src={v_art?.thumb} decoding="async" data-nimg="intrinsic" style={{
                                                            "position": "absolute",
                                                            inset: "0px",
                                                            boxSizing: "border-box",
                                                            padding: "0px",
                                                            border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"
                                                        }} srcset={v_art?.thumb} /><noscript></noscript>
                                                    </span></a>
                                                </div></div>
                                            <div className="video-smalllist-txt">
                                                <p
                                                    className="vid-text"
                                                >
                                                    <a href={`/videoshow?cmsuid=${v_art?.id}`}>
                                                        {
                                                            v_art?.summary
                                                        }</a></p>
                                            </div></a></div>
                                )
                            }) : null
                        }



                        <div className="more-news">
                            <a href="/videos">More Videos</a></div>
                    </div></div></div></section>
    )
}

export default Video;