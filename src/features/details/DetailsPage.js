import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AlertComponent from '../../common/alert/AlertComponent';
import Spinner from '../../common/spinner/Spinner';

import { POSTS_STATUS } from '../../store/reducers/posts/postsReducers';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
    },
    spinner: {
        textAlign: "center",
    },
    titleHr: {
        border: "none",
        height: "1px",
        margin: 0,
        flexShrink: 0,
        backgroundColor: "rgba(0, 0, 0, 0.12)",
    },
    caption: {
        fontSize: "0.75rem",
        fontWeight: "400",
        lineHeight: "1.66",
        letterSpacing: "0.03333em",
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: "none",
    },
    content: {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5",

    }
});

class DetailsPage extends Component {

    renderLoading(classes) {
        return (
            <Paper className={classes.spinner}><Spinner /></Paper>
        );
    }

    renderErrorMessage() {
        return <AlertComponent
            severity={"error"}
            title={"Não encontrado"}
            content={"Desculpe, não foi encontrado nenhum post com o título digitado!"}
        />
    }

    renderBody(post, classes) {
        return (
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3">{post.title}</Typography>
                        <hr className={classes.titleHr}></hr>
                        <p className={classes.caption}>
                            March 25, 2020 by <a className={classes.link} href="https://biancaarantes28.github.io/" target="_blank" title="Site Bianca Arantes" alt="Link para o site da Bianca Arantes">
                                Bianca Arantes
                            </a>
                        </p>
                        <Typography variant="body1">
                            Quando tinha apenas 15 anos, iniciei os meus estudos em tecnologias front-end (HTML e CSS) e desde então virou a minha paixão e agora profissão.
                        </Typography>
                        <Typography variant="body1">
                            Atuo há 4 anos com desenvolvimento front-end e uso de metodologias ágeis.
                        </Typography>
                        <Typography variant="body1">
                            Desenvolvo projetos pensando no cliente e trazendo mais resultados aos seus negócios, utilizando sempre tecnologias avançadas e melhores ideias.
                        </Typography>
                        <Typography variant="body1">
                            Além da paixão por tecnologia, adoro hobbies (como ler livros e fazer resenhas sobre livros, crochê, assistir séries, entre outros), um bom papo e um bom café.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        );
    }

    render() {
        const { classes, post, status } = this.props;

        let content;

        if (status === POSTS_STATUS.INPROGRESS) {
            content = this.renderLoading(classes);
        } else if (post) {
            content = this.renderBody(post, classes);
        } else {

        }
        return (
            <div className={classes.root}>
                {content}
            </div>
        );
    }
}

DetailsPage.propTypes = {
    post: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
}

export default withStyles(styles, { withTheme: true })(DetailsPage);