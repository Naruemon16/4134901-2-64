import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Car from "./components/Car";
import List from "./components/List";
import UI from "./components/UI";
import DataTable from "./components/Table";

ReactDOM.render(
  <>
    <DataTable />
    <Car age="25" eye="black" />
    <List />
    <UI />
  </>,
document.getElementById("root")
);