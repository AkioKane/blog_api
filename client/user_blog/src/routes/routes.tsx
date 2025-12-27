import App from "./App";
import ErrorPage from "./ErrorPage";
import HomePreview from "./HomePreview";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePreview />
      }
    ]
  }
]

export default routes;