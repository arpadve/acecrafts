import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

import { ReactComponent as Award } from "../../award.svg";
import { ReactComponent as Trust } from "../../trust.svg";
import { ReactComponent as Deal } from "../../deal.svg";

export const DedicatedPforSection = () => {
  return (
    <>
      <Grid container className="paper-color section-end">
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
                <Typography
                  variant="h6"
                  className="section-heading"
                  // style={{ fontWeight: "bold", color: "#e6b31e" }}
                >
                  YOUR DEDICATED PROFESIONALS
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
                  There's no job too small, at AceCrafts handyman services we'll
                  work with you to fix them all! From odd jobs to custom
                  carpentry we provide quality solutions, individual tailored to
                  your projects needs.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item xs={12} xl={12}>
          <Container>
            <Grid container justify="space-between">
              <Grid item xs={12} lg={4} className="card-content-container">
                <Paper
                  className="card-content"
                  elevation={4}
                  style={{ padding: "3em", textAlign: "center" }}
                >
                  <Grid
                    container
                    direction="column"
                    spacing={3}
                    justify="center"
                  >
                    <Grid item>
                      <Award
                        // style={{ width: "64px" }}
                        className="svg-style"
                      />
                      {/* <img
                        width="64px"
                        style={{ color: "orange" #364e7a }}
                        src={award}
                      ></img> */}
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        style={{ fontWeight: "bold", fontSize: "1.4rem" }}
                      >
                        Experienced
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Divider orientation="horizontal" />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        className="tex-light"
                        style={{ fontSize: "1.4rem" }}
                      >
                        We are the team of professional technicians with an
                        average 15 years of experience in the field.
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={4} className="card-content-container">
                {/* <Paper elevation={4} className="img-container">
                  <img className="rectangle" src={carpentry}></img>
                </Paper> */}
                <Paper
                  elevation={4}
                  style={{ padding: "3em", textAlign: "center" }}
                >
                  <Grid
                    container
                    direction="column"
                    spacing={3}
                    justify="center"
                  >
                    <Grid item>
                      <Deal className="svg-style" />
                    </Grid>

                    <Grid item>
                      <Typography
                        variant="body1"
                        style={{ fontWeight: "bold", fontSize: "1.4rem" }}
                      >
                        Trustworthy
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Divider orientation="horizontal" />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        className="tex-light"
                        style={{ fontSize: "1.4rem" }}
                      >
                        Our technicians are experienced with a variety of skills
                        in different fields and get the work done...
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} lg={4} className="card-content-container">
                {/* <Paper elevation={4} className="img-container">
                  <img className="rectangle" src={carpentry}></img>
                </Paper> */}
                <Paper
                  elevation={4}
                  style={{ padding: "3em", textAlign: "center" }}
                >
                  <Grid
                    container
                    direction="column"
                    spacing={3}
                    justify="center"
                  >
                    <Grid item>
                      <Trust className="svg-style" />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        style={{ fontWeight: "bold", fontSize: "1.4rem" }}
                      >
                        Reliable
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Divider orientation="horizontal" />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        className="tex-light"
                        style={{ fontSize: "1.4rem" }}
                      >
                        At AceCrafts we offer an exceptional service and high
                        quality workmanship with the utmost profesianal approach
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
