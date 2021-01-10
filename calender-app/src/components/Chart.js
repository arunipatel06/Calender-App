import React from "react";
import LineGraph from "./LineGraph";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paperComponent: {
    height: "100%",
    color: theme.palette.text.secondary,
  },
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
    float: "right",
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
      <Paper className={classes.paperComponent}>
        <Grid container>
          <Grid xs={8}>
            <div style={{ textAlign: "left", margin: "3% 0% 0%" }}>
              Analytics
            </div>
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
            <div style={{ float: "right", margin: "5% 25%" }}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Upgrade
              </Button>
            </div>
          </Grid>
        </Grid>

        <LineGraph />
      </Paper>
    </div>
  );
};

export default Chart;
