import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { ContactForm } from "../ContactForm";
import wood2309313 from "../../wood-2309313.jpg";
import wood2309313_1 from "../../wood-2309313_1.jpg";
import wood2309313_2 from "../../wood-2309313_2.jpg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export const GetInTouchSection = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { x } = useSpring({
    from: { x: 0 },
    x: inView ? 1 : 0,
    config: { duration: 15000 },
  });
  return (
    <>
      <Grid
        container
        // direction="column"
        // alignItems="center"
        id="quote"
        className="paper-color"
      >
        <Grid item xs={12}>
          <Container>
            <Grid
              className="service-description"
              //   style={{ padding: "72px 0px 72px 0px" }}
              container
              //direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item container direction="column" alignItems="center">
                <Grid item>
                  <Typography variant="h6" className="section-heading">
                    GET IN TOUCH
                  </Typography>
                </Grid>

                <Grid item>
                  <Divider className="divider-break" orientation="horizontal" />
                </Grid>
              </Grid>

              <Grid item xs={12} lg={10}>
                <Typography
                  variant="h4"
                  className="text-light section-sub-heading"
                  align="center"
                >
                  Any project on your mind? Feel free to contact for any further
                  inquiries, call us for free consultation, scheduled
                  appointment or submit your project description via our contact
                  form.
                  <br />
                  <br />
                  Start your todo list today!
                </Typography>
              </Grid>
              <Grid
                item
                container
                justify="space-around"
                xs={12}
                lg={6}
                style={{ padding: "36px" }}
              >
                <Grid item style={{ padding: "8px", lineHeight: "0" }}>
                  <a href="tel:07367461272" className="inaktiv-link">
                    <PhoneAndroidIcon
                      style={{ fontWeight: 300, fontSize: "2rem" }}
                    />
                  </a>
                </Grid>
                <Grid item>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <Button
                      size="large"
                      variant="contained"
                      className="ac-button"
                    >
                      GO TO CONTACTS
                    </Button>
                  </Link>
                </Grid>
                <Grid item style={{ padding: "8px", lineHeight: "0" }}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://wa.me/0447367461272"
                    className="inaktiv-link"
                  >
                    <WhatsAppIcon
                      style={{ fontWeight: 300, fontSize: "2rem" }}
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid
          item
          container
          className="contact-background"
          style={{
            backgroundImage: `linear-gradient(rgba(3, 3, 3, 0.20), rgba(3, 3, 3, 0.20))`,

            padding: "72px 0 72px 0",
            overflow: "hidden",
            position: "relative",
          }}
          xs={12}
          ref={ref}
        >
          <animated.img
            style={{
              position: "absolute",
              // backgroundPosition: "left",
              // backgroundAttachment: "scroll",
              // backgroundSize: "cover",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              objectFit: "cover",

              transform: x
                .interpolate({
                  range: [0, 1],
                  output: [1, 1.1],
                })
                .interpolate((x) => `scale(${x})`),
            }}
            src={wood2309313_1}
          ></animated.img>
          <Container>
            <Grid container justify="flex-end">
              <Grid item xs={12} lg={5}>
                <ContactForm />
              </Grid>
              {/* <Grid
                container
                direction="column"
                item
                justify="center"
                alignItems="center"
                xs={12}
                lg={6}
                style={{ padding: "36px 0 0 36px" }}
              >
                <Grid item></Grid>
              </Grid> */}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
