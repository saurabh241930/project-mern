import React from "react";
import useStyles from "./styles";
import { Grid, Typography, TextField, Box, Button, Paper } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { signup } from "../../actions/auth";
import { AUTH } from "../../constants/actionTypes";
import Input from "../../components/Utils/CustomInput";

const RegisterClient = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const [addNewClient, setAddNewClient] = React.useState(false);
  const [client, setExistingClient] = React.useState(null);
  const [formData, setFormData] = React.useState({
    email: "",
    name: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAddNewClient = () => {
    if (addNewClient) {
      setAddNewClient(false);
    } else {
      setAddNewClient(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(signup(formData, history));
  };

  const classes = useStyles();
  return (
    <Grid container className={classes.container} spacing={3}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h3">
          Register New Client
        </Typography>
      </Grid>

      <Grid
        className={classes.addNewClient}
        container
        rowSpacing={2}
        xs={12}
        sm={6}
        md={4}
      >
        <Grid item xs={12}>
          <Typography variant="h5">Client Details</Typography>
        </Grid>
        {addNewClient ? (
          <>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid item xs={12} sm={12} md={12} container rowSpacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleAddNewClient}
                  >
                    Select from existing client
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Input
                    name="name"
                    label="Contact person name"
                    handleChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Input
                    name="email"
                    label="Contact person Email"
                    handleChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Input
                    name="contact"
                    label="Contact No"
                    handleChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Button type="submit" variant="contained">
                    Submit new client details
                  </Button>
                </Grid>
              </Grid>
            </form>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={12} md={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Existing Client
                </InputLabel>
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
              <Button variant="outlined" fullWidth onClick={handleAddNewClient}>
                Add new Client
              </Button>
            </Grid>
          </>
        )}
      </Grid>

      <Grid
        className={classes.presentationDetails}
        container
        rowSpacing={2}
        item
        xs={12}
        sm={6}
        md={4}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h5">Presentation Details</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
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
    </Grid>
  );
};

export default RegisterClient;
