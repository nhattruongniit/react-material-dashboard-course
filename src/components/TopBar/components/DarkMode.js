import React, { useState } from 'react';

// material core
import IconButton from '@material-ui/core/IconButton';

// material icon
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

function DarkMode() {
  const [theme, setTheme] = useState('light');

  const _handleChangeTheme = () => {
    const type = theme === 'light' ? 'dark' : 'light';
    setTheme(type);
  };

  return (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      title="Change Theme"
      onClick={_handleChangeTheme}
    >
      {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}

export default DarkMode;
