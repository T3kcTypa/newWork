import s from "./SizeOption.module.css";

export type SizeOptionProps = {
  size: number;
  isActive?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export const SizeOption = ({ size, isActive = false, onClick, style }: SizeOptionProps) => {
  return (
    <button type="button" className={`${s.box} ${isActive ? s.active : ""}`.trim()} onClick={onClick} style={style}>
      {size} cm
    </button>
  );
};
