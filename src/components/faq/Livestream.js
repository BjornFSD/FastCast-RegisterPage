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
  textLink: {
    textDecoration: "none",
    color: "#4772d9",
    textShadow: "1px 1px 1px rgb(0/10%, 0/10%, 0 / 10%)",
    "&:hover": {
      color: "black",
    },
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

function Livestream() {
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
            How to set up a live stream? (Centova Cast Control Panel and Mixxx)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            If you would like to start broadcasting live using Mixxx, make sure
            you have all the software required:
            <br />
            <strong> Download </strong>and <strong> install </strong> Mixxx:
            <a href="https://mixxx.org/download/" className={classes.textLink}>
              {" "}
              mixxx.org/download
            </a>
            <br />
            <strong> Download </strong>Lame MP3 codec and install it having
            installed Mixxx first.
            <br />
            <br />
            1. First of all, if you would like to use AutoDJ and broadcast live
            using Mixxx, you need to create at least one DJ account in Centova
            Cast Control Panel by selecting the DJ option in the menu of Centova
            Cast Control Panel.
            <br />
            Restart the server after adding each DJ account. Only one DJ can be
            connected to the server at the time.
            <br />
            If you do not use the AutoDJ feature or have a server without
            AutoDJ, you can skip this first step.
            <br />
            <br />
            2. <strong> Download </strong> Mixxx and select{" "}
            <strong> Options </strong> and <strong> Preferences</strong>:
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            3. If you would like to use a <strong> microphone</strong>, select
            it in the <strong> Input</strong> devices section.
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            4. To configure the connection to your Radio Server, select{" "}
            <strong>Live Broadcasting </strong> in the menu.{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            5. <strong>Open </strong> the Centova Cast Control Panel of your
            Radio Station and copy the following details from the{" "}
            <strong>Quick link</strong> section of your server:
            <br /> - Hostname (1) - Port number (2)
            <br /> - as the password use the password and username of the DJ
            account that you have created separated by a colon (:), e.g.
            "testdj:mypassword" (3) or source password that you have received by
            email.
            <br /> - Mount and Login – leave empty as presented below: <br />
            <br />
            <strong>For a server with AutoDJ and a DJ account: </strong>
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            <strong>A server with no AutoDJ and no DJ account: </strong>
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            6. Fill in Stream details, it is up to you what details will you
            use. These are Stream Details that will be seen by your listeners.
            We also recommend selecting the Public server option and UTF-8
            encoding for metadata.
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            7. Select the bitrate (audio quality) of the stream. If you use
            AutoDJ the bitrate of your live stream should be the same as the
            bitrate of your server/AutoDJ. If you do not use AutoDJ make sure
            that broadcasting bitrate does not exceed the maximum bitrate of
            your server. You can check the maximum broadcasting bitrate of your
            server in the Quick links section of your Centova Cast Control
            Panel. <br />
            Select the audio coded for your stream. We recommend broadcasting in
            MP3 file format because it is supported by most of the players on
            the Intenet.{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            Click <strong>Enable Live Broadcasting </strong> to connect to the
            server and start broadcasting live.
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            You should see a confirmation that Mixxx has been successfully
            connected to the server:
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            If you see the same message as below, sure that you have downloaded
            and installed the{" "}
            <a
              href=" https://fastcast4u.com/account/downloads.php?action=displaycat&catid=1"
              className={classes.textLink}
            >
              {" "}
              Lame MP3 codec from our website
            </a>
            <br />
            <br />
            <strong>
              {" "}
              Important: Restart (close and open) Mixxx software after
              installing the codec.
            </strong>
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            Untick the <strong> Enable Live Broadcasting </strong> option to
            disconnect from the server.{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/content/tutorials/enable1.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            You are ready to start broadcasting live!
            <br />
            <a
              href=" https://manual.mixxx.org/2.2/en/chapters/djing_with_mixxx.html"
              className={classes.textLink}
            >
              {" "}
              Learn more about DJing using Mixxx
            </a>
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
            How to set up a live stream? (Centova Cast Control Panel and BUTT)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            <strong>
              If you do not have all required software yet,{" "}
              <a
                href="http://butt.sourceforge.net/"
                className={classes.textLink}
              >
                download and install B.U.T.T. (Broadcast Using This Tool).
              </a>{" "}
              <br /> <br />
              This simple app does not allow creating any playlists, so it can
              be used to broadcast the sound from your microphone, line-in
              input, an external mixer of from a different software.
            </strong>{" "}
            <br /> <br />
            1. Before you start the configuration process, log in to the Centova
            Cast Panel and select the Quick Links section.
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/centovacast/quicklinks.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            2. Find ShoutCast/Icecast server details under Live Source
            Connections:{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/sam/centova-livesource.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            <br />
            If you would like to use AutoDJ and broadcast live using BUTT, you
            need to create at least one DJ account in Centova Cast Control Panel
            by selecting the DJ option in the menu of Centova Cast Control
            Panel. <br />
            <a
              href="https://fastcast4u.com/help/37"
              className={classes.textLink}
            >
              <strong>
                Check this tutorial to see how to create DJ accounts
              </strong>
            </a>
            <br />
            Restart the server after adding each DJ account. Only one DJ can be
            connected to the server at the time.
            <br />
            If you do not use the AutoDJ feature or have a server without
            AutoDJ, you can skip this first step.
            <br />
            3. Open B.U.T.T software and select <strong> Settings</strong>
            <br /> <br />
            4. You should be able to view the Settings page as presented below,
            select <strong> ADD </strong>Server{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/help/butt11.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            5. Open your Cantova Cast Panel to copy the encoder settings to BUTT
            like presented below:{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/help/butt5.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            <strong>
              Even if you use SHOUTcast V2 server, we recommend connecting in
              the Shoutcast v1 mode:
            </strong>{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/help/v1login.png"
                alt="Gallery Thumb 1"
              ></img>{" "}
            </div>
            Select the<strong>Audio Device</strong> and adjust the{" "}
            <strong>broadcasting bitrate</strong> and make sure that it does not
            exceed the maximum broadcasing bitrate for your server:
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/winamp/v1v2infobitrate.png"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/help/butt13.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            8. Make sure that the sound level indicators are going up and down,
            that means that you are ready to broadcast
            <br />
            9. Hit the play button and, if you are connected to the server
            successfully, you should see the a{" "}
            <strong> Connection established</strong> message and
            <strong>idle</strong> state will change to{" "}
            <strong>stream time</strong>
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/help/butt14.jpg"
                alt="Gallery Thumb 1"
              ></img>
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
            How to set up a live stream? (Centova Cast Control Panel and Winamp)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            <strong>
              If you do not have all the required software yet, you can easily
              <a
                href="http://butt.sourceforge.net/"
                className={classes.textLink}
              >
                download Winamp and SHOUTcast DSP Plugin from our website.
                (Broadcast Using This Tool).
              </a>
            </strong>{" "}
            <br /> <br />
            Before you start the configuration process, log in to the Centova
            Cast Panel and select the Quick Links section.
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/centovacast/quicklinks.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            Find ShoutCast/Icecast server details under Live Source Connections:
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/sam/centova-livesource.jpg"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            Open Winamp with a DSP plugin installed. If your DSP plugin did not
            open, then push CTRL + P and enter DSP/Effects under Plug-ins tab.
            Then just double click Nullsoft SHOUTcast Source DSP.
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/winamp/dspplugin.png"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            You should be able to view Winamp with a DSP plugin like presented
            below:
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/winamp/winampdsp.png"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            You will see an <strong>Encoder Settings</strong> button if you
            selected the AAC codec or a list with{" "}
            <strong>Encoder Settings</strong> if you selected MP3.
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/winamp/aacview.png"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/winamp/mp3codec.png"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            A window with a bitrate slider will open. Select an appropriate
            bitrate. Remember, not to exceed your maximum limit, you can easily
            check it in Centova Cast Control Panel.{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/winamp/bitrate.png"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            The maximum bitrate for your server is visible here:
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/winamp/v1v2infobitrate.png"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            To connect to a Shoutcast v2 server, enter details marked on a
            screenshot below. You need to enter the server address, port, DJ
            username, DJ password and Stream ID (mount point number, the default
            setting is "1").{" "}
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/winamp/shoutcastv2login.png"
                alt="Gallery Thumb 1"
              ></img>
            </div>
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/winamp/v2login.png"
                alt="Gallery Thumb 1"
              ></img>
            </div>{" "}
            If you wish to record and save your stream, Select "Save Encoded
            Output", and choose the location where it should be saved.
            <div className={classes.imgDiv}>
              <img
                className={classes.image}
                src="https://img.fastcast4u.com/tutorials/winamp/saveencoder.png"
                alt="Gallery Thumb 1"
              ></img>
            </div>
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
            Recommended free broadcasting software {"{}"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            Mixxx (PC and Mac) - a virtual mixer, lets you create advanced
            playlists and use a microphone.{" "}
            <a href="https://mixxx.org/" className={classes.textLink}>
              More & Download
            </a>
            <br />
            <br />
            B.U.T.T. - (PC and Mac) basic, lets you use a microphone or any
            other line-in source (a mixer, etc).{" "}
            <a
              href="https://danielnoethen.de/butt/"
              className={classes.textLink}
            >
              More & Download
            </a>
            <br />
            <br />
            SHOUTcast DSP Plug-In (PC) - an addon to Winamp, lets you stream
            playlists from your Winamp Player and use other stream sources.{" "}
            <a
              href="http://forums.winamp.com/showthread.php?t=378892"
              className={classes.textLink}
            >
              More & Download
            </a>
            <br />
            <br />
            You may also use any other software compatible with SHOUTcast or
            Icecast servers, like premium (non-free){" "}
            <a
              href="https://spacial.com/sam-broadcaster-pro/"
              className={classes.textLink}
            >
              SAM Broadcaster Pro,
            </a>{" "}
            <a href="https://www.virtualdj.com/" className={classes.textLink}>
              Virtual DJ
            </a>{" "}
            or{" "}
            <a href="https://www.djsoft.net/" className={classes.textLink}>
              RadioBoss
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Livestream;
