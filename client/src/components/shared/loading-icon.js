import React from 'react';

const LoadingComponent = () => {
    return(
        <div className="loading">
            <div className="page-mid loading-screen">
                <div className="page-mid loading-icon">
                    <span className="flag-star">&#9733;</span>
                    <span className="flag-star">&#9733;</span>
                    <span className="flag-star">&#9733;</span>
                    <div className="flag-bar">&nbsp;</div>
                    <div className="flag-bar">&nbsp;</div>
                </div>
            </div>
        </div>
    )
}

export default LoadingComponent;