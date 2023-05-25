import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, { useState } from "react";
import {Box,useTheme,Typography,Button,Grid,Divider} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { dataPlants } from "../../data/data";
import Card from "../../components/Card";
import PlantPopup from "../../components/Popups/PlantPopup";

const Plants = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const addNewClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="My Plants" />
      </Box>

      <Divider />
      <Box mt={2}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography
              variant="subtitle1"
              fontSize="25px"
              color={colors.greenAccent[600]}
              fontWeight="bold"
            >
              Plants
            </Typography>
          </Grid>
          <Grid item alignItems="right">
            <Button
              variant="contained"
              alignItems="center"
              fontSize="17px"
              startIcon={<AddCircleOutline />}
              onClick={addNewClick}
            >
              Add New
            </Button>
          </Grid>
        </Grid>
      </Box>
      
      <Card data={dataPlants} link="/plant" />

      <PlantPopup open={open} handleClose={handleClose} colors={colors}/>
    </Box>
  );
};
export default Plants;