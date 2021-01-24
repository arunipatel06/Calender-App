import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

//icons
import CardTravelIcon from "@material-ui/icons/CardTravel";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import ImageAspectRatioIcon from "@material-ui/icons/ImageAspectRatio";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
    alignItems: "left",
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    "&:hover": { color: "#deeeff", backgroundColor: "#4a88f9" },
  },
  selectedItem: {
    color: "#5e5f63",
    backgroundColor: "#e6f2ff",
    borderRight: "4px solid #2b68d6",
  },
}));

const MenuList = ({ setSeriesIndex }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setSeriesIndex(index);
  };
  return (
    <div className={classes.root}>
      <List>
        <ListItem
          className={selectedIndex === 0 ? classes.selectedItem : classes.list}
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <DesktopWindowsIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 1" />
        </ListItem>
        <ListItem
          className={selectedIndex === 1 ? classes.selectedItem : classes.list}
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <CardTravelIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 2" />
        </ListItem>
        <ListItem
          className={selectedIndex === 2 ? classes.selectedItem : classes.list}
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <FeaturedPlayListIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 3" />
        </ListItem>
        <ListItem
          className={selectedIndex === 3 ? classes.selectedItem : classes.list}
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <ConfirmationNumberIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 4" />
        </ListItem>
        <ListItem
          className={selectedIndex === 4 ? classes.selectedItem : classes.list}
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <ImageAspectRatioIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 5" />
        </ListItem>
        <ListItem
          className={selectedIndex === 5 ? classes.selectedItem : classes.list}
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <FilterNoneIcon />
          </ListItemIcon>
          <ListItemText primary="Menu Option 6" />
        </ListItem>
      </List>
    </div>
  );
};

export default MenuList;
