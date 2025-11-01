import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

export default function TheGroup() {
  return (
   <Box sx={{ backgroundColor: "#9C44C0", p: { xs: 3, sm: 4, md: 6 } }}>
  {/* === Left-Aligned Responsive Heading and Text === */}
  <Box
    sx={{
      maxWidth: { xs: "100%", sm: "90%", md: "800px" },
      mx: "auto",
      mb: { xs: 3, md: 5 },
      textAlign: "left",
    }}
  >
    <Typography
      variant="h4"
      fontWeight="bold"
      color="white"
      gutterBottom
      sx={{
        fontSize: {
          xs: "1.8rem", // phones
          sm: "2.2rem", // tablets
          md: "2.6rem", // desktops
        },
        lineHeight: 1.2,
      }}
    >
      The Group
    </Typography>

    <Typography
      color="white"
      sx={{
        fontSize: {
          xs: "0.95rem", // phones
          sm: "1.05rem", // tablets
          md: "1.15rem", // desktops
        },
        lineHeight: 1.6,
        maxWidth: "700px",
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
      accusamus consectetur libero laboriosam adipisci provident veniam,
      similique quod, ipsam, esse expedita est rerum nesciunt vitae ratione eos
      illo laudantium consequuntur.
    </Typography>
  </Box>

  {/* === Centered Cards === */}
  <Grid container spacing={3} justifyContent="center" alignItems="stretch">
    {/* Card 1 */}
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ borderRadius: 0, overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="250"
          image="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg"
          alt="Beach"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: { xs: 200, sm: 220, md: 250 },
          }}
        />
        <CardContent sx={{ backgroundColor: "#1E3A8A", color: "white" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            }}
          >
            Lorem Ipsum has been
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
              lineHeight: 1.5,
            }}
          >
            Lorem Ipsum has been the industry's standard dummy
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    {/* Card 2 */}
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ borderRadius: 0, overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="250"
          image="https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg"
          alt="Nature"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: { xs: 200, sm: 220, md: 250 },
          }}
        />
        <CardContent sx={{ backgroundColor: "#1E3A8A", color: "white" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            }}
          >
            Lorem Ipsum has
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
              lineHeight: 1.5,
            }}
          >
            Lorem Ipsum has been the industry's
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
</Box>

  );
}
