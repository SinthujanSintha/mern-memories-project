import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const GridCustom = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]:{
      flexDirection:"column-reverse"
  }
}));
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
