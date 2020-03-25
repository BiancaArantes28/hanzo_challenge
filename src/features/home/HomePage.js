import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Spinner from '../../common/spinner/Spinner';
import { HELLOWORLD_STATUS } from '../../store/reducers/helloWorldReducer';

import './home.css';

class HomePage extends Component {

    renderLoading() {
        return <Spinner />;
    }

    renderBody() {
        return (
            <span>{this.props.helloWorld}</span>
        );
    }

    render() {
        let content;
        const { status } = this.props;

        if (status === HELLOWORLD_STATUS.INPROGRESS) {
            content = this.renderLoading();
        } else {
            content = this.renderBody();
        }

        return (
            <div className="home">
                <Typography variant="h2">
                    {content}
                </Typography>
            </div>
        );
    }
}

HomePage.propTypes = {
    helloWorld: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
}

export default HomePage;