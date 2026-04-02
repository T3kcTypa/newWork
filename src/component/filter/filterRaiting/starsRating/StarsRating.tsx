type StarsRatingProps = {
  value: number;
  max?: number;
};

export const StarsRating = ({ value, max = 5 }: StarsRatingProps) => {
  return (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      {Array.from({ length: max }).map((_, index) => {
        const isFilled = index < value;

        return (
          <span key={index} aria-hidden="true">
            {isFilled ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};