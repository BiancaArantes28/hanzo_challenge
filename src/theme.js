import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#FF0090',
            // dark: will be calculated from palette.primary.main,
        },
        text: {
            primary: "#111",
        }
    },
    status: {
        danger: 'red',
    },
    typography: {
        fontFamily: [
            "Roboto Condensed",
            "sans-serif",
        ].join(','),
        h2: {
            fontFamily: [
                "Rajdhani",
                "sans-serif"
            ].join(','),
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: '60px',
        },
    },
});

export default theme;