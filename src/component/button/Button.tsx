import React from "react";
import s from "./button.module.css";

type ButtonProps = {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export const Button = ({ className = "", style, children } : ButtonProps) => {
  const { backgroundColor, color, ...restStyle } = style ?? {};
  const accentColor = backgroundColor ?? "var(--color-primary-red)";
  const textColor = color ?? "var(--color-primary-white)";
  const buttonStyle = {
    "--button-accent": accentColor,
    "--button-text": textColor,
    ...restStyle,
  } as React.CSSProperties;

  return (
    <button style={buttonStyle} className={`${s.buttonStyle} ${className}`.trim()}>
      {children}
    </button>
  );
};
