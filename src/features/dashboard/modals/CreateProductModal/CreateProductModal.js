import React from 'react';
import {useStyles, getModalStyle} from "./useStyles"
import IconButton from '@material-ui/core/IconButton';
import HighlightOff from '@material-ui/icons/HighlightOff';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import {CreateProduct} from "../../forms/CreateProduct/CreateProduct";
import AddIcon from '@material-ui/icons/Add';

export default function CreateProductModal(props) {
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
            <CreateProduct
                addProduct={props.addProduct}
                handleClose={handleClose}
            />
        </div>
    );

    return (
        <div>
            <Button style={{margin:"0 0 20px"}}
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleOpen}>{props.titleButton}</Button>
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
