import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "fontsource-roboto";
import useStyles from "../JssStyleSheet/JssScoreCard";
//icons
import DataUsageOutlinedIcon from "@material-ui/icons/DataUsageOutlined";
import PolicyIcon from "@material-ui/icons/Policy";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

const numbers = {
  attribute1: "254/500",
  attribute2: "120",
  attribute3: "125",
  attribute4: "0",
};
const ScoreCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Paper className={classes.scoreGrid}>
            <div className={classes.scoreCard}>
              <div className={classes.scoreIcon}>
                <DataUsageOutlinedIcon
                  disableElevation={true}
                  className={classes.icon}
                />
              </div>

              <div
                className={classes.scoreText}
                style={{ paddingLeft: "20px" }}
              >
                {numbers.attribute1}
                <div className={classes.scoreSubtitle1}>
                  <Typography
                    className={classes.scoreSubtitle1}
                    variant="Subtitle1"
                    component="h6"
                  >
                    Attribute 1
                  </Typography>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.scoreGrid}>
            <div className={classes.scoreCard}>
              <div className={classes.scoreIcon}>
                <PolicyIcon disableElevation={true} className={classes.icon} />
              </div>

              <div className={classes.scoreText}>
                {numbers.attribute2}
                <div className={classes.scoreSubtitle}>
                  <Typography
                    className={classes.scoreSubtitle}
                    variant="Subtitle1"
                    component="h6"
                  >
                    Attribute 2
                  </Typography>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.scoreGrid}>
            <div className={classes.scoreCard}>
              <div className={classes.scoreIcon}>
                <AssignmentOutlinedIcon
                  disableElevation={true}
                  className={classes.icon}
                />
              </div>

              <div className={classes.scoreText}>
                {numbers.attribute3}
                <div className={classes.scoreSubtitle}>
                  <Typography
                    className={classes.scoreSubtitle}
                    variant="Subtitle1"
                    component="h6"
                  >
                    Attribute 3
                  </Typography>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.scoreGrid}>
            <div className={classes.scoreCard}>
              <div className={classes.scoreIcon}>
                <FindInPageIcon
                  disableElevation={true}
                  className={classes.icon}
                />
              </div>

              <div className={classes.scoreText}>
                {numbers.attribute4}
                <div className={classes.scoreSubtitle}>
                  <Typography
                    className={classes.scoreSubtitle}
                    variant="Subtitle1"
                    component="h6"
                  >
                    Attribute 4
                  </Typography>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ScoreCards;
