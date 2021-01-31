import React from 'react';
import Box from '@material-ui/core/Box';
import {useStyles} from "./useStyle";
import CircularProgress from '@material-ui/core/CircularProgress';


export default () => {
    const classes = useStyles();
    return (
        <Box style={ {position:'absolute',top:"50%", left:"50%", transform:'translate(-50%, -50%)'} } display="flex" justifyContent="center" alignItems="center" >
            <div className={classes.root}>
                <CircularProgress />
            </div>
        </Box>
    );
}
