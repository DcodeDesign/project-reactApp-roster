import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStyles} from './useStyles'
import TopMenu from "../../../components/navigation/topMenu/TopMenu";
import LeftBar from "./leftBar/LeftBar";

export default function NavApp({props, children}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>

            <TopMenu
                handleDrawerOpen={handleDrawerOpen}
                open={open}/>
           <LeftBar
                handleDrawerClose={handleDrawerClose}
                open={open}/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
}
