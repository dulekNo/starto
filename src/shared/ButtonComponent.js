import React from 'react';
import PropTypes from 'prop-types';

class ButtonComponent extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onClickFunction: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            text: props.text || 'default button text',
            onClickFunction: props.onClickFunction || function () { 
                console.log("nope"); 
            }
        };
    }

    render() {
        return (
            <button onClick={() => { this.state.onClickFunction('child') }}>{this.state.text}</button>
        );
    }
}

export default ButtonComponent;