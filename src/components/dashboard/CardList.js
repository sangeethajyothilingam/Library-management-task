import React from "react";
import {
  faBook,
  faBookDead,
  faBookReader,
  faCalendar,
  faClipboardList,
  faComments,
  faDollar,
  faRupee,
  faUser,
  faUserAlt,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "./Card";

/*cards datalist*/
export function CardList() {
  const cardData = [
    {
      title: "BORROWED",
      count: 100,
      colors: "success",
      icon: faBook,
    },
    {
      title: "RETURNED",
      count: 20,
      colors: "warning",
      icon: faBookReader,
    },
    {
      title: "VISITORS",
      count: 250,
      colors: "info",
      icon: faUsers,
    },
    {
      title: "NEW MEMBER",
      count: "78",
      colors: "primary",
      icon: faUserPlus,
    },
  ];
  return (
    <div className="row">
      {cardData.map((dt) => (
        <Card data={dt} />
      ))}
    </div>
  );
}
