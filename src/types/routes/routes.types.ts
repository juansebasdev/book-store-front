export interface IRouteApp {
  component: JSX.Element;
  path: string;
  pathVariables?: string[];
  loading?: boolean;
}
