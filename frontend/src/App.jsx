
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Home Page */}

        <Route path="/" element={<Home />} />

        {/* Protected Flights */}

        <Route
          path="/flights"
          element={
            <ProtectedRoute>
              <Flights />
            </ProtectedRoute>
          }
        />

        {/* Protected Bookings */}

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />

        {/* Auth Pages */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>

<Route
  path="/payment"
  element={
    <ProtectedRoute>
      <Payment />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>

  );
}

export default App;