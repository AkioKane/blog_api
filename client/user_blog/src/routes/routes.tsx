import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]

export default routes;