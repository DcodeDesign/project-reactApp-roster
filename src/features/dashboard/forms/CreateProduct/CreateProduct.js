import React, {Component, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import {Field, ErrorMessage, withFormik} from "formik";
import FormHelperText from '@material-ui/core/FormHelperText';
import * as Yup from 'yup';

const CustomInput = ({field, form, ...props}) => {
    return (
        <div>
            <TextField  {...field} {...props} />
        </div>
    );
}

const CustomError = (props) => {
    return (
        <FormHelperText style={{color:'#f44336'}}>{props.children}</FormHelperText>
    );
}

class forms extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {isSubmitting, handleSubmit} = {...this.props}
        return (
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <h2 style={{width: '100%', marginTop: '0px'}}> Créer un projet </h2>
                <FormControl variant="outlined" style={{width: '100%', marginBottom: '10px', paddingBottom: '10px'}}>
                    <Field id="projetName"
                           label="Nom du projet..."
                           variant="outlined"
                           type={"text"}
                           name={"name"}
                           style={{width: '100%'}}
                           component={CustomInput}/>
                    <ErrorMessage name={"name"}
                                  component={CustomError}/>
                </FormControl>
                <FormControl variant="outlined" style={{width: '100%', marginBottom: '10px', paddingBottom: '10px'}}>
                    <Field
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        name={"description"}
                        style={{width: '100%'}}
                        component={CustomInput}
                    />
                    <ErrorMessage name={"description"}
                                  component={CustomError}/>
                </FormControl>
                <Button variant="outlined"
                        color="primary"
                        disabled={isSubmitting}
                        style={{width: '100%'}}
                        type={"submit"}>Créer</Button>
            </form>
        );
    }
}

export const CreateProduct = withFormik({
    mapPropsToValues: () => ({name: "", description: ""}),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Trop cours !').max(50, 'trop long !').required('Ce Champs est requis!'),
        description: Yup.string().min(3, 'Trop cours !').max(150, 'trop long !'),
    }),
    handleSubmit: (values, actions) => {
        actions.props.addProduct(values);
        actions.setSubmitting(false);
        actions.props.handleClose(this);
    }
})(forms);

