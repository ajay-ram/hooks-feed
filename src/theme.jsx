import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        
        secondary: {
            main: "#0f0"
        }
    },

    typography:{
        // fontFamily: 'Helvetica'
        // fontFamily: 'sans-serif'
        fontFamily: 'Helvetica',
        subtitle1 : {
            fontSize: "1.3rem"
        },
        body1: {
            fontSize: "1.1rem"
        }
        
        // fontFamily: "TimeNewRoman"
    },
    // shape: {
    //     borderRadius: 30
    // },

    overrides: {
        MuiButton: {
           root: {
                textTransform: "none",
                padding: "20px"
            }
        }
  },

});

export default theme;