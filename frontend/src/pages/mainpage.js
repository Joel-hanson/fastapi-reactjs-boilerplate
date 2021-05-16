import React from 'react';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 0,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  return React.cloneElement(children, {
    elevation: 0,
  });
}

// function StyledRadio(props) {
//   const classes = useStyles();

//   return (
//     <Radio
//       className={classes.root}
//       disableRipple
//       color="default"
//       checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
//       icon={<span className={classes.icon} />}
//       {...props}
//     />
//   );
// }

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [dialOpen, setDialOpen] = React.useState(false);

  const handleOpen = () => {
    setDialOpen(true);
  };

  const handleClose = () => {
    setDialOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <ElevationScroll {...props}>
        <AppBar
          color="transparent"
          position="relative"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon color="primary"/>
            </IconButton>

            <div className={classes.toolbarButtons}>
              <IconButton aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton aria-label="notification" color="inherit" style={{paddingRight: "0px"}}>
                <NotificationsIcon />
              </IconButton>
            </div>
          </Toolbar>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
            // style={{height: "100%"}}
          >
            {/* <div className={classes.drawerHeader} /> */}
            <FormGroup style={{margin: "40px 0", width: "100%", whiteSpace: 'nowrap'}}>
            {['Daily meeting with team', 'Pay rent', 'Check emails', 'Lunch with Nirmal', 'Meditation'].map((text, index) => (
                <FormControlLabel
                  index={index}
                  control={<Checkbox icon={<RadioButtonUncheckedIcon style={{color: 'white'}}/>} checkedIcon={<CheckCircleIcon style={{color: "#041955"}}/>} name="checked" />}
                  label={text}
                  style={{margin: "4px 0", background: '#3450A1', color: 'white', borderRadius: "16px", padding: "4px"}}
                />
                ))}
            </FormGroup>
          </main>
        </AppBar>
      </ElevationScroll>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Categories', 'Analytics'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} key={index}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        icon={<SpeedDialIcon openIcon={() => {}}/>}
        onClose={handleClose}
        onOpen={handleOpen}
        open={dialOpen}
      >
      </SpeedDial>
    </div>
  );
}
