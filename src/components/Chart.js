import React, { useState } from "react";
import LineGraph from "./LineGraph";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Calender from "./Calender";

import EventIcon from "@material-ui/icons/Event";

const useStyles = makeStyles((theme) => ({
  paperComponent: {
    height: "100%",
    color: theme.palette.text.secondary,
  },
  parent: {
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    textAlign: "left",
    margin: "20px 0px 0px 20px",
    color: "#2a2b2b",
    fontSize: "15px",
    fontWeight: "bold",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    paddingLeft: "20px",
    paddingTop: "10px",
    color: "#4b4c51",
  },
  subtitle: {
    fontSize: "10px",
    paddingTop: "20px",
    paddingLeft: "10px",
    color: "#aeaeae",
  },
  divider: {
    paddingTop: "10px",
    paddingLeft: "30px",
    color: "#aeaeae",
  },
  buttonContainer: {
    float: "right",
  },
  button: {
    color: "white",
    background: "#4885f7",
    align: "right",
  },
  icon: {
    fontSize: "40px",
    color: "#1b6fdf",
  },
}));

const Chart = () => {
  const classes = useStyles();
  const [openCalender, setOpenCalender] = useState(false);
  const currentDate = new Date().toString().split(" ", 4);

  const [date, setDate] = useState({
    startDate: currentDate.join(" "),
    endDate: currentDate.join(" "),
  });

  return (
    <div>
      <Paper className={classes.paperComponent}>
        <Grid container>
          <Grid xs={8}>
            <div className={classes.heading}>Analytics</div>
            <div className={classes.parent}>
              <div className={classes.title}>254/500</div>
              <div className={classes.subtitle}>Attribute</div>
              <div className={classes.divider}>|</div>

              <div className={classes.title}>120</div>
              <div className={classes.subtitle}>Attribute 1</div>
              <div className={classes.divider}>|</div>

              <div className={classes.title}>125</div>
              <div className={classes.subtitle}>Attribute 2</div>
              <div className={classes.divider}>|</div>

              <div className={classes.title}>0</div>
              <div className={classes.subtitle}>Attribute 3</div>
            </div>
          </Grid>
          <Grid xs={4} className={classes.buttonContainer}>
            <div style={{ float: "right", marginRight: "5%" }}>
              <Button
                style={{
                  border: "1px solid #e7e1e1",
                  marginTop: "20px",
                  padding: "5px",
                  textTransform: "none",
                }}
                endIcon={<EventIcon className={classes.icon} />}
                onClick={() => setOpenCalender(true)}
              >
                {date.startDate} - {date.endDate}
              </Button>

              {openCalender ? (
                <Calender
                  openCalender={openCalender}
                  setOpenCalender={setOpenCalender}
                  setDate={setDate}
                />
              ) : null}
            </div>
          </Grid>
        </Grid>

        <LineGraph />
      </Paper>
    </div>
  );
};

export default Chart;
