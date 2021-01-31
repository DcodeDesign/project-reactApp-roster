import React from 'react';
import Box from '@material-ui/core/Box';
import {useStyles} from "./useStyle";
import CircularProgress from '@material-ui/core/CircularProgress';


export default () => {
    const classes = useStyles();
    return (
        <Box style={ {height:"100vh"} } display="flex" justifyContent="center" alignItems="center" bgcolor="background.paper">
            <div className={classes.root}>
                <p>Pas de connexion</p>
                <CircularProgress />
            </div>
        </Box>
    );
}
