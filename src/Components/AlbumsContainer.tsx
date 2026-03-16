import React, { ReactNode } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { ImageUrl, Album, AlbumsCollection } from "./Portfolio";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
import { Hidden, useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HoverAnimationTrigger from "./HoverAnimationTrigger";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import {
  animated,
  config,
  useTrail,
  interpolate,
  useSpring,
} from "react-spring";
import zIndex from "@material-ui/core/styles/zIndex";

interface AlbumProps {
  categorie: AlbumsCollection[];
  onAlbumSelected: (album: Album) => void;
}
interface AnimatedSectionProps {
  handleClick: (album: Album) => void;
  elements: Album[];
}
const chunk = (arr: Album[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export const AnimatedSection = (children: AnimatedSectionProps) => {
  //const items = React.Children.toArray(children);
  const isMouseOver = React.useRef([]);
  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { elements } = children;

  const [trail, set] = useTrail(children.elements.length, () => ({
    config: { mass: 1, tension: 220, friction: 20, clamp: true },
    // config: config.gentle,
    opacity: 0 as number,
    scale: 0.8 as number,
    x: 150,
  }));
  // const btn =<button></button>
  // btn.props.Style={};
  //   const itemsEls = React.useRef(new Array())
  //   const getRef = (element) => (itemsEls.current.push(element))
  return (
    <>
      <Grid item xs={12}>
        <InView
          rootMargin={isMobile ? "100px" : "0px"}
          className="InView"
          threshold={0.2}
          triggerOnce
          onChange={(inView, entry) => {
            if (inView) {
              set({ opacity: 1, scale: 1, x: 0 });
            }
          }}
        >
          <Grid container className="ddddddd" justify="space-between">
            {trail.map(({ x, opacity, scale, ...rest }, index) => (
              <Grid
                item
                key={elements[index].id}
                xs={12}
                lg={6}
                container
                className="portfolio-img-container-prev"
              >
                <animated.div
                  key={index}
                  style={{
                    width: "100%",
                    ...rest,
                    opacity: interpolate([opacity], (opacity) => opacity),
                    // transform: interpolate([scale], (scale) => `scale(${scale})`),
                    // scale: interpolate([scale], (scale) => `scale(${scale})`),
                    transform: interpolate(
                      [x, scale],
                      (x, scale) => `translate(0,${x}px) scale(${scale})`
                    ),
                  }}
                >
                  <Grid
                    item
                    container
                    style={{ paddingBottom: "64px" }}
                    xs={12}
                  >
                    <Grid item container style={{ position: "relative" }}>
                      <Grid item xs={12}>
                        <a
                          onClick={() => children.handleClick(elements[index])}
                        >
                          <Paper
                            elevation={4}
                            style={{
                              maxWidth: "100%",
                              overflow: "hidden",
                              position: "relative",
                            }}
                          >
                            <HoverAnimationTrigger className="portfolio-img-cover rectangle">
                              <img
                                className="rectangle"
                                style={{ display: "block" }}
                                srcSet={`${elements[index].coverImages.small} 1x,
                                         ${elements[index].coverImages.medium} 2x`}
                                src={elements[index].coverImages.small}
                              />
                            </HoverAnimationTrigger>
                          </Paper>
                        </a>
                      </Grid>
                      <Grid item xs={12}></Grid>

                      <Grid item xs={12}>
                        <div className="album-length">
                          <a
                            onClick={() =>
                              children.handleClick(elements[index])
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <Typography variant="h6">
                              {elements[index].imgUrls.length} Images
                            </Typography>
                          </a>
                        </div>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <a onClick={(e) => {}} style={{ cursor: "pointer" }}>
                        <Typography variant="h5" className="portfolio-title">
                          {elements[index].title}
                        </Typography>
                      </a>
                    </Grid>
                  </Grid>
                </animated.div>
              </Grid>
            ))}
          </Grid>
        </InView>
      </Grid>
    </>
  );
};
export const AlbumsContainer = (albumProps: AlbumProps) => {
  const handleClick = (album: Album) => {
    albumProps.onAlbumSelected(album);
    //const rcontext= require('./images', false, '/\.png/');
  };
  const albums = albumProps.categorie.flatMap((i) => {
    return i.albums;
  });
  let chunked = chunk(albums, 2).map((i, index) => {
    return (
      <AnimatedSection
        key={index}
        elements={i}
        handleClick={handleClick}
      ></AnimatedSection>
    );
  });

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography className="section-heading" variant="h6">
            {albumProps.categorie[0].category}
          </Typography>
          <Divider className="divider-break" orientation="horizontal" />
        </Grid>
        <Grid
          justify="space-between"
          className="mainImageContainer"
          item
          container
        >
          {chunked}
        </Grid>
      </Grid>
    </>
  );
};
