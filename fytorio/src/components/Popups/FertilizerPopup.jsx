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
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { dataPlants } from "../../data/data";

function FertilizerPopup({ open, handleClose, colors, includeDropdown }) {
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
          Add Pesticide / Fertilizer 
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a pesticide or fertilizer, please enter the details below.
          </DialogContentText>
          
        <DialogContentText>
          <InputLabel sx={{fontSize: "18px",color: colors.greenAccent[500],  marginTop: "16px",}}>
            Type
          </InputLabel>
        </DialogContentText>

        <FormControl sx={{ minWidth: 170 }}>
            <Select displayEmpty >
            <MenuItem >Pesticide</MenuItem>
            <MenuItem >Fertilizer</MenuItem>
            </Select>
            <FormHelperText sx={{ fontSize: "16px",}}>
                Enter the correct type
            </FormHelperText>
        </FormControl>

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

          {includeDropdown && (
            <FormControl fullWidth sx={{ marginTop: "16px" }}>
              <InputLabel sx={{ fontSize: "18px", color: colors.greenAccent[500] }}>
                Select Plant
              </InputLabel>
              <Select sx={{ fontSize: "18px" }} >
                {[...dataPlants].reverse().map((plant) => (
                  <MenuItem key={plant.id} value={plant.id}>
                    {plant.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

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

export default FertilizerPopup;
