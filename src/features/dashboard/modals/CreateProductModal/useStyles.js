import {makeStyles} from "@material-ui/core/styles";

export function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: "300px",
        backgroundColor: theme.palette.background.paper,
        borderRadius: '4px',
        boxShadow: theme.shadows[5],
        outline: '0',
        padding: theme.spacing(2, 4, 3),
    },
}));
