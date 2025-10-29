import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";


export default function LatestNews() {
  return (
    <Box sx={{ backgroundColor: "#005EFF", p: 5, color: "white" }}>
      {/* === SECTION HEADING === */}
     
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          textAlign: "left",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Latest News
      </Typography>

      {/* === MAIN GRID === */}
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "stretch",
        }}
      >
        {/* === LEFT COLUMN (Main News) === */}
        <Grid item xs={12} md={7}>
          <Card
            sx={{
              height: "100%",
              boxShadow: "none",
              backgroundColor: "transparent",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                backgroundColor: "#0a66d4", // light blue hover color
              },
            }}
          >
            <CardMedia
              component="img"
              height="400"
              image="https://media.gettyimages.com/id/1791257226/photo/kolkata-india-november-19-fans-enjoy-live-telecast-of-icc-world-cup-2023-final-match-between.jpg?s=612x612&w=0&k=20&c=9xMcHr1YCoHvRiZRaT16FVJHSACcKzZd_2IzBIdWA9E="
              alt="Main News"
              sx={{ borderRadius: "8px" }}
            />
            <CardContent sx={{ backgroundColor: "#0047BA", color: "white" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  textDecoration: "underline",
                  textAlign: "left",
                }}
              >
                How AI and digital tools are empowering women micro-entrepreneurs
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  mb: 1,
                  textAlign: "left",
                  opacity: 0.9,
                }}
              >
                28 October 2025
              </Typography>
              <Typography
                sx={{
                  lineHeight: 1.6,
                  textAlign: "left",
                  opacity: 0.95,
                }}
              >
                Since 2001, our initiative Shakti has empowered women in India
                with business and financial skills to build micro-businesses and
                provide for their families and communities. Discover how new
                digital tools ensure women in our value chain continue to thrive.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* === RIGHT COLUMN (Other News) === */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Grid container spacing={2}>
            {[
              [
                {
                  image:
                    "https://media.gettyimages.com/id/2243344036/photo/japanese-prime-minister-sanae-takaichi-flanked-by-u-s-president-donald-trump-speaks-to-u-s.jpg?s=612x612&w=0&k=20&c=jJuZmoCqR2YRa3OUIfDung92nkAK45Im8aANeTpWIoY=",
                  title: "Innovations powering growth in oral care",
                  date: "27 October 2025",
                  label: "News article",
                },
                {
                  image:
                    "https://media.gettyimages.com/id/2243330515/photo/los-angeles-dodgers-designated-hitter-shohei-ohtani-hits-a-solo-home-run-off-toronto-blue.jpg?s=612x612&w=0&k=20&c=WOr8Y6ULtRnyDXLI0zOtSzDEjWzy65sQ22LHydDJF3E=",
                  title:
                    "Results for the quarter ended 30th September 2025",
                  date: "23 October 2025",
                  label: "Press release",
                },
              ],
              [
                {
                  image:
                    "https://media.gettyimages.com/id/2243326856/photo/a-motorcade-carrying-u-s-president-donald-trump-drives-through-tokyo-on-oct-28-after-leaving.jpg?s=612x612&w=0&k=20&c=047vFW0F4ACTTcD_nYa2ihpYktBIe8VxvUG1xGbnTF4=",
                  title:
                    "Pond’s reimagining skin care through science and sensorial design",
                  date: "10 October 2025",
                  label: "News article",
                },
                {
                  image:
                    "https://media.gettyimages.com/id/2243733700/photo/hami-china-aerial-view-of-yamansu-iron-mine-an-open-pit-iron-mine-on-september-7-2025-in-hami.jpg?s=612x612&w=0&k=20&c=WbsDsif4AtWrRY_CoG2Xre6GwZtWv7V9BY3g7NJy7Io=",
                  title: "Rexona brings confidence to women’s cricket",
                  date: "8 October 2025",
                  label: "News article",
                },
              ],
            ].map((pair, i) => (
              <Grid item xs={12} key={i} sx={{ display: "flex", gap: 2 }}>
                {pair.map((news, j) => (
                  <Card
                    key={j}
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#0047BA",
                      color: "white",
                      boxShadow: "none",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
                        backgroundColor: "#0a66d4", // light blue hover
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="120"
                      image={news.image}
                      alt={news.title}
                      sx={{ borderRadius: "6px" }}
                    />
                    <CardContent sx={{ p: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          backgroundColor: "rgba(255,255,255,0.2)",
                          px: 1,
                          borderRadius: 1,
                          textTransform: "uppercase",
                        }}
                      >
                        {news.label}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          mt: 0.5,
                          textAlign: "left",
                        }}
                      >
                        {news.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.9,
                          textAlign: "left",
                        }}
                      >
                        {news.date}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    
    </Box>
  );
}
