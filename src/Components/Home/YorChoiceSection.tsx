import React from "react";
import { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import midsitebanner from "../../midsitebanner.jpg";
import makitabg from "../../makitabg.jpg";
import { animated, useSpring } from "react-spring";
import { relative } from "path";

export const YorChoiceSection = () => {
  // const parallaxRef = React.createRef<HTMLDivElement>();
  // const [{ offset }, set] = useSpring(() => ({ offset: 0 }));
  // const calc = (o: string | number | undefined) => {
  //   if (o == undefined) {
  //     return;
  //   }
  //   return `translateY(${-Number(o) * 0.1}px)`;
  // };
  // const handleScroll = () => {
  //   if (parallaxRef.current != null) {
  //     const posY = parallaxRef.current.getBoundingClientRect().top;
  //     const offset = window.pageYOffset - posY;
  //     set({ offset });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });
  return (
    <>
      <Grid
        container
        // direction="column"
        // alignItems="center"
        className="paper-color "
      >
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
                  YOUR CHOICE
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
                  Dream big and choose the materials, fittings, mechanisms and
                  the finishing you love. Sometimes the cost of materials and
                  accessories makes up more than 30% of the projects buget, we
                  offer an individual approach and will help you choose the
                  option that suits you in terms of price - quality ratio.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid
          item
          //className="contact-background"
          style={{
            backgroundImage: `url(${makitabg})`,
            // backgroundPosition: "left",
            // backgroundAttachment: "fixed",
            backgroundSize: "contain",
            paddingTop: "30%",
            position: "relative",
            backgroundRepeat: "no-repeat",
            // transform: offset.interpolate(calc),
          }}
          xs={12}
          component="div"
          // ref={parallaxRef}
        >
          {/* <animated.img
            src={makitabg}
            style={{
              backgroundImage: `url(${makitabg})`,
              backgroundPosition: "left",
              backgroundAttachment: "fixed",
              backgroundSize: "contain",
              paddingTop: "30%",
              position: "relative",
              backgroundRepeat: "no-repeat",

              transform: offset.interpolate(calc),
            }}
          /> */}
          {/* <animated.img
            src={makitabg}
            style={{
              objectFit: "cover",
              paddingTop: "30%",
              // position: "absolute",
              // top: 0,
              // left: 0,
              
              // background: "#654321",
              // position: "absolute",
              // width: "100vw",
              // height: "100px",
              transform: offset.interpolate(calc),
            }}
          /> */}
        </Grid>
      </Grid>
    </>
  );
};
