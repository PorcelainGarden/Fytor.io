import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import FlowerIcon from '@mui/icons-material/LocalFlorist';
import EventIcon from '@mui/icons-material/Event';
import IncomeIcon from '@mui/icons-material/AttachMoney';
import ExpensesIcon from '@mui/icons-material/MoneyOff';
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Opperation2Icon from '@mui/icons-material/Assignment';
import OpperationIcon from '@mui/icons-material/Construction';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="MENU"  />
    </Box>

      {/* Grid & Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridAutoRows="140px"
        gap="10px"
      >

        {/* Widget 1: My Plants */}
        <IconButton 
          component={Link}
          to="/plants" 
          style={{ borderRadius: 0, backgroundColor: colors.primary[400]}}
        >
            <Box
              gridColumn="span 1"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: colors.primary[400],
                },
              }}
            >
              <StatBox
                title="My Plants"
                icon={
                  <FlowerIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "60px" }}
                  />
                }
              />
            </Box>  
        </IconButton>
        

        {/* Widget 2: Events*/}
        <IconButton 
          component={Link}
          to="/events" 
          style={{ borderRadius: 0, backgroundColor: colors.primary[400]}}
        >
           <Box
            gridColumn="span 1"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="Events"
              icon={
                <EventIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "60px" }}
                />
              }
            />
          </Box>
        </IconButton>
       

        {/* Widget 3: Income */}
        <IconButton 
          component={Link}
          to="/income" 
          style={{ borderRadius: 0, backgroundColor: colors.primary[400]}}
        >
          <Box
            gridColumn="span 0.2"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="Income"
              icon={
                <IncomeIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "60px" }}
                />
              }
            />
          </Box>
        </IconButton>
        
        {/* Widget 4: Expenses */}
        <IconButton 
          component={Link}
          to="/expenses" 
          style={{ borderRadius: 0, backgroundColor: colors.primary[400]}}
        >
          <Box
            gridColumn="span 0.2"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="Expenses"
              icon={
                <ExpensesIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "60px" }}
                />
              }
            />
          </Box>
        </IconButton>

        {/* Widget 5: Opperations */}
        <IconButton 
          component={Link}
          to="/opperations" 
          style={{ borderRadius: 0, backgroundColor: colors.primary[400]}}
        >
          <Box
            gridColumn="span 0.2"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="Opperations"
              icon={
                <OpperationIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "60px" }}
                />
              }
            />
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Dashboard;
