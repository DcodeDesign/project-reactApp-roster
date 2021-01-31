import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import {Field, ErrorMessage, Formik} from "formik";
import * as Yup from 'yup';
import FormHelperText from "@material-ui/core/FormHelperText";

const CustomInput = ({field, form, ...props}) => {
    return (
        <div>
            <TextField {...field} {...props} />
        </div>
    );
}

const CustomError = (props) => {
    return (
        <FormHelperText style={{color:'#f44336'}}>{props.children}</FormHelperText>
    );
}

export default class UpdateProduct extends Component {
    userSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Trop cours !').max(50, 'trop long !').required('Ce Champs est requis!'),
        description: Yup.string().min(3, 'Trop cours !').max(150, 'trop long !'),
    })

    submit = (values, actions) => {
        this.props.updateProduct(values)
        actions.setSubmitting(false);
        this.props.handleClose(this)
    }

    render() {
        return (
            <Formik
                onSubmit={this.submit}
                initialValues={{
                    index: this.props.index,
                    name: this.props.product.name,
                    description: this.props.product.description
                }}
                validationSchema={this.userSchema}
            >{({handleSubmit, isSubmitting, values,}
            ) => (
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <h2 style={{width: '100%', marginTop: '0px'}}> Modifier le projet : {this.props.product.name} </h2>
                    <FormControl variant="outlined" style={{width: '100%', marginBottom: '10px', paddingBottom: '100'}}>
                        <Field type={"hidden"}
                               name={"index"}
                               style={{display: 'none', height: '0px'}}/>
                        <Field id="editProjet"
                               label="Nom du projet..."
                               variant="outlined"
                               type={"text"}
                               name={"name"}
                               style={{width: '100%'}}
                               component={CustomInput}/>
                        <ErrorMessage name={"name"}
                                      component={CustomError}/>
                    </FormControl>
                    <FormControl variant="outlined"
                                 style={{width: '100%', marginBottom: '10px', paddingBottom: '10px'}}>
                        <Field
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={4}
                            variant="outlined"
                            name={"description"}
                            style={{width: '100%'}}
                            defaultValue={"ici"}
                            component={CustomInput}
                        />
                        <ErrorMessage name={"description"}
                                  component={CustomError}/>
                    </FormControl>
                    <Button variant="outlined"
                            color="primary"
                            disabled={isSubmitting}
                            style={{width: '100%'}}
                            type={"submit"}>Modifier</Button>
                </form>
            )}
            </Formik>
        )
    }
}
