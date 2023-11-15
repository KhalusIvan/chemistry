import {
  ElementBox,
  InfoWeightWrapper,
  InfoWeightStyledText,
} from "./styledComponents";

function InfoWeightText() {
  return (
    <InfoWeightWrapper row={8} column={4}>
      <ElementBox>
        <InfoWeightStyledText>
          Для елементів, які мають стабільних ізотопів, в дужках вказується маса
          ізотопу з найбільшим періодом напіврозпаду.
        </InfoWeightStyledText>
      </ElementBox>
    </InfoWeightWrapper>
  );
}

export default InfoWeightText;
