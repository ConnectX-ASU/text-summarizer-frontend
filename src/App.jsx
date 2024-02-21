import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/home/home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: "home", element: <Home /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
