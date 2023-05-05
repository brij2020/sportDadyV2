import * as React from 'react';
import './loader.css'
const Loading = () => {
    return (
        <div class="overlay">
            <div class="overlay__inner">
                <div class="overlay__content">
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
            </div>
        </div>
    )
}
export default Loading;
