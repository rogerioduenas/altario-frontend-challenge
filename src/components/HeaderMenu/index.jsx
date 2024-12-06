import React from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
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
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className={styles.drawer}>
      <img
        src="assets/images/logo.svg"
        alt="company logo"
        height="23px"
        width="96px"
      />
      <List>
        <Divider />
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton>
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
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}>
                <Button
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