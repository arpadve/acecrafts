import React, { ReactNode } from "react";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import {
  animated,
  config,
  useTrail,
  interpolate,
  useSpring,
} from "react-spring";

interface HoverProps {
  children: ReactNode;
  className?: string;
}

function HoverAnimationTrigger({ children, className }: HoverProps) {
  const [props, setspring] = useSpring(() => ({
    x: 1,
    config: config.slow,
  }));
  const [visibility, setVisibility] = useSpring(() => ({
    opacity: 0,

    config: config.slow,
  }));
  return (
    <>
      <animated.div
        onMouseEnter={() => {
          setspring({ x: 1.1 });
          setVisibility({ opacity: 1 });
        }}
        onMouseLeave={() => {
          setspring({ x: 1 });
          setVisibility({ opacity: 0 });
        }}
        className="album-overlay"
        style={{
          overflow: "hidden",
          opacity: visibility.opacity.interpolate((o) => o),
        }}
      >
        <FullscreenIcon
          fontSize="large"
          style={{ zIndex: 200, filter: "drop-shadow(1px 1px 1px #000)" }}
        />
      </animated.div>
      <animated.div
        className={className}
        style={{
          maxWidth: "100%",
          overflow: "hidden",
          transform: props.x.interpolate((x) => `scale(${x})`),
        }}
      >
        {children}
      </animated.div>
    </>
  );
}

export default HoverAnimationTrigger;
