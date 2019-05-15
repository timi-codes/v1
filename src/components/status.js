import React from 'react';

export default () => {
    return (
        <a className="status" href="{{site.resume}}" target="_blank">
            <div className="status__light">
                <div className="status__light__ring"></div>
                <div className="status__light__led"></div>
            </div>
            <div className="status__message">Currently seeking full-time opportunities!</div>
        </a>
    )
}