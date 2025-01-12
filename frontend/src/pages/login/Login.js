import React, { useState, useContext } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
// import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import gencrestLogo from "./gencrestLogo.svg";

// import google from "../../images/google.svg";

// context
// import { useUserDispatch, loginUser, registerUser } from "../../context/AuthContext";
import { AuthContext } from "../../context/AuthContext";

function Login(props) {
  const classes = useStyles();

  // global
  // var userDispatch = useUserDispatch();
  const { login} = useContext(AuthContext)

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [errorMessage, setErrorMessage] = useState(null);
  var [emailValue, setEmailValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");

  
  const handleLogin = () => {
    login(
      emailValue,
      passwordValue,
      props.history,
      setIsLoading,
      setErrorMessage
    )
  }

  

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={gencrestLogo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Gencrest Admin </Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
          
          </Tabs>

            <React.Fragment>

                {errorMessage && (
                  <Fade in={true}>
                    <Typography color="secondary" className={classes.errorMessage}>
                      {errorMessage}
                    </Typography>
                  </Fade>
                )}

                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={emailValue}
                  onChange={e => setEmailValue(e.target.value)}
                  margin="normal"
                  label="Email"
                  placeholder="Email"
                  type="email"
                  fullWidth
                />
                <TextField
                  id="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={passwordValue}
                  onChange={e => setPasswordValue(e.target.value)}
                  margin="normal"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  fullWidth
                />
                <div className={classes.formButtons}>
                  {isLoading ? (
                    <CircularProgress size={26} className={classes.loginLoader} />
                  ) : (

                    <Button
                      disabled={
                        emailValue.length === 0 || passwordValue.length === 0
                      }
                      onClick={handleLogin}
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Login
                    </Button>

                  )}
                  <Button
                    color="primary"
                    size="large"
                    className={classes.forgetButton}
                  >
                    Forget Password
                  </Button>
                </div>
            </React.Fragment>        
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2021 Gencrest Admin
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
