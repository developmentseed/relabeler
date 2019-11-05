const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexGrow: 1
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolbar: {
    minHeight: 56,
    [theme.breakpoints.up('sm')]: {
      minHeight: 50
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    minHeight: '50px !important',
    height: '50px !important'
  },
  content: {
    flexGrow: 1,
    marginLeft: -drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  button: {
    position: 'absolute',
    right: '5px',
    color: '#fff !important',
    textTransform: 'uppercase',
    textDecoration: 'none',
    background: '#ed3330',
    display: 'inline-block',
    border: 'none',
    textAlign: 'center',
    width: '180px'
  }
});

export default styles;
