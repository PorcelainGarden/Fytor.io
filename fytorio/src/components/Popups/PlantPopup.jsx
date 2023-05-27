import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

function PlantPopup({ open, handleClose, colors }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { backgroundColor: colors.primary[500] } }}
      >
        <DialogTitle sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Add Plant
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a plant, please enter the details below.
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Plant Name"
            type="text"
            fullWidth
            variant="standard"
            sx={{ fontSize: "18px" }} // Adjust the font size as desired
            InputLabelProps={{sx: { fontSize: "18px", color: colors.greenAccent[500] },}} // Adjust the font size of the label
            InputProps={{ sx: { fontSize: "18px" } }} // Adjust the font size of the input
            helperText="Enter the name of the plant"
            FormHelperTextProps={{ sx: { fontSize: "16px" } }} // Adjust the font size of the helper text
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            InputLabelProps={{sx: { color: colors.greenAccent[500] },}}
            sx={{ fontSize: "18px" }} // font size as desired
            InputLabelProps={{sx: { fontSize: "18px", color: colors.greenAccent[500] },}} // font size of the label
            InputProps={{ sx: { fontSize: "18px" } }} //font size of the input
            helperText="Enter a description for the plant"
            FormHelperTextProps={{ sx: { fontSize: "16px" } }} // font size of the helper text
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

export default PlantPopup;