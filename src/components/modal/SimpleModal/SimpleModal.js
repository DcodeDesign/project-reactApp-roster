import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Edit from '@material-ui/icons/Edit';
import HighlightOff from "@material-ui/icons/HighlightOff";

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: "300px",
        backgroundColor: theme.palette.background.paper,
        borderRadius: '4px',
        boxShadow: theme.shadows[5],
        outline: '0',
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal({titleButton,children}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
            <div style={modalStyle} className={classes.paper}>
                <IconButton onClick={handleClose} style={{float:'right', margin: '-8px -10px 0 0'}} > <HighlightOff /> </IconButton>
                {children}
            </div>
        )

    return (
        <div>
            {/*<IconButton onClick={handleOpen} aria-label="previous">
                <Edit />
            </IconButton>*/}
            <Button style={{margin:"5px"}} size="small" variant="outlined" onClick={handleOpen}>{titleButton}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description" >
                {body}
            </Modal>
        </div>
    );
}
