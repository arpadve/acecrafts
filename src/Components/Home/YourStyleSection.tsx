import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import carpentryCover from "../../carpentryCover.jpg";
import carpentryCover_1 from "../../carpentryCover_1.jpg";
import carpentryCover_2 from "../../carpentryCover_2.jpg";
import paintingDemo from "../../paintingDemo.jpg";
import paintingDemo_1 from "../../paintingDemo_1.jpg";
import paintingDemo_2 from "../../paintingDemo_2.jpg";
import outdoorCarpentry from "../../outdoorCarpentry.jpg";
import outdoorCarpentry_1 from "../../outdoorCarpentry_1.jpg";
import outdoorCarpentry_2 from "../../outdoorCarpentry_2.jpg";
import hangingCover from "../../hangingCover.jpg";
import hangingCover_2 from "../../hangingCover_1.jpg";
import hangingCover_1 from "../../hangingCover_2.jpg";
import { useContext } from "react";
import { LightboxCtx } from "../Lightbox/LightboxContext";
import { Link } from "react-router-dom";
import { animated, config, useTrail, interpolate } from "react-spring";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
import HoverAnimationTrigger from "../HoverAnimationTrigger";

const images = [
  {
    title: "Custom kitchen island",
    small: carpentryCover,
    medium: carpentryCover_1,
    large: carpentryCover_2,
  },
  {
    title: "Painting Mildmay",
    small: paintingDemo,
    medium: paintingDemo_1,
    large: paintingDemo_2,
  },
  {
    title: "Hanging different items",
    small: hangingCover,
    medium: hangingCover_1,
    large: hangingCover_2,
  },
  {
    title: "New build Porch",
    small: outdoorCarpentry,
    medium: outdoorCarpentry_1,
    large: outdoorCarpentry_2,
  },
];
type Trailprops = {
  open: boolean;
  children: React.ReactElement;
};

export const YourStyleSection: React.FC = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.05,
    triggerOnce: true,
  });
  const [trail, set] = useTrail(images.length, () => ({
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 0 as number,
    x: 150,
    // from: { opacity: 0, x: 150 },
  }));

  const ctx = useContext(LightboxCtx);
  const handleClick = () => {
    ctx.dispatch({
      type: "openLightbox",
      payload: [
        carpentryCover_1,
        paintingDemo_1,
        hangingCover_1,
        outdoorCarpentry_1,
      ],
    });
  };
  return (
    <>
      <Grid container className="section-end">
        <Grid style={{ padding: "18px 0px 18px 0px" }} item xs={12}>
          <Container>
            <Grid
              className="service-description"
              //   style={{ padding: "72px 0px 72px 0px" }}
              container
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" className="section-heading">
                  YOUR VISION & STYLE
                </Typography>
              </Grid>
              <Grid item>
                <Divider className="divider-break" orientation="horizontal" />
              </Grid>
              <Grid item xs={12} lg={9}>
                <Typography
                  variant="h4"
                  className="text-light section-sub-heading"
                  align="center"
                >
                  Together we can work on making your vision and personal style
                  become a reality, you dream it we build it. Take a look at
                  some of our featured projects.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid style={{ padding: "18px 0px 18px 0px" }} item xs={12}>
          <Container>
            <Grid container justify="space-between">
              {trail.map(({ x, ...rest }, index) => (
                <Grid
                  item
                  container
                  key={index}
                  //direction="column"
                  // className="portfolio-img"
                  className="portfolio-img-container-prev"
                  style={{ paddingBottom: "64px" }}
                  xs={12}
                  lg={6}
                >
                  <Grid item xs={12}>
                    <InView
                      threshold={0.2}
                      onChange={(inView, entry) => {
                        if (inView) {
                          set({ opacity: 1, x: 0 });
                        }
                      }}
                    >
                      <animated.div
                        key={index}
                        style={{
                          ...rest,
                          transform: interpolate(
                            [x],
                            (x) => `translate3d(0,${x}px,0)`
                          ),
                        }}
                      >
                        <a onClick={() => handleClick()}>
                          <Paper elevation={4} style={{ overflow: "hidden" }}>
                            <HoverAnimationTrigger className="portfolio-img-cover">
                              <img
                                onClick={() => handleClick()}
                                className="rectangle"
                                style={{ display: "block", cursor: "pointer" }}
                                srcSet={`${images[index].small} 800w,
                                      ${images[index].medium} 1400w,
                                      ${images[index].large} 2000w`}
                                src={images[index].small}
                              ></img>
                            </HoverAnimationTrigger>
                          </Paper>
                        </a>
                      </animated.div>
                    </InView>
                  </Grid>

                  <Grid item xs={12}>
                    <a
                      onClick={() => handleClick()}
                      style={{ cursor: "pointer" }}
                    >
                      <Typography variant="h5" className="portfolio-title">
                        {images[index].title}
                      </Typography>
                    </a>
                  </Grid>
                </Grid>
              ))}
              <Grid item container justify="center" xs={12}>
                <Link to="/portfolio" style={{ textDecoration: "none" }}>
                  <Button
                    size="large"
                    variant="contained"
                    className="ac-button"
                  >
                    GO TO PORTFOLIO
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
