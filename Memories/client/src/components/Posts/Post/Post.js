import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import '../Post/styles.css'

import { likePost, deletePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  
console.log(post.selectedFile)
  return (
    <Card className='card' >
      <CardMedia  className='media'image={post.selectedFile} title={post.title} />
      {/* <CardMedia
        className='media'
        component="img"
        // height="194"
        title={post.title}
        image={post.selectedFile}
        alt="Paella dish"
      /> */}
      <div overlay className= 'overlay' >
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className='overlay2'>
        <Button overlay style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className='details'>
        <Typography variant="body2" color='textSecondary' component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className='title' gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className='cardActions'>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;