import { IRouteApp } from "types/routes/routes.types";
import BookScreen from "../components/screens/BookScreen/BookScreen";
import BooksScreen from "../components/screens/BooksScreen/BooksScreen";
import AboutScreen from "components/screens/AboutScreen/AboutScreen";

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
  {
    component: <AboutScreen />,
    path: "/about",
  },
];
