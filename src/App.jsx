import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import ErrorElement from "./routes/ErrorElement";
import NotFoundPage from "./routes/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
