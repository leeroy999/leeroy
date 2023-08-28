
import './App.css';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, List, ListItem, ListItemButton, CssBaseline, Fab, Stack, Typography, AppBar, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { sidebar } from './constants';
import { useState } from 'react';

const drawerWidth = 240;

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  const toggleOpenDrawer = () => {
    setOpenDrawer(!openDrawer)
  };

  return (
    <Box display='flex'>
      <CssBaseline />
      <Box>
        <AppBar position="fixed" open={true}></AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
          }}
          variant="persistent"
          anchor="left"
          open={openDrawer}
        >
          <List>
            {sidebar.map(item => (
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  {item}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <Typography>test</Typography>
      <Collapse orientation="horizontal" in={openDrawer} collapsedSize={`calc(100% - ${drawerWidth}px)`}>
        <Fab
          onClick={toggleOpenDrawer}
        >
            <MenuIcon/>
        </Fab>
        <List>
          <ListItem>
            Test1
          </ListItem>
          <ListItem>
            Test2
          </ListItem>
        </List>
      </Collapse>
    </Box>
  );
}

export default App;
