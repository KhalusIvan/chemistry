/* eslint-disable react/prop-types */
import {
  ElementBox,
  LanthanideActinideSubText,
  LanthanideActinideText,
  LanthanideActinideWrapper,
} from "./styledComponents";

function LanthanideActinide({ settings }) {
  const showId = !settings || settings?.showId === "answer";

  return (
    <LanthanideActinideWrapper row={6} column={3}>
      <ElementBox element_color={"#CCEEFF"}>
        <LanthanideActinideSubText>
          {showId ? "57 - 71" : ""}
        </LanthanideActinideSubText>
        <LanthanideActinideSubText>
          {showId ? "89 - 103" : ""}
        </LanthanideActinideSubText>
        <LanthanideActinideText />
        <LanthanideActinideText>6</LanthanideActinideText>
        <LanthanideActinideText>7</LanthanideActinideText>
      </ElementBox>
    </LanthanideActinideWrapper>
  );
}

export default LanthanideActinide;
