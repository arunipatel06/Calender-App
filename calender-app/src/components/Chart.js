import React from "react";
import LineGraph from "./LineGraph";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: "20px",
    paddingLeft: "20px",
    paddingTop: "10px",
  },
  subtitle: {
    fontSize: "10px",
    paddingTop: "20px",
    paddingLeft: "10px",
  },
  divider: {
    paddingTop: "10px",
    paddingLeft: "30px",
    color: "gray",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  button: {
    color: "white",
    background: "blue",
    align: "right",
  },
}));

const Chart = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid xs={8}>
          <div>Analytics</div>
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
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Upgrade
          </Button>
        </Grid>
      </Grid>

      <LineGraph />
    </div>
  );
};

export default Chart;
