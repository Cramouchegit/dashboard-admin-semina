import { Route, Routes } from "react-router-dom";

import TalentsPage from "../pages/talents";
import TalentsCreate from "../pages/Talents/create";
import TalentsEdit from "../pages/Talents/edit";

export function TalentsRoute() {
  return (
    <Routes>
      <Route path="/" element={<TalentsPage />} />
      <Route path="/create" element={<TalentsCreate />} />
      <Route path="/edit/:talentId" element={<TalentsEdit />} />
    </Routes>
  );
}
