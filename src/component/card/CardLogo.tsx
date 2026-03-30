import React from "react";

type CardLogoProps = {
  src: string;
  style?: React.CSSProperties
}

export const CardLogo = ({ src, style } : CardLogoProps) => {
  return (
    <div >
      <a href="#">
        <img
          src={src}
          style={style}
          alt="Dino"/>
      </a>
    </div>
  );
};