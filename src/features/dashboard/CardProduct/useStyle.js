import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight:'255px',

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width:'100%'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '50%',
        boxShadow: '5px 0 10px 0px rgba(0,0,0,0.35) inset'
    },
    controls: {
        display: 'flex',
        alignItems: 'flex-end',
        /*justifyContent: 'center',*/
        flexDirection:'row-reverse',
        padding: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    playIcon: {
        height: 28,
        width: 28,
    },
}));
