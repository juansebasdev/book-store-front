import { IRouteApp } from "types/routes/routes.types";
import BookScreen from "../components/screens/BookScreen/BookScreen";

export const routesApp: IRouteApp[] = [
  {
    component: <BookScreen />,
    path: "/",
  },
];
