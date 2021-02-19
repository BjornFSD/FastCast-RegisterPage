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
    width: "auto",
    height: "auto",
    maxWidth: "100%",
  },
  imgDiv: {
    width: "100%",
    margin: "20px 0",
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

function Autodj() {
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
          <Typography className={classes.title}>What is AutoDJ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            AutoDJ lets you upload music and pre-recorded shows to your free
            radio server (like a free music cloud) and create playlists online
            so you can listen and share your stream on the Internet. Everything
            can be accessed via your web browser, not need to install anything
            on your computer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={classes.title}>Playlist Setup</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            To learn how to add tracks to playlists in AutoDJ, watch the video{" "}
            <br />
            <div style={{ position: "relative", paddingTop: "56.0714%" }}>
              <iframe
                title="title"
                src="//www.youtube.com/embed/s307CQqzo4g"
                allowFullScreen="allowfullscreen"
                className={classes.video}
              ></iframe>
            </div>
          </Typography>{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={classes.title}>
            How many tracks can I upload?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            You have 1GB of disc space for your tracks. If it’s full, remove old
            tracks to upload new.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography className={classes.title}>
            How to activate AutoDJ (Centova Cast Control Panel)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            When you get a new server, AutoDJ is disabled by default. To enable
            AutoDJ, perform the instructions described below.
            <br />
            1. Stop your server{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            2. Go to Settings {"->"} AutoDJ {"->"} Permitted and enabled. <br />
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable2.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            3. Select {"->"} AutoDJ {"->"} Permitted and enabled and click
            Update
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable3.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            4. AutoDJ icon should appear in the menu
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable4.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            <strong>
              Notice: The server will not start unless there will be some files
              uploaded onto the server and added to a playlist.
            </strong>{" "}
            Once you have enabled AutoDJ you can upload some audio files onto
            the server by selecting AutoDJ {"->"} Files {"->"} Upload.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography className={classes.title}>
            How to upload your audio files to AutoDJ? (Centova Cast Control
            Panel)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            To learn how to add tracks to playlists in AutoDJ see the tutorial
            below:
            <br />
            1. Select MEDIA hyperlink in the panel on the left side of Centova
            Control Panel, under the AutoDJ section{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/centovacast/media.jpg
              "
                alt="Gallery Thumb 1"
              ></img>
            </div>
            2. Drag and drop an artist, an album or a song of your choice into
            the desired playlist. Note that you can hold CTRL button in order to
            select multiple entries{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/centovacast/medialibrary.jpg
              "
                alt="Gallery Thumb 1"
              ></img>{" "}
            </div>{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/centovacast/upload-select-album.jpg
            "
                alt="Gallery Thumb 1"
              ></img>{" "}
            </div>
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/centovacast/upload-select-song.jpg
          "
                alt="Gallery Thumb 1"
              ></img>{" "}
            </div>
            3.In order to go back to the main Centova Control Panel click RETURN
            at the bottom of the page.
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/centovacast/media-upload-return.jpg
          "
                alt="Gallery Thumb 1"
              ></img>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Autodj;
