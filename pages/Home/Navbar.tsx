import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import { Navbar } from '../styles/style';
import { useStyles } from "../styles/style";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 160;
const navItems = ['Home', 'Test-me', 'Schedule-visit', 'Message'];


export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar>
        <AppBar className={classes.navbar} component="nav" sx={{backgroundColor: 'white', color: 'black', padding: '14px 18px'}}>
          <Toolbar>
            <ArrowRightAltIcon sx={{ mr: 4, transform:"rotateY(180deg)",  display: { xs: 'none', sm: 'block' } }} className={classes.Navicon}/>
            <ArrowLeftIcon  sx={{ display: { xs: 'block', sm: 'none', marginRight: '10px' } }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Zealthy
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: 'black',mr: 2 }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Avatar src="/broken-image.jpg"  sx={{  ml:4, pt: "5px", textAlign: 'center', justifyContent: 'center', backgroundColor: '#8ACDA0', display: { xs: 'none', sm: 'block'}}} />
          </Toolbar>
        </AppBar>
      </Navbar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}