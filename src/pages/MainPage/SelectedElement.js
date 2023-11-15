/* eslint-disable react/prop-types */
import SelectedElementCard from "@components/SelectedElement/SelectedElementCard/SelectedElementCard";
import SelectedElementInfo from "@components/SelectedElement/SelectedElementInfo/SelectedElementInfo";
import SelectedElementModel from "@components/SelectedElement/SelectedElementModel/SelectedElementModel";
import { useState } from "react";
import SelectedElementModelController from "@components/SelectedElement/SelectedElementModelController/SelectedElementModelController";

const defaultAnimationState = {
  speed: "1x",
  state: "play",
  volume: "2d",
};

const initializeAnimationState = () => {
  const storage = localStorage.getItem("animationState");
  if (!storage) return defaultAnimationState;
  const state = JSON.parse(storage);
  if (typeof state !== "object") return defaultAnimationState;
  if (
    (state.speed !== "1x" && state.speed !== "2x") ||
    (state.state !== "play" && state.state !== "pause") ||
    (state.volume !== "2d" && state.volume !== "3d")
  )
    return defaultAnimationState;
  return state;
};

function SelectedElement({ selectedElement }) {
  const [animationState, setAnimationState] = useState(
    initializeAnimationState(),
  );

  const changeAnimationState = (value) => {
    const newState = { ...animationState, ...value };
    localStorage.setItem("animationState", JSON.stringify(newState));
    setAnimationState(newState);
  };

  return (
    <>
      <SelectedElementCard selectedElement={selectedElement} />
      <SelectedElementInfo selectedElement={selectedElement} />
      <SelectedElementModelController
        animationState={animationState}
        changeAnimationState={changeAnimationState}
      />
      <SelectedElementModel
        selectedElement={selectedElement}
        animationState={animationState}
      />
    </>
  );
}

export default SelectedElement;
