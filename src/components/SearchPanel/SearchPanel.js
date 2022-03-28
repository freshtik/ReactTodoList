import React from "react"

export default class SearchPanel extends React.Component {

    state = {
        itemSearch: ''
    }

    onSearchChange = (e) => {
        this.setState({
            itemSearch: e.target.value
        });
        this.props.onSearchChange(this.state.itemSearch)
    };

    render() {
        return (
            <input type='text'
                   className='form-control search-input'
                   value={this.state.itemSearch}
                   onChange={this.onSearchChange}
                   placeholder='Type here to search'
            />
        )
    }
}
