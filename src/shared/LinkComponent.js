import React from 'react';

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