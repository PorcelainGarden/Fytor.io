import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, { useState } from "react";
import { Box,useTheme,Typography,Button,Grid,Divider } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { dataTasks, dataChemicals } from "../../data/data";
import Card from "../../components/Card";
import PlantPopup from "../../components/Popups/PlantPopup";
import TaskPopup from "../../components/Popups/TaskPopup";
import FertilizerPopup from "../../components/Popups/FertilizerPopup";
import { dataPlants } from "../../data/data";

const Plant = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openPopup, setOpenPopup] = useState(null);
  const searchParams = new URLSearchParams(window.location.search);
  const linkID = parseInt(searchParams.get('id'));
  const plant = dataPlants.find((plant) => plant.id === linkID);
  // Access the variables of the plant
  const { name, description } = plant;



  const addButtonClick = (popupName) => {
    setOpenPopup(popupName);
  };

  const handleClose = () => {
    setOpenPopup(null);
  };

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="My Plants" />
      </Box>

      <Box>
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          fontSize="25px"
          color={colors.greenAccent[600]}
        >
          {name}
        </Typography>
        <Grid container alignItems="flex-start" justifyContent="flex-start" style={{ height: 100 }}>
          <Grid item xs={12} alignItems="flex-start" justifyContent="flex-start">
            <Typography variant="body1" fontSize="17px">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />
      <Box mt={2}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography variant="subtitle1" fontSize="25px" color={colors.greenAccent[600]} fontWeight="bold">
              Tasks
            </Typography>
          </Grid>
          <Grid item alignItems="right">
            <Button variant="contained" alignItems="center" fontSize="17px" startIcon={<AddCircleOutline />}
              onClick={() => addButtonClick("task")}>
              Add New
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Card data={dataTasks} link="/plant" />

      <Divider />
      <Box mt={2}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography variant="subtitle1" fontSize="25px" color={colors.greenAccent[600]} fontWeight="bold">
              Pesticides / Fertilizers
            </Typography>
          </Grid>
          <Grid item alignItems="right">
            <Button variant="contained" alignItems="center" fontSize="17px" startIcon={<AddCircleOutline />}
              onClick={() => addButtonClick("chemicals")}>
              Add New
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Card data={dataChemicals} link="/chemicals" />


      <Divider />
      <Box mt={2}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography variant="subtitle1" fontSize="25px" color={colors.greenAccent[600]} fontWeight="bold">
              Irrigation
            </Typography>
          </Grid>
          <Grid item alignItems="right">
            <Button variant="contained" alignItems="center" fontSize="17px" startIcon={<AddCircleOutline />}
              onClick={() => addButtonClick("plant")}>
              Add New
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Card data={dataTasks} link="/plant" />
      {openPopup === "plant" && <PlantPopup open={true} handleClose={handleClose} colors={colors} />}
      {openPopup === "task" && <TaskPopup open={true} handleClose={handleClose} colors={colors} />}
      {openPopup === "chemicals" && <FertilizerPopup open={true} handleClose={handleClose} colors={colors} />}
    </Box>
  );
};


export default Plant;
