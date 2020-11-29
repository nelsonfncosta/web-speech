import React from 'react';
import clsx from 'clsx';

import { Divider, Drawer, IconButton, List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mainListItems } from './listItems';
import { useStyles } from './styles';

export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div>
        {open ? (
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerOpen}>
            <ChevronRightIcon />
          </IconButton>
        )}
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
    </Drawer>
  );
}
