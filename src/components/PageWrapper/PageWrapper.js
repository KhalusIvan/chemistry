/* eslint-disable react/prop-types */
import Header from "@components/Header/Header";
import { ContentWrapper } from "./styledComponents";

function PageWrapper({ children }) {
  return (
    <>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}

export default PageWrapper;
