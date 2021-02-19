import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InfoBox from "../boxes/InfoBox";
import { Parallax } from "react-parallax";
import bgImage from "../images/bg-white.png";
import RegisterBox from "../boxes/RegisterBox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  mainGrid: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  infoGridPaper: {
    paddingLeft: "48px",
    paddingRight: "48px",
    border: "2px solid rgba(0, 0, 0, 0.075)",
    borderRadius: 3,
    boxShadow: "0 1px 1px rgb(0 0 0 / 10%)",
    backgroundColor: "#F5F5F5",
  },
  registerGridPaper: {
    padding: "24px",
    border: "2px solid rgba(0, 0, 0, 0.075)",
    borderRadius: 3,
    boxShadow: "0 1px 1px rgb(0 0 0 / 10%)",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  infoGrid: {
    maxWidth: "370px",
    margin: "20px 0 10px",
  },
  registerGrid: {
    maxWidth: "520px",
    margin: "10px 0 20px",
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <Parallax
      bgImage={bgImage}
      bgImageStyle={{
        width: "auto",
        height: "auto",
        backgroundSize: "contain",
        backgroundPosition: "center",
        opacity: 0.5,
      }}
      style={{ paddingTop: 60 }}
      strength={500}
    >
      <div className={`${classes.root} main`}>
        <div
          className="main_arrowToScroll"
          onClick={() => {
            window.scrollTo({
              top: document.querySelector(".section").offsetTop - 30,
              behavior: "smooth",
            });
          }}
        >
          <ExpandMoreIcon fontSize="large" />
        </div>
        <Grid container className={classes.mainGrid}>
          <Grid item xs={12} className={classes.infoGrid}>
            <Paper className={`${classes.paper} ${classes.infoGridPaper}`}>
              <InfoBox />
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.registerGrid}>
            <Paper className={`${classes.paper} ${classes.registerGridPaper}`}>
              <RegisterBox />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Parallax>
  );
}

export default Main;
