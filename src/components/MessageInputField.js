import React from 'react';
import { makeStyles } from '@material-ui/core/styles';//①


const useStyles = makeStyles({//②
    root: {
        gridRow: 2,
    },
})

const MessageInputField = () => {
    const classes = useStyles();//③
    return <div className={classes.root}>MessageInputField</div>;
}

export default MessageInputField;
