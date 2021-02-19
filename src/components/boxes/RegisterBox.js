import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    marginTop: 0,
    fontFamily: "Poppins",
    padding: 0,
    marginBottom: 30,
  },
  margin: {
    fontFamily: "Poppins",
  },
  buttonLogin: {
    marginTop: 0,
  },
  smallTitle: {
    color: "#555",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Poppins",
    marginBottom: 10,
  },
  inputBox: {
    marginBottom: 25,
    width: 300,
  },
  terms: {
    color: "#4772d9",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      color: "#222",
    },
  },
  termsHelper: {
    color: "#E42C3E",
    fontSize: ".8rem",
    textShadow: "#fff 0 0 7px",
    textTransform: "unset",
    letterSpacing: 1,
    margin: 0,
    fontWeight: "400",
    fontFamily: "Poppins",
  },
  bottomText: {
    color: "#555",
    textDecoration: "none",
    fontStyle: "italic",
    fontSize: 11,
    fontWeight: 300,
    lineHeight: "1.5",
  },
}));
const CssTextField = withStyles({
  root: {
    "& input.MuiInputBase-input ": {
      color: "#333",
      height: "calc(1.5em + 0.75rem + 2px)",
      fontSize: "1rem",
      padding: "0 0.75rem",
      fontFamily: "Poppins",
      border: "1px",
      backgroundColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset ": {
        borderColor: "rgba(0, 0, 0, 0.2)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.25)",
      },
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E42C3E",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2e8ece",
      borderWidth: "1px",
    },
    "& .MuiFormHelperText-root.": {
      fontSize: ".8rem",
      textShadow: "#fff 0 0 7px",
      textTransform: "unset",
      letterSpacing: 1,
      margin: 0,
      fontWeight: "400",
      fontFamily: "Poppins",
    },
    "& .MuiFormHelperText-root.Mui-focused": {
      fontSize: ".8rem",
      textShadow: "#fff 0 0 7px",
      letterSpacing: 1,
      margin: 0,
      textTransform: "unset",
      fontWeight: "400",
      fontFamily: "Poppins",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      fontSize: ".8rem",
      letterSpacing: 1,
      margin: 0,
      color: "#E42C3E",
      textShadow: "#fff 0 0 7px",
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
    backgroundColor: "#4772d9",
    fontSize: "16px",
    padding: "0 26px",
    fontWeight: "700",
    lineHeight: "46px",
    height: 46,
    textTransform: "uppercase",
    borderRadius: 23,
    letterSpacing: "1px",
  },
})(Button);

function RegisterBox() {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [usernameCorrect, setUsernameCorrect] = useState(false);
  const [usernameHelperText, setUsernameHelperText] = useState([]);
  const [isUsernameHelperTextActive, setIsUsernameHelperTextActive] = useState(
    false
  );
  const [isRequiredUsername, setIsRequiredUsername] = useState(false);

  const [email, setEmail] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [EmailHelperText, setEmailHelperText] = useState([]);
  const [isEmailHelperTextActive, setIsEmailHelperTextActive] = useState(false);
  const [isRequiredEmail, setIsRequiredEmail] = useState(false);
  const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  const result = pattern.test(email);

  const [password, setPassword] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [PasswordHelperText, setPasswordHelperText] = useState([]);
  const [isPasswordHelperTextActive, setIsPasswordHelperTextActive] = useState(
    false
  );
  const [isRequiredPassword, setIsRequiredPassword] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [PasswordConfirmHelperText, setPasswordConfirmHelperText] = useState(
    []
  );
  const [
    isPasswordConfirmHelperTextActive,
    setIsPasswordConfirmHelperTextActive,
  ] = useState(false);
  const [isRequiredPasswordConfirm, setIsRequiredPasswordConfirm] = useState(
    false
  );
  const [checked, setChecked] = useState(false);
  const [checkboxHelperText, setCheckboxHelperText] = useState([]);

  // -------------------------------------------------- username validation --------------------------------------------------

  const validationRegisterUsername = () => {
    if (username) {
      if (username.length > 16) {
        setUsernameHelperText(["Please enter no more than 16 characters "]);
        setIsRequiredUsername(true);
      } else if (username.length > 2) {
        setUsernameHelperText([]);
        setUsernameCorrect(true);
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
    if (username.length > 16) {
      setUsernameHelperText(["Please enter no more than 16 characters "]);
      setIsRequiredUsername(true);
    } else if (username.length > 1) {
      setUsernameHelperText([]);
      setIsRequiredUsername(false);
    }
    setUsername(e.target.value);
  };
  const handleTouchUsername = () => {
    setUsernameCorrect(false);
    setIsUsernameHelperTextActive(true);
    validationRegisterUsername();
  };

  // -------------------------------------------------- email validation --------------------------------------------------

  const validationRegisterEmail = () => {
    if (email) {
      if (result === true) {
        setEmailHelperText([]);
        setEmailCorrect(true);
        setIsRequiredEmail(false);
      } else {
        setEmailHelperText(["Please enter a valid email address"]);
        setIsRequiredEmail(true);
      }
    } else {
      setEmailHelperText(["Please enter an email"]);
      setIsRequiredEmail(true);
    }
  };
  const handleChangeEmail = (e) => {
    if (result === true) {
      setEmailHelperText([]);
      setIsRequiredEmail(false);
    }
    setEmail(e.target.value);
  };
  const handleTouchEmail = () => {
    setEmailCorrect(false);
    setIsEmailHelperTextActive(true);
    validationRegisterEmail();
  };

  // -------------------------------------------------- password validation --------------------------------------------------

  const validationRegisterPassword = () => {
    if (password) {
      if (password.length > 20) {
        setPasswordHelperText(["Your password must be max 20 characters long"]);
        setIsRequiredPassword(true);
      } else if (password.length > 2) {
        setPasswordHelperText([]);
        setIsRequiredPassword(false);
      } else {
        setPasswordHelperText([
          "Your password must consist of at least 3 characters",
        ]);
        setIsRequiredPassword(true);
      }
    } else {
      setPasswordHelperText(["Please enter a password"]);
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
    validationRegisterPassword();
  };

  // -------------------------------------------------- password confirm validation --------------------------------------------------

  const validationRegisterPasswordConfirm = () => {
    if (passwordConfirm) {
      if (passwordConfirm === password) {
        setPasswordConfirmHelperText([]);
        setPasswordCorrect(true);
        setIsRequiredPasswordConfirm(false);
      } else {
        setPasswordConfirmHelperText([
          "Please enter the same password as above",
        ]);
        setIsRequiredPasswordConfirm(true);
      }
    } else {
      setPasswordConfirmHelperText(["Please enter a password"]);
      setIsRequiredPasswordConfirm(true);
    }
  };
  const handleChangePasswordConfirm = (e) => {
    if (passwordConfirm === password) {
      setPasswordConfirmHelperText([]);
      setIsRequiredPasswordConfirm(false);
    }
    setPasswordConfirm(e.target.value);
  };
  const handleTouchPasswordConfirm = () => {
    setPasswordCorrect(false);
    setIsPasswordConfirmHelperTextActive(true);
    validationRegisterPasswordConfirm();
  };

  // -------------------------------------------------- checkbox validation --------------------------------------------------
  const handleChangeCheckbox = (e) => {
    if (checked) {
      setCheckboxHelperText([
        "Read and accept the Terms of Service to proceed",
      ]);
    } else {
      setCheckboxHelperText([]);
    }
    setChecked(e.target.checked);
  };
  const handleTouchCheckbox = () => {
    if (!checked) {
      setCheckboxHelperText([
        "Read and accept the Terms of Service to proceed",
      ]);
    } else {
      setCheckboxHelperText([]);
    }
  };
  const handleSubmit = (e) => {
    if (usernameCorrect && emailCorrect && passwordCorrect && checked) {
      alert(`Username ${username} created`);
    } else {
      e.preventDefault();
      handleTouchUsername();
      handleTouchPassword();
      handleTouchEmail();
      handleTouchPasswordConfirm();
      handleTouchCheckbox();
    }
  };

  return (
    <div className="registerBox">
      <div className="registerBox_title">
        <h3>
          get your <b>Free</b> radio server
        </h3>
        <span className="registerBox_description">
          No Card - 100% Free. Start Your Online Radio Station Today!
        </span>
      </div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className={classes.inputBox}>
          <Typography variant="body1" className={classes.smallTitle}>
            Username
          </Typography>
          <CssTextField
            className={classes.margin}
            label=""
            variant="outlined"
            onBlur={handleTouchUsername}
            value={username}
            onChange={handleChangeUsername}
            helperText={isUsernameHelperTextActive && usernameHelperText[0]}
            error={isRequiredUsername}
            size="small"
            fullWidth
          />
        </div>
        <div className={classes.inputBox}>
          <Typography variant="body1" className={classes.smallTitle}>
            email
          </Typography>
          <CssTextField
            className={classes.margin}
            label=""
            variant="outlined"
            onBlur={handleTouchEmail}
            value={email}
            onChange={handleChangeEmail}
            helperText={isEmailHelperTextActive && EmailHelperText[0]}
            error={isRequiredEmail}
            size="small"
            fullWidth
          />
        </div>
        <div className={classes.inputBox}>
          <Typography variant="body1" className={classes.smallTitle}>
            password
          </Typography>
          <CssTextField
            className={classes.margin}
            label=""
            type="password"
            variant="outlined"
            onBlur={handleTouchPassword}
            value={password}
            onChange={handleChangePassword}
            helperText={isPasswordHelperTextActive && PasswordHelperText[0]}
            error={isRequiredPassword}
            size="small"
            fullWidth
          />
        </div>
        <div className={classes.inputBox}>
          <Typography variant="body1" className={classes.smallTitle}>
            confirm password
          </Typography>
          <CssTextField
            className={classes.margin}
            label=""
            type="password"
            variant="outlined"
            onBlur={handleTouchPasswordConfirm}
            value={passwordConfirm}
            onChange={handleChangePasswordConfirm}
            helperText={
              isPasswordConfirmHelperTextActive && PasswordConfirmHelperText[0]
            }
            error={isRequiredPasswordConfirm}
            size="small"
            fullWidth
          />
        </div>
        <div className={classes.inputBox}>
          <Checkbox
            checked={checked}
            color="primary"
            onChange={handleChangeCheckbox}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <span className={classes.smallTitle}>
            I Agree To The
            <a className={classes.terms} href="https://freeshoutcast.com/tos">
              {" "}
              Terms Of Service
            </a>
          </span>
          {!checked ? (
            <p className={classes.termsHelper}>{checkboxHelperText[0]}</p>
          ) : null}
        </div>

        <div className={classes.buttonLogin}>
          <LoginButton variant="contained" color="primary" type="submit">
            Register Now
          </LoginButton>
        </div>
      </form>
      <p className={classes.bottomText}>
        Free Service Provided by{" "}
        <a
          className={classes.terms}
          href="https://billing.fastcast4u.com/link.php?id=901"
        >
          Fastcast4u.com
        </a>
      </p>
    </div>
  );
}

export default RegisterBox;
