import React, { Fragment } from "react";
import { Avatar, Button, Grid, Paper } from "@material-ui/core";
import AvatarImage from "../assests/Image.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    float: "right",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    alignItems: "right",
  },
  user: {
    paddingTop: "3%",
  },
}));
const NewNavbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src={AvatarImage} className={classes.avatar} />
      <div className={classes.user}>Aruni Patel</div>
    </div>
  );
};

export default NewNavbar;
