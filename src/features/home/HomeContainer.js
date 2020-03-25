import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from './HomePage';

import { deletePosts, fetchPosts } from '../../store/actions/posts/postsActions'
import { getStatus, getPosts } from '../../store/selectors/posts/postsSelectors';

import { POSTS_STATUS } from '../../store/reducers/posts/postsReducers';

class HomeContainer extends Component {

    componentDidMount() {

        if (POSTS_STATUS.NOT_FETCHED) {
            this.props.fetchPosts();
        }
    }

    render() {
        return (
            <HomePage
                deletePosts={this.props.deletePosts}
                fetchPosts={this.props.fetchPosts}
                posts={this.props.posts}
                status={this.props.status}
            />
        );
    }
}

HomeContainer.propTypes = {
    deletePosts: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    status: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    posts: getPosts(state),
    status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        deletePosts: (id) => dispatch(deletePosts(id)),
        fetchPosts: (title = "") => dispatch(fetchPosts(title)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);