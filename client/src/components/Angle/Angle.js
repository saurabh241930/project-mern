import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Paper, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import CartDialog from '../Dialog/CartDialog';
import { cartAction } from '../../actions/cart';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
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


const Angle = ({ marbles, handleViewMore, handleAddToCart, isExistInCart, currUser }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const gridCount = marbles.count <= 4 ? 12 / (marbles.count) : 2



    return (
        !marbles.marbles.length ? <CircularProgress /> : (
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
                        <span className={classes.marbleName}>{marble.qualityName}</span><br />
                        {currUser ?
                            <>
                                {isExistInCart(marble.marbleId) ?
                                    <Button onClick={() => handleAddToCart(marble.marbleId, marble.qualityName)} variant="text"><AddIcon /> ADD ITEM</Button>
                                    :
                                    <Button onClick={() => handleAddToCart(marble.marbleId, marble.qualityName)} variant="text" color="error"> <HighlightOffIcon /> REMOVE ITEM</Button>
                                }
                            </>
                            :
                            <><Button variant="text" disabled>ADD TO CART</Button></>

                        }


                    </Grid>
                ))}
            </Grid>
        )


    );
};

export default Angle;

