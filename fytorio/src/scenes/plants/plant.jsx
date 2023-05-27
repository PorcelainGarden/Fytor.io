import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, { useState } from "react";
import { Box,useTheme, Typography, Button, Grid, Divider } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { dataTasks, dataChemicals, dataPlants, dataIrrigations, dataExpenses, dataIncome } from "../../data/data";
import Card from "../../components/Card";
import PlantPopup from "../../components/Popups/PlantPopup";
import TaskPopup from "../../components/Popups/TaskPopup";
import FertilizerPopup from "../../components/Popups/FertilizerPopup";
import IrrigationPopup from "../../components/Popups/IrrigationPopup";
import EventPopup from "../../components/Popups/EventPopup";
import ExpensePopup from "../../components/Popups/ExpensePopup";
import IncomePopup from "../../components/Popups/IncomePopup";

const Plant = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openPopup, setOpenPopup] = useState(null);
  
   // Using the id from url to fetch the specific plant
  const searchParams = new URLSearchParams(window.location.search);
  const currentId = parseInt(searchParams.get('id'));
  const plant = dataPlants.find((plant) => plant.id === currentId);
  const { name, description } = plant;

  // Data filtering
  const filteredTasks = dataTasks.filter((value) => value.plantId === currentId);
  const filteredChemicals = dataChemicals.filter((value) => value.plantId === currentId);
  const filteredIrrigations = dataIrrigations.filter((value) => value.plantId === currentId);
  const filteredExpenses = dataExpenses.filter((value) => value.plantId === currentId);
  const filteredIncome = dataIncome.filter((value) => value.plantId === currentId);
  
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
      <Card data={filteredTasks} link="/plant" />

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
              onClick={() => addButtonClick("chemical")}>
              Add New
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Card data={filteredChemicals} link="/chemicals" />

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
              onClick={() => addButtonClick("irrigation")}>
              Add New
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Card data={filteredIrrigations} link="/irrigations" />

      <Divider />
      <Box mt={2}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography variant="subtitle1" fontSize="25px" color={colors.greenAccent[600]} fontWeight="bold">
              Events
            </Typography>
          </Grid>
          <Grid item alignItems="right">
            <Button variant="contained" alignItems="center" fontSize="17px" startIcon={<AddCircleOutline />}
              onClick={() => addButtonClick("event")}>
              Add New
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Card data={filteredIrrigations} link="/events" />

      <Divider />
      <Box mt={2}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography variant="subtitle1" fontSize="25px" color={colors.greenAccent[600]} fontWeight="bold">
              Income
            </Typography>
          </Grid>
          <Grid item alignItems="right">
            <Button variant="contained" alignItems="center" fontSize="17px" startIcon={<AddCircleOutline />}
              onClick={() => addButtonClick("event")}>
              Add New
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Card data={filteredIncome} link="/income" />

      <Divider />
      <Box mt={2}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography variant="subtitle1" fontSize="25px" color={colors.greenAccent[600]} fontWeight="bold">
              Expenses
            </Typography>
          </Grid>
          <Grid item alignItems="right">
            <Button variant="contained" alignItems="center" fontSize="17px" startIcon={<AddCircleOutline />}
              onClick={() => addButtonClick("expense")}>
              Add New
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Card data={filteredExpenses} link="/expenses" />

      {openPopup === "plant" && <PlantPopup open={true} handleClose={handleClose} colors={colors} />}
      {openPopup === "task" && <TaskPopup open={true} handleClose={handleClose} colors={colors} />}
      {openPopup === "chemical" && <FertilizerPopup open={true} handleClose={handleClose} colors={colors} />}
      {openPopup === "irrigation" && <IrrigationPopup open={true} handleClose={handleClose} colors={colors} />}
      {openPopup === "event" && <EventPopup open={true} handleClose={handleClose} colors={colors} />}
      {openPopup === "income" && <IncomePopup open={true} handleClose={handleClose} colors={colors} />}
      {openPopup === "expense" && <ExpensePopup open={true} handleClose={handleClose} colors={colors} />}
    
    </Box>
  );
};

export default Plant;
