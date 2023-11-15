/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { ModelWrapper } from "./styledComponents";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

function SelectedElementModel({ selectedElement, animationState }) {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <ModelWrapper>
          <Canvas key={selectedElement.id}>
            <OrbitControls />

            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={1} />

            <Model
              electrons={selectedElement.electrons}
              animationState={animationState}
            />
          </Canvas>
        </ModelWrapper>
      </Grid>
    </Grid>
  );
}

export default SelectedElementModel;
