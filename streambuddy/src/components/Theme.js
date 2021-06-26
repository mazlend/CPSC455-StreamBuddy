import { createMuiTheme } from '@material-ui/core/styles';

const cpink = "#c41955";
const cwhite = "#fff";

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
        top: "30px",
        left: "35px",
        background: cpink,
        color: cwhite
    }



});