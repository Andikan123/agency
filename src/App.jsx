import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  About,
  Universities,
  UniversityDetail,
  Programs,
  ProgramDetail,
  StudyInNorthCyprus,
  HowItWorks,
  StudentStories,
  Faq,
  Contact,
  Error,
  Apply,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "universities",
        element: <Universities />,
      },
      {
        path: "universities/:id",
        element: <UniversityDetail />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "programs/:id",
        element: <ProgramDetail />,
      },
      {
        path: "study-in-north-cyprus",
        element: <StudyInNorthCyprus />,
      },
      {
        path: "how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "student-stories",
        element: <StudentStories />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "apply",
        element: <Apply />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
