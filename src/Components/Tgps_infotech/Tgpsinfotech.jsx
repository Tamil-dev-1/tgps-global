import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Button 
} from '@mui/material';

import { styled, keyframes } from '@mui/material/styles';

// New Animations
const bounce = keyframes`
  0%, 100% { 
    transform: translateY(0) rotate(0deg);
  }
  50% { 
    transform: translateY(-20px) rotate(5deg);
  }
`;

const wave = keyframes`
  0% { 
    transform: translateX(0) translateY(0);
  }
  25% { 
    transform: translateX(50px) translateY(-30px);
  }
  50% { 
    transform: translateX(100px) translateY(0);
  }
  75% { 
    transform: translateX(50px) translateY(30px);
  }
  100% { 
    transform: translateX(0) translateY(0);
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const scaleUp = keyframes`
  0%, 100% { 
    transform: scale(1);
  }
  50% { 
    transform: scale(1.1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const HeroContainer = styled(Box)({
  minHeight: '100vh',
  background: '#FEA29A',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden'
});

const CircleDecoration = styled(Box)(({ size, top, left, delay }) => ({
  position: 'absolute',
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.2)',
  top: `${top}%`,
  left: `${left}%`,
  animation: `${wave} ${10 + delay}s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  zIndex: 0
}));

const LogoGlow = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'rgba(255, 255, 255, 0.3)',
  filter: 'blur(40px)',
  borderRadius: '50%'
});

const LogoBox = styled(Box)({
  position: 'relative',
  background: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
  padding: '48px',
  borderRadius: '50%',
  boxShadow: '0 20px 60px rgba(255, 107, 107, 0.4)',
  animation: `${bounce} 4s ease-in-out infinite`
});

const AnimatedBackground = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)',
  animation: `${scaleUp} 8s ease-in-out infinite`,
  zIndex: 0
});

const FloatingShape = styled(Box)(({ delay, size }) => ({
  position: 'absolute',
  width: `${size}px`,
  height: `${size}px`,
  background: 'rgba(255, 255, 255, 0.15)',
  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
  animation: `${rotate360} ${15 + delay}s linear infinite`,
  animationDelay: `${delay}s`,
  zIndex: 1
}));

const ServiceCard = styled(Card)(({ theme, isHovered }) => ({
  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
  backdropFilter: 'blur(10px)',
  border: isHovered ? '3px solid #FF6B6B' : '3px solid transparent',
  borderRadius: '24px',
  padding: '32px',
  transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  transform: isHovered ? 'scale(1.05) rotate(2deg)' : 'scale(1) rotate(0deg)',
  boxShadow: isHovered ? 
    '0 20px 60px rgba(255, 107, 107, 0.4)' : 
    '0 10px 30px rgba(0,0,0,0.1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,107,107,0.3), transparent)',
    transition: 'left 0.5s',
    left: isHovered ? '100%' : '-100%'
  }
}));

const CTAButton = styled(Button)({
  padding: '20px 48px',
  fontSize: '20px',
  fontWeight: 700,
  background: 'linear-gradient(90deg, #FF6B6B 0%, #FFE66D 100%)',
  color: '#333',
  border: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
  boxShadow: '0 10px 30px rgba(255, 107, 107, 0.4)',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.05)',
    boxShadow: '0 15px 40px rgba(255, 107, 107, 0.6)',
    background: 'linear-gradient(90deg, #FFE66D 0%, #FF6B6B 100%)'
  }
});

export default function Tgpsinfotech() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: '💻',
      title: 'Software Development',
      description: 'End-to-end software solutions tailored to your business needs'
    },
    {
      icon: '💡',
      title: 'IT Consulting',
      description: 'Expert guidance to optimize your technology infrastructure'
    },
    {
      icon: '⛓️',
      title: 'Blockchain-as-a-Service',
      description: 'Cutting-edge blockchain solutions for modern enterprises'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Modernize operations with innovative technology solutions'
    },
    {
      icon: '⚡',
      title: 'Cyber Security',
      description: 'Streamline processes and maximize productivity'
    },
    {
      icon: '🎯',
      title: 'Cloud Computing',
      description: 'Stay ahead with the latest tech innovations and trends'
    }
  ];

  const circles = [
    { size: 200, top: 10, left: 5, delay: 0 },
    { size: 150, top: 20, left: 85, delay: 2 },
    { size: 180, top: 70, left: 10, delay: 4 },
    { size: 160, top: 80, left: 80, delay: 1 }
  ];

  const shapes = [
    { size: 100, delay: 0, top: '15%', left: '80%' },
    { size: 120, delay: 3, top: '60%', left: '5%' },
    { size: 80, delay: 6, top: '40%', left: '90%' }
  ];

  return (
    <HeroContainer>
      {/* Decorative Background Elements */}
      {circles.map((circle, i) => (
        <CircleDecoration key={i} {...circle} />
      ))}
      {shapes.map((shape, i) => (
        <FloatingShape 
          key={i} 
          {...shape}
          sx={{ top: shape.top, left: shape.left }}
        />
      ))}

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <Box sx={{ pt: 12, pb: 10 }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 6, 
            alignItems: 'center', 
            textAlign: 'center',
            animation: `${slideIn} 1s ease-out`
          }}>
            
            {/* Logo Section */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                <LogoGlow />
                <LogoBox>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ 
                      fontSize: '72px', 
                      fontWeight: 900, 
                      color: 'white', 
                      mb: 1,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                    }}>
                      TGPS
                    </Typography>
                    <Typography sx={{ 
                      fontSize: '14px', 
                      color: 'white', 
                      letterSpacing: '3px',
                      fontWeight: 600
                    }}>
                      INFOTECH
                    </Typography>
                  </Box>
                </LogoBox>
              </Box>
            </Box>

            {/* Content Section */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Typography 
                variant="h1"
                sx={{
                  fontSize: { xs: '40px', sm: '48px', md: '64px' },
                  fontWeight: 900,
                  mb: 3,
                  color: '#1F36C7',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
                }}
              >
                TGPS Infotech
              </Typography>
              
              <Typography 
                variant="body1"
                sx={{
                  fontSize: { xs: '18px', md: '22px' },
                  color: '#1F36C7',
                  mb: 4,
                  lineHeight: 1.8,
                  fontWeight: 400,
                  maxWidth: '900px',
                  textShadow: '1px 1px 2px rgba(255,255,255,0.5)'
                }}
              >
                Where tech innovation meets expertise. TGPS Infotech offers advanced IT solutions, 
                guiding businesses through project development, consulting, and Blockchain-as-a-Service. 
                Discover tailored digital transformations that redefine operational efficiency and innovation.
              </Typography>

              {/* Services Section with Animated Background */}
              <Box sx={{
                position: 'relative',
                overflow: 'hidden',
                py: { xs: 8, md: 10 },
                width: '100%'
              }}>
                {/* Animated Background */}
                <AnimatedBackground />

                {/* Main Content */}
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                  <Typography 
                    variant="h2"
                    sx={{
                      fontSize: { xs: '32px', sm: '40px' },
                      fontWeight: 800,
                      color: '#1F36C7',
                      textAlign: 'center',
                      mb: 6,
                      textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
                    }}
                  >
                    Our Core Services
                  </Typography>

                  <Grid container spacing={3} justifyContent="center">
                    {services.map((service, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                        <ServiceCard
                          isHovered={hoveredCard === index}
                          onMouseEnter={() => setHoveredCard(index)}
                          onMouseLeave={() => setHoveredCard(null)}
                          sx={{ 
                            display: 'flex', 
                            flexDirection: 'column',
                            width: '100%',
                            height: '100%',
                            minHeight: '280px'
                          }}
                        >
                          <CardContent sx={{ 
                            p: 0, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            flex: 1,
                            justifyContent: 'center'
                          }}>
                            <Typography sx={{ 
                              fontSize: '56px', 
                              textAlign: 'center', 
                              mb: 2,
                              transform: hoveredCard === index ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                              transition: 'all 0.3s ease'
                            }}>
                              {service.icon}
                            </Typography>
                            <Typography 
                              variant="h6"
                              sx={{
                                fontSize: '22px',
                                fontWeight: 700,
                                color: '#1F36C7',
                                textAlign: 'center',
                                mb: 1.5,
                                minHeight: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              {service.title}
                            </Typography>
                            <Typography 
                              variant="body2"
                              sx={{
                                fontSize: '15px',
                                color: '#666',
                                textAlign: 'center',
                                lineHeight: 1.7
                              }}
                            >
                              {service.description}
                            </Typography>
                          </CardContent>
                        </ServiceCard>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 10, textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <Typography 
          variant="h2"
          sx={{
            fontSize: { xs: '28px', sm: '40px' },
            fontWeight: 800,
            color: '#1F36C7',
            mb: 3,
            textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
          }}
        >
          Ready to Transform Your Business?
        </Typography>
        <Typography 
          variant="body1"
          sx={{
            fontSize: '20px',
            color: '#1F36C7',
            mb: 4,
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.7
          }}
        >
          Partner with TGPS Infotech to unlock cutting-edge technology solutions 
          that drive growth and innovation.
        </Typography>
        <CTAButton>
          Get Started
        </CTAButton>
      </Container>
    </HeroContainer>
  );
}