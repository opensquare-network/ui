import styled from "styled-components";
import IdentityUser from "../../lib/Identity/IdentityUser";
import LinkIdentityUser from "../../lib/Identity/LinkIdentityUser";
import MentionIdentityUser from "../../lib/Identity/MentionIdentityUser";

const maintenance = {
  network: "kusama",
  address: "HEvq8apZLH77qMhjHkrm8eQdvxSbkw8d8SKkHD9SDMGPd2J",
};

const osn = {
  network: "statemine",
  address: "ESgz7GLVW7BL5DhRgpVnxSXVwaKt4ytWcrf52TY1GQD1cEb",
};

const folk = {
  network: "kusama",
  address: "5GMuqeMAbNZGVq2bsf2pis7vFMpcP9cMJiRo7DEr5nNEfMhW",
};

export default {
  title: "Identity",
  component: IdentityUser,
};

export const primary = () => (
  <>
    <IdentityUser network={maintenance.network} address={maintenance.address} />
    <br />

    <IdentityUser network={osn.network} address={osn.address} />
    <br />

    <IdentityUser network={folk.network} address={folk.address} />
  </>
);

const EllipsisWrapper = styled.div`
  width: 150px;
`;
export const ellipsisIdentityName = () => {
  return (
    <>
      <EllipsisWrapper>
        <IdentityUser
          network={maintenance.network}
          address={maintenance.address}
        />
      </EllipsisWrapper>

      <EllipsisWrapper>
        <IdentityUser network={osn.network} address={osn.address} />
      </EllipsisWrapper>

      <EllipsisWrapper>
        <IdentityUser network={folk.network} address={folk.address} />
      </EllipsisWrapper>
    </>
  );
};

const HoverWrapper = styled.div`
  margin: 150px 0 0 100px;
`;
export const hoverIdentityName = () => {
  return (
    <HoverWrapper>
      <EllipsisWrapper>
        <IdentityUser
          network={maintenance.network}
          address={maintenance.address}
          hoverAddressForDetail
        />
      </EllipsisWrapper>
      <br />
      <IdentityUser
        network={osn.network}
        address={osn.address}
        hoverAddressForDetail
      />
    </HoverWrapper>
  );
};

export const linkIdentityUser = () => {
  return (
    <HoverWrapper>
      <EllipsisWrapper>
        <LinkIdentityUser
          explore
          network={maintenance.network}
          address={maintenance.address}
          hoverAddressForDetail
        />
      </EllipsisWrapper>
      <EllipsisWrapper>
        <LinkIdentityUser
          explore
          network={folk.network}
          address={folk.address}
          hoverAddressForDetail
        />
      </EllipsisWrapper>
      <EllipsisWrapper>
        <LinkIdentityUser
          explore
          network={osn.network}
          address={osn.address}
          hoverAddressForDetail
        />
      </EllipsisWrapper>
    </HoverWrapper>
  );
};

export const mentionIdentityUser = () => {
  return (
    <>
      <MentionIdentityUser
        explore
        network={maintenance.network}
        address={maintenance.address}
      />

      <EllipsisWrapper>
        <MentionIdentityUser
          explore
          network={maintenance.network}
          address={maintenance.address}
        />
      </EllipsisWrapper>
    </>
  );
};
