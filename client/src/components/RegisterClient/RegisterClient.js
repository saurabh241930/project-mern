import React from 'react'
import useStyles from './styles';
import { Grid ,Typography,TextField, Box,Button} from '@mui/material';
import Input from '../Utils/CustomInput'
import { DateTimePicker,LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';






const RegisterClient = (props) => {

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const [addNewClient,setAddNewClient] = React.useState(false)
    const [client,setExistingClient] = React.useState(null)

    const handleChange = () =>{

    }
    const handleAddNewClient = () => {
        setAddNewClient(true)
    } 

    const classes = useStyles();
    return (

        <Grid container className={classes.container}  spacing={3}>
        <Grid item xs={12}>
        <Typography variant="h3">Register New Client</Typography>
        </Grid>
        

        <Grid container rowSpacing={2} item xs={12} sm={6} md={4}>
            <Grid item xs={12}>
                <Typography variant="h5">Client Details</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Existing Client</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={client}
                label="Select Existing"
                onChange={handleChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button variant="contained" fullWidth onClick={handleAddNewClient}>Add new Client</Button>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <Input name="clientName" label="Contact person name" handleChange={handleChange}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Input name="clientName" label="Contact person Email" handleChange={handleChange}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Input name="clientName" label="Contact No" handleChange={handleChange}/> 
            </Grid>

        </Grid>

        

        <Grid item xs={12} sm={6} md={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                label="Set Presentation Time"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        
        </Grid>
        </Grid>
    )
}

export default RegisterClient;
