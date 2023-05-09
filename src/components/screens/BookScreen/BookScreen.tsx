import React, { CSSProperties } from "react";
import AppLayout from "../../layouts/AppLayout/AppLayout";
import "./BookScreen.scss";

interface IBookScreenProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const BookScreen: React.FC<IBookScreenProps> = (props) => {
  return <AppLayout></AppLayout>;
};

export default BookScreen;
