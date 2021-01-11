import React from "react";
import MenuList from "./MenuList";
import ScoreCards from "./ScoreCards";
import Navbar from "./Navbar";
import Chart from "./Chart";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paperComponent: {
    height: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: "10px",
  },
  logo: {
    fontSize: "20px",
    textAlign: "center",
    marginTop: "10%",
    fontWeight: "bold",
    color: "#306bbf",
  },
  rightPanel: {
    overflow: "hidden",
  },
  chart: {
    padding: "2% 5%",
    marginTop: "2px",
    backgroundColor: "#f5f6f8",
  },
  button: {
    borderRadius: "25px",
    padding: "7px 45px",
    marginTop: "20px",
    textTransform: "none",
    "&:hover": { color: "#4885f7", backgroundColor: "transparent" },
    color: "white",
    backgroundColor: "#4885f7",
  },
}));
const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid xs={2}>
          <div className={classes.logo}>LOGO HERE</div>
        </Grid>
        <Grid xs={10}>
          <Paper elevation={3} className={classes.paperComponent}>
            <Navbar />
          </Paper>
        </Grid>
        <Grid xs={2}>
          <MenuList />
        </Grid>
        <Grid xs={10}>
          <div className={classes.rightPanel}>
            <div style={{ float: "right", marginRight: "5%" }}>
              <Button
                variant="outlined"
                size="large"
                className={classes.button}
              >
                Upgrade
              </Button>
            </div>

            <Paper className={classes.paperComponent}>
              <div className={classes.chart}>
                <div>
                  <ScoreCards />
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <Chart />
                </div>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
