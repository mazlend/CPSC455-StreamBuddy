import { createMuiTheme } from '@material-ui/core/styles';

 const cpink = "#c41955";
 const cwhite = "#fff";
// const cwhite = "#3c4b50";
// const cpink = "#d0e4dd";

export default createMuiTheme({
    palette: {
        common: {
            pink: cpink,
            white: cwhite
        },
        primary: {
            main: cpink
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
        background: cpink,
        color: cwhite
    }


});