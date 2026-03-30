import { Title } from "../title/Title.tsx";
import React from "react";
import { Button } from "../button/Button.tsx";
import { Icon } from "../icon/Icon.tsx";
import "../../style/color.css"
import "../../style/typography.css"
import "../../style/fonts.css"

type BackgroundSquareProps = {
    style?: React.CSSProperties
};

export const BackgroundSquare = ({ style }: BackgroundSquareProps) => {
  return (
    <div style={style}>
      <Title as='h2' style={{
        color: "var(--color-primary-darkBlue)",
        font: 'var(--text-h1)',
        paddingBottom: '2.3125rem',
        textTransform: 'capitalize'}}>Fluffy friends<br />
        at a great price! </Title>
      <Button>
        <Icon id="secondBag" fill='none'/>
        <Title as='h2' style={{
          font: 'var(--text-button-primary)',
          color: 'var(--color-primary-white)'
          }}>
          Shop Now</Title>
      </Button>
    </div>
  );
};