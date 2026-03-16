import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { CarpentrySection } from "./Services/CarpentrySection";
import { PaintingSection } from "./Services/PaintingSection";
import { OutdoorsSection } from "./Services/OutdoorsSection";
import { HangingSection } from "./Services/HangingSection";
import { DrywallSection } from "./Services/DrywallSection";
import { OtherServicesSection } from "./Services/OtherServicesSection";

export const Services = () => {
  return (
    <>
      <Grid className="acbanner-container" justify="flex-start" container>
        <Grid style={{}} direction="column" container item>
          {/* <Grid
            item
            xs={12}
            style={
              {
                position: "absolute",
                top: "0",
                left: "0",
              }
            }
          >
            <img src={acbanner2} style={{ position: "absolute" }} />
          </Grid> */}
          <Grid item xs={12} className="banner-text">
            <Container>
              <Grid justify="center" container>
                <Grid justify="center" container>
                  <Grid item xs={12}>
                    <Typography
                      variant="h3"
                      component="h3"
                      style={{ textAlign: "center" }}
                    >
                      Services we offer
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Divider
                      className="divider-break"
                      orientation="horizontal"
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12} lg={8}>
                  <Typography
                    variant="h5"
                    component="h5"
                    style={{ textAlign: "center" }}
                    gutterBottom
                    className="text-light"
                  >
                    AceCrafts offers a wide range of home improvement and
                    maintenance services.We take pride in delivering quality
                    services that meet the <br /> expectations of our clients.
                    Any project on your mind?
                    <br />
                    Consult us!
                    <br />
                    <br />
                  </Typography>
                  {/* <p
                  style={{
                    fontSize: "24px",
                    lineHeight: "1.4",
                    fontWeight: "normal",
                    textAlign: "center",
                  }}
                ></p> */}
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <CarpentrySection />
        </Grid>
        <Grid item xs={12}>
          <PaintingSection />
        </Grid>
        <Grid item xs={12}>
          <OutdoorsSection />
        </Grid>
        <Grid item xs={12}>
          <HangingSection />
        </Grid>
        <Grid item xs={12}>
          <DrywallSection />
        </Grid>
        <Grid item xs={12}>
          <OtherServicesSection />
        </Grid>
      </Grid>
    </>
  );
};
