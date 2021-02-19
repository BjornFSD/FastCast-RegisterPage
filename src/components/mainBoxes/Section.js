import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Freeshoutcast from "../faq/Freeshoutcast";
import Autodj from "../faq/Autodj";
import Limits from "../faq/Limits";
import Livestream from "../faq/Livestream";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1600,
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  title: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#444",
    fontSize: 30,
    fontWeight: 600,
    lineHeight: "1.5",
    fontFamily: "Poppins",
    boxShadow: "none",
  },
  active: {
    color: "#4772d9 !important",
  },
}));

function Section() {
  const classes = useStyles();
  const [switchTab, setSwtichTab] = useState("1");
  const [active, setActive] = useState(false);

  const toggleConent = (e) => {
    const currentActive = active;
    e.preventDefault();
    setSwtichTab(e.target.value);
    setActive(!currentActive);
  };

  const switchContent = (value) => {
    switch (value) {
      case "1":
        return <Freeshoutcast />;
      case "2":
        return <Autodj />;
      case "3":
        return <Livestream />;
      case "4":
        return <Limits />;

      default:
        return null;
    }
  };

  return (
    <div className={`section ${classes.root}`}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginBottom: "30px" }}>
          <Paper className={classes.title}>Frequently Asked Questions: </Paper>
        </Grid>
        <Grid
          item
          sm={12}
          md={4}
          style={{
            position: "sticky",
            marginTop: 10,
          }}
        >
          <Paper className={classes.paper}>
            <div className="sectionList">
              <button
                className={switchTab === "1" ? `${classes.active} active` : ""}
                onClick={toggleConent}
                value="1"
              >
                FreeSHOUTcast
              </button>
              <button
                className={switchTab === "2" ? `${classes.active} active` : ""}
                onClick={toggleConent}
                value="2"
              >
                AutoDJ
              </button>
              <button
                className={switchTab === "3" ? `${classes.active} active` : ""}
                onClick={toggleConent}
                value="3"
              >
                Live Stream
              </button>
              <button
                className={switchTab === "4" ? `${classes.active} active` : ""}
                onClick={toggleConent}
                value="4"
              >
                Limits
              </button>
            </div>
          </Paper>
        </Grid>
        <Grid item sm={12} md={8}>
          <Paper className={classes.paper}>{switchContent(switchTab)}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Section;
