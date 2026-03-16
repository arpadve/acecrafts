import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { ReactComponent as Heart } from "../../heart.svg";
import { ReactComponent as Meeting } from "../../meeting.svg";
import { ReactComponent as Satisfaction } from "../../satisfaction.svg";
import { ReactComponent as Thinking } from "../../think.svg";
import { ReactComponent as TechnikalDawing } from "../../technical-drawing.svg";
import { ReactComponent as Designthinking } from "../../design-thinking.svg";

export const BenefitsSection = () => {
  return (
    <>
      <Grid
        container
        // direction="column"
        // alignItems="center"
        className="paper-color section-end"
      >
        <Grid
          // style={{ padding: "18px 0px 18px 0px" }}
          item
          xs={12}
        >
          <Container>
            <Grid
              //className="service-description"
              style={{ padding: "72px 0px 54px 0px" }}
              container
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" className="section-heading">
                  YOUR BENEFITS
                </Typography>
              </Grid>
              <Grid item>
                <Divider className="divider-break" orientation="horizontal" />
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item xs={12} style={{ paddingBottom: "18px" }}>
          <Container>
            <Grid container justify="space-between">
              <Grid
                item
                container
                direction="column"
                xs={12}
                // lg={3}
                className="benefit-description"
              >
                <Grid item>
                  <Thinking className="svg-style" />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    className="benefits-heading"
                    // style={{
                    //   margin: "27px 0 18px 0",
                    //   lineHeight: "1.5em",
                    //   letterSpacing: "0.00em",
                    // }}
                  >
                    Individuality in every product
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    // component="h6"
                    className="text-light"
                    style={{ fontSize: "1.13rem" }}
                  >
                    We do what cannot be bought in stores, we implement
                    individual solutions for each client. We strive for success
                    and we love non-standard, new, challenging designs.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                xs={12}
                // lg={3}
                className="benefit-description"
              >
                <Grid item>
                  <Meeting className="svg-style" />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    //component="h5"
                    className="benefits-heading"
                  >
                    Personal approach to each client
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    // component="h6"
                    className="text-light"
                    style={{ fontSize: "1.13rem" }}
                  >
                    We approach interaction with the customer flexibly and
                    individually. We strive for quality not only in the final
                    product, but also the work process itself, providing maximum
                    comfort for the client
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                xs={12}
                // lg={3}
                className="benefit-description"
              >
                <Grid item>
                  <Satisfaction className="svg-style" />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    //component="h5"

                    className="benefits-heading"
                  >
                    More than meeting expectations
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    // component="h6"
                    className="text-light"
                    style={{ fontSize: "1.13rem" }}
                  >
                    We always provide a result that the customer is satisfied
                    with. Our clients further recommended us happlily to their
                    friends.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                xs={12}
                lg={4}
                className="benefit-description"
              >
                <Grid item>
                  <Designthinking className="svg-style" />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    //component="h5"

                    className="benefits-heading"
                  >
                    Possibility to offer price variability
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    // component="h6"
                    className="text-light"
                    style={{ fontSize: "1.13rem" }}
                  >
                    As part of a premium and high-quality performance, we can
                    offer and advise several specification options
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                xs={12}
                lg={4}
                className="benefit-description"
              >
                <Grid item>
                  <TechnikalDawing className="svg-style" />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    //component="h5"

                    className="benefits-heading"
                  >
                    We draw, visualize
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    // component="h6"
                    className="text-light"
                    style={{ fontSize: "1.13rem" }}
                  >
                    We always start work by drawing and coordinating furniture
                    drawings. If necessary, we are ready to develop a design
                    project for 3D-visualization
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                xs={12}
                lg={4}
                className="benefit-description"
              >
                <Grid item>
                  <Heart className="svg-style" />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    //component="h5"

                    className="benefits-heading"
                  >
                    Love for work and for the products we produce
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    // component="h6"
                    className="text-light"
                    style={{ fontSize: "1.13rem" }}
                  >
                    We love our work, new challenges and are proud of what we
                    achive for our customers
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
