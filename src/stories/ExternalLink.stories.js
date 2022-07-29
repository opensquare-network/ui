import styled from "styled-components";
import ExternalLink from "../../lib/ExternalLink";

export default {
  title: "ExternalLink",
  component: ExternalLink,
};

const LinkWrapper = styled.span`
  color: #0070f3;
`;

export const primary = () => (
  <span>
    Open{" "}
    <LinkWrapper>
      <ExternalLink href="https://www.opensquare.network">
        OpenSquare
      </ExternalLink>
    </LinkWrapper>{" "}
    in new tab.
  </span>
);
