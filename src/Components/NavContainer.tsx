import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ElevationScroll from "./ElevationScroll";
import { Link } from "react-router-dom";
import Logo from "../logo8.svg";
import { NavItems } from "./NavItems";
import { withStyles, useTheme, WithStyles } from "@material-ui/core/styles";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";
import classes from "*.module.css";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      zIndex: 202!,
      boxSizing: "border-box",
      // backgroundColor: "#191919",
      borderBottom: "1px solid #444",
      backgroundColor: "#121212",
    },
    root: {
      flexGrow: 1,
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);
const useStyles2 = (theme: Theme) =>
  createStyles({
    appbar: {
      zIndex: 202!,
      boxSizing: "border-box",
      backgroundColor: "#141518 !important",
      // paddingLeft: theme.spacing(3),
      // paddingRight: theme.spacing(3),
      // [theme.breakpoints.up("lg")]: {
      //   maxWidth: theme.breakpoints.values.lg,
      // },
    },
    root: {
      marginLeft: "auto",
      width: "100%",
      marginRight: "auto",
      boxSizing: "border-box",
      // justifyContent:'',
      [theme.breakpoints.up("lg")]: {
        maxWidth: theme.breakpoints.values.lg,
      },

      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    },
  });

//const StyledToolBAr = withStyles(() => useStyles(useTheme()))(Toolbar);
export const NavContainer = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar} position="sticky">
          <Container>
            <Toolbar disableGutters>
              <div className="text-link">
                <Link className="text-link" to="/">
                  <img alt="logo" src={Logo} className="App-logo" />
                  <span>ACECRAFTS</span>
                </Link>
              </div>
              <NavItems
                setMenuOpen={handleMenuToggle}
                openMenu={mobileOpen}
              ></NavItems>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};
