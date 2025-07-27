import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurants from "./components/Restaurants";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(() => import("./components/About"));



const AppLayout = () => {
  return (
   <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
   </Provider> 
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<p>Loading...</p>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurants />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
