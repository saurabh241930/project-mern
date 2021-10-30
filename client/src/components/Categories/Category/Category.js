import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

import { useDispatch } from 'react-redux';


import useStyles from './styles';

const Category = ({ category, setCurrentId,handleAddToCart }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={category.image} />
      <div className={classes.overlay}>
        <Typography variant="h6">{category.qualityName}</Typography>
        <Typography variant="body2">{category.colors}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button onClick={handleAddToCart} style={{ color: 'white' }} size="small" onClick={() => { 
   handleAddToCart(category.qualityName);
   setCurrentId(category._id)
  }
 }><AppsIcon fontSize="large" /></Button>
      </div>
    </Card>

  );
};

export default Category;

