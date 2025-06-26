import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Scores from "./routes/Scores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "scores",
        element: <Scores />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
