import * as React from 'react';

const PlaceHolderImage = (props) => {
    const { src, placeholderSrc, alt, classname } = props;
    
    return (
        <img
            src={src ? src : "not found image"}
            className={classname}
            alt={ alt}
            onError={(e) =>e.target.src = placeholderSrc }
        />
    )
}
export default PlaceHolderImage;