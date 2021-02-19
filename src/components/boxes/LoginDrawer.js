import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import LoginFormBox from "../forms/LoginFormBox";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles({
  list: {
    width: 340,
    backgroundColor: "#383838",
    height: "100%",
  },
  fullList: {
    width: "auto",
  },
  closer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    color: "white",
    width: 40,
    height: 40,
    top: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0, 0.2)",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(0,0,0, 0.3)",
    },
  },
});

const btnStyle = {
  color: "#4772d9",
  fontSize: "1em",
  fontWeight: "600",
  textTransform: "capitalize",
  fontFamily: "Poppins",
};

function LoginDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <div className={classes.closer} onClick={toggleDrawer(anchor, false)}>
        X
      </div>
      <LoginFormBox />
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={btnStyle}>
            <LockIcon style={{ fontSize: 14 }} />
            <p style={{ paddingLeft: "0.5rem" }}>Login</p>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default LoginDrawer;
