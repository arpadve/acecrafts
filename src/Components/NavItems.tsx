import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

export interface StyleProps {
  mobileOpen: boolean;
  transition: string;
}
// const styles = {
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// };

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        display: "inline-flex",
      },
    },
    activeLink: {
      color: "#fa7d09",
      // color: "#bfa766",
    },
    navLinks: {
      display: "flex",

      justifyContent: "flex-end",
      // marginLeft: 'auto',
      // marginLeft: 'auto',

      marginRight: "-8px",
      padding: 0,
      marginBlockStart: 0,
      marginBlockEnd: 0,
      marginInlineStart: 0,
      "& li": {
        listStyleType: "none !important",

        padding: "1rem 0.5rem",

        "& a": {
          fontSize: "1.2em",
          textDecoration: "none",
          fontWeight: "500",
        },
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
        // flex: 1,
        position: "fixed",
        height: "100%",
        top: 0,
        right: 0,
        paddingTop: "3rem",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        backgroundColor: "white",
        boxShadow: "16px 16px 16px black",
        // transition: 'visibility 3s ease-in-out',
        // transform: `${props.transition}`,
        // transition: "3000ms ease all",
        // transition: 'transform 3s ease-in-out',
      },
    },
    drawerOpen: {
      backgroundColor: "#141518",
      transform: "translateX(0)",
      transition: "0.3s ease all",
    },
    drawerClose: {
      transform: "translateX(100%)",
      transition: "0.3s ease all",
    },

    mobileDrawer: (props) => ({
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        flexFlow: "column wrap",
        // transition: 'visibility 3s ease-in-out',

        // transition: 'transform 3s ease-in-out',
      },
    }),
  })
);

export interface NavItemProps {
  openMenu: boolean;
  setMenuOpen: () => void;
}
export const NavItems = (navProps: NavItemProps) => {
  // const theme = useTheme();
  const classes = useStyles({
    mobileOpen: navProps.openMenu,
    transition: navProps.openMenu ? "translateX(0)" : "translateX(100%)",
  });

  const isMobile = useMediaQuery("(max-width:600px)");

  // style={true ? toggle : {} }
  return (
    <>
      {/* <div className="text-link">{isMobile  ? "ismob": "notmob"}</div>
      <div className="text-link">{navProps.openMenu ? "isop": "notop"}</div> */}
      <ul
        className={`${classes.navLinks}
       ${isMobile ? classes.mobileDrawer : ""}
       ${
         isMobile
           ? navProps.openMenu
             ? classes.drawerOpen
             : classes.drawerClose
           : ""
       }
       `}
      >
        <li>
          <NavLink
            className="inaktiv-link"
            exact
            activeClassName={classes.activeLink}
            onClick={navProps.setMenuOpen}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className="inaktiv-link"
            exact
            activeClassName={classes.activeLink}
            onClick={navProps.setMenuOpen}
            to="/about"
          >
            About
          </NavLink>
        </li> */}
        <li>
          <NavLink
            className="inaktiv-link"
            exact
            activeClassName={classes.activeLink}
            onClick={navProps.setMenuOpen}
            to="/services"
          >
            SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink
            className="inaktiv-link"
            exact
            activeClassName={classes.activeLink}
            onClick={navProps.setMenuOpen}
            to="/portfolio"
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink
            className="inaktiv-link"
            exact
            activeClassName={classes.activeLink}
            onClick={navProps.setMenuOpen}
            to="/contact"
          >
            CONTACTS
          </NavLink>
        </li>
        <li>
          <a
            color="inherit"
            target="_blank"
            href="https://wa.me/0447367461272"
            className="inaktiv-link"
            onClick={navProps.setMenuOpen}
          >
            <WhatsAppIcon />
          </a>
          {/* <NavLink
            className="inaktiv-link"
            exact
            activeClassName={classes.activeLink}
            onClick={navProps.setMenuOpen}
            to="/contact"
          >
            
          </NavLink> */}
        </li>
        <li>
          <a
            href="tel:07367461272"
            className="inaktiv-link"
            onClick={navProps.setMenuOpen}
          >
            <PhoneAndroidIcon />
          </a>
        </li>
      </ul>
      {isMobile ? (
        <IconButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          onClick={navProps.setMenuOpen}
          className={classes.menuButton}
        >
          {navProps.openMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      ) : null}
    </>
  );
};
