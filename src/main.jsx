import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import ErrorPage from './Components/Error';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Section from './Components/Section';
import Section_2 from './Components/Section_2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Main />
      },
      {
        path: "/",
        element: <Section />,
        loader: () =>fetch('popular_area.json')
      },

      {
        path: "/logIn",
        element: <LogIn />
      },
      {
        path: "/signUp",
        element: <SignUp />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
