import { Container, Grid, Grow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/post";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import { GridCustom } from "./style";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const isUpdateSuccess = useSelector(
    (state) => state.postReducer.isUpdateSuccess
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, isUpdateSuccess]);
  return (
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
  );
};

export default Home;
