import React from "react";
import styled from "styled-components";

import ExternalLink from "../ExternalLink";
import footerItems from "./items";
import {
  LinkTwitter,
  LinkGithub,
  LinkTelegram,
  LinkSubsocial,
  LinkEmail,
  LogoSymbolOpensquare,
} from "@osn/icons/opensquare";
import { MainContainer } from "../styled/Container";

const SvgMap = new Map([
  ["github.svg", LinkGithub],
  ["telegram.svg", LinkTelegram],
  ["twitter.svg", LinkTwitter],
  ["subsocial.svg", LinkSubsocial],
  ["mail.svg", LinkEmail],
]);

const ContentWrapper = styled(MainContainer)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 1144px) {
    padding: 80px 32px;
  }
  @media screen and (max-width: 900px) {
    padding: 40px 20px 20px;
    flex-direction: column;
    > :not(:first-child) {
      margin-top: 40px;
    }
  }
`;

const LeftWrapper = styled.div`
  display: grid;
  row-gap: 32px;
  column-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const List = styled.div`
  width: 160px;
`;

const Label = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
  color: var(--textPrimaryContrast);
`;

const ItemsWrapper = styled.div`
  > :not(:first-child) > * {
    margin-top: 16px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  color: var(--textSecondaryContrast);
  > svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  &:hover {
    color: var(--textPrimaryContrast);
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 900px) {
    align-items: flex-start;
    > img {
      margin-bottom: 0;
    }
  }
`;

const BottomWrapper = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: var(--textTertiaryContrast);
  padding-bottom: 20px;
  text-align: center;
`;

export default function Footer({ github }) {
  return (
    <div className="bg-fillBgPrimaryContrast border-t border-strokeBorderDefault">
      <ContentWrapper>
        <LeftWrapper>
          {footerItems.map((item, index) => (
            <List key={index}>
              <Label>{item.label}</Label>
              <ItemsWrapper>
                {item.items.map((item, index) => (
                  <ExternalLink
                    href={item.key === "github" && github ? github : item.link}
                    key={index}
                  >
                    <Item>
                      {item.icon &&
                        (() => {
                          const SvgTag = SvgMap.get(item.icon);
                          return (
                            <SvgTag className="[&_path]:fill-textTertiary" />
                          );
                        })()}
                      {item.name}
                    </Item>
                  </ExternalLink>
                ))}
              </ItemsWrapper>
            </List>
          ))}
        </LeftWrapper>
        <RightWrapper>
          <LogoSymbolOpensquare className="[&_path]:fill-textQuaternaryContrast" />
        </RightWrapper>
      </ContentWrapper>
      <BottomWrapper>
        {`© ${new Date().getFullYear()} OpenSquare. All Rights Reserved.`}
      </BottomWrapper>
    </div>
  );
}
