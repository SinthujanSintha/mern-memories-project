import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField
} from "@mui/material";
import React from "react";

const Input = ({ half, name, handleChange, label, autoFocus, type, handleShowPassword,}) => {
  return (
    <Grid xs={12}
    item
    sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        inputProps={
          name === `password` && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === `password` ? <Visibility/>:<VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
};

export default Input;
