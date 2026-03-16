import React from "react";
import { useContext } from "react";
import { LightboxCtx } from "./LightboxContext";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const LighboxContainer = () => {
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const { state, dispatch } = useContext(LightboxCtx);

  return (
    <div className="modal">
      {state.isOpen && (
        <Lightbox
          wrapperClassName="backdrop"
          mainSrc={state.images[photoIndex]}
          nextSrc={state.images[(photoIndex + 1) % state.images.length]}
          prevSrc={
            state.images[
              (photoIndex + state.images.length - 1) % state.images.length
            ]
          }
          onCloseRequest={() => {
            dispatch({ type: "closeLightbox" });
            setPhotoIndex(0);
          }}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + state.images.length - 1) % state.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % state.images.length)
          }
        />
      )}
    </div>
  );
};
