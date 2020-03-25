import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postDetails } from '../../store/actions/posts/postsActions';
import { getPost, getStatus } from '../../store/selectors/posts/postsSelectors';

class DetailsContainer extends Component {
    constructor(props) {
        super(props);
        let id = this.props.match.params.id;

        this.state = {
            id,
        };
    }

    componentDidMount() {
        this.props.postDetails(this.state.id);
    }

    render() {
        return (
            <h1>{this.state.id}</h1>
        );
    }
}

const mapStateToProps = (state) => ({
    post: getPost(state),
    status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        postDetails: (id) => dispatch(postDetails(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);