import React from "react";
import { useContext } from "react";
import { LightboxContext, LightboxCtx } from "./LightboxContext";
import { LighboxContainer } from "./LighboxContainer";

type Porptypes = {
  children: React.ReactNode;
};

export const LightboxProvider = ({ children }: Porptypes) => {
  return (
    <>
      <LightboxContext>
        <LighboxContainer />
        {children}
      </LightboxContext>
    </>
  );
};
