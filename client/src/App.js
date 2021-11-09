import React, { useEffect, useState } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/actions/post";
import useStyles, { GridCustom } from "./style";
import memories from "./images/mem2.jpg";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const isUpdateSuccess = useSelector(
    (state) => state.postReducer.isUpdateSuccess
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, isUpdateSuccess]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memo
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <GridCustom
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </GridCustom>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
