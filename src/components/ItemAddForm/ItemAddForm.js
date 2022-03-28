import React from "react"

import "./ItemAddForm.css"

export default class ItemAddForm extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label:e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label) this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className='item-add-form d-flex'
                    onSubmit={this.onSubmit}>
                <input type='text'
                       className='form-control'
                       onChange={this.onLabelChange}
                       placeholder='Add your new todo'
                       value={this.state.label}/>
                <button type='button'
                        className='btn btn-outline-primary'
                        onClick={this.onSubmit}>Add</button>
            </form>
        )
    }
};