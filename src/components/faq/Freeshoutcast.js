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

function Freeshoutcast() {
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
            What is FreeSHOUTcast?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            FreeSHOUTcast provides Free Online Radio Servers. You can get your
            own server and start your internet radio station for free!
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
            Is the service really free?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            Yes, FreeSHOUTcast completely free, this is not a demo or trial.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={classes.title}>What's the trick?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            There is no trick, we created this service for online radio
            enthusiasts. You can try streaming online, share favorite music or
            become a radio DJ for free.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Freeshoutcast;
