import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stage from "@pages/Stage";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Stage />,
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
