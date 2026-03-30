import React from "react";

type IconProps = {
  id: string;
  width?: string;
  height?: string;
  fill?: string;
  color?: string;
  style?: React.CSSProperties;
};

export const Icon = ({
                       id,
                       width = "24",
                       height = "24",
                       color = "#FFFFFF",
                       fill,
                       style,
                     }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      style={{ color, ...style }}
      aria-hidden="true"
    >
      <use href={`/sprite-svg.svg#${id}`} />
    </svg>
  );
};