import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HearingIcon from '@material-ui/icons/Hearing';
import MicIcon from '@material-ui/icons/Mic';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HearingIcon />
      </ListItemIcon>
      <ListItemText primary="Text To Speech" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MicIcon />
      </ListItemIcon>
      <ListItemText primary="Speech Recognition" />
    </ListItem>
  </div>
);
