import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

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