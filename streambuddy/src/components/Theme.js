import { createMuiTheme } from '@material-ui/core/styles';

 const cblue = "#46c7ee";
 const cwhite = "#fff";

//const cpurple = "#4f549d";

export default createMuiTheme({
    palette: {
        common: {
            pink: cblue,
            white: cwhite
        },
        primary: {
            main: cblue
        },
        secondary: {
            main: cwhite
        }
    },
    typography: {
        tab: {
            textTransform: "none",

            fontSize: "1rem",
        }
    },

    searchbar: {
        maxWidth: "300px",
        position: "relative",
        background: "transparent",
        top:"30px",
        left: "auto",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        margin: "auto",
    },

    button: {
        position: "relative",
        alignItems: "center",
        top: "30px",
        left: "25%",
        background: cblue,
        color: cwhite
    }


});