import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from './ButtonComponent';

class CounterComponent extends React.Component {
    static propTypes = {
        incrementAmount: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.incrementAmount = this.props.incrementAmount;
    }

    componentDidMount() {
        console.log('CounterComponent mounted');
    }

    componentWillUnmount() {
        this.setState({
            counter: 0
        });
        console.log('CounterComponent unmounted');
    }

    inctement() {
        console.log(this.props);
        console.log(this.state);
        this.setState((prevState, props) => ({
            counter: prevState.counter + props.incrementAmount,
            llama:2
        }));
    }

    decrement() {
        this.setState((prevState, props) => ({
            counter: prevState.counter - props.incrementAmount
        }));
    }

    render() {
        return (
            <div>
                <br />
                <ButtonComponent text={- this.incrementAmount} onClickFunction={this.decrement.bind(this)} />
                {this.state.counter}
                <ButtonComponent text={`+ ${this.incrementAmount}`} onClickFunction={this.inctement.bind(this)} />
            </div>
        );
    }
}

export default CounterComponent;