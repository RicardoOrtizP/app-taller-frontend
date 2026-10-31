import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Suspense fallback={<>Cargando...</>}>
      <Routes>
        <Route path="/" element={<>Home</>} />
      </Routes>
    </Suspense>
  );
};
