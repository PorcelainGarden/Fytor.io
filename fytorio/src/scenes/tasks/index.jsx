import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, { useState } from "react";
import { Box,useTheme, Typography, Button, Grid, Divider } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { dataTasks } from "../../data/data";
import Card from "../../components/Card";
import TaskPopup from "../../components/Popups/TaskPopup";

const Tasks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openPopup, setOpenPopup] = useState(null);

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
        <Header title="All Tasks" />
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
      <Card data={dataTasks} usePrefix="true" link="/tasks" />

      {openPopup === "task" && <TaskPopup open={true} includeDropdown="true" handleClose={handleClose} colors={colors} />}
    </Box>
  );
};

export default Tasks;
