import React from 'react';
import PropTypes from 'prop-types';

class LinkComponent extends React.Component {

    linkFunction(e) {
        e.preventDefault();
        console.log(e);
    }

    render() {
        return (
            <a href="#" onClick={(e) => { this.linkFunction(e) }}>Link</a>
        );
    }
}

export default LinkComponent;