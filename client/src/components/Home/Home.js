import { getCategories } from '../../actions/categories';
import { Container, Grow,Grid ,Paper,Stack,Divider,Button} from '@mui/material';
import React, { useState, useEffect } from 'react';
import CustomSnackbar from '../Snackbar/CustomSnackbar';
import useStyles from './styles';
import { styled } from '@mui/material/styles';



import Categories from '../Categories/Categories';
import { useDispatch } from 'react-redux';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Home = (props) => {

  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [currentId, dispatch]);


    return (
    <Grow in>
       <Container>
      <div >
      <Stack className={classes.stack}
        direction="row"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Button variant="outlined">Gallery View</Button>
        <Button variant="outlined">Detailed View</Button>
        <Button variant="outlined">List View</Button>
      </Stack>
    </div>
         <Grid className={classes.adjustTop} container justify="space-between" alignItems="stretch" spacing={3}>
           <Grid item xs={12} sm={12}>
             <Categories setCurrentId={setCurrentId} />
           </Grid>
         </Grid>
       </Container>
     </Grow>

    )
}

export default Home


