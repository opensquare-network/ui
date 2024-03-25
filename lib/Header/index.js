import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  LogoSymbolOpensquareColor,
  LogoTypeOpensquare,
  SystemClose,
  SystemMenu,
} from "@osn/icons/opensquare";

import Flex from "../styled/Flex";
import { MOBILE_SIZE } from "@osn/constants";
import Container from "../styled/Container";
import { cn } from "../utils";
import HeaderSwitchThemeButton from "./switchThemeButton";
import Button from "../styled/Button";
import { useScreenSize } from "../hooks";

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

const defaultLogoRender = (logo) => {
  return logo;
};

export default function Header({
  children,
  logoRender = defaultLogoRender,
  prefix,
  links = [],
  connectButton,
  className = "",
}) {
  const [menuVisible, setMenuVisible] = useState(false);

  const { sm } = useScreenSize();
  useEffect(() => setMenuVisible(false), [sm]);

  return (
    <Wrapper className={className}>
      <ContentWrapper>
        <Flex className="w-full justify-between">
          <Flex>
            {prefix && (
              <>
                {prefix}
                <hr className="h-4 mx-4 border-r" />
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

          {/* mobile menu button */}
          <div className="sm:hidden">
            <Button
              className={cn(
                "!px-2 !border-strokeActionDefault hover:!border-strokeActionActive",
                "[&_path]:fill-textSecondary",
              )}
              onClick={() => {
                setMenuVisible(!menuVisible);
              }}
            >
              {menuVisible ? <SystemClose /> : <SystemMenu />}
            </Button>
          </div>

          <Flex
            className={cn(
              "max-sm:!hidden",
              menuVisible && "max-sm:!block",
              "max-sm:w-full max-sm:py-6 max-sm:px-5",
              "bg-fillBgPrimary",
              // mobile floating
              "max-sm:absolute max-sm:left-0 max-sm:right-0 max-sm:top-[62px]",
            )}
          >
            {children && <div className="mr-8 max-sm:mr-0">{children}</div>}

            {!!links.length && (
              <div
                className={cn(
                  "flex items-center gap-x-8 mr-8",
                  "max-sm:mr-0",
                  "max-sm:flex-col max-sm:gap-y-4",
                )}
              >
                {links.map((link, idx) => (
                  <LinkItem key={idx} className={link.className}>
                    {link.content}
                  </LinkItem>
                ))}
              </div>
            )}

            <div
              className={cn(
                "flex items-center gap-4",
                "max-sm:flex-col max-sm:mt-4",
              )}
            >
              {connectButton}
              <div className="max-sm:w-full">
                <HeaderSwitchThemeButton />
              </div>
            </div>
          </Flex>
        </Flex>
      </ContentWrapper>

      {/* mobile menu backdrop */}
      {menuVisible && (
        <div
          className="-z-10 fixed inset-0 top-[62px] bg-black/10"
          onClick={() => {
            setMenuVisible(false);
          }}
        />
      )}
    </Wrapper>
  );
}

function LinkItem({ children, className = "" }) {
  return (
    <div
      role="link"
      className={cn(
        "text16Semibold text-textSecondary",
        "cursor-pointer",
        "max-sm:py-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
