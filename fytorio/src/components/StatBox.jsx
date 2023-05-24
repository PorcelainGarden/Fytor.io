import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";


const StatBox = ({ title, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
   <Box width="100%" m="0 20px" textAlign="center">
    <Box alignItems="center">
      <Box fontSize={35} lineHeight={1.5}>{icon}</Box>
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: colors.grey[100],
            fontSize: 25,
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  </Box>
  );
};

export default StatBox;
