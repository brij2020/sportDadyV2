import * as React from 'react';
import './loadMore.css'
const LoadMore = (props) => {
    const { text='', hrefPath } = props;
    return (<div class="load-more-news "><a href={hrefPath}>Load More</a></div>)
}
const ViewMore = (props) => {
    const { text, hrefPath } = props;
    return (<div class="more-news"><a href={hrefPath}>More {text}</a></div>)
}
export {  LoadMore,ViewMore };