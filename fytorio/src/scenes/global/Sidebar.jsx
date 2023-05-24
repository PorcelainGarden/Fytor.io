import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import FlowerIcon from '@mui/icons-material/LocalFlorist';
import EventIcon from '@mui/icons-material/Event';
import IncomeIcon from '@mui/icons-material/AttachMoney';
import ExpensesIcon from '@mui/icons-material/MoneyOff';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        marginBottom: '20px',
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography style={{ fontSize: '18px' }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const collapsedWidth = 70; 
  const uncollapsedWidth = 160; 

  return (
    <Box
      sx={{
        "& .pro-sidebar.collapsed": {
          width: collapsedWidth,
        },
        "& .pro-sidebar.collapsed .pro-sidebar-inner": {
          width: collapsedWidth,
        },
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "20px 10px 5px 15px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} width={isCollapsed ? collapsedWidth : uncollapsedWidth}>
        <Menu >
          {/* LOGO */}
          <MenuItem
            onClick={() =>
              setIsCollapsed(!isCollapsed)
            }
            icon={isCollapsed ? <MenuOutlinedIcon style={{ fontSize: 40 }}/> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center" 
                ml="1px"
              >
                <Typography variant="h3"  color={colors.grey[100]} >
                  FYTOR.IO
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon style={{ fontSize: 30 }}/>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="logo"
                  width="100px"
                  height="100px"
                  src={`../../assets/logo.png`} 
                  style={{ cursor: "pointer", borderRadius: "20%" }}
                />
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Menu"
              to="/"
              icon={<HomeOutlinedIcon style={{ fontSize: 40 }}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Plants"
              to="/plants"
              icon={<FlowerIcon style={{ fontSize: 40 }}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Events"
              to="/events"
              icon={<EventIcon style={{ fontSize: 40 }}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Income"
              to="/income"
              icon={<IncomeIcon style={{ fontSize: 40 }}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Expenses"
              to="/expenses"
              icon={<ExpensesIcon style={{ fontSize: 40 }}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Logout"
              to="/logout"
              icon={<LogoutIcon style={{ fontSize: 40 }}/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
