import React from "react";
import { useWindowSize } from "@osn/common";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  svg {
    background: white;
    box-shadow: 0 4px 31px rgba(26, 33, 44, 0.04),
      0 0.751293px 3.88168px rgba(26, 33, 44, 0.03);
    margin-bottom: 15px;
  }
`;

const MyLoader = (props) => {
  const windowSize = useWindowSize();
  const loaderWidth = windowSize.width > 1144 ? 1080 : windowSize.width - 64;
  if (isNaN(loaderWidth)) {
    return null;
  }
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={169}
      viewBox={`0 0 ${loaderWidth} 169`}
      backgroundColor="#f3f3f3"
      foregroundColor="#EFF3F9"
      {...props}
    >
      <rect x="48" y="20" rx="3" ry="3" width={loaderWidth - 90} height="24" />
      <rect x="48" y="60" rx="3" ry="3" width="240" height="24" />
      <rect x="48" y="112" rx="3" ry="3" width={loaderWidth - 90} height="1" />
      <rect x="48" y="140" rx="3" ry="3" width="240" height="24" />
    </ContentLoader>
  );
};

const DetailLoader = () => {
  return (
    <LoaderWrapper>
      <MyLoader />
    </LoaderWrapper>
  );
};

export default DetailLoader;
