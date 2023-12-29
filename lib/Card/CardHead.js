import FlexBetween from "../styled/FlexBetween";
import { cn } from "../utils";

function CardHead({ size, title, extra }) {
  return (
    <FlexBetween>
      <div
        className={cn(
          "head-title",
          "text16Semibold",
          size === "small" && "text14Medium",
        )}
      >
        {title}
      </div>
      <div className="head-extra">{extra}</div>
    </FlexBetween>
  );
}

export default CardHead;
