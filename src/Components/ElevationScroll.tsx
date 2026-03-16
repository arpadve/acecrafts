import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

interface ElevationProps {
  children: React.ReactElement;
}

function ElevationScroll(props: ElevationProps) {
  const children = props.children;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// setMatch( {...match, value: queryList.matches});
export default ElevationScroll;
