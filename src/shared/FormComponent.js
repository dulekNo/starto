import React from 'react';

class FormComponent extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            inputValue: props.inputValue || 'default input text',
            textareaValue: props.textareaValue || 'default textarea text',
            selectData: props.selectData || [1, 2],
            selectvalue: props.selectvalue || '',
        };
        this.handleChange = this.handleChange.bind(this);
        console.log(this.state.selectData);
    }

    inputHandleChange(event) {
        this.setState({ inputValue: event.target.value.toUpperCase() });
    }

    textareaHandleChange(event) {
        this.setState({ textareaValue: event.target.value });
    }

    handleChange(event) {
        this.setState({ selectvalue: event.target.value });

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        console.log(target);
        console.log(value);
        console.log(name);
        this.setState({
          [name]: value
        });
        console.log(this.state);
    }

    handleSubmit(event) {

        console.log('A name was submitted: ' + this.state.inputValue);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    input label:
                    <input type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    textarea label:
                    <textarea name="textarea" value={this.state.textareaValue} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Pick your favorite La Croix flavor:
                    <select name="select" value={this.state.selectvalue} onChange={this.textareaHandleChange.bind(this)}>
                        {this.state.selectData.map((ele, index) => {
                            return (<option value={index.toString()} key={index.toString()}>
                                {ele}
                            </option>)
                        })}
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormComponent;