import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BodyMainSaveData from './component/slidebar/BodyMainSaveData';
import Home from './component/slidebar/Home';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from './component/listItems';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BodyMainPromiseMoney from './component/slidebar/BodyMainPromiseMoney';
import BodyMainDataBacklist from './component/slidebar/BodyMainDataBlaklist';
import BodyMainHistory from './component/slidebar/BodyMainHistory';
import BodyMainDataDebtor from './component/slidebar/BodyMainDataDebtor';
import BodyMainSaveDate from './component/slidebar/BodyMainSaveDate';
import BodyMainPrintSlip from './component/slidebar/BodyMainPrintSlip';
import logo from './component/logo/yellow.png';
import { Paper } from '@mui/material';



const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(8),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(0),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


const App = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />
        <AppBar position="absolute" open={open}
        >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}

              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* กระดิ่งแจ้งเตือน */}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}

            >
              {/* ชื่อบริษัท */}
              <img style={{ width: '50px', marginRight: '15px' }} src={logo} alt='Logo' />
              <b>ONE_LEASING</b>
            </Typography>
            {/* กระดิ่งแจ้งเตือน */}
            <IconButton color="inherit">
              {/* <Badge badgeContent={4} color="secondary"> */}
              <AccountCircleIcon />
              {/* </Badge> */}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          {/* ลูกศร toolbar */}
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1], }}>
            <IconButton onClick={toggleDrawer}>
              {/* ดึงชื่อมาโชว์ได้ */}
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          {/* NavBar Menu */}
          <List component="nav">
            {/* จาก listItem */}
            {mainListItems}
          </List>
        </Drawer>
        {/* main box */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
            <Grid item sx={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/body_main_savedata' element={<BodyMainSaveData />} />
                  <Route path='/body_main_savepromise_money' element={<BodyMainPromiseMoney />} />
                  <Route path='/body_main_search_data_backlist' element={<BodyMainDataBacklist />} />
                  <Route path='/body_main_history' element={<BodyMainHistory />} />
                  <Route path='/body_main_data_debtor' element={<BodyMainDataDebtor />} />
                  <Route path='/body_main_savedate' element={<BodyMainSaveDate />} />
                  <Route path='/body_main_print_slip' element={<BodyMainPrintSlip />} />
                </Routes>
              </Paper>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
