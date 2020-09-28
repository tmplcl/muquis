import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { TopBar } from './TopBar';
import { SideBar } from './SideBar';

const drawerWidth = 240;

export const appStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  return (
    <div className={appStyle().root}>
      <CssBaseline />
      <TopBar/>
      <SideBar/>
      <main className={appStyle().content}>
        <Toolbar />
        <Typography paragraph>
        </Typography>
        <Typography paragraph>
        </Typography>
      </main>
    </div>
  );
}