import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import AvatarImage from "../assests/Image.jpg";
import { makeStyles } from "@material-ui/core/styles";

//icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

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
  icon: {
    margin: "7% 0% 5% 0%",
  },
  userSubtitle: {
    marginRight: "35%",
    fontWeight: "normal",
  },
}));
const NewNavbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src={AvatarImage} className={classes.avatar} />
      <div className={classes.user}>
        Aruni Patel
        <Typography
          className={classes.userSubtitle}
          variant="Subtitle1"
          component="h6"
        >
          Developer
        </Typography>
      </div>

      <div className={classes.icon}>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
};

export default NewNavbar;
