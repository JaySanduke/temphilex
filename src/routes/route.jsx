import { Navigate, Outlet } from "react-router-dom";

// Protected Route
import ProtectedRoute from "../components/protected/protectedRoute.jsx";

// Layouts
import RootLayout from "../layouts/root_layout.jsx";
import AuthLayout from "../layouts/auth_layout.jsx";
import StudentLayout from "../layouts/student_layout.jsx";
import TeacherLayout from "../layouts/teacher_layout.jsx";

// Pages
// root -
import HomePage from "../pages/homepage";
// auth -
import Login from "../pages/auth/login.jsx";
import Createaccount from "../pages/auth/createaccount.jsx";
// student -
import StudentDashboard from "../pages/student_section/dashboard.jsx";
import Schedule from "../pages/teacher_section/schedule.jsx";
import StudentProfile from "../pages/teacher_section/student_profile/profile.jsx";
import AllTab from "../pages/teacher_section/student_profile/all_tab.jsx";
// teacher -
import TeacherDashboard from "../pages/teacher_section/dashboard.jsx";

const routes = [
  {
    path: "/",
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "auth",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "createaccount",
        element: <Createaccount />,
      }
    ],
  },
  {
    path: "student",
    element: (
      <ProtectedRoute>
        <StudentLayout>
          <Outlet />
        </StudentLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/student/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <StudentDashboard />,
      }
    ],
  },
  {
    path: "teacher",
    element: (
      <ProtectedRoute>
        <TeacherLayout>
          <Outlet />
        </TeacherLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/teacher/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <TeacherDashboard />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "enrolled/students/:id",
        element: <StudentProfile><Outlet /></StudentProfile>,
        children: [
          {
            index: true,
            element: <AllTab />,
          },
          {
            path: "quiz",
          }
        ],
      }
    ],
  },
];

export default routes;
