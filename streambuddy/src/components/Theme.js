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

});