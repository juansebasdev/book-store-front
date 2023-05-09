import { IRouteApp } from "types/routes/routes.types";
import { Route } from "react-router-dom";

class RouterService {
  public renderRoute = (_route: IRouteApp, key: string) => {
    let pathVariables = "";
    if (_route.pathVariables?.length) {
      pathVariables = _route.pathVariables.reduce((accum: string, item) => {
        accum = `${accum}/:${item}`;
        return accum;
      }, pathVariables);
    }
    return (
      <Route
        key={key}
        path={_route.path + pathVariables}
        element={_route.component}
      />
    );
  };
}

export default RouterService;
