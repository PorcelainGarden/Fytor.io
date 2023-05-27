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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers';

function IrrigationPopup({ open, handleClose, colors }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hours, setHours] = useState("");
  const [cost, setCost] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleAddPlant = () => {
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
          Add An Irrigation 
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add an irrigation, please enter the details below.
          </DialogContentText>
          
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Select Date"
              value={selectedDate}
              onChange={handleDateChange}
              fullWidth
              inputVariant="standard" 
              sx={{ marginBottom: "1px", marginTop:"20px" }}
            />
          </LocalizationProvider>

          <TextField
            margin="dense"
            id="hours"
            label="Hours"
            type="number"
            fullWidth
            value={hours}
            variant="standard"
            InputLabelProps={{sx: { fontSize: "18px", color: colors.greenAccent[500] },}}
            InputProps={{ sx: { fontSize: "18px" } }}
            helperText="Input the hours"
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
            InputLabelProps={{sx: { fontSize: "18px", color: colors.greenAccent[500] },}}
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

export default IrrigationPopup;
