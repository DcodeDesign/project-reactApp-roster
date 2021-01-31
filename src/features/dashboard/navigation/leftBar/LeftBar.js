import React from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '@material-ui/icons/Dashboard';
import {leftBarUseStyles} from './leftBar.useStyles'
import {NavLink} from "react-router-dom";
import "./leftBar.styles.scss"

export default function LeftBar(props) {
    const classes = leftBarUseStyles();
    const theme = useTheme();
    return (
        <>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.open,
                        [classes.drawerClose]: !props.open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <NavLink exact to={"/"}
                             activeClassName="selected"
                             style={{color: 'inherit', textDecoration: 'inherit'}}>
                        <ListItem button key={1}>
                            <ListItemIcon> <Dashboard/> </ListItemIcon>
                            <ListItemText primary={"Dashboard"}/>
                        </ListItem>
                    </NavLink>

                </List>
                {/*<Divider/>
                <List>
                    <ListItem button key={2}>
                        <ListItemIcon> <InboxIcon/> </ListItemIcon>
                        <ListItemText primary={"Products"}/>
                    </ListItem>

                </List>*/}
            </Drawer>
        </>
    );
}
