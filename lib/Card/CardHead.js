import FlexBetween from "../styled/FlexBetween";
import { CardHeadTitle } from "./styled";

function CardHead({ size, title, extra }) {
  return (
    <FlexBetween>
      <CardHeadTitle className="head-title" size={size}>
        {title}
      </CardHeadTitle>
      <div className="head-extra">{extra}</div>
    </FlexBetween>
  );
}

export default CardHead;
