import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import banner21 from "../../banner21.jpg";
import banner21_2 from "../../banner21_2.jpg";
import banner21_3 from "../../banner21_3.jpg";
import { Link } from "react-router-dom";
import { ReactComponent as AcLogo } from "../../logo8.svg";
import { animated, config, useSpring } from "react-spring";

export const HeroSection = () => {
  const props2 = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: 1,
    },
    delay: 100,
  });
  const headlineProps = useSpring({
    // config: { mass: 5, tension: 2500, friction: 250, clamp: true },
    config: config.gentle,
    from: { transform: "translate3d(0,70px,0)", opacity: 0 },
    to: {
      transform: "translate3d(0,0px,0)",
      opacity: 1,
    },
    // delay: 50,
  });
  const subHeadlineProps = useSpring({
    // config: { mass: 3, tension: 1400, friction: 150, clamp: true },
    config: config.gentle,
    from: { transform: "translate3d(0,100px,0)", opacity: 0 },
    to: async (next: any, cancel: () => void) => {
      await next({ transform: "translate3d(0,0px,0)", opacity: 1 });
    },
  });
  return (
    <>
      <Grid
        item
        container
        xs={12}
        justify="center"
        direction="column"
        alignItems="center"
        className="banner-img"
      >
        <Grid item xs={12} style={{ width: "100%" }}>
          <animated.img
            style={props2}
            className="bgimg"
            srcSet={`${banner21} 800w,
                      ${banner21_2} 1400w,${banner21_3} 2000w`}
            src={banner21_2}
            alt="image"
          />
        </Grid>
        <Grid item container className="Headline-container" xs={12}>
          <Grid item xs={12}>
            <Container>
              <Grid
                container
                justify="center"
                alignItems="center"
                className="Headline"
                direction="column"
              >
                <Grid item xs={12}>
                  {/* <AcLogo className="ac-logo-hero" /> */}
                </Grid>
                <Grid item xs={12}>
                  <animated.div style={headlineProps}>
                    <Typography
                      variant="h3"
                      style={{
                        textShadow: "2px 2px 2px #000",
                        fontWeight: "bold",
                        textAlign: "center",
                        padding: "0 0 32px 0",
                      }}
                    >
                      We are AceCrafts, your handy professionals
                    </Typography>
                  </animated.div>
                </Grid>
                <Grid item xs={12}>
                  <animated.div style={subHeadlineProps}>
                    <Typography
                      variant="h4"
                      style={{
                        textShadow: "3px 4px 5px #000",
                        textAlign: "center",
                      }}
                    >
                      Specializing in carpenrty & wide range of handyman
                      services
                    </Typography>
                  </animated.div>
                </Grid>
                <Grid item xs={12}>
                  <animated.div style={subHeadlineProps}>
                    <Typography
                      variant="h5"
                      style={{
                        textShadow: "3px 4px 5px #000",
                        padding: "8px 0 0 0",
                      }}
                    >
                      Start your home improvement today!
                    </Typography>
                  </animated.div>
                </Grid>
                <Grid item xs={12} style={{ paddingTop: "36px" }}>
                  <animated.div style={subHeadlineProps}>
                    <a href="/#quote" style={{ textDecoration: "none" }}>
                      <Button
                        size="large"
                        variant="contained"
                        color="inherit"
                        className="ac-button"
                      >
                        REQUEST A QUOTE
                      </Button>
                    </a>
                  </animated.div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
