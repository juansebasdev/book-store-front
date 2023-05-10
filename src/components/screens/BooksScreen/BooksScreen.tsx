import React, { CSSProperties } from "react";
import AppLayout from "../../layouts/AppLayout/AppLayout";
import "./BooksScreen.scss";
import Books from "components/modules/Books/Books";

interface IBooksScreenProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const BooksScreen: React.FC<IBooksScreenProps> = (props) => {
  return (
    <AppLayout>
      <Books />
    </AppLayout>
  );
};

export default BooksScreen;
