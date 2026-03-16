import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export const OtherServicesSection = () => {
  return (
    <>
      <Grid
        container
        // direction="column"
        // alignItems="center"
        className=" section-end"
      >
        <Grid style={{ padding: "18px 0px 18px 0px" }} item xs={12}>
          <Container>
            <Grid
              className="service-description"
              container
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6" className="section-heading">
                  OTHER SERVICES
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
                  The services listed above are just a guide so you can have an
                  idea about the direction and type of work we do. In case you
                  have a project in mind and the service is not mentioned in any
                  of our listings do not hesitate to contact us for free
                  consultation.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
