import {useState} from "react"
import logo from "./logo.svg"
import "./App.css"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
import HomeIcon from "@material-ui/icons/Home"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import {TextField, Toolbar} from "@material-ui/core"
// import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles"
import {createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles"
import {green, orange} from "@material-ui/core/colors";
import "fontsource-roboto"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #FF8E8E, #000080)",
        border: 0,
        borderRadius: 15,
        marginBottom: 15,
        color: "white",
        padding: "5 30px"
    }
})

const theme = createTheme({
    typography: {
        h2: {
            fontSize: 18,
        }
    },
    palette: {
        primary: {
            main: green[400]
        },
        secondary: {
            main: orange[400]
        }
    }
})

function StyledButton() {
    return (
        <Button className={useStyles().root}>
            Styled Button
        </Button>
    )
}

function CheckboxExample() {
    const [checked, setChecked] = useState(false)

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={(event) => {
                            setChecked(event.target.checked)
                        }}
                        inputProps={{
                            "aria-label": "primary checked",
                        }}
                        color="secondary"
                        icon={<DeleteIcon/>}
                        checkedIcon={<SaveIcon/>}
                    />
                }
                label="Male"
            />
        </div>
    )
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xs">
                <div className="App">
                    <header className="App-header">
                        <AppBar color="secondary">
                            <Toolbar>
                                <IconButton>
                                    <MenuIcon/>
                                </IconButton>
                                <Typography variant="h6">
                                    MUI Theming
                                </Typography>
                                <Button>Login</Button>
                            </Toolbar>
                        </AppBar>
                        <Typography variant="h2" component="div">
                            Welcome to MUI
                        </Typography>
                        <Typography variant="subtitle1">
                            Let us learn how to use MUI
                        </Typography>
                        <StyledButton/>
                        <TextField
                            color="primary"
                            variant="outlined"
                            type="time"
                            label="Our time"
                            placeholder="test@gmail.com"
                        />
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={3} sm={6}>
                                <Paper style={{
                                    height: 75,
                                    width: "100%",
                                }}/>
                            </Grid>
                            <Grid item xs={3} sm={6}>
                                <Paper style={{
                                    height: 75,
                                    width: "100%",
                                }}/>
                            </Grid>
                            <Grid item xs={3} lg={12}>
                                <Paper style={{
                                    height: 75,
                                    width: "100%",
                                }}/>
                            </Grid>
                        </Grid>
                        <CheckboxExample/>
                        <ButtonGroup variant="contained" color="primary" size="large">
                            <Button startIcon={<SaveIcon/>}>Save</Button>
                            <Button startIcon={<DeleteIcon/>}>Discard</Button>
                            <Button startIcon={<HomeIcon/>}>Home</Button>
                        </ButtonGroup>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default App
