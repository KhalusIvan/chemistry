import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stage from "@pages/Stage/Stage";
import { CssBaseline } from "@mui/material";
import "./App.css";

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
