import React from "react";
import styled from "styled-components";
import { Modal as SemanticModal } from "semantic-ui-react";
import "semantic-ui-css/components/modal.min.css";
import "semantic-ui-css/components/dimmer.min.css";

import Button from "../styled/Button";
import { SystemClose } from "@osn/icons/opensquare";

const Wrapper = styled.div``;

const StyledModal = styled(SemanticModal)`
  background: var(--fillBgPrimary) !important;
  width: ${(p) => p.width}px !important;
  max-width: ${(p) => p.width}px !important;
  border-radius: 0 !important;
`;

const ContentWrapper = styled.div`
  margin: 0 !important;
  padding: 24px !important;
  position: relative !important;
  width: 100% !important;
`;

const CloseBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;

  svg path {
    fill: var(--textSecondary);
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export default function Modal({
  width = 400,
  open,
  setOpen = () => {},
  children,
  footer,
  onOk = () => {},
  onClose = () => {},
  okText = "OK",
  disableButton = false,
  okButtonProps = {},
  closeBar,
  closeOnClickOutside = true,
}) {
  const closeModal = () => {
    onClose();
    setOpen(false);
  };

  closeBar = closeBar ?? (
    <CloseButton onClick={closeModal}>
      <SystemClose className="[&_path]:fill-textTertiary" />
    </CloseButton>
  );

  footer = footer ?? (
    <Button primary disabled={disableButton} onClick={onOk} {...okButtonProps}>
      {okText}
    </Button>
  );

  return (
    <Wrapper>
      <StyledModal
        width={width}
        open={open}
        onClose={closeModal}
        dimmer
        size="tiny"
        closeOnDimmerClick={closeOnClickOutside}
      >
        <ContentWrapper>
          {closeBar && <CloseBar>{closeBar}</CloseBar>}

          {children}

          {footer && <FooterWrapper>{footer}</FooterWrapper>}
        </ContentWrapper>
      </StyledModal>
    </Wrapper>
  );
}
