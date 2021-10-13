import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Angle from './Angle/Angle';
import useStyles from './styles';

const Angles = ({ setCurrentId }) => {
const angles = useSelector((state) => state.angles);
console.log(angles);
const classes = useStyles();

  return (
    !angles.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {angles.map((angle) => (
          <Grid key={angle._id} item xs={12} sm={6} md={6}>
            <Angle angle={angle} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Angles;


// import React from 'react'

// function Angles() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Angles
