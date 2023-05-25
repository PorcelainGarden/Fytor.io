import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function TaskPopup({ open, handleClose, colors }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [workersNumber, setWorkersNumber] = useState("");
  const [cost, setCost] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleWorkersNumberChange = (event) => {
    setWorkersNumber(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleAddPlant = () => {
    // Handle the logic for adding the plant with the selected data
    console.log("Adding plant...");
    console.log("Selected Date:", selectedDate);
    console.log("Workers Number:", workersNumber);
    console.log("Cost:", cost);

    // Close the dialog
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { backgroundColor: colors.primary[500] } }}
      >
        <DialogTitle sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Add Task
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a task, please enter the details below.
          </DialogContentText>
          

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ fontSize: "18px" }} 
            InputLabelProps={{sx: { fontSize: "18px", color: colors.greenAccent[500] },}}
            InputProps={{ sx: { fontSize: "18px" } }} 
            helperText="Enter the name of the task"
            FormHelperTextProps={{ sx: { fontSize: "16px" } }}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDateTimePicker
              label="Select Date and Time"
              value={selectedDate}
              onChange={handleDateChange}
              fullWidth
              inputVariant="standard" 
              sx={{ marginBottom: "1px", marginTop:"20px" }}
            />
          </LocalizationProvider>
                  
          <TextField
            margin="dense"
            id="workersNumber"
            label="Workers Number"
            type="number"
            fullWidth
            value={workersNumber}
            onChange={handleWorkersNumberChange}
            variant="standard"
            sx={{ marginBottom: "16px" }}
            InputLabelProps={{
              sx: { fontSize: "18px", color: colors.greenAccent[500] },
            }}
            InputProps={{ sx: { fontSize: "18px" } }}
            helperText="Enter the number of workers"
            FormHelperTextProps={{ sx: { fontSize: "16px" } }}
          />

          <TextField
            margin="dense"
            id="cost"
            label="Cost"
            type="number"
            fullWidth
            value={cost}
            onChange={handleCostChange}
            variant="standard"
            InputLabelProps={{
              sx: { fontSize: "18px", color: colors.greenAccent[500] },
            }}
            InputProps={{ sx: { fontSize: "18px" } }}
            helperText="Enter the cost in $"
            FormHelperTextProps={{ sx: { fontSize: "16px" } }}
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{color: colors.greenAccent[500], fontWeight: "bold", fontSize: "14px",}}>
            Cancel
          </Button>

          <Button
            onClick={handleClose}
            sx={{color: colors.greenAccent[500], fontWeight: "bold", fontSize: "14px",}}>
            Add
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TaskPopup;
