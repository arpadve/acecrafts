import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Services } from "./Components/Services";
import { Home } from "./Components/Home";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";
import { NavContainer } from "./Components/NavContainer";
import { Footer } from "./Components/Footer";
import { LightboxProvider } from "./Components/Lightbox/LightboxProvider";
import { useEffect } from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";

// const Navlinks = {
//   home:{
//     text: "Home",
//   }
// };
let THEME = createMuiTheme({
  typography: {
    fontFamily: `"Roboto Condensed", "Roboto", "Helvetica", "Arial", sans-serif`,
    // fontSize: 14,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
    // body1: {
    //   fontSize: "1.6rem",
    // },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      lineHeight: 1.2,
    },
  },
});

THEME = responsiveFontSizes(THEME);

function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // if not a hash link scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 300);
    }
  }, [pathname]);
  return (
    <LightboxProvider>
      <MuiThemeProvider theme={THEME}>
        <NavContainer />
        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </MuiThemeProvider>
    </LightboxProvider>
  );
}

export default App;
