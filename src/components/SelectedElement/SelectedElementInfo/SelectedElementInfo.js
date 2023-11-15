/* eslint-disable react/prop-types */
import { Box, Grid } from "@mui/material";

const elementInfo = [
  { title: "Назва", value: (element) => element.name },
  { title: "Тип", value: (element) => element.type?.name || "Немає" },
  { title: "Вага", value: (element) => `${element.weight} u` },
  {
    title: "Енергетичні рівні",
    value: (element) => element.electrons.join(" "),
  },
];

function SelectedElementInfo({ selectedElement }) {
  return (
    <Box my={2} mx={2} p={1}>
      <Grid container spacing={1}>
        {elementInfo.map((info, index) => {
          return (
            <Grid item xs={12} key={info.title}>
              <Box
                py={1}
                px={2}
                style={{
                  borderRadius: 8,
                  backgroundColor: index % 2 === 0 ? "#fff4d1" : "#fae1ed",
                }}
              >
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  wrap="nowrap"
                >
                  <Grid item>{info.title}</Grid>
                  <Grid item>{info.value(selectedElement)}</Grid>
                </Grid>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default SelectedElementInfo;
