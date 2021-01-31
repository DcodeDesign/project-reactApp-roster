import React from 'react';
import {useStyles} from "./useStyle";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DeleteProductModal from "../modals/DeleteProductModal/DeleteProductModal";
import UpdateProductModal from "../modals/UpdateProductModal/UpdateProductModal";
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import {NavLink,  useLocation} from 'react-router-dom'
import IconButton from "@material-ui/core/IconButton";


export default function CardProduct(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" style={{marginBottom:'10px'}}>
                        <NavLink className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary"
                                 style={{textDecoration: "none", color:"#3f51b5",display: "flex", alignItems: "center"}}
                                 to={"/product?uuid=" + props.product.uuid} >
                            {props.product.name}
                        </NavLink>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" >
                        {props.product.description.length > 68 ? (
                            props.product.description.substring(0,68) + " ..."
                        ) : (
                            props.product.description
                        )}
                    </Typography>
                </CardContent>
                <Divider variant="middle" />
                <div className={classes.controls}>
                    <NavLink style={{textDecoration: "none", color:"#3f51b5", float:"left"}} to={"/product?uuid=" + props.product.uuid} >
                        <IconButton color={"primary"}>
                            <LinkRoundedIcon />
                        </IconButton>
                    </NavLink>

                    <div className="makeStyles-grow-8"> </div>
                    <DeleteProductModal
                        titleButton={"Supprimer"}
                        index={props.index}
                        product={props.product.name}
                        removeProduct={props.removeProduct} />
                    <UpdateProductModal
                        titleButton={"Modifier"}
                        index={props.index}
                        product={props.product}
                        updateProduct={props.updateProduct} />
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                /*image="/assets/images/product.jpg"*/
                image="https://images.unsplash.com/photo-1543168256-4ae2229821f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=80"
                title="Live from space album cover"
            />
        </Card>
    );
}
