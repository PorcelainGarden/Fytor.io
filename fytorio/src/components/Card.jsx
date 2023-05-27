import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, IconButton, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";

import { dataPlants } from "../data/data";

const Card = ({ data, usePrefix, link }) => {
  
  const plantMapping = dataPlants.reduce((map, plant) => {
    map[plant.id] = plant.name;
    return map;
  }, {});

  return (
    <Box mt={2}>
      {data.length === 0 ? (
        <Typography variant="subtitle1" fontSize="17px">
          Nothing found.
        </Typography>
      ) : (
        <>
          {[...data].reverse().map((value) => {
            let namePref = "";

            if (usePrefix) {
              const plantName = plantMapping[value.plantId];
              if (plantName) namePref = " [" + plantName + "]";
              else namePref = "";
            }

            return (
              <Grid container spacing={1.5} alignItems="center" key={value.id}>
                <Grid item xs={7.5}>
                  <Typography variant="subtitle1" fontSize="17px">
                    {value.name + namePref}
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
            );
          })}
        </>
      )}
      <Divider />
    </Box>
  );
};

export default Card;
