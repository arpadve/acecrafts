import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import painting from "../../painting.webp";
import Paper from "@material-ui/core/Paper";

export const PaintingSection = () => {
  return (
    <>
      <Grid container direction="column" className="section-end">
        <Grid style={{ padding: "18px 0px 18px 0px" }} item id="painting">
          <Container>
            <Grid
              className="service-description"
              container
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" className="section-heading">
                  PAINTING AND DECORATING
                </Typography>
              </Grid>
              <Grid item>
                <Divider className="divider-break" orientation="horizontal" />
              </Grid>
              <Grid item xs={12} lg={10}>
                <Typography
                  variant="h4"
                  className="text-light section-sub-heading"
                  align="center"
                >
                  Our interior and exterior painting and decorating services
                  include high-quality painting, paperhanging, and all
                  associated preparation work. We are highly experienced in
                  every kind of painting and decorating, deliver fine finishing
                  in a timely matter and can offer a complete solution.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Container>
            <Grid container justify="center">
              <Grid
                container
                direction="column"
                item
                justify="center"
                alignItems="flex-start"
                xs={12}
                lg={6}
                style={{ padding: "36px 0 0 36px" }}
              >
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", fontSize: "1.4rem" }}
                >
                  Previous painting jobs included:
                </Typography>
                <ul className="service-list">
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Walls and ceilings
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Doors
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Windows
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Floors and skirting boards
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Hanging wallpaper and lining paper
                    </Typography>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Paper elevation={4} className="img-container">
                  <img
                    className="rectangle"
                    alt="painting and decorating"
                    src={painting}
                  ></img>
                </Paper>

                {/* <div width="340px" height="191px" className="rectangle"></div> */}
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
