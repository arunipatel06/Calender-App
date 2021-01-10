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
  },
  logo: {
    fontSize: "20px",
    textAlign: "center",
    marginTop: "10%",
    fontWeight: "bold",
    color: "#306bbf",
  },
  menuList: {},
  chart: {
    width: "100%",
  },
  button: {
    borderRadius: "25px",
    padding: "7px 45px",
    textTransform: "none",
    hover: {
      color: "black",
    },
    color: "white",
    backgroundColor: "blue",
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
          <Paper className={classes.paperComponent}>
            <Navbar />
          </Paper>
        </Grid>
        <Grid xs={2}>
          <MenuList />
        </Grid>
        <Grid xs={10} style={{ overflow: "hidden", margin: "2% 0%" }}>
          <div style={{ float: "right", marginRight: "5%" }}>
            <Button variant="outlined" size="large" className={classes.button}>
              Upgrade
            </Button>
          </div>

          <Paper className={classes.paperComponent}>
            <div className={classes.chart}>
              <div>
                <ScoreCards />
              </div>
              <div>
                <Chart />
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
