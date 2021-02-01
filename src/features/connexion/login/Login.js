import React, {Component} from 'react';
import {NavLink, Redirect, withRouter} from 'react-router-dom';
import firebase from '../../../services/firebase/authFirebase/authFirebase';
import {useStyles} from "./useStyles";
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null,
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.props.history.push('/dashboard');
            })
            .catch((error) => {
                this.setState({error: error});
            });
    };

    render() {
        const {email, password, error} = this.state;
        const {classes} = this.props
        return (
            <>
                <div className={classes.root}>
                    {error ? (
                        <p>{error.message}</p>
                    ) : null}
                    <Card className={classes.card}>
                        <CardActionArea className={classes.cardHeader}>
                            <h2>Roster®</h2>
                        </CardActionArea >
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Log In
                            </Typography>
                            <form onSubmit={this.handleSubmit}>
                                <TextField id="email"
                                           label="Email"
                                           variant="outlined"
                                           type="text"
                                           name="email"
                                           placeholder="Email"
                                           value={email}
                                           className={classes.input}
                                           onChange={this.handleInputChange}/>
                                <TextField id="email"
                                           label="Password"
                                           variant="outlined"
                                           className={classes.input}
                                           type="password"
                                           name="password"
                                           placeholder="Password"
                                           value={password}
                                           onChange={this.handleInputChange} />
                                <Button type={"submit"}
                                        className={classes.button}
                                        variant="contained" color="primary">
                                    Log In
                                </Button>
                            </form>
                        </CardContent>
                        <Divider variant="middle" />
                        <CardActions className={classes.cardActions}>
                            {this.props.authenticated ? (
                                <Redirect to={"/dashboard"}/>
                            ) : (
                                <span>
                                    <NavLink className={classes.linkButton} to="/register">
                                        <Button color="primary" variant="outlined" color="primary">
                                            Register
                                        </Button>
                                    </NavLink>
                                    <NavLink className={classes.linkButton} to="/register">
                                        <Button color="primary" variant="outlined" color="primary">
                                            Forgot password
                                        </Button>
                                    </NavLink>
                                </span>
                            )}
                        </CardActions>
                    </Card>
                </div>
            </>
        );
    }
}

// export default withStyles(styles)(ClassComponent);

export default withRouter(withStyles(useStyles, {withTheme: true})(Login));
