import { RootLayout } from "@/layouts/root";
import { PageWithSidebarLayout } from "@/layouts/with-sidebar";
import { TeacherLabsPage } from "@/pages/labs/teacher";
import { StudentLabsPage } from "@/pages/labs/student";
import { RouterProvider, createBrowserRouter } from "react-router";
import { SubjectsPageUI } from "@/pages/subjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/subject",
        children: [
          {
            index: true,
            element: <SubjectsPageUI />,
          },
          {
            path: "/subject/:subjectId",
            index: false,
            element: <PageWithSidebarLayout />,
            children: [
              {
                path: "student",
                children: [
                  {
                    path: ":labId?",
                    index: true,
                    element: <StudentLabsPage />,
                  },
                ],
              },
              {
                path: "teacher",
                children: [
                  {
                    path: ":labId?",
                    index: true,
                    element: <TeacherLabsPage />,
                  },
                ],
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
