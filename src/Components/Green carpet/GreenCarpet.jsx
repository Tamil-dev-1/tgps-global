import React from "react";
import { Box, Container, Grid, Typography, Fade } from "@mui/material";
import { keyframes } from "@mui/system";
 

// === Animations ===
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// === Component ===
export default function GreenCarpetSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
        py: { xs: 8, md: 10 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* === Floating Decorative Leaves === */}
      <Box
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/7662/7662653.png"
        alt="leaf"
        sx={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: 80,
          opacity: 0.15,
          animation: `${float} 8s ease-in-out infinite`,
        }}
      />
      <Box
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/7662/7662653.png"
        alt="leaf"
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "8%",
          width: 100,
          opacity: 0.1,
          animation: `${rotate} 25s linear infinite`,
        }}
      />

      {/* === Content === */}
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left: Logo */}
          <Grid item xs={12} md={4} textAlign="center">
            <Fade in timeout={1000}>
              <Box
                component="img"
                src=''
                alt="Green Carpet Logo"
                sx={{
                  width: { xs: 180, md: 260 },
                  animation: `${float} 6s ease-in-out infinite`,
                }}
              />
            </Fade>
          </Grid>

          {/* Right: Content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#1B5E20",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Green Carpet
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                color: "#2E7D32",
                lineHeight: 1.9,
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Empowering a sustainable future, <strong>Green Carpet Foundation</strong> stands for environmental transformation with a mission of <em>“Planet, People, Prosperity.”</em>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                color: "#33691E",
                lineHeight: 1.9,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              From carbon neutrality to green innovation, Green Carpet drives projects that promote eco-awareness, biodiversity, and renewable practices — inspiring communities to walk the path of sustainability together.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
