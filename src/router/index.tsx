import { RootLayout } from "@/layouts/root";
import { LabsPage } from "@/pages/labs";
import { RouterProvider, createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/labs",
        element: <LabsPage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
