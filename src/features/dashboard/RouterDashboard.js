import React, {Component, lazy, Suspense} from "react";
import {Products} from "./products/Products";
import {apiFirebase} from "../../services/firebase/apiFirebase/apiFireBase";
import NavApp from "./navigation/NavApp";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {v4 as uuid} from 'uuid';
import Loading from "../../components/loading/Loading";

const Product = lazy(() => import('../product/Product'));

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loaded: false
        }
    }

    componentWillMount() {
        apiFirebase.get('product-owner.json/0')
            .then(apiFirebase => {
                let products = apiFirebase.data ? Object.values(apiFirebase.data) : [];
                this.updateProducts(products);
            }).catch(e => console.log(e))
    }

    updateProducts = (products) => {
        this.setState({
            products,
            loaded: true
        })
    }

    addProduct = (product) => {
        const products = this.state.products;
        // uuid()
        products.push({name: product.name, description: product.description, uuid: uuid()});
        this.setState({
            products
        }, () => {
            this.saveProducts();
        })
    }

    initProduct = (newProduct) => {
        apiFirebase.get(newProduct + '.json')
            .then(apiFirebase => {
                let newProduct = apiFirebase.data ? Object.values(apiFirebase.data) : [];
                this.updateProducts(newProduct);
            }).catch(e => console.log(e))
    }

    updateProduct = (product) => {
        const products = this.state.products.slice();
        products.splice(product.index, 1,
            {name: product.name, description: product.description, uuid: products[product.index].uuid});
        this.setState({
            products
        }, () => {
            this.saveProducts();
        })
    }

    removeProduct = (index) => {
        const products = this.state.products.slice();
        products.splice(index, 1);
        this.setState({
            products
        }, () => {
            this.saveProducts();
        })
    }

    saveProducts = () => {
        apiFirebase.put('product-owner.json', this.state.products);
    }

    render() {
        return (
            <>
                <Router>
                    <NavApp>
                        <Suspense fallback={<Loading/>}>
                            <Switch>
                                <Route path="/tasks" render={() => (<h1> Tasks</h1>)}/>
                                <Route path="/product" component={Product}/>
                                <Route path="/dashboard" render={() => (
                                    <Products
                                        loading={this.state.loaded}
                                        products={this.state.products}
                                        addProduct={this.addProduct}
                                        updateProduct={this.updateProduct}
                                        removeProduct={this.removeProduct}
                                    />
                                )}/>
                                <Redirect to="/dashboard"/>
                            </Switch>
                        </Suspense>
                    </NavApp>
                </Router>
            </>
        );
    }
}

