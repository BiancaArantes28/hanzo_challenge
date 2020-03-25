import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Spinner from '../../common/spinner/Spinner';
import { HELLOWORLD_STATUS } from '../../store/reducers/helloWorldReducer';
import { POSTS_STATUS } from '../../store/reducers/posts/postsReducers';

import CardComponent from '../../common/card/CardComponent';
import DepositPhotos from '../../assets/img/img_depositphotos.jpg'
import './home.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    subtitle: {
        color: theme.palette.text.secondary,
    }
});

class HomePage extends Component {

    renderLoading() {
        return (
            <Grid item md={12} xs={12}>
                <Spinner />
            </Grid>
        );
    }

    renderTitle(title, styledClass) {
        return (
            <div>
                <Typography variant="h3">
                    {title}
                </Typography>
                <Typography variant="h6" className={styledClass}>
                    Mar 2020
                </Typography>
            </div>
        );
    }

    renderBody(posts, classes) {
        let content = <Typography variant="h6">
            Teste
        </Typography>
        return posts.map(m => {
            return (
                <Grid item lg={4} md={6} sm={6} xs={12} key={m.id}>
                    <CardComponent
                        title={this.renderTitle(m.title, classes.subtitle)}
                        content={content}
                        img={DepositPhotos}
                        titleImg={'Deposit photos'}
                    />
                </Grid>
            );
        });
    }

    render() {
        let content;
        const { classes, status, posts } = this.props;

        if (status === POSTS_STATUS.INPROGRESS) {
            content = this.renderLoading();
        } else {
            content = this.renderBody(posts, classes);
        }

        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {content}
                </Grid>

            </div>
        );
    }
}

HomePage.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.string.isRequired,
}

export default withStyles(styles, { withTheme: true })(HomePage);