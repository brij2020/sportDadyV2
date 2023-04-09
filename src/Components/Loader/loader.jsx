import * as React from 'react';

import './loader.css'
const Loader = ({
    isLoading = false
}) => {
 
      
    return (<>
        <h1>Loading overlay</h1>
        <div class="loading" style={{ "display": isLoading ? 'block':'none' }}>
            <div class="spinner"></div>
        </div>
    </>
    )
}

export default Loader;