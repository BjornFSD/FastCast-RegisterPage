import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "1px solid #DDD",
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bolder",
    color: "#555",
    fontFamily: "Poppins",
  },
  desc: {
    fontSize: "1rem",
    color: "#444",
    fontFamily: "Poppins",
    textAlign: "left",
    width: "100%",
  },
  video: {
    position: "absolute",

    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  image: {
    width: "100%",
  },
}));

const Accordion = withStyles({
  root: {
    border: "1px solid #CCC",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "white",
    borderBottom: "none",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function Limits() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className={classes.title}>
            Are there any limits?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            Yes, the machines for free radio servers are shared. The limits
            guarantee machine stability and prevent outages.
            <br />
            <br />
            After a grace period of 3 days, you need to keep your audience above
            3 listeners per 3 days - if you don't generate the traffic, your
            account will be stopped after 3 days. Stopped servers will be
            terminated after 7 days of inactivity.
            <br />
            <br />
            The current limits for the free radio servers are:
            <br />- up to 100 listeners connected at one time, <br />- 96 kbps
            maximum broadcasting bitrate, <br />- 1GB AutoDJ space per Server,{" "}
            <br />- 1 Radio Channel per Server.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={classes.title}>
            What if I need Unlimited?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            Just ask our support agents for the Unlimited Server offer if you
            need anything more that provided in the free radio server.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Limits;
