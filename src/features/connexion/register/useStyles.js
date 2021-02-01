import { makeStyles } from '@material-ui/core/styles';
export const useStyles = {
    root: {
        width: "100%",
        height: "100vh",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        background:"url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)",
        boxShadow: "inset 0 0 0 1000px rgba(63,99,181,0.9)",
        backgroundSize: "cover"
    },
    cardHeader: {
        width:"100%",
        padding:"5px ",
        backgroundColor:"#3f51b5",
        boxSizing: "border-box",
        textAlign:"center",
        color:"White",
        fontFamily: "Leckerli One, cursive",
        fontSize:"20px"
    },
    card: {
        width: "332px",
    },
    title: {
        fontSize: 16,
        textAlign: "center",
        color:"#3f51b5"
    },
    input: {
        width:"100%",
        margin:"10px 0",
    },
    button: {
        width:"100%"
    },
    cardActions: {
        margin:"0 0 0 0",
        padding: "16px 0 16px 0"
    },
    subMenu: {
        display:"flex",
        justifyContent:"space-between"
    },
    linkButton: {
        textDecoration: "none",
        margin:"0 16px",
        flexDirection: "column"
    },
};
