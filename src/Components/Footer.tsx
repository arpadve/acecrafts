import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Logo from "../logo8.svg";
import CallIcon from "@material-ui/icons/Call";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import EmailIcon from "@material-ui/icons/Email";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    footerContainerGrid: {
      marginTop: "auto",
      paddingTop: "32px",
      backgroundColor: "#393e46",
      //backgroundColor: "#4b4b4b",
      color: "white",
      "& p": {
        color: "tan",
      },
      "& svg": {
        color: "#959595",
      },
      "& a": {
        textDecoration: "none",

        cursor: "pointer",
      },
    },
    footeDevider: {
      backgroundColor: "rgba(193, 189, 189, 0.7)",
      marginBottom: "32px",
      // marginTop: "30px",
      // marginBottom: "30px",
      // [theme.breakpoints.down("md")]: {
      //   height: "1px",
      //   width: "100%",
      // },
    },
    socialLinks: {
      padding: "18px 32px 18px 32px",
    },
    footerHeading: {
      //padding: "18px 32px 18px 32px",
      fontWeight: "bold",
      color: "#959595",
    },
    footerIcon: {
      paddingRight: "8px",
    },
    cleanList: {
      paddingInlineStart: "0",
      listStyleType: "none !important",
      textDecoration: "none",
      padding: "0",

      "& li": {
        paddingBottom: "0.5em",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        "& span": {
          height: "100%",
          verticalAlign: "baseline",
          padding: "0.2em",
        },
        "& hr": {
          backgroundColor: "white",
        },
        "& svg": {
          verticalAlign: "baseline",
          height: "100%",
          // color: "#fa7d09",
          color: "#f47d20",
        },
      },
    },
  })
);

export const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        //justify="center"
        className={classes.footerContainerGrid}
      >
        <Grid item xs={12}>
          <Container>
            <Grid container justify={isMobile ? "center" : "space-between"}>
              <Grid item container xs={12} lg={3}>
                <Grid item container justify="center" xs={12}>
                  <Grid item>
                    <Link to="/">
                      <img alt="logo" src={Logo} className="App-logo" />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link to="/">
                      <Typography
                        align="center"
                        variant="h6"
                        className={classes.footerHeading}
                      >
                        ACECRAFTS
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center" style={{ paddingTop: "8px" }}>
                    Providing carpentry and handyman services enabling you to
                    improve your home
                  </Typography>
                </Grid>
                <Grid
                  item
                  justify="space-around"
                  container
                  className={classes.socialLinks}
                >
                  <Grid item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/AceCrafts-107916920980668"
                    >
                      <FacebookIcon />
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/channel/UCWhydca3E-a-TfVXaUdM50g?view_as=subscriber"
                    >
                      <YouTubeIcon />
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.me/0447367461272"
                    >
                      <WhatsAppIcon />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ display: "flex" }}>
                {!isMobile && (
                  <Divider
                    className={classes.footeDevider}
                    orientation="vertical"
                    flexItem
                  />
                )}
              </Grid>
              <Grid
                item
                container
                direction="column"
                //alignItems="center"
                alignContent="center"
                xs={6}
                lg={3}
                style={{ paddingBottom: "24px" }}
              >
                <Grid item>
                  <Typography variant="h6" className={classes.footerHeading}>
                    Sitemap
                  </Typography>
                </Grid>

                <Grid item>
                  <Link to="/">
                    <Typography>Home</Typography>
                  </Link>
                </Grid>

                <Grid item>
                  <Link to="/services">
                    <Typography>Services</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/portfolio">
                    <Typography>Portfolio</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/contacts">
                    <Typography>Contacts</Typography>
                  </Link>
                </Grid>
                {/* <Grid item>
                  <Link to="/about">
                    <Typography>Privacy policy</Typography>
                  </Link>
                </Grid> */}
              </Grid>
              <Grid item style={{ display: "flex" }}>
                {!isMobile && (
                  <Divider
                    className={classes.footeDevider}
                    orientation="vertical"
                    flexItem
                  />
                )}
              </Grid>
              <Grid
                item
                container
                direction="column"
                //justify="center"
                //alignItems="center"
                alignContent="center"
                xs={6}
                lg={3}
                // style={{ paddingTop: "64px" }}
              >
                <Grid item>
                  <Typography variant="h6" className={classes.footerHeading}>
                    Contact
                  </Typography>
                </Grid>
                <Grid item container>
                  <Grid item className={classes.footerIcon}>
                    <WatchLaterIcon />
                  </Grid>
                  <Grid item>
                    <Typography>Mon-Fri: 9AM-6PM</Typography>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item>
                    <CallIcon className={classes.footerIcon} />
                  </Grid>
                  <Grid item>
                    <Typography>+44 (736) 746-12-72</Typography>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item>
                    <EmailIcon className={classes.footerIcon} />
                  </Grid>
                  <Grid item>
                    <Typography>office@acecrafts.co.uk</Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item container>
                
              </Grid> */}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
