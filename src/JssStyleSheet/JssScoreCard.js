import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  scoreGrid: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  scoreCard: {
    display: "flex",
    flexDirection: "row",
  },
  scoreIcon: {
    paddingRight: "20px",
    // fontSize: "large",
  },
  icon: {
    fontSize: "50px",
    margin: "0px",
    color: "#1b6fdf",
  },
  scoreText: {
    float: "left",
    fontWeight: "700",
    fontSize: "20px",
    color: "#2d2d2f",
  },
  scoreSubtitle: {
    fontWeight: "normal",
    textTransform: "uppercase",
    fontSize: "15px",
    color: "#b9b9bb",
    paddingLeft: "26px",
  },
  scoreSubtitle1: {
    textTransform: "uppercase",
    paddingLeft: "0px",
    fontWeight: "normal",
    fontTransform: "Uppercase",
    fontSize: "15px",
    color: "#b9b9bb",
  },
}));
