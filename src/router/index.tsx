import { RootLayout } from "@/layouts/root";
import { PageWithSidebarLayout } from "@/layouts/with-sidebar";
import { TeacherLabsPage } from "@/pages/labs/teacher";
import { StudentLabsPage } from "@/pages/labs/student";
import { RouterProvider, createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PageWithSidebarLayout />,
        children: [
          {
            path: "/student",
            children: [
              {
                path: ":id",
                index: true,
                element: <StudentLabsPage />,
              },
            ],
          },
          {
            path: "/teacher",
            children: [
              {
                path: ":id",
                index: true,
                element: <TeacherLabsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
