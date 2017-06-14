import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    state = {
        userName: ''
    }
    handleSubmit = (event) => {
        console.log('Event: form submit ', this.state.userName);
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(resp => {
            console.log(resp);
            this.props.onSubmit(resp.data);
            this.setState({userName: ''});
        })
    }
    handleChange = (event) => {
        this.setState({userName: event.target.value})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName} onChange={this.handleChange} placeholder="Github username" />
                <button type="submit" onChange={(evetn) => this.setState({userName: event.target.value })}>Add Card</button>
            </form>
        );
    };
}

export default Form;