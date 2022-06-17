import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const style = {
  display: 'flex',
  justifyContent: 'end',
};

function BottomNavigationBeers() {

  return (
    <Box sx={style}>
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction label="Регистрация" href='/registration' />
        <BottomNavigationAction label="Авторизация" href='/login' />
      </BottomNavigation>
    </Box>
  );
}

export default BottomNavigationBeers