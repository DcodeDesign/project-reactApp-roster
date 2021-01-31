import React, {Component} from "react";
// import './App.scss';
import {Detector} from "react-detect-offline";
import Off from "./components/offline/offline";
import {RouterConnexion} from "./features/connexion/RouterConnexion";
import firebase from "./services/firebase/authFirebase/authFirebase";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            (auth) => {
                this.setState({
                        authenticated: auth ? true : false
                    }
                )
            }
        )
    }

    render() {
        return (
            <>
                <div>
                    <Detector render={({online}) => (
                        <div>
                            {online ? (
                                   <RouterConnexion authenticated={this.state.authenticated} />
                            ) : (
                                <Off/>
                            )}
                        </div>)}/>
                </div>
            </>
        );
    }
}

