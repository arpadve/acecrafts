import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import carpentry from "../../carpentry.jpg";
import carpentry_1 from "../../carpentry_1.jpg";
import carpentry_2 from "../../carpentry_2.jpg";
import Paper from "@material-ui/core/Paper";

export const CarpentrySection = () => {
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
          id="carpentry"
        >
          <Container>
            <Grid
              className="service-description"
              //   style={{ padding: "72px 0px 72px 0px" }}
              container
              direction="column"
              alignItems="center"
              id="quote"
            >
              <Grid item>
                <Typography variant="h6" className="section-heading">
                  CARPENTRY
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
                  We offer an extensive range of carpentry services.We make,
                  repair, install furniture based on your ideas and
                  specificatios and various other items made out of wood, man
                  made wood such as MDF and plywood
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
                    alt="bespoke carpentry"
                    className="rectangle"
                    srcSet={`${carpentry} 800w,
                      ${carpentry_1} 1400w,${carpentry_2} 2000w`}
                    src={carpentry}
                  ></img>
                </Paper>
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
                    Few examples:
                  </Typography>
                  <ul className="service-list">
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Cabinets
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Wardrobes
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Alcove units
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Shelves, floating shelves
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Flooring
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Installing skirting bords and coving
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="body1"
                        style={{ fontSize: "1.4rem" }}
                        className="text-light"
                      >
                        Pergolas, porches, deckings
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
