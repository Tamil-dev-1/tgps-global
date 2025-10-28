import React, { useState } from "react";
import Logo from '../../assets/images/logo/tgps.png'
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

  const menuItems = [
    "Our company",
    "Brands",
    "Sustainability",
    "News",
    "Careers",
    "Investors",
  ];

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#002395",
          color: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "stretch",
            minHeight: "110px",
            padding: 0,
          }}
        >
          {/* === Left Section (30%) === */}
          <Box
            sx={{
              width: "20%",
              backgroundColor: "#1a33c6", // lighter blue to match reference
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding:2
            }}
          >
            <Box
              component="img"
              src={Logo} 
              alt="HUL Logo"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // fills full section
              }}
            />
          </Box>

          {/* === Right Section (70%) === */}
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 2, md: 4 },
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
                mb: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Grid item>
                <Box display="flex" alignItems="center" gap={4}>
                  {/* Theme */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <DarkMode fontSize="small" />
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, fontSize: "0.9rem" }}
                    >
                      Theme ▾
                    </Typography>
                  </Box>

                  {/* Location */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <Language fontSize="small" />
                    <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                      Unilever Hindustan Unilever Limited{" "}
                      <Typography
                        component="a"
                        href="#"
                        sx={{
                          color: "#fff",
                          textDecoration: "underline",
                          fontWeight: 600,
                          ml: "4px",
                        }}
                      >
                        Change location
                      </Typography>
                    </Typography>
                  </Box>

                  {/* Search */}
                  <Button
                    startIcon={<Search sx={{ color: "#7b00b5" }} />}
                    sx={{
                      backgroundColor: "#6cd8f0",
                      color: "#7b00b5",
                      fontWeight: 700,
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#5fcde0" },
                      px: 2.8,
                      py: 1.2,
                      borderRadius: "3px",
                    }}
                  >
                    Search site
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* --- Bottom Row: Menu --- */}
            <Box
              display={{ xs: "none", md: "flex" }}
              justifyContent="flex-end"
              gap={4.5}
              sx={{ pr: 1 }}
            >
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                    fontSize: "1rem",
                  }}
                >
                  {item} ▾
                </Typography>
              ))}
            </Box>

            {/* === Mobile Menu === */}
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
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
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
                button
                key={item}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#fff",
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
           <Box display="flex" alignItems="flex-start" gap={1} mb={2}>
              <Language fontSize="small" sx={{ mt: "3px" }} />
              <Box>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: 1.4, fontSize: "0.9rem" }}
                >
                  Unilever Hindustan Unilever Limited
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

            {/* === Theme Section === */}
            <Box display="flex" alignItems="center" gap={1}>
              <DarkMode fontSize="small" />
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, fontSize: "0.95rem" }}
              >
                Theme ▾
              </Typography>
            </Box>
          
          
        </Box>
      </Drawer>
    </>
  );
}
