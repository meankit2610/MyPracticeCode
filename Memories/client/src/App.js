import React, {useState, useEffect} from "react"
import {Container, AppBar, Typography, Grow, Grid} from "@mui/material"
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import {getPosts} from './actions/posts'
import { useDispatch } from 'react-redux';
import './styles.css'
const App = () => {
  const [currentId, setCurrentId] = useState(null);
  
  const dispatch = useDispatch();
//hii hello
  useEffect(() => {
    dispatch(getPosts());
  },[currentId, dispatch])
  return (
        
    <Container maxWidth="lg">
      <AppBar className='appBar' position="static" color="inherit">
        <Typography className='heading' variant="h2" align="center">Memories</Typography>
        <img  className='image' src={memories} alt="memories-alt" height="60" ></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </Container>
       
  );
}

export default App;
