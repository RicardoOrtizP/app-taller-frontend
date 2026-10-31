import { Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { OnlyPublicRoute } from "./OnlyPublicRoute";

export const AppRoutes = () => {
  return (
    <Suspense fallback={<>Cargando...</>}>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/orders" element={<>Ordenes</>} />

        {/* Rutas de solo visitantes (publicas) */}
        <Route
          element={
            <OnlyPublicRoute>
              <Outlet />
            </OnlyPublicRoute>
          }
        >
          <Route path="/login" element={<>Login Page</>} />
          <Route path="/register" element={<>Register Page</>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
