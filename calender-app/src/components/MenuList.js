import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

//icons
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    maxWidth: 360,
    alignItems: "left",
    backgroundColor: theme.palette.background.paper,
  },
}));

const MenuList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <WorkOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 1" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 2" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 3" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 4" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 5" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 6" />
        </ListItem>
      </List>
    </div>
  );
};

export default MenuList;
