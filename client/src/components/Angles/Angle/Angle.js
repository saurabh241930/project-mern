import React from 'react';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Angle = ({ angle, setCurrentId }) => {
const dispatch = useDispatch();
const classes = useStyles();

  return (
    <div>{angle.BOM}</div>
    // <Card className={classes.card}>
    //   <CardMedia className={classes.media} image={angle.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={angle.title} />
    //   <div className={classes.overlay}>
    //     <Typography variant="h6">{angle.creator}</Typography>
    //     <Typography variant="body2">{moment(angle.createdAt).fromNow()}</Typography>
    //   </div>
    //   <div className={classes.overlay2}>
    //     <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(angle._id)}><MoreHorizIcon fontSize="default" /></Button>
    //   </div>
    //   <div className={classes.details}>
    //     <Typography variant="body2" color="textSecondary" component="h2">{angle.tags.map((tag) => `#${tag} `)}</Typography>
    //   </div>
    //   <Typography className={classes.title} gutterBottom variant="h5" component="h2">{angle.title}</Typography>
    //   <CardContent>
    //     <Typography variant="body2" color="textSecondary" component="p">{angle.message}</Typography>
    //   </CardContent>
    //   <CardActions className={classes.cardActions}>
    //     <Button size="small" color="primary" onClick={() => dispatch(likeangle(angle._id))}><ThumbUpAltIcon fontSize="small" /> Like {angle.likeCount} </Button>
    //     <Button size="small" color="primary" onClick={() => dispatch(deleteangle(angle._id))}><DeleteIcon fontSize="small" /> Delete</Button>
    //   </CardActions>
    // </Card>
  );
};

export default Angle;
