import React from "react";
import styled from "styled-components";
import { Modal as SemanticModal } from "semantic-ui-react";

import Button from "../styled/Button";
import CloseIcon from "../Icon/Close";

const Wrapper = styled.div``;

const StyledModal = styled(SemanticModal)`
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

  > svg path {
    fill: #9da9bb;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
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
  closeBar = true,
  closeOnClickOutside = true,
}) {
  const closeModal = () => {
    onClose();
    setOpen(false);
  };

  const closeButton = (
    <CloseButton onClick={closeModal}>
      <CloseIcon />
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
          {closeBar && <CloseBar>{closeButton}</CloseBar>}

          {children}

          {footer && <FooterWrapper>{footer}</FooterWrapper>}
        </ContentWrapper>
      </StyledModal>
    </Wrapper>
  );
}
