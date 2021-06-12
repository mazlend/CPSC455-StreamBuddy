import { createMuiTheme } from '@material-ui/core/styles';

const cpurple = "#3f51b5";
const cwhite = "#fff"

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
            // fontWeight: 700,
            fontSize: "1rem",
        }
     }
  });