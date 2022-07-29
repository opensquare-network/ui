import { useState } from "react";
import Modal from "../../lib/Modal";
import Button from "../../lib/styled/Button";

export default {
  title: "Modal",
  component: Modal,
};

export const primary = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal open={open} setOpen={setOpen} onOk={closeModal}>
        <h3>Hello World</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
      </Modal>
    </>
  );
};
export const okText = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal open={open} setOpen={setOpen} onOk={closeModal} okText="Close">
        <h3>Hello World</h3>
        <p>OK text now is `Close`</p>
      </Modal>
    </>
  );
};
export const onOk = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const onOk = () => {
    alert("just press OK");
    closeModal();
  };

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal open={open} setOpen={setOpen} onOk={onOk}>
        <h3>Hello World</h3>
        <p>Press OK button will get an alert</p>
      </Modal>
    </>
  );
};
export const footerButtons = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      closeModal();
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        open={open}
        setOpen={setOpen}
        footer={
          <>
            <Button onClick={closeModal} style={{ marginRight: "14px" }}>
              Close
            </Button>
            <Button primary onClick={handleSubmit} isLoading={isLoading}>
              Submit
            </Button>
          </>
        }
      >
        <h3>Hello World</h3>
        <p>Submit will close modal in 2s</p>
      </Modal>
    </>
  );
};
export const noCloseBar = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal open={open} setOpen={setOpen} onOk={closeModal} closeBar={false}>
        <h3>Hello World</h3>
        <p>No close bar</p>
      </Modal>
    </>
  );
};
export const disableCloseOnClickOutside = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        open={open}
        setOpen={setOpen}
        onOk={closeModal}
        closeOnClickOutside={false}
      >
        <h3>Hello World</h3>
        <p>Disable close on click outside</p>
      </Modal>
    </>
  );
};
export const noFooter = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal open={open} setOpen={setOpen} onOk={closeModal} footer={false}>
        <h3>Hello World</h3>
        <p>No footer</p>
      </Modal>
    </>
  );
};
