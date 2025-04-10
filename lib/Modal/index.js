import React from "react";
import styled from "styled-components";

import Button from "../styled/Button";
import { SystemClose } from "@osn/icons/opensquare";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../utils";

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
  className = "",
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
    <Dialog.Root open={open} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn("z-50", "fixed inset-0", "bg-black/85")}
        />

        <Dialog.Content
          className={cn(
            "z-[51]",
            "bg-fillBgPrimary",
            "w-[400px] max-w-full",
            "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "p-6",
            className,
          )}
          onPointerDownOutside={(event) => {
            if (!closeOnClickOutside) {
              event.preventDefault();
            }
          }}
        >
          {closeBar && <CloseBar>{closeBar}</CloseBar>}

          {children}

          {footer && <FooterWrapper>{footer}</FooterWrapper>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
