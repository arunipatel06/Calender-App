import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "fontsource-roboto";

//icons
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  scoreGrid: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  scoreCard: {
    display: "flex",
    flexDirection: "row",
  },
  scoreIcon: {
    paddingRight: "40px",
  },
  scoreText: {
    align: "right",
  },
  scoreSubtitle: {
    paddingLeft: "30px",
  },
}));

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
                <WorkOutlineIcon />
              </div>

              <div className={classes.scoreText}>
                {numbers.attribute1}
                <Typography variant="Subtitle1" component="h6">
                  Attribute 1
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.scoreGrid}>
            <div className={classes.scoreCard}>
              <div className={classes.scoreIcon}>
                <WorkOutlineIcon />
              </div>

              <div className={classes.scoreText}>
                {numbers.attribute2}
                <Typography
                  className={classes.scoreSubtitle}
                  variant="Subtitle1"
                  component="h6"
                >
                  Attribute 2
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.scoreGrid}>
            <div className={classes.scoreCard}>
              <div className={classes.scoreIcon}>
                <WorkOutlineIcon />
              </div>

              <div className={classes.scoreText}>
                {numbers.attribute3}
                <Typography
                  className={classes.scoreSubtitle}
                  variant="Subtitle1"
                  component="h6"
                >
                  Attribute 3
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.scoreGrid}>
            <div className={classes.scoreCard}>
              <div className={classes.scoreIcon}>
                <WorkOutlineIcon />
              </div>

              <div className={classes.scoreText}>
                {numbers.attribute4}
                <Typography
                  className={classes.scoreSubtitle}
                  variant="Subtitle1"
                  component="h6"
                >
                  Attribute 4
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ScoreCards;
