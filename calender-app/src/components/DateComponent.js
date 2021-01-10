import { DefinedRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import React, { useState } from "react";

const DateComponent = (props) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <DefinedRange
      onChange={(item) => setState([item.selection])}
      ranges={state}
    />
  );
};
export default DateComponent;
