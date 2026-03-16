import React from "react";
import Grid from "@material-ui/core/Grid";
import { HeroSection } from "./Home/HeroSection";
import { DedicatedPforSection } from "./Home/DedicatedPforSection";
import { YourStyleSection } from "./Home/YourStyleSection";
import { BenefitsSection } from "./Home/BenefitsSection";
import { GetInTouchSection } from "./Home/GetInTouchSection";
import { ServicesIntroSection } from "./Home/ServicesIntroSection";
import { YorChoiceSection } from "./Home/YorChoiceSection";

export const Home = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <HeroSection />
        </Grid>
        <Grid item xs={12}>
          <DedicatedPforSection />
        </Grid>
        <Grid item xs={12}>
          <YourStyleSection />
        </Grid>
        <Grid item xs={12}>
          <BenefitsSection />
        </Grid>
        <Grid item xs={12}>
          <ServicesIntroSection />
        </Grid>
        <Grid item xs={12}>
          <YorChoiceSection />
        </Grid>
        <Grid item xs={12}>
          <GetInTouchSection />
        </Grid>
      </Grid>
    </>
  );
};
