import * as React from 'react';
import { useNavigate } from 'react-router-dom';


const Anchor = (props) => {
    const {
        to = '/',
        styl = {} ,
        classname = '',
        text = '',
        isSSR = false,
        onclickHandler = {}

    } = props;
    const navigate = useNavigate()
    const handleTo = (e) => {
        e.preventDefault();
        if(typeof onclickHandler === 'function') {
            onclickHandler();
        } else {
            navigate(to)
            // if(typeof window !== 'undefined') {
            //     window.location.href = to;
            // }
        }
    }
    return(
        <a 
            href = {to} 
            className={ classname } 
            style={styl} 
            onClick={handleTo}
        
        >{text}</a>
    )
}

export default Anchor;