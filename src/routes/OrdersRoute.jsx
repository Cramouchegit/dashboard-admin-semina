import { Route, Routes } from "react-router-dom";

import OrderPage from "../pages/Orders";

export function OrdersRoute() {
  return (
    <Routes>
      <Route path="/" element={<OrderPage />} />
    </Routes>
  );
}
