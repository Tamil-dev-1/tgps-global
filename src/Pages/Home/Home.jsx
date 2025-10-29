import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForward from "@mui/icons-material/ArrowForward";
import "./Home.css";

import TheGroup from "../../Components/TheGroup";
import LatestNews from '../../Components/LatestNews/LatestNews'
import Frequency from "../../Components/Frequency";


export default function Home() {
  const stats = [
    { number: "90+", label: "years of excellence" },
    { number: "50+", label: "renewable projects" },
    { number: "No. 1", label: "in sustainable energy" },
    { number: "₹10,000+", label: "crore project value" },
  ];

   



  
  return (
    <>
    <section className="hero-section">
      <div className="hero-left">
        <h1>
          Welcome to <br />
          Thai Green <br />
          Power Solution
        </h1>
      </div>
      <div className="hero-right">
        <img src='https://www.hul.co.in/content-images/92ui5egz/production/bdd064eccda122b148f6834646f986d4a409a1d5-1920x1080.jpg?rect=1,0,1919,1080&w=1400&h=788&fit=crop&auto=format' alt="HUL Store" />
      </div>
    </section>

                            {/* //Logo and Box section-2 */}

    
    <Box
      sx={{
        backgroundColor: "#001b77",
        color: "#fff",
        textAlign: "center",
        py: { xs: 8, md: 20 }, // smaller padding on mobile
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* === Stats Cards === */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
      >
        {stats.map((stat, index) => (
          <Grid
            item
            xs={12}      // full width on mobile
            sm={6}       // 2 per row on small tablets
            md={3}       // 4 per row on desktop
            key={index}
            sx={{
              backgroundColor: index % 2 === 0 ? "#0066ff" : "#0052cc",
              textAlign: "center",
              p: { xs: 4, sm: 4, md: 5 },
              borderRadius: "8px",
              transition: "transform 0.3s ease, background 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: index % 2 === 0 ? "#3388ff" : "#3366cc",
              },
            }}
          >
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                mb: 1,
                fontSize: { xs: "2rem", sm: "2.3rem", md: "3rem" },
              }}
            >
              {stat.number}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={500}
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
              }}
            >
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* === Learn More Button === */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 6, md: 8 },
        }}
      >
        <Button
          variant="contained"  endIcon={<ArrowForward/>}
          sx={{
            backgroundColor: "#6be7f0",
            color: "#0a1f77",
            px: { xs: 3, sm: 5 },
            py: { xs: 1.2, sm: 1.5 },
            fontWeight: 600,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            textTransform: "none",
            borderRadius: 0,
            "&:hover": {
              backgroundColor: "#FFEC9A",
              transform: "translateY(-3px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Find out more about Our Company
        </Button>
      </Box>
    </Box>

                       {/* The Group Section----3 */}
      
     <TheGroup />
    
    <LatestNews />
    <div>
          <Frequency />
    </div>
   
   
    </>
  );
}
