import { Box } from "@mui/material";
import { styled } from "styled-components";

export const HeaderWrapper = styled(Box)`
  flex: 0 1 auto;
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 100vw;
  min-height: 73px;
  border-bottom: 1px solid #dedede;
  z-index: 1100;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

export const ContentWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  overflow: auto;
  padding: 8px;
`;
