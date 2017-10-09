import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonComponent from './shared/ButtonComponent';
import CounterComponent from './shared/CounterComponent';
import LinkComponent from './shared/LinkComponent';
import ListComponent from './shared/ListComponent';
import FormComponent from './shared/FormComponent';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'X',
    lastName: 'Llama'
};

function buttonFunction(x) {
    console.log(this.props);
    console.log(this.state);
    console.log("parent fun " + x);
}

const element = (
    <div>
        <h1>
            Hello my Dear, {formatName(user)}!
        </h1>
        <ButtonComponent />
        <ButtonComponent text={33} />
        <ButtonComponent text={"Lama"} onClickFunction={buttonFunction.bind(this)} />
        <br />
        <CounterComponent incrementAmount={2} />
        <br />
        <LinkComponent />
        <br />
        <ListComponent />
        <br />
        <FormComponent selectData={[1, 2, 3, 4, 5]} />
        <br />
    </div>
);

ReactDOM.render(element, document.getElementById('root'));

