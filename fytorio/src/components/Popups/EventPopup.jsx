import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button,} from "@mui/material";
import { MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel } from '@mui/material';
import { dataPlants } from "../../data/data";

function EventPopup({ open, handleClose, colors, includeDropdown }) {
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

  const handleAdd = () => {
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
          Add Event
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add an even, please enter the details below.
          </DialogContentText>
          

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Event Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ fontSize: "18px" }} 
            InputLabelProps={{sx: { fontSize: "18px", color: colors.greenAccent[500] },}}
            InputProps={{ sx: { fontSize: "18px" } }} 
            helperText="Enter the name of the event"
            FormHelperTextProps={{ sx: { fontSize: "16px" } }}
          />

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
            autoFocus
            margin="dense"
            id="damage"
            label="Damage"
            type="text"
            fullWidth
            variant="standard"
            sx={{ fontSize: "18px" }} 
            InputLabelProps={{sx: { fontSize: "18px", color: colors.greenAccent[500] },}}
            InputProps={{ sx: { fontSize: "18px" } }} 
            helperText="Enter the damage done"
            FormHelperTextProps={{ sx: { fontSize: "16px" } }}
          />
        
        <TextField
            margin="dense"
            id="comment"
            label="Comment"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            InputLabelProps={{sx: { color: colors.greenAccent[500] },}}
            sx={{ fontSize: "18px" }}
            InputLabelProps={{sx: { fontSize: "18px", color: colors.greenAccent[500] },}} 
            InputProps={{ sx: { fontSize: "18px" } }} 
            helperText="Enter a description for the plant"
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

export default EventPopup;
