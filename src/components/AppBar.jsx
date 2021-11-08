import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home'
import GavelIcon from '@mui/icons-material/Gavel';
import BiotechIcon from '@mui/icons-material/Biotech';
import GitHubIcon from '@mui/icons-material/GitHub';
import { download } from './../util'
import './AppBar.scss'

export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    opened:false
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, opened: open });
  };

  const list = () => (
    <Box
      sx={{width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemLink href="/home" button>
          <ListItemIcon>
            <HomeIcon color={window.location.pathname == '/home'? 'primary':''} />
          </ListItemIcon>
          <ListItemText className={"link-in-nav " + (window.location.pathname == '/home' ? 'linked':'MERDA')} primary="Home"/>          
        </ListItemLink>
        <ListItemLink href="/howWork" button>
          <ListItemIcon>
            <GavelIcon color={window.location.pathname == '/howWork'? 'primary':''}/>
          </ListItemIcon>
          <ListItemText className={"link-in-nav " + (window.location.pathname == '/howWork'? 'linked':'')} primary="Come funziona"/>          
        </ListItemLink>
        <ListItemLink href="/tecnology" button>
          <ListItemIcon>
            <BiotechIcon color={window.location.pathname == '/tecnology'? 'primary':''}/>
          </ListItemIcon>
          <ListItemText className={"link-in-nav " + (window.location.pathname == '/tecnology'? 'linked':'')} primary="Tecnologie utilizzate"/>  
        </ListItemLink>
        <ListItemLink href="https://github.com/mtttia/backup_env" target="_black" button>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText className="link-in-nav" primary="Github del progetto"/>          
        </ListItemLink>
        <ListItemLink href="https://github.com/mtttia" target="_black" button>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText className="link-in-nav" primary="Github dell'autore"/>
        </ListItemLink>
        
      </List>
    </Box>
  );
  return (    
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Backup Env
            </Typography>
          <Button color="inherit" onClick={ download }>Download</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor='left'
          open={state['opened']}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </Box>    
  );
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}