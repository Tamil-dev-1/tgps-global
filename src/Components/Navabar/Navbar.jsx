import React, { useState } from "react";
import Logo from "../../assets/images/logo/tgps.png";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { DarkMode, Language, Search, Menu } from "@mui/icons-material";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // home page navigation

  const navigate = useNavigate();

  const menuItems = [
    { label: "AboutUs", path: "/aboutus" },
    { label: "The Group", path: "/the-group" },
    { label: "Careers", path: "/careers" },
    { label: "News", path: "/news" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#005EFF",
          color: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "stretch",
            minHeight: { xs: "80px", md: "110px" },
          }}
        >
          {/* === Left Section (Logo) === */}
          <Box
            sx={{
              flexBasis: { xs: "30%", md: "20%" },
              borderBottom:'1px solid blue',
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 1, md: 3 },
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Tgps Logo"
              onClick={()=>navigate('/')}
              sx={{
                 width: { xs: 100, sm: 150, md: 257 }, // responsive sizes
                height: "auto",
                maxHeight: { xs: 80, md: 100 },
                objectFit: "cover",
                cursor:'pointer'
              }}
            />
          </Box>

          {/* === Right Section === */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 2, sm: 3, md: 5 },
              py: { xs: 1.5, md: 2 },
            }}
          >
            {/* --- Top Row --- */}
            <Grid
              container
              alignItems="center"
              justifyContent="flex-end"
              spacing={2}
              sx={{
                mb: { xs: 1, md: 2 },
                display: { xs: "none", md: "flex" },
              }}
            >
              <Grid item>
                <Box display="flex" alignItems="center" gap={3}>
                  {/* Theme */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <DarkMode fontSize="small" />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        fontSize: { md: "0.9rem", lg: "0.8rem" },
                      }}
                    >
                      Theme ▾
                    </Typography>
                  </Box>

                  {/* Location */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <Language fontSize="small" />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { md: "0.8rem", lg: "0.8rem" },
                        display: "flex",
                        alignItems: "center",
                         fontWeight: 500,
                        flexWrap: "wrap",
                      }}
                    >
                      Thai Green Power Solution
                      <Typography
                        component="a"
                        href="#"
                        sx={{
                          color: "#fff",
                          textDecoration: "underline",
                          fontWeight: 600,
                           fontSize: { md: "0.8rem", lg: "0.8rem" },
                          ml: "11px",
                        }}
                      >
                        Change location
                      </Typography>
                    </Typography>
                  </Box>

                  {/* Search */}
                  <Button
                    startIcon={<Search sx={{ color: "#fff" }} />}
                    sx={{
                      backgroundColor: "#1F36C7",
                      color: "#fff",
                      fontWeight: 700,
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#5fcde0" },
                      px: { md: 2, lg: 1.5 },
                      py: { md: 0.7, lg: 0.7 },
                      borderRadius: 0,
                     
                      fontSize: { md: "0.9rem", lg: "0.9rem" },
                    }}
                  >
                    Search site
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* --- Bottom Row Menu --- */}
            <Box
              display={{ xs: "none", md: "flex" }}
              justifyContent="flex-end"
              gap={{ md: 3, lg: 4 }}
              sx={{
                flexWrap: "wrap",
              }}
            >
              {menuItems.map((item) => (
                <Typography
                  key={item.label}
                  variant="subtitle1"
                  component={Link}
                  to={item.path}
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                    fontSize: { md: "0.95rem", lg: "1.05rem" },
                  }}
                >
                  {item.label} ▾
                </Typography>
              ))}
            </Box>

            {/* === Mobile Hamburger === */}
            <Box
              display={{ xs: "flex", md: "none" }}
              justifyContent="flex-end"
              alignItems="center"
            >
              <IconButton onClick={toggleDrawer(true)} color="inherit">
                <Menu />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* === Drawer for Mobile Menu === */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: "#002395",
            color: "#fff",
            height: "100%",
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, textAlign: "center" }}
          >
            Menu
          </Typography>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.label}
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#fff",
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 2 }} />

          {/* Location section */}
          <Box display="flex" alignItems="flex-start" gap={1} mb={2}>
            <Language fontSize="small" sx={{ mt: "3px" }} />
            <Box>
              <Typography
                variant="body2"
                sx={{ lineHeight: 1.4, fontSize: "0.9rem" }}
              >
                Thai Green Power Solution
              </Typography>
              <Typography
                component="a"
                href="#"
                sx={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                Change location
              </Typography>
            </Box>
          </Box>

          {/* Theme section */}
          <Box display="flex" alignItems="center" gap={1}>
            <DarkMode fontSize="small" />
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, fontSize: "0.95rem" }}
            >
              Theme ▾
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='header-main'>
//       <div className='header-logo'>
//           <h1>Logo</h1>
//       </div>

//       <div className='header-controls'>
//         <div className='header-tools'></div>
//         <nav className='header-nav'>

//         </nav>
//       </div>
      
//     </div>
//   )
// }

// export default Navbar