import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from './pages/home';
import { SignIn, SignUp } from './pages/sign-pages';

import './app.css';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
