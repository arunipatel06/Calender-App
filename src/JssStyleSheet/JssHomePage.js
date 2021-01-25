import { makeStyles } from "@material-ui/core/styles";

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
