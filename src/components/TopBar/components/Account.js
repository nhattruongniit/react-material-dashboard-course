import React, { useState, memo } from 'react';
import { useHistory } from 'react-router';

// material core
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

// material icon
import AccountCircle from '@material-ui/icons/AccountCircle';

function Account({ ...classes }) {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const _handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const _handleClose = () => {
    setAnchorEl(null);
  };

  const _handleLogout = () => {
    history.push('/login');
  };

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={_handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={_handleClose}
      >
        <div className={classes.textRole}>ADMIN</div>
        <Divider />
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={_handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default memo(Account);
