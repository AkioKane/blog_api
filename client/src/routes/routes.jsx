import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: null,
    children: [
      {
        path: "/",
        element: null
      }
    ]
  }
]

export default routes;