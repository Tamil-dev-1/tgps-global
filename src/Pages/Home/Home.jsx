import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForward from "@mui/icons-material/ArrowForward";
import "./Home.css";

import TheGroup from "../../Components/TheGroup";
import LatestNews from '../../Components/LatestNews/LatestNews'
import Frequency from "../../Components/Frequency";
//import Tgpsinfotech from "../../Components/Tgps_infotech/Tgpsinfotech";
//import GreenCarpet from "../../Components/Green carpet/GreenCarpet";


export default function Home() {
  const stats = [
    { number: "90+", label: "Lorem Ipsum has" },
    { number: "50+", label: "Lorem Ipsum has" },
    { number: "No. 1", label: "Lorem Ipsum has" },
    { number: "₹10,000+", label: "Lorem Ipsum has" },
  ];

   



  
  return (
    <>
    <section className="hero-section">
      <div className="hero-left">
        <h1>
          Welcome to 
          Thai Green 
          Power Solution
        </h1>
      </div>
      <div className="hero-right">
        <img src='https://images.pexels.com/photos/6801649/pexels-photo-6801649.jpeg' alt="TGPS_hero image" />
      </div>
    </section>

                            {/* //Statics and Box section-2 */}

    
    <Box
      sx={{
        backgroundColor: "#001b77",
        color: "#fff",
        textAlign: "initial",
         // smaller padding on mobile
        pt: { xs: 8, md:20}, // smaller padding on mobile
        pb: { xs: 8, md: 8 }, // smaller padding on mobile
        px: { xs: 2, sm: 4, md: 4 },
      }}
    >
    <Typography
  variant="h5"
  sx={{
    fontWeight: 600,
    mb: "1rem",
    // 👇 remove fixed margin on small screens, keep on desktop
    ml: { xs: 0, sm: 0, md: "1rem" },
    // 👇 dynamically center or left align
    textAlign: { xs: "center", sm: "center", md: "left" },
    // 👇 smooth resizing and scaling
    fontSize: "clamp(1.2rem, 2vw, 2rem)",
    width: "100%", // ensures it can center properly
    transition: "all 0.4s ease-in-out",
  }}
>
  Thai Green Power Solution Company Limited
</Typography>

      {/* === Stats Cards === */}
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        
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
              mb:0.2,
              ml:0.2,
              px: { xs: 4, sm: 4, md: 6 },
              py: { xs: 3, sm: 3, md: 4 },
              pl: { xs: 3, sm: 4, md: 9 },
              
              borderRadius: "0px",
              
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
          mt: { xs: 6, md: 5 },
        }}
      >
        <Button
          variant="contained"  endIcon={<ArrowForward/>}
          sx={{
            backgroundColor: "#6be7f0",
            color: "#7705B4",
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
      
    </>
  );
}
