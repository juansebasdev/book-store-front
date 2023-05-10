import { IRouteApp } from "types/routes/routes.types";
import BookScreen from "../components/screens/BookScreen/BookScreen";
import BooksScreen from "../components/screens/BooksScreen/BooksScreen";

export const routesApp: IRouteApp[] = [
  {
    component: <BooksScreen />,
    path: "/",
  },
  {
    component: <BookScreen />,
    path: "/books",
    pathVariables: ["id"],
  },
];
