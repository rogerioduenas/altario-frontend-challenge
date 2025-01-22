import React, { useContext } from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import AboutContext from '@/context/aboutContext';
import styles from './style.module.scss';
import {
  AppBar,
  ListItemText,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Button,
} from "@mui/material";

const navItems = ['Features', 'About Us'];

function HeaderMenu(props) {
  const { setAboutOpen } = useContext(AboutContext)
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = item => {
    if (item === 'About Us') {
      return setAboutOpen(true)
    }
    return setAboutOpen(false)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className={styles.drawer}>
      <img
        onClick={() => setAboutOpen(false)}
        src="assets/images/logo.svg"
        alt="company logo"
        height="23px"
        width="96px"
      />
      <List>
        <Divider />
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton
              onClick={() => handleClick(item)}>
              <Link href={`#${item.toLowerCase()}`}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <Button
          className={styles.drawerLogin}>
          Log In
        </Button>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        className={styles.appBar}>
        <Toolbar
          className={styles.toolbar}>
          <img
            onClick={() => setAboutOpen(false)}
            src="assets/images/logo.svg"
            alt="company logo"
          />
          <IconButton
            className={styles.iconButton}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Box
            className={styles.navItems}
            sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}>
                <Button
                  onClick={() => handleClick(item)}
                  className={styles.buttonItem}>
                  {item}
                </Button>
              </Link>
            ))}
            <Button
              className={`${styles.buttonItem} ${styles.loginButton}`}>
              Log In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        aria-hidden="false"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}>
        {drawer}
      </Drawer>
    </Box>
  );
}

export default HeaderMenu;