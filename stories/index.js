import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";
import DayLists from "components/DayLists";

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

storiesOf("DayListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Unselected", () => <DayListItem name="Monday" spots={1}></DayListItem>)
  .add("Selected", () => (
    <DayListItem name="Monday" spots={5} selected></DayListItem>
  ))
  .add("Full", () => <DayListItem name="Monday" spots={0}></DayListItem>)
  .add("Clickable", () => (
    <DayListItem
      name="Tuesday"
      setDay={action("setDay")}
      spots={5}
    ></DayListItem>
  ));

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
  {
    id: 4,
    name: "Thursday",
    spots: 3,
  },
  {
    id: 5,
    name: "Friday",
    spots: 1,
  },
];

storiesOf("DayLists", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Monday", () => (
    <DayLists days={days} day={"Monday"} setDay={action("setDay")} />
  ))
  .add("Tuesday", () => (
    <DayLists days={days} day={"Tuesday"} setDay={action("setDay")} />
  ))
  .add("Wednesday", () => (
    <DayLists days={days} day={"Wednesday"} setDay={action("setDay")} />
  ));
