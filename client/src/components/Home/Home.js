import { getCategories } from '../../actions/categories';
import { Container, Grow,Grid ,Paper,Stack,Divider,Button,IconButton} from '@mui/material';
import React, { useState, useEffect } from 'react';
import CustomSnackbar from '../Snackbar/CustomSnackbar';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import useStyles from './styles';
import { styled } from '@mui/material/styles';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';



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
        justifyContent="end"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <IconButton><ListIcon/></IconButton>
        <IconButton ><GridViewIcon/></IconButton>
        <IconButton ><ZoomOutMapIcon/></IconButton>
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


