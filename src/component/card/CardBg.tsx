import '../../style/fonts.css'
import '../../style/typography.css'
import '../../style/color.css'
import React from "react";
import { Title } from "../title/Title.tsx";

type CardBgProps = {
  style?: React.CSSProperties
}

export const CardBg = ({ style }: CardBgProps ) => {
  return (
    <div style={style}>
      <Title style={{
        font: 'var(--text-card)',
        color: 'var(--color-primary-purple)',
        paddingTop: "1.5rem",
        marginLeft: "1.5rem"}}>Dinosaur<br/>
        Stuffed<br/>
        Animals<br/>
        for Kids</Title>
    </div>
  );
};