import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import routes from "./routes/route";

// Context
import { AuthProvider } from "./context/authContext.js";

// Stylesheet
import "./App.css";

const router = createBrowserRouter(routes);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </AuthProvider>
  );
}

export default App;
