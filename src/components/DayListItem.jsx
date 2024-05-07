import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const { selected, spots, name, setDay } = props;

  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0,
  });

  const formatSpot = () => {
    if (spots === 0) {
      return "no spot remaining";
    }
    return spots > 1 ? `${spots} spots remaining` : `${spots} spot remaining`;
  };

  return (
    <li className={dayClass} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpot()}</h3>
    </li>
  );
}
