import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from './HomePage';

import { fetchHelloWorld } from '../../store/actions/helloWorldActions';
import { fetchPosts } from '../../store/actions/posts/postsActions'
import { getHelloWorld } from '../../store/selectors/helloWorldSelectors';
import { getStatus, getPosts } from '../../store/selectors/posts/postsSelectors';

import { HELLOWORLD_STATUS } from '../../store/reducers/helloWorldReducer';
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
                posts={this.props.posts}
                status={this.props.status}
            />
        );
    }
}

HomeContainer.propTypes = {
    fetchPosts: PropTypes.func,
    posts: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    posts: getPosts(state),
    status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (id = "") => dispatch(fetchPosts(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);