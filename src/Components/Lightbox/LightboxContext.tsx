// import { type } from "os";
import React from "react";
import { useReducer } from "react";

type Porptypes = {
  children: React.ReactNode;
};

type StateType = {
  isOpen: boolean;
  images: string[];
};
type ContextType = {
  state: LightboxState;
  dispatch: React.Dispatch<LightboxAction>;
};
type Action = {
  type: string;
};
const initialState: LightboxState = {
  isOpen: false,
  images: [],
};

type LightboxAction =
  | { type: "closeLightbox" }
  | { type: "openLightbox"; payload: string[] };

interface LightboxState {
  isOpen: boolean;
  images: string[];
}

const lightboxReducer = (state: LightboxState, action: LightboxAction) => {
  switch (action.type) {
    case "openLightbox": {
      return {
        ...state,
        isOpen: true,
        images: action.payload,
      };
    }
    case "closeLightbox": {
      return {
        ...state,
        images: [],
        isOpen: false,
      };
    }
    default:
      return state;
  }
};

export const LightboxCtx = React.createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export const LightboxContext = (props: Porptypes) => {
  const [state, dispatch] = useReducer(lightboxReducer, initialState);
  return (
    <LightboxCtx.Provider value={{ state, dispatch }}>
      {props.children}
    </LightboxCtx.Provider>
  );
};
