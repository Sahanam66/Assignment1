import * as React from 'react';
import PropTypes from 'prop-types';
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
import img1 from '../assessts/MwRbsJrk7ItYxeL7mKvPzrq3g.png'
import CircleIcon from '@mui/icons-material/Circle';


const drawerWidth = 240;
const navItems = ['Features', 'FAQ', 'Pricing','Testimonials'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} background={'linear-gradient(180deg, #fdf2ec 0%, rgb(255, 255, 255)) 100%) 180%'}>
      
      <Typography variant="h6" style={{marginTop:'-10%'}} >
      <img src={img1} alt="" style={{width:'10%',marginTop:'13%'}}/>
        ManageWise
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding  onClick={()=>scrollTo(item)}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    console.log(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
      });
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" 
            style={{background:'#A68563'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },marginTop:'1%'}}
            color={'black'}
          >
            <img src={img1} alt="" style={{maxWidth:'8%',maxHeight:'8vh',marginTop:'-2%'}}/>
            
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'inline',margin:'auto 3%'} }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black','&:hover': {
                color: 'rgb(130, 71, 255)', 
              },}} onClick={()=>scrollTo(item)}  
                
            >
                {item} 
                {bull}
              </Button>
            ))}
            <Button variant="contained" sx={{background:'#fff',color:'black','&:hover': {
                bgcolor: 'rgb(130, 71, 255)',
                 color:'white'
              }}}>Buy Template</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}

        >
          {drawer   }
         
        </Drawer>
      </nav>
     
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
