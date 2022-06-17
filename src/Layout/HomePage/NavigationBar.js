
import logo from "../../Assets/Image/HomePage/Logo.svg";
import {
  Grid,
  // styled, alpha.
  AppBar, Box, Toolbar, IconButton, Typography,
  // InputBase,
  Badge, MenuItem, Menu,
} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <>
      <Box>
        <Grid container className="homePage-Top" >
          <Grid item xs={12} className="homePage-Top__navigation">
            <Grid>
              <div>
                <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static" sx={{ backgroundColor: "#FFF", color: "#000000" }}>
                    <Toolbar>
                      <div>
                        <Typography
                          variant="h6"
                          noWrap
                          component="div"
                          sx={{ display: { xs: "none", sm: "block" } }}
                        >
                          <img src={logo} alt="logo"></img>
                        </Typography>
                      </div>

                      <Box sx={{ flexGrow: 1, textAlign: "center" }}
                      >
                        <IconButton color="inherit">
                          <MenuIcon></MenuIcon>
                        </IconButton>
                      </Box>
                      <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton
                          size="large"
                          aria-label="show 4 new mails"
                          color="inherit"
                        >
                          <Badge>
                            <SearchIcon />
                          </Badge>
                        </IconButton>
                        <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <Badge badgeContent={""} color="warning">
                            <ShoppingCartOutlinedIcon />
                          </Badge>
                        </IconButton>
                        <IconButton
                          size="large"
                          edge="end"
                          aria-label="account of current user"
                          aria-controls={menuId}
                          aria-haspopup="true"
                          onClick={handleProfileMenuOpen}
                          color="inherit"
                        >
                          <AccountCircle />
                        </IconButton>
                      </Box>
                    </Toolbar>
                  </AppBar>
                  {renderMenu}
                </Box>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NavigationBar;

