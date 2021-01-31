import React, {Component} from 'react';
import {Formik, Field, ErrorMessage} from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const CustomInput = ({field, form, ...props}) => {
    return (
        <div>
            <TextField {...field} {...props} />
        </div>
    );
}

const CustomError = (props) => {
    return (
        <div className={"text-danger"}> {props.children}</div>
    );
}

export default class DeleteProduct extends Component {
    submit = (values, actions) => {
        this.props.removeProduct(values.index)
        actions.setSubmitting(false);
        this.props.handleClose(this);
    }

    render() {
        return (
            <Formik
                onSubmit={this.submit}
                initialValues={{index: this.props.index}}
            >{({handleSubmit, isSubmitting, values,}
            ) => (
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <h2 style ={{width: '100%', marginTop: '0', marginBottom: '0'}}> Supprimer le projet : {this.props.product}</h2>
                    <FormControl variant="outlined" style ={{width: '100%', marginBottom: '0', paddingBottom: '0'}}>
                        <Field type={"hidden"}
                               name={"index"}
                               style={{display:'none', height:'0px'}}
                               component={CustomInput}/>
                        <ErrorMessage name={"name"}
                                      component={CustomError}/>
                    </FormControl>
                    <Button variant="outlined"
                            color="secondary"
                            disabled={isSubmitting}
                            style ={{width: '100%'}}
                            type={"submit"}>Confirmer</Button>
                </form>
            )}
            </Formik>
        )
    }
}
