import React, { CSSProperties } from "react";
import "./About.scss";

interface IAboutProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const About: React.FC<IAboutProps> = (props) => {
  return (
    <div
      className={`about_layout ${props.className ? props.className : ""}`}
      style={props.style}
      id={props.id}
    >
      <div className="container d-flex mb-5">
        <div className="d-flex flex-column gap-3">
          <p>
            Tempor incididunt enim cillum culpa reprehenderit aliqua ex ipsum
            enim aliquip veniam ad. Esse deserunt est anim tempor laboris
            adipisicing qui esse. Et mollit non eiusmod anim adipisicing duis
            anim incididunt voluptate. Labore officia reprehenderit ea deserunt
            id amet esse do cupidatat do non quis est. Incididunt mollit do
            Lorem amet in adipisicing sit ut consectetur Lorem ad pariatur. Duis
            aliqua magna adipisicing et aliqua id laborum adipisicing quis
            ullamco qui nostrud aliquip esse. Reprehenderit dolore ut velit et
            do magna id enim ea nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
