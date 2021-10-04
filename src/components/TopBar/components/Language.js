import React, { useState, memo } from 'react';

// material core
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

// material icon
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Language({ ...classes }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState('en');

  const _handleOpenLanguage = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChooseLanguage = (lang) => () => {
    setAnchorEl(null);
    setLanguage(lang);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderTextLanguage = () => {
    switch (language) {
      case 'en': {
        return 'ENGLISH';
      }
      case 'vn': {
        return 'VIETNAMESE';
      }
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        className={classes.menuLanguage}
        aria-controls="simple-menu"
        title="Change Language"
        aria-haspopup="true"
        onClick={_handleOpenLanguage}
      >
        {renderTextLanguage()} <ExpandMoreIcon />
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem selected={language === 'en'} onClick={handleChooseLanguage('en')}>
          English
        </MenuItem>
        <MenuItem selected={language === 'vn'} onClick={handleChooseLanguage('vn')}>
          Vietnamese
        </MenuItem>
      </Menu>
    </>
  );
}

export default memo(Language);
