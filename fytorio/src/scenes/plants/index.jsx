import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, { useState } from "react";
import {Box,useTheme,Typography,Button,IconButton,Grid,Divider} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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

      <Box mt={2}>
        <Grid container spacing={1.5} alignItems="center">
          <Grid item xs={7.5}>
            <Typography variant="subtitle1" fontSize="17px">
              Plant Name
            </Typography>
          </Grid>
          <Grid item xs={1.4}>
            <IconButton component={Link} to="/plant">
              <PreviewIcon color="secondary" />
            </IconButton>
          </Grid>
          <Grid item xs={1.4}>
            <IconButton >
              <EditIcon color="secondary" />
            </IconButton>
          </Grid>
          <Grid item xs={1.4}>
            <IconButton>
              <DeleteIcon color="secondary" />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container spacing={1.5} alignItems="center">
          <Grid item xs={7.5}>
            <Typography variant="subtitle1" fontSize="17px">
              Plant Name
            </Typography>
          </Grid>
          <Grid item xs={1.4}>
            <IconButton component={Link} to="/plant">
              <PreviewIcon color="secondary" />
            </IconButton>
          </Grid>
          <Grid item xs={1.4}>
            <IconButton>
              <EditIcon color="secondary" />
            </IconButton>
          </Grid>
          <Grid item xs={1.4}>
            <IconButton>
              <DeleteIcon color="secondary" />
            </IconButton>
          </Grid>
        </Grid>

        <Divider />
      </Box>

      <AddPopup open={open} handleClose={handleClose} colors={colors}/>
    </Box>
  );
};

function AddPopup({ open, handleClose, colors }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} PaperProps={{ style: { backgroundColor: colors.primary[500] } }}>
        <DialogTitle sx={{ fontSize: '30px', fontWeight: 'bold' }}>Add Plant</DialogTitle>
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
            sx={{ fontSize: '18px' }} // Adjust the font size as desired
            InputLabelProps={{ sx: { fontSize: '18px', color: colors.greenAccent[500] } }} // Adjust the font size of the label
            InputProps={{ sx: { fontSize: '18px' } }} // Adjust the font size of the input
            helperText="Enter the name of the plant"
            FormHelperTextProps={{ sx: { fontSize: '16px' } }} // Adjust the font size of the helper text
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            InputLabelProps={{ sx: { color: colors.greenAccent[500] } }}
            sx={{ fontSize: '18px' }} // Adjust the font size as desired
            InputLabelProps={{ sx: { fontSize: '18px', color: colors.greenAccent[500] } }} // Adjust the font size of the label
            InputProps={{ sx: { fontSize: '18px' } }} // Adjust the font size of the input
            helperText="Enter a description for the plant"
            FormHelperTextProps={{ sx: { fontSize: '16px' } }} // Adjust the font size of the helper text       
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: colors.greenAccent[500], fontWeight: 'bold', fontSize: '14px'}}>Cancel</Button>
          <Button onClick={handleClose} sx={{ color: colors.greenAccent[500], fontWeight: 'bold', fontSize: '14px'}}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Plants;