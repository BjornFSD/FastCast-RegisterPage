import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    marginTop: "16px",
    fontFamily: "Poppins",
    padding: "50px 70px 50px 40px",
  },
  margin: {
    margin: theme.spacing(1),
    marginLeft: "0px",
    fontFamily: "Poppins",
  },
  buttonLogin: {
    marginTop: 0,
  },
  title: {
    color: "#DDD",
    marginBottom: 25,
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: "uppercase",
    fontFamily: "Poppins",
  },
  smallTitle: {
    color: "#BBB",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontFamily: "Poppins",
  },
  inputBox: {
    marginBottom: 15,
  },
}));

const CssTextField = withStyles({
  root: {
    "& input.MuiInputBase-input ": {
      color: "#999",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset ": {
        borderColor: "rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        fontSize: "10px",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.25)",
      },
    },
    "& .MuiOutlinedInput-inputMarginDense": { paddingTop: 5, paddingBottom: 5 },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 0, 0, 0.2)",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 0, 0, 0.2)",
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-marginDense": {
      color: "#999",
      transform: "translate(7px, 6px) scale(1)",
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: "#999",
      transform: "translate(7px, -6px) scale(0.75)",
    },

    "& label.MuiInputLabel-outlined.MuiInputLabel-marginDense.Mui-focused": {
      color: "#999",
    },
    "& label.MuiInputLabel-outlined.MuiInputLabel-marginDense.Mui-error": {
      color: "#999",
    },
    "& .MuiFormHelperText-root.": {
      color: "#999",
      textShadow: "#fff 0 0 7px",
      fontSize: ".8rem",
      textTransform: "unset",
      fontWeight: "400",
      fontFamily: "Poppins",
    },
    "& .MuiFormHelperText-root.Mui-focused": {
      color: "#999",
      textShadow: "#fff 0 0 7px",
      fontSize: ".8rem",
      textTransform: "unset",
      fontWeight: "400",
      fontFamily: "Poppins",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#999",
      textShadow: "#fff 0 0 7px",
      fontSize: ".8rem",
      textTransform: "unset",
      fontWeight: "400",
      fontFamily: "Poppins",
    },
    "&. .MuiButton-containedPrimary": {
      backgroundColor: "#111",
    },
    "&. .MuiButton-containedPrimary:hover": {
      backgroundColor: "#111",
    },
  },
})(TextField);

const LoginButton = withStyles({
  root: {
    backgroundColor: "#111",
    fontSize: "14px",
    padding: "0 22px",
    fontWeight: "700",
    textTransform: "uppercase",
    height: 40,
    letterSpacing: "1px",
    "&:hover": {
      backgroundColor: "#151515",
    },
  },
})(Button);

function LoginFormBox() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [usernameHelperText, setUsernameHelperText] = useState([]);
  const [isUsernameHelperTextActive, setIsUsernameHelperTextActive] = useState(
    false
  );
  const [isRequiredUsername, setIsRequiredUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState([]);
  const [isPasswordHelperTextActive, setIsPasswordHelperTextActive] = useState(
    false
  );
  const [isRequiredPassword, setIsRequiredPassword] = useState(false);

  const validationLoginUsername = () => {
    if (username) {
      if (username.length > 2) {
        setUsernameHelperText([]);
        setIsRequiredUsername(false);
      } else {
        setUsernameHelperText([
          "Your username must consist of at least 3 characters",
        ]);
        setIsRequiredUsername(true);
      }
    } else {
      setUsernameHelperText(["Please enter a username"]);
      setIsRequiredUsername(true);
    }
  };
  const handleChangeUsername = (e) => {
    if (username.length > 1) {
      setUsernameHelperText([]);
      setIsRequiredUsername(false);
    }
    setUsername(e.target.value);
  };
  const handleTouchUsername = () => {
    setIsUsernameHelperTextActive(true);
    validationLoginUsername();
  };

  const validationLoginPassword = () => {
    if (password) {
      if (password.length > 5) {
        setPasswordHelperText([]);
        setIsRequiredPassword(false);
      } else {
        setPasswordHelperText(["Must be 6 characters or more"]);
        setIsRequiredPassword(true);
      }
    } else {
      setPasswordHelperText(["Required"]);
      setIsRequiredPassword(true);
    }
  };
  const handleChangePassword = (e) => {
    if (password.length > 1) {
      setPasswordHelperText([]);
      setIsRequiredPassword(false);
    }
    setPassword(e.target.value);
  };
  const handleTouchPassword = () => {
    setIsPasswordHelperTextActive(true);
    validationLoginPassword();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTouchUsername();
    handleTouchPassword();
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" className={classes.title}>
        Login to your account
      </Typography>
      <div className={classes.inputBox}>
        <Typography variant="body1" className={classes.smallTitle}>
          Username:
        </Typography>
        <CssTextField
          className={classes.margin}
          label=""
          variant="outlined"
          onBlur={handleTouchUsername}
          value={username}
          defaultValue=""
          onChange={handleChangeUsername}
          helperText={isUsernameHelperTextActive && usernameHelperText[0]}
          error={isRequiredUsername}
          size="small"
          fullWidth
        />
      </div>
      <div className={classes.inputBox}>
        <Typography variant="body1" className={classes.smallTitle}>
          Password:
        </Typography>
        <CssTextField
          className={classes.margin}
          label=""
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onBlur={handleTouchPassword}
          value={password}
          defaultValue=""
          onChange={handleChangePassword}
          helperText={isPasswordHelperTextActive && passwordHelperText[0]}
          error={isRequiredPassword}
          size="small"
          fullWidth
        />
      </div>
      <div className={classes.buttonLogin}>
        <LoginButton variant="contained" color="primary" type="submit">
          Login
        </LoginButton>
      </div>
    </form>
  );
}

export default LoginFormBox;
