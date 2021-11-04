import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import AppsIcon from '@mui/icons-material/Apps';

import { useDispatch } from 'react-redux';


import useStyles from './styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundImage: 'https://4.imimg.com/data4/LW/DQ/MY-10354786/artificial-quartz-500x500.jpg'
}))

const Angle = ({ marbles }) => {
    const dispatch = useDispatch();
    const classes = useStyles();


    console.log(marbles);
    const gridCount = marbles.count <= 4 ? 12 / (marbles.count) : 2
    console.log(gridCount);

    return (
        <Grid container rowSpacing={0} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>

            <Grid item xs={12} style={{ textAlign: 'centre' }}>

                <Typography className={classes.angle} variant="h6">
                    <span className={classes.angleNoLabel}>angle no:</span>
                    <span className={classes.angleText}>
                        {marbles._id}
                    </span> </Typography>

            </Grid>

            {marbles.marbles.map((marble) => (
                <Grid className={classes.marbleGrid} item xs={gridCount}>
                    <img className={classes.img} src={marble.image} /><br />
                    <span className={classes.marbleName}>{marble.qualityName}</span><br/>
                    <Button variant="text">ADD TO CART</Button>
                </Grid>
            ))}



        </Grid>


    );
};

export default Angle;

