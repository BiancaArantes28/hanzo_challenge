import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from './HomePage';

import { fetchHelloWorld } from '../../store/actions/helloWorldActions';
import { getStatus, getHelloWorld } from '../../store/selectors/helloWorldSelectors';

import { HELLOWORLD_STATUS } from '../../store/reducers/helloWorldReducer';

class HomeContainer extends Component {

    componentDidMount() {
        if (HELLOWORLD_STATUS.NOT_FETCHED) {
            this.props.fetchHelloWorld();
        }
    }

    render() {
        return (
            <HomePage
                helloWorld={this.props.helloWorld}
                status={this.props.status}
            />
        );
    }
}

HomeContainer.propTypes = {
    helloWorld: PropTypes.string,
    status: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    helloWorld: getHelloWorld(state),
    status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHelloWorld: () => dispatch(fetchHelloWorld()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);