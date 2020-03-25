import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { postDetails } from '../../store/actions/posts/postsActions';
import { getPost, getStatus } from '../../store/selectors/posts/postsSelectors';
import DetailsPage from './DetailsPage';

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
            <DetailsPage 
                post={this.props.post}
                status={this.props.status}
            />
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

DetailsContainer.propTypes = {
    post: PropTypes.object.isRequired,
    postDetails: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);