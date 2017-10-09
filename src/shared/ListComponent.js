import React from 'react';

class ListComponent extends React.Component {

    listItems = null;
    constructor(props) {
        super(props);
        const numbers = [1, 2, 3, 4, 5];
        this.listItems = numbers.map((number, index) =>
            <li key={index.toString()}>
                {number}
            </li>
        );
    }

    //to nie działa, tylko constructor!

    // listItems = null;
    // componentDidMount() {
    //     const numbers = [1, 2, 3, 4, 5];
    //     this.listItems = numbers.map((number) =>
    //         <li>{number}</li>
    //     );
    // }

    render() {
        return (
            <ul>{this.listItems}</ul>
        );
    }
}

export default ListComponent;