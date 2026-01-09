import { RootLayout } from "@/layouts/root";
import { PageWithSidebarLayout } from "@/layouts/with-sidebar";
import { RouterProvider, createBrowserRouter } from "react-router";
import { SubjectsPageUI } from "@/pages/subjects";
import { LabsPage } from "@/features/labs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <SubjectsPageUI />,
      },
      {
        path: "subject/:subjectId",
        index: false,
        element: <PageWithSidebarLayout />,
        children: [
          {
            path: "",
            index: true,
            element: <LabsPage />,
          },
          {
            path: ":labId",
            element: <LabsPage />,
          },
        ],
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
