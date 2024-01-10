import React from "react";
import styled from "styled-components";
import {
  LogoSymbolOpensquareColor,
  LogoTypeOpensquare,
} from "@osn/icons/opensquare";

import Flex from "../styled/Flex";
import { MOBILE_SIZE } from "@osn/constants";
import Container from "../styled/Container";
import { cn } from "../utils";

const Wrapper = styled.header`
  position: relative;
  flex: 0 0 auto;
  background-color: var(--fillBgPrimary);
  border-bottom: solid 1px var(--strokeActionDisable);
`;

const ContentWrapper = styled(Container)`
  min-height: 80px;
  /* padding: 20px 32px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: ${MOBILE_SIZE}px) {
    min-height: 62px;
    /* padding: 15px 20px; */
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 16px;
  margin: 0 16px;
  background-color: var(--fillBgBrandDisable);
`;

const defaultLogoRender = (logo) => {
  return logo;
};

export default function Header({
  children,
  logoRender = defaultLogoRender,
  prefix,
}) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Flex className="w-full justify-between">
          <Flex>
            {prefix && (
              <>
                {prefix}
                <Divider />
              </>
            )}
            {logoRender(
              <Flex className="gap-x-2.5">
                <LogoSymbolOpensquareColor className="w-9 h-[26px]" />
                <LogoTypeOpensquare
                  className={cn(
                    "mt-[3px] [&_path]:fill-textPrimary",
                    "max-sm:hidden",
                  )}
                />
              </Flex>,
            )}
          </Flex>

          {children}
        </Flex>
      </ContentWrapper>
    </Wrapper>
  );
}
