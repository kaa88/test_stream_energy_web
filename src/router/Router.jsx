import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { CardPage } from "../pages/CardPage/CardPage";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/card",
      element: <CardPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
