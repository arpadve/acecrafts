import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import drywall2 from "../../drywall2.jpg";
import Paper from "@material-ui/core/Paper";

export const DrywallSection = () => {
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
          id="drywall"
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
                  DRYWALL
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
                  Need a partition wall, maybe want some ugly pipes hidden?
                  Plasterboard is a good solution for both. We provide solutions
                  ranging from full drywall installation to repairing any kind
                  of damage.
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
                  Previous jobs included:
                </Typography>
                <ul className="service-list">
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Installing framework for drywall
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Complete or partial instalation of drywall
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Replacement of drywall
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      style={{ fontSize: "1.4rem" }}
                      className="text-light"
                    >
                      Repairing damaged drywall
                    </Typography>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Paper elevation={6} className="img-container">
                  <img
                    className="rectangle"
                    alt="drywall instalation"
                    src={drywall2}
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
