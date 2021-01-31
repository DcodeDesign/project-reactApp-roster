import React, {Component} from 'react';
import "./Products.scss";
import {useStyles} from "./useStyle"
import Grid from '@material-ui/core/Grid';
import Loading from "../../../components/loading/Loading"
import CardProduct from "../CardProduct/CardProduct"
import CreateProductModal from "../modals/CreateProductModal/CreateProductModal";

export class Products extends Component {
    constructor(props) {
        super(props);
        this.classes = useStyles;
    }

    render() {
        return (
            <>
                {this.props.loading ? (
                    <div>
                        <div className={this.classes.root}>

                            <CreateProductModal
                                titleButton={"Ajouter un Projet"}
                                addProduct={this.props.addProduct}
                            />

                            <Grid container spacing={3} layout={'row'}>

                                {this.props.products.map((product, index) => {

                                    if(product === null) {
                                        return false
                                    }

                                    return (
                                        <Grid key={index} item xs={12} sm={6} md={4}>
                                            <CardProduct
                                                product={product}
                                                index={index}
                                                updateProduct={this.props.updateProduct}
                                                removeProduct={this.props.removeProduct}
                                            />
                                        </Grid>
                                    );

                                })}

                            </Grid>
                        </div>
                    </div>
                ) : (<Loading/>)}
            </>
        )
    }
}
