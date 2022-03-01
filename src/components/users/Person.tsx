import React from "react";
import { fortmatString } from "../../helper";
export interface IPerson {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

interface PersonProps {
  person: IPerson;
  position: string;
}
export default function Person(props: PersonProps) {
  const { id, image, name, title, quote } = props.person;
  const { position } = props;

  return (
    <div className={`person ${position}`}>
      <div className="person__info">
        <img src={image} alt={name} />
        <h2 className="person__name">{name}</h2>
        <p className="person__jobs">{fortmatString(title)}</p>
      </div>
      <div className="person__description">
        <p className="person__text">{quote}</p>
        <span className="person__quote">
          <i className="fa fa-quote-right" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}
