import React, { useState } from "react";
import {Dialog,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions,Button,} from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel } from '@mui/material';
import { dataPlants } from "../../data/data";

function IncomePopup({ open, handleClose, colors, includeDropdown }) {
  const [workersNumber, setWorkersNumber] = useState("");
  const [cost, setCost] = useState("");

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
          Add Income
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add an income, please enter the details below.
          </DialogContentText>
          

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Income Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ fontSize: "18px" }} 
            InputLabelProps={{sx: { fontSize: "18px", color: colors.greenAccent[500] },}}
            InputProps={{ sx: { fontSize: "18px" } }} 
            helperText="Enter a name for the the income"
            FormHelperTextProps={{ sx: { fontSize: "16px" } }}
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="income"
            label="Income"
            type="number"
            fullWidth
            variant="standard"
            sx={{ fontSize: "18px" }} 
            InputLabelProps={{sx: { fontSize: "18px", color: colors.greenAccent[500] },}}
            InputProps={{ sx: { fontSize: "18px" } }} 
            helperText="Enter the income in $"
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

export default IncomePopup;
