import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

export default function PurposeSection() {
  return (
    <Box sx={{ backgroundColor: "#9C44C0", p: 4 }}>
      {/* === Left-Aligned Heading and Text === */}
      <Box sx={{ maxWidth: "900px", margin: "0 auto 40px auto" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="white"
          gutterBottom
          textAlign="left"
        >
         The Group
        </Typography>
        <Typography color="white" textAlign="left">
          HUL’s very birth celebrated the belief that business must have a purpose beyond profit.
          Our history is a story of growth powered by ideas and values. To this day, we believe that
          caring for every stakeholder is the only way to do business.
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
              image="https://www.hul.co.in/content-images/92ui5egz/production/b0d3256879a3994777add49a8b02a2869fde83cc-720x405.png?rect=1,0,719,405&w=600&h=338&fit=crop&auto=format"
              alt="Beach"
            />
            <CardContent sx={{ backgroundColor: "#1E3A8A", color: "white" }}>
              <Typography variant="h6" fontWeight="bold">
                Sustainability at HUL
              </Typography>
              <Typography variant="body2">
                Building a better future through sustainable practices and innovation.
                lore
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
              image="https://www.hul.co.in/content-images/92ui5egz/production/d9728893a16d35d14c01931409dd2dbc7aa47760-1922x1082.jpg?rect=1,0,1921,1082&w=600&h=338&fit=crop&auto=format"
              alt="Nature"
            />
            <CardContent sx={{ backgroundColor: "#1E3A8A", color: "white" }}>
              <Typography variant="h6" fontWeight="bold">
                Empowering Communities
              </Typography>
              <Typography variant="body2">
                Supporting local communities through purpose-driven initiatives.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
