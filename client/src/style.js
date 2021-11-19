import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=> ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgb(140, 176, 22)",
  },
  image: {
    marginLeft: "15px",
    marginBottom: "-10px",
  },
}));
