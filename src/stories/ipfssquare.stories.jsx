import IpfsSquare from "../../lib/IpfsSquare";

export default {
  title: "IpfsSquare",
  component: IpfsSquare,
};

export const primary = () => (
  <div>
    <div>
      with link:
      <IpfsSquare href="https://voting.opensquare.io/api/ipfs/files/QmWPKyAZVDPbsZLtdgszE9zuEAESgebCMdvpKsyhEBfiWY" />
    </div>
    <div>
      no link:
      <IpfsSquare />
    </div>
  </div>
);
