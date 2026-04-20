export type SizeOptionProps = {
  size: number;
};

export const SizeOption = ({ size }: SizeOptionProps) => {
  return <div>{size} cm</div>;
};
