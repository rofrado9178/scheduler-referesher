import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { selected, id, name, avatar } = props;

  let interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });
  return (
    <li className={interviewerClass}>
      <img className={"interviewers__item-image"} src={avatar} alt={name} />
      {name}
    </li>
  );
}
