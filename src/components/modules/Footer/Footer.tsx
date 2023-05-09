import React, { CSSProperties } from "react";
import "./Footer.scss";

interface IFooterProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <div
      className={`footer-layout bg-light ${props.className ? props.className : ""}`}
      style={props.style}
      id={props.id}
    >
      Book Store 2023
    </div>
  );
};

export default Footer;
