import React, { Component } from 'react';

class DetailsContainer extends Component {
    constructor(props) {
        super(props);
        let id = this.props.match.params.id;

        this.state = {
            id,
        };
    }
    
    render() {
        return (
            <h1>{this.state.id}</h1>
        );
    }
}

export default DetailsContainer;