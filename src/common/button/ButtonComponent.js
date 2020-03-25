import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    buttonDefault: {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        border: "1px solid",
        marginTop: "10px",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
        }
    }
  }));

const ButtonComponent = (props) => {
    const classes = useStyles();

    return (
        <Button className={classes.buttonDefault}>{props.name}</Button>
    );
}

export default ButtonComponent;