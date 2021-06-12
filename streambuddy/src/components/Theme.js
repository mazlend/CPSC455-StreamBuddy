import { createMuiTheme } from '@material-ui/core/styles';

const cpurple = "#c41955";
const cwhite = "#abdc";

export default createMuiTheme({
    palette: {
        common: {
            purple: cpurple,
            white: cwhite
        },
        primary: {
            main: cpurple
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
    }
});