import React, { CSSProperties } from "react";
import Navbar from "../../modules/Navbar/Navbar";
import "./AppLayout.scss";
import Footer from "components/modules/Footer/Footer";

interface IAppLayoutProps {
  children?: any;
  history?: any;
  className?: string;
  hideMenu?: boolean;
  hideProfile?: boolean;
  style?: CSSProperties;
  id?: string;
}

const AppLayout: React.FC<IAppLayoutProps> = (props) => {
  return (
    <div
      className={`app_layout-layout ${props.className ? props.className : ""}`}
      style={props.style}
      id={props.id}
    >
      <div className="content-page">
        <Navbar />
        <div className="container-children-app-layout">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
