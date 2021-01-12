import { addDays } from "date-fns";
import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { makeStyles } from "@material-ui/core/styles";

import { Button, Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    position: "relative",
    backgroundColor: theme.palette.background.default,
    margin: "100px auto 50px",
    width: "935px",
    outline: 0,
    overflow: "hidden",
  },
  button: {
    padding: "7px 25px",
    margin: "20px 10px",
    textTransform: "none",
    "&:hover": { color: "#4885f7", backgroundColor: "transparent" },
    color: "white",
    backgroundColor: "#4885f7",
  },
}));

const Calender = ({ openCalender, setOpenCalender, setDate }) => {
  const classes = useStyles();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const tempDate = state;
    const date = tempDate[0];
    if (date.startDate) {
      setStartDate(date.startDate.toString().split(" ", 4).join(" "));
    }
    if (date.endDate) {
      setEndDate(date.endDate.toString().split(" ", 4).join(" "));
    }
  }, [state]);

  return (
    <div>
      <Modal open={openCalender} onClose={() => setOpenCalender(false)}>
        <div className={classes.body}>
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
          <div style={{ float: "right" }}>
            <Button
              variant="outlined"
              size="large"
              className={classes.button}
              onClick={() => {
                setDate({ startDate, endDate });
                setOpenCalender(false);
              }}
            >
              Apply
            </Button>
            <Button
              variant="outlined"
              size="large"
              className={classes.button}
              onClick={() => setOpenCalender(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Calender;
