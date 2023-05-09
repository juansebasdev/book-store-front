import { Box } from "@mui/material";
import { BrowserRouter, Routes } from "react-router-dom";
import { routesApp } from "routes/routes";
import RouterService from "services/router/router.service";

import "./MasterLayout.scss";

export interface MasterLayoutProps {}

const MasterLayout: React.FC<MasterLayoutProps> = (props) => {
  const routerService = new RouterService();

  return (
    <div className="master_layout-layout">
      <Box>
        <BrowserRouter>
          <Routes>
            {routesApp.map((itemRoute, idx) =>
              routerService.renderRoute(itemRoute, `route-${idx}`)
            )}
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
};

export default MasterLayout;
