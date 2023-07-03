import React from "react";
import { Icon } from "@iconify/react";
const Icons = ({ icon, className, width, rotate, hFlip, vFlip, href }) => {
  return (
    <>
      <Icon
        width={width}
        rotate={rotate}
        hFlip={hFlip}
        icon={icon}
        className={className}
        vFlip={vFlip}
        href={href}
      />
    </>
  );
};

export default Icons;
