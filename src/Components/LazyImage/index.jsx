import * as React from 'react';
import './lazy.css'
import LOGO_WHITE from '../../assets/logo/logo.png'

/**
 * Forward Ref cb arg { props, ref }
 */
const LazyImage = React.forwardRef((props, ref) => {
    const {
        src,
        width,
        height,
        className, 
        alt,
        st,
        loadImageState
    } = props;
    
    let observer = null;
    const [loaded, setLoaded] = React.useState(false);
    const [inVPort, setViewPort ] = React.useState(false);
    
    
    /***
     * Intersection Observer
     */
    React.useEffect( () => {
        observer = new IntersectionObserver(onIntersect, { threshold: 0});
        observer?.observe(ref.current);
        
    },[]);

    // Call back for observer
    const onIntersect = (enteries) => {
        console.log('isIntersecting', enteries[0]?.isIntersecting)
        if( enteries[0]?.isIntersecting) {
            observer.disconnect();
        }
        setViewPort(enteries[0]?.isIntersecting)
    }
    const handleLoaded = () => {
        setLoaded(true)
    }
    React.useEffect(() => {
        if(loaded) {
            loadImageState(true)
        } else {

        }
    },[loaded])
    return (
        <>
        {
            !loaded ? (<img className={'skeleton'} />) :null
        }
        <img alt={alt} 
            className={ className ?? '' } 
            onLoad={handleLoaded} 
            src={inVPort ? src : null } 
            style={st}
            
        /> 
        </>)
})

export default LazyImage;