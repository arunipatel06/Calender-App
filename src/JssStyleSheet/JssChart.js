import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paperComponent: {
    height: "100%",
    color: theme.palette.text.secondary,
  },
  parent: {
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    textAlign: "left",
    margin: "20px 0px 0px 20px",
    color: "#2a2b2b",
    fontSize: "15px",
    fontWeight: "bold",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    paddingLeft: "20px",
    paddingTop: "10px",
    color: "#4b4c51",
  },
  subtitle: {
    fontSize: "10px",
    paddingTop: "20px",
    paddingLeft: "10px",
    color: "#aeaeae",
  },
  divider: {
    paddingTop: "10px",
    paddingLeft: "30px",
    color: "#aeaeae",
  },
  buttonContainer: {
    float: "right",
  },
  button: {
    color: "white",
    background: "#4885f7",
    align: "right",
  },
  icon: {
    fontSize: "40px",
    color: "#1b6fdf",
  },
}));
