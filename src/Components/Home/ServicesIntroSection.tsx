import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import midsitebanner from "../../midsitebanner.jpg";
import midsitebanner_1 from "../../midsitebanner_1.jpg";
import midsitebanner_2 from "../../midsitebanner_2.jpg";
import makitabg from "../../makitabg.jpg";
import { ReactComponent as Drill } from "../../drill.svg";
import { ReactComponent as Carpentry2 } from "../../carpentry-2.svg";
import { ReactComponent as Paint } from "../../paint.svg";
import { ReactComponent as Fence } from "../../fence.svg";
import { ReactComponent as Wood } from "../../wood.svg";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export const ServicesIntroSection = () => {
  return (
    <>
      <Grid
        container
        // direction="column"
        // alignItems="center"
        className="paper-color"
      >
        <Grid
          item
          className="contact-background"
          style={{
            backgroundImage: `url(${midsitebanner_2})`,
            backgroundPosition: "left",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            paddingTop: "30%",
            position: "relative",
            backgroundRepeat: "no-repeat",
          }}
          xs={12}
        ></Grid>
        <Grid
          // style={{ padding: "18px 0px 18px 0px" }}
          style={{ marginTop: "-110px", zIndex: 10 }}
          item
          xs={12}
        >
          <Container>
            <Grid
              // className="service-description"
              style={{ paddingBottom: "18px" }}
              container
              // direction="column"
              // alignItems="center"
            >
              <Grid item xs={12}>
                <Paper
                  className="card-content"
                  elevation={4}
                  style={{ padding: "36px 0 0 0" }}
                >
                  <Grid container direction="column" justify="center">
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="center"
                      justify="center"
                    >
                      <Grid item xs={12}>
                        <Typography variant="h6" className="section-heading">
                          TAKE A LOOK AT OUR SERVICES
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Divider
                          className="divider-break"
                          orientation="horizontal"
                        />
                      </Grid>
                      <Grid item xs={12} lg={9}>
                        <Typography
                          variant="h4"
                          // style={{ fontSize: "1.6rem" }}
                          className="text-light section-sub-heading"
                          align="center"
                        >
                          We provide a wide range of services with highly
                          satisfying results for your everiday home improvement
                          and maintenance needs within then folowing domains
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="space-evenly"
                      xs={12}
                      style={{ padding: "36px 0 0 0" }}
                    >
                      <Grid
                        item
                        //  xs={6} lg={3}
                      >
                        <Grid
                          item
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <Link
                              to="/services#carpentry"
                              style={{ textDecoration: "none" }}
                            >
                              <Avatar
                                alt="carpentry-icon"
                                className="service-avatar"
                              >
                                <Carpentry2 className="service-svg" />
                              </Avatar>
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              to="/services#carpentry"
                              style={{ textDecoration: "none" }}
                            >
                              <Typography
                                variant="h5"
                                className="text-light servi-intro-name"
                                //align="center"
                              >
                                Carpentry
                              </Typography>
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        //  xs={6} lg={3}
                      >
                        <Grid
                          item
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <Link
                              to="/services#painting"
                              style={{ textDecoration: "none" }}
                            >
                              <Avatar className="service-avatar">
                                <Paint className="service-svg" />
                              </Avatar>
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              to="/services#painting"
                              style={{ textDecoration: "none" }}
                            >
                              <Typography
                                variant="h5"
                                className="text-light servi-intro-name"
                                //align="center"
                              >
                                Painting
                              </Typography>
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        //  xs={6} lg={3}
                      >
                        <Grid
                          item
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <Link
                              to="/services#maintenance"
                              style={{ textDecoration: "none" }}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                className="service-avatar"
                              >
                                <Fence className="service-svg" />
                              </Avatar>
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              to="/services#maintenance"
                              style={{ textDecoration: "none" }}
                            >
                              <Typography
                                variant="h5"
                                className="text-light servi-intro-name"
                                //align="center"
                              >
                                Maintenance
                              </Typography>
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        //  xs={6} lg={3}
                      >
                        <Grid
                          item
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <Link
                              to="/services#hanging"
                              style={{ textDecoration: "none" }}
                            >
                              <Avatar className="service-avatar">
                                <Drill className="service-svg" />
                              </Avatar>
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              to="/services#hanging"
                              style={{ textDecoration: "none" }}
                            >
                              <Typography
                                variant="h5"
                                className="text-light servi-intro-name"
                                //align="center"
                              >
                                Hanging
                              </Typography>
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        //  xs={6} lg={3}
                      >
                        <Grid
                          item
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item>
                            <Link
                              to="/services#drywall"
                              style={{ textDecoration: "none" }}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                className="service-avatar"
                              >
                                <Wood className="service-svg" />
                              </Avatar>
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              to="/services#drywall"
                              style={{ textDecoration: "none" }}
                            >
                              <Typography
                                variant="h5"
                                className="text-light servi-intro-name"
                                //align="center"
                              >
                                Drywall
                              </Typography>
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
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
