import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import maintenance from "../../maintenance.jpg";
import maintenance_1 from "../../maintenance_1.jpg";
import Paper from "@material-ui/core/Paper";

export const OutdoorsSection = () => {
  return (
    <>
      <Grid
        container
        // direction="column"
        // alignItems="center"
        className="paper-color section-end"
      >
        <Grid
          style={{ padding: "18px 0px 18px 0px" }}
          item
          xs={12}
          id="maintenance"
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
                  OUTDOOR MAINTENANCE
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
                  Your shed needs a new felt or the decking needs a refurb? You
                  came to the right place, we provide and can take on a variety
                  of outdoor maintenance services
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Container>
            <Grid container justify="center">
              <Grid item xs={12} lg={6}>
                <Paper elevation={4} className="img-container">
                  <img
                    alt="Outdoora and garden maintenance"
                    className="rectangle"
                    srcSet={`${maintenance} 800w,
                      ${maintenance_1} 1400w`}
                    src={maintenance}
                  ></img>
                </Paper>

                {/* <div width="340px" height="191px" className="rectangle"></div> */}
              </Grid>
              <Grid
                container
                direction="column"
                item
                justify="center"
                alignItems="center"
                xs={12}
                lg={6}
                style={{ padding: "36px 0 0 36px" }}
              >
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", fontSize: "1.4rem" }}
                  >
                    Previous maintenance jobs included:
                  </Typography>
                  <ul className="service-list">
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Repairing sheds
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Laying and regrouting paving slaps
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Fancing, building gates
                      </Typography>
                    </li>

                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Repairing gates and fences
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Fixing or replacing rotten window sills
                      </Typography>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
