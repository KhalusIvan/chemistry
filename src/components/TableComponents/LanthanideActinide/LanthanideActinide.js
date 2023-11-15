import {
  ElementBox,
  LanthanideActinideSubText,
  LanthanideActinideText,
  LanthanideActinideWrapper,
} from "./styledComponents";

function LanthanideActinide() {
  return (
    <LanthanideActinideWrapper row={6} column={3}>
      <ElementBox element_color={"#CCEEFF"}>
        <LanthanideActinideSubText>57-71</LanthanideActinideSubText>
        <LanthanideActinideSubText>89-103</LanthanideActinideSubText>
        <LanthanideActinideText />
        <LanthanideActinideText>6</LanthanideActinideText>
        <LanthanideActinideText>7</LanthanideActinideText>
      </ElementBox>
    </LanthanideActinideWrapper>
  );
}

export default LanthanideActinide;
