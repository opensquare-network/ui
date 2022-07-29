// import '@osn/common-ui/RichEditor'
// SSR issue because rich-text-editor uses quilljs under the hood

import React from "react";
import styled from "styled-components";
import RichTextEditor from "@osn/rich-text-editor";

import Button from "../styled/Button";

const ButtonsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  > :not(:first-child) {
    margin-left: 16px;
  }
`;

const ErrorMsg = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ee4444;
`;

function RichEditor(
  {
    content,
    setContent,
    onSubmit = () => {},
    showButtons = true,
    showSubmitButton = true,
    submitButtonProps = {},
    // @deprecated use `submitButtonText` instead
    submitButtonName = "Post",
    submitButtonText = submitButtonName,
    submitting = false,
    disabled = false,
    errorMsg = "",
    loadSuggestions = () => [],
    identifier,
  },
  ref
) {
  return (
    <div className="rich-editor" ref={ref}>
      <RichTextEditor
        disabled={disabled}
        value={content}
        onChange={setContent}
        loadSuggestions={loadSuggestions}
        identifier={identifier}
      />

      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

      {showButtons && (
        <ButtonsWrapper>
          {showSubmitButton && (
            <Button
              className="button-submit"
              {...submitButtonProps}
              primary
              isLoading={submitting}
              disabled={disabled}
              onClick={() => {
                onSubmit();
              }}
            >
              {submitButtonText || submitButtonName}
            </Button>
          )}
        </ButtonsWrapper>
      )}
    </div>
  );
}

export default React.forwardRef(RichEditor);
