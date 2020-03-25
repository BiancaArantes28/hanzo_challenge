import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Spinner from '../../common/spinner/Spinner';
import { POSTS_STATUS } from '../../store/reducers/posts/postsReducers';

import CardComponent from '../../common/card/CardComponent';
import DepositPhotos from '../../assets/img/img_depositphotos.jpg'

import FilterPosts from './FilterPosts';
import AlertComponent from '../../common/alert/AlertComponent';

import './home.css';
import ButtonComponent from '../../common/button/ButtonComponent';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    subtitle: {
        color: theme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
});

class HomePage extends Component {

    renderLoading(classes) {
        return (
            <Grid item md={12} xs={12}>
                <Paper className={classes.paper}>
                    <Spinner />
                </Paper>

            </Grid>
        );
    }

    renderErrorMessage() {
        return (
            <Grid item md={12} xs={12}>
                <AlertComponent
                    severity={"error"}
                    title={"Não encontrado"}
                    content={"Desculpe, não foi encontrado nenhum post com o título digitado!"}
                />
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
        let content = (
            <div>
                <Typography variant="h6">
                    Teste
                </Typography>
                <ButtonComponent name={"Ler mais"} />
            </div>
        );
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
            content = this.renderLoading(classes);
        } else if (status === POSTS_STATUS.FETCHED && posts.length) {
            content = this.renderBody(posts, classes);
        } else {
            content = this.renderErrorMessage();
        }

        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item md={12} xs={12}>
                        <FilterPosts fetchPosts={this.props.fetchPosts} />
                    </Grid>
                    {content}
                </Grid>

            </div>
        );
    }
}

HomePage.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    status: PropTypes.string.isRequired,
}

export default withStyles(styles, { withTheme: true })(HomePage);