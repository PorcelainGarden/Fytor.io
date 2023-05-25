import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, IconButton, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";

const Card = ({ data, link }) => {
  
  return (
    <Box mt={2}>
        
      {data.map((value) => (
        <Grid key={value.id} container spacing={1.5} alignItems="center">

          <Grid item xs={7.5}>
            <Typography variant="subtitle1" fontSize="17px">
              {value.name}
            </Typography>
          </Grid>

          <Grid item xs={1.4}>
            <IconButton component={Link} to={`${link}?id=${value.id}`}>
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
      ))}
      <Divider />
    </Box>
  );
};

export default Card;
