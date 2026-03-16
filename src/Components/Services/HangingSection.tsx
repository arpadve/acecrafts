import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import handyman from "../../handyman.jpg";
import handyman_1 from "../../handyman_1.jpg";
import Paper from "@material-ui/core/Paper";

export const HangingSection = () => {
  return (
    <>
      <Grid
        container
        // direction="column"
        // alignItems="center"
        className="section-end"
      >
        <Grid
          style={{ padding: "18px 0px 18px 0px" }}
          item
          xs={12}
          id="hanging"
        >
          <Container>
            <Grid
              className="service-description"
              container
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" className="section-heading">
                  HANGING, MOUNTING AND FITTING
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
                  We provide secure and durable hanging, mounting, and fitting
                  of various items no matter what type of wall you have. We can
                  detect cables and pipes and will complete the job in a safe
                  manner.
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
                  Few examples:
                </Typography>
                <ul className="service-list">
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Mirrors
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Tv's
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Pictures
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Shelves
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Window blinds
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Door locks, handles and much more...
                    </Typography>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Paper elevation={6} className="img-container">
                  <img
                    alt="Hanging pictures or other items"
                    className="rectangle"
                    srcSet={`${handyman} 800w,
                      ${handyman_1} 1400w`}
                    src={handyman}
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
