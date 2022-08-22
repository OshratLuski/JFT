import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "../src/pages/Error";
import Landing from "../src/pages/Landing";
import Register from "../src/pages/Register";
import AddJob from "../src/pages/dashboard/AddJob";
import AllJobs from "../src/pages/dashboard/AllJobs";
import Profile from "../src/pages/dashboard/Profile";
import Stats from "./pages/dashboard/Stats";
import SharedLayout from "../src/pages/dashboard/SharedLayout";
import ProtectedRoute from "../src/pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
