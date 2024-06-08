import { ReactElement, useState } from 'react';
import './App.css';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RestoreIcon from '@mui/icons-material/Restore';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { Outlet, useNavigate } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';
import React from 'react';

function App(): ReactElement {
  const [value, setValue] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const handleTabChange = (e: React.SyntheticEvent, newValue: string) => {
    console.log(e);
    setValue(newValue);
    navigate('/' + newValue);
  };
  return (
    <>
      <CssBaseline />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <AppBar position='sticky'>
          <Container maxWidth='sm'>
            <Toolbar>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='add'
                sx={{ mr: 2 }}
              >
                <AddIcon />
              </IconButton>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                ToDos
              </Typography>
              {
                <Box>
                  <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleMenu}
                    color='inherit'
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </Box>
              }
            </Toolbar>
          </Container>
        </AppBar>
        <Box>
          <Outlet />
        </Box>
        <Box position='sticky'>
          <BottomNavigation
            sx={{ position: 'fixed', bottom: 0, width: '100%' }}
            showLabels
            value={value}
            onChange={(e, value) => handleTabChange(e, value)}
          >
            <BottomNavigationAction
              label='Doing Tasks'
              value=''
              icon={<AssignmentIcon />}
            />
            <BottomNavigationAction
              label='Done Tasks'
              value='done'
              icon={<RestoreIcon />}
            />
          </BottomNavigation>
        </Box>
      </Box>
    </>
  );
}
export default App;
