import React from "react";
import { ContactForm } from "./ContactForm";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import Typography from "@material-ui/core/Typography";

// import   Logo  from "../ACE2.svg";

// import * as React from 'react';

// function defaultTrigger(store, options) {
//   const { disableHysteresis = false, threshold = 100, target } = options;
//   const previous = store.current;

//   if (target) {
//     // Get vertical scroll
//     store.current = target.pageYOffset !== undefined ? target.pageYOffset : target.scrollTop;
//   }

//   if (!disableHysteresis && previous !== undefined) {
//     if (store.current < previous) {
//       return false;
//     }
//   }

//   return store.current > threshold;
// }

// const defaultTarget = typeof window !== 'undefined' ? window : null;

// export default function useScrollTrigger(options = {}) {
//   const { getTrigger = defaultTrigger, target = defaultTarget, ...other } = options;
//   const store = React.useRef();
//   const [trigger, setTrigger] = React.useState(() => getTrigger(store, other));

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setTrigger(getTrigger(store, { target, ...other }));
//     };

//     handleScroll(); // Re-evaluate trigger when dependencies change
//     target.addEventListener('scroll', handleScroll);
//     return () => {
//       target.removeEventListener('scroll', handleScroll);
//     };
//     // See Option 3. https://github.com/facebook/react/issues/14476#issuecomment-471199055
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [target, getTrigger, JSON.stringify(other)]);

//   return trigger;
// }
export const Contact = () => {
  return (
    <>
      <Grid className="acbanner-container" justify="center" container>
        <Grid style={{}} direction="column" container item>
          {/* <Grid
            item
            xs={12}
            style={
              {
                position: "absolute",
                top: "0",
                left: "0",
              }
            }
          >
            <img src={acbanner2} style={{ position: "absolute" }} />
          </Grid> */}
          <Grid item xs={12} className="banner-text">
            <Container>
              <Grid justify="center" container>
                <Grid justify="center" container>
                  <Grid item xs={12}>
                    <Typography variant="h3" style={{ textAlign: "center" }}>
                      How can we help?
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Divider
                      className="divider-break"
                      orientation="horizontal"
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12} lg={7}>
                  <Typography
                    variant="h5"
                    component="h5"
                    style={{ textAlign: "center" }}
                    gutterBottom
                    className="text-light"
                  >
                    We'd love to hear from you! If you have any questions
                    regarding a project don't hesitate to contact us through one
                    of the listed options
                  </Typography>
                  {/* <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    fontWeight: "normal",
                    textAlign: "center",
                  }}
                ></p> */}
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className="paper-color"
        style={{ padding: "52px 0px 52px 0px" }}
        container
      >
        <Container>
          <Grid container justify="space-between">
            <Grid lg={6} item>
              <Grid item container>
                <Grid item>
                  <Typography variant="h4" component="h4">
                    {/* Have some questions? */}
                    HAVE SOME QUESTIONS?
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{ fontSize: "1.4rem", padding: "32px 0 32px 0" }}
                    className="text-light"
                  >
                    Call us{" "}
                    <span style={{ fontWeight: 500 }}>Mon-Fri: 9am-6pm</span> or
                    send us a message via the contact form, email, telephone or
                    WhatsApp and we'll get back to you as soon as possible.
                  </Typography>
                </Grid>
                <Grid xs={12} item>
                  <Divider orientation="horizontal" />
                </Grid>

                <Grid item alignItems="center" container>
                  <Grid item xs={12} style={{ padding: "32px 0 32px 0" }}>
                    <Typography variant="h4" component="h4">
                      {/* Ways to connect */}
                      WAYS TO CONNECT
                    </Typography>
                  </Grid>
                  <Grid item container alignItems="center" lg={6} xs={12}>
                    <Grid xs={12} container item alignItems="center">
                      <Grid style={{ padding: "8px", lineHeight: "0" }} item>
                        <PhoneAndroidIcon />
                      </Grid>
                      <Grid item>
                        <Typography variant="caption" display="block">
                          Telepohone:
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      style={{
                        padding: "8px",
                        fontSize: "1.5em",
                        lineHeight: "1.2",
                        fontWeight: 300,
                      }}
                    >
                      <div>+44 (736) 746-12-72</div>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center" lg={6} xs={12}>
                    <Grid item xs={12}>
                      <Grid item container alignItems="center">
                        <Grid style={{ padding: "8px", lineHeight: "0" }} item>
                          <WhatsAppIcon style={{ fontWeight: 300 }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="caption" display="block">
                            WhatsApp:
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      style={{
                        padding: "8px",
                        fontSize: "1.5em",
                        lineHeight: "1.2",
                        fontWeight: 300,
                      }}
                    >
                      <div>+44 (736) 746-12-72</div>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center" lg={6} xs={12}>
                    <Grid item container alignItems="center" xs={12}>
                      <Grid item style={{ padding: "8px", lineHeight: "0" }}>
                        <MailOutlineIcon style={{ fontWeight: 300 }} />
                      </Grid>
                      <Grid item>
                        <Typography variant="caption" display="block">
                          Email:
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      style={{
                        padding: "8px",
                        fontSize: "1.5em",
                        lineHeight: "1.2",
                        fontWeight: 300,
                      }}
                    >
                      <div>office@acecrafts.co.uk</div>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} style={{ padding: "32px 0 32px 0" }}>
                    <Divider orientation="horizontal" />
                  </Grid>
                  <Grid
                    item
                    justify="space-evenly"
                    container
                    style={{ padding: "32px 0 32px 0" }}
                  >
                    <Grid item>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/AceCrafts-107916920980668"
                      >
                        <FacebookIcon
                          fontSize="large"
                          style={{ color: "#2c2c2e" }}
                        />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UCWhydca3E-a-TfVXaUdM50g?view_as=subscriber"
                      >
                        <YouTubeIcon
                          fontSize="large"
                          style={{ color: "#2c2c2e" }}
                        />
                      </a>
                    </Grid>
                    <Grid item>
                      <InstagramIcon fontSize="large" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5} className="contact-form">
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};
