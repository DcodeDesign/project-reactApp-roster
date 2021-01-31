import React from 'react';
import "./product.scss";
// import clsx from "clsx";
import {useLocation} from "react-router-dom";

export default (props) => {
    const params = new URLSearchParams(useLocation().search);
    const tags = params.get('uuid');
    return (
        <>
            <h1> Products {tags}</h1>
        </>
    )
}
