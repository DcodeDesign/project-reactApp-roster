import React from 'react';
import { Button } from 'rebass';
import firebase from '../../../services/firebase/authFirebase/authFirebase';

const logOutUser = () => {
    firebase.auth().signOut().then();
};

const LogOut = () => {
    return <Button onClick={logOutUser} children="Log Out" />;
};

export default LogOut;
