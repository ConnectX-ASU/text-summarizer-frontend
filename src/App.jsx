import { useState } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/home/home";
import Userhistory from './components/UserHistory/Userhistory';
import Profile from './components/profile/profile';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const [isDark, setIsDark] = useState(true);
  const handleThemeChange = () => setIsDark(!isDark)
  let routes = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: "home", element: <Home onThemeChange = {handleThemeChange} theme = {isDark}/> },
        { path: "register", element: <Register theme = {isDark}/> },
        { path: "login", element: <Login theme = {isDark}/> },
        { path: "profile", element: <Profile theme = {isDark}/> }
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