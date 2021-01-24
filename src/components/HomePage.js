import React, { useState } from "react";
import MenuList from "./MenuList";
import ScoreCards from "./ScoreCards";
import Navbar from "./Navbar";
import Chart from "./Chart";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

//icons
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  paperComponent: {
    height: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#f5f6f8",
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
  setting: {
    color: "#5e5f63",
    backgroundColor: "#e6f2ff",
  },
  menulist: {
    display: "flex",
    flexDirection: "column",
  },
  div: {
    width: "100vw",
    margin: "40px 0px 0px 70px ",
    float: "top",
  },
  text: {
    textAlign: "left",
    fontFamily: '"Manrope", sans-serif',
    fontSize: "10px",
    fontWeight: "regular",
    color: "gray",
  },
  icon: {
    color: "#1b6fdf",
  },
}));
const HomePage = () => {
  const classes = useStyles();
  const [seriesIndex, setSeriesIndex] = useState(0);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Grid container>
        <Grid xs={2}>
          <div className={classes.logo}>LOGO HERE</div>
        </Grid>
        <Grid xs={10}>
          <Paper elevation={3} className={classes.paperComponent}>
            <Navbar />
          </Paper>
        </Grid>
        <Grid xs={2} className={classes.menulist}>
          <div>
            <MenuList setSeriesIndex={setSeriesIndex} />
          </div>
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

            <Paper className={classes.paperComponent} elevation={0}>
              <div className={classes.chart}>
                <div>
                  <ScoreCards />
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <Chart seriesIndex={seriesIndex} />
                </div>
              </div>
            </Paper>
          </div>
        </Grid>
        <Grid xs={2}>
          <div className={classes.setting}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Setting" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid xs={10} style={{ backgroundColor: "#f5f6f8" }}>
          <div className={classes.div}>
            <Typography className={classes.text}>
              Copyright © 2021 Aruni Patel. All rights reserved
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
