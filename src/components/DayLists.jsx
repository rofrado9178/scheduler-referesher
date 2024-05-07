import React from "react";
import DayListItem from "./DayListItem";

export default function DayLists(props) {
  const { days, day, setDay } = props;

  const renderDayList = days.map((daylist) => {
    return (
      <DayListItem
        key={daylist.id}
        name={daylist.name}
        spots={daylist.spots}
        selected={daylist.name === day}
        setDay={setDay}
      />
    );
  });

  return <ul>{renderDayList}</ul>;
}
