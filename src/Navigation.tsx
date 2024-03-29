import React, { PropsWithChildren } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Menu from "./Menu";

const Navigation: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Menu />
      <Outlet />
    </div>
  );
};

export default Navigation;
