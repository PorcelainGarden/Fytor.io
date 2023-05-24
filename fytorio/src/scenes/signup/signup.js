import React from 'react';
import Lock from '@mui/icons-material/Lock';
import Mail from '@mui/icons-material/Mail';
import {
    Button, CssBaseline, TextField, Link, Grid, Box, InputAdornment, Container, 
    Typography, styled, useTheme, ThemeProvider
} from '@mui/material/';

function Signup() {
    const theme = useTheme();

    const useStyles = styled((theme) => ({
        paper: {
          marginTop: theme.spacing(4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px',
          backgroundColor: 'white',
          borderradius: '4px',
          boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
        },
        inputF:{
      
        },
        avatar: {
          margin: theme.spacing(2),
        },
        form: {
          width: '100%',
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        signup: {
          margin: theme.spacing(-2, 0, 2),
        },
      }));

    const classes = useStyles();
  
    return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingLeft:90 }}>
        <div className={classes.paper}>
          
        {/* Logo */}
        <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
        >   
          <Grid item xs={9}>
          <img src={`../../assets/logo.png`} maxWidth="300" alt="Logo" className={classes.avatar} />
          </Grid>
        </Grid>
          
          {/* Sign up Label */}
          <Typography component="div">
            <Box fontSize={30} fontWeight={600} m={1}>
                     Sign up
            </Box>
          </Typography>

          {/* Create an account Label */}
          <Typography component="div">
            <Box fontSize={16} m={1} paddingT>
              Create an account
            </Box>
          </Typography>

          <form className={classes.form} noValidate>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
              {/* First Name Textfield */} 
              <Grid item xs={9}>
                <TextField
                  className={classes.inputF}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                  InputLabelProps={{ style: { fontSize: "16px" } }} 
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><Mail color="disabled"/></InputAdornment>,
                  }}
                />
              </Grid>

              {/* Last Name Textfield */}
              <Grid item xs={9}>
                <TextField
                  className={classes.inputF}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  InputLabelProps={{ style: { fontSize: "16px" } }} 
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><Mail color="disabled"/></InputAdornment>,
                  }}
                />
              </Grid>

              {/* Email Textfield */}
              <Grid item xs={9}>
                <TextField
                  className={classes.inputF}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"      
                  InputLabelProps={{ style: { fontSize: "16px" } }} 
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><Mail color="disabled"/></InputAdornment>, }}
                />
              </Grid>
  
              {/* Password Textfield */}
              <Grid item xs={9}>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{ style: { fontSize: "16px" } }} 
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Lock color="disabled" /></InputAdornment>, }}
                />
              </Grid>
 
              {/* Sign Up Button */}
              <Grid item xs={9} >
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                sx={{ fontSize: '19px', fontWeight: 'bold' }} 
                m={0}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        </div> 
      </Container>
      </ThemeProvider>
    );
  }

  export default Signup;
