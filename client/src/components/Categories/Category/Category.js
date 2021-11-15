import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';

import { useDispatch } from 'react-redux';


import useStyles from './styles';

const Category = ({ category,handleViewMarbleCategory }) => {
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
        <Button style={{ color: 'white' }} size="small" onClick={() => { 
   handleViewMarbleCategory(category,category.qualityName);
  }
 }><AppsIcon fontSize="large" /></Button>
      </div>
    </Card>

  );
};

export default Category;

