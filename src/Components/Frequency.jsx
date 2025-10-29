import React, { useState } from 'react';

export default function Frequency() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: '⚡',
      title: 'Renewable Energy Focus',
      description: 'Built exclusively for sustainable energy solutions and green technology'
    },
    {
      icon: '⚙️',
      title: 'High Performance',
      description: 'Next-gen blockchain technology optimized for speed and scalability'
    },
    {
      icon: '🪙',
      title: 'NFT-Backed Development',
      description: 'Innovative NFT integration for energy projects and carbon credits'
    },
    {
      icon: '🔒',
      title: 'Decentralized Apps',
      description: 'Secure, transparent dApps powering the renewable energy ecosystem'
    },
    {
      icon: '📈',
      title: 'Sustainable Growth',
      description: 'Contributing to a cleaner, greener world through blockchain innovation'
    },
    {
      icon: '🛡️',
      title: 'Smart Contracts',
      description: 'Automated, trustless transactions for energy trading and management'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#001F82',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Hero Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ paddingTop: '96px', paddingBottom: '80px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', textAlign: 'center' }}>
            {/* Logo Section */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(124, 77, 255, 0.2)',
                  filter: 'blur(60px)',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  position: 'relative',
                  background: 'linear-gradient(135deg, #1976d2 0%, #7c4dff 100%)',
                  padding: '48px',
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(124, 77, 255, 0.4)',
                  animation: 'pulse 3s ease-in-out infinite'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '72px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>FreCx</div>
                    <div style={{ fontSize: '14px', color: '#bbdefb' }}>Frequency Chain X</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h1 style={{
                fontSize: window.innerWidth < 600 ? '40px' : window.innerWidth < 960 ? '48px' : '64px',
                fontWeight: 800,
                marginBottom: '24px',
                color: 'white',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                Frequency Chain X
              </h1>
              
              <p style={{
                fontSize: window.innerWidth < 960 ? '18px' : '20px',
                color: 'rgba(255,255,255,0.95)',
                marginBottom: '32px',
                lineHeight: 1.6,
                fontWeight: 300,
                maxWidth: '900px'
              }}>
                A next-gen blockchain exclusively tailored for renewable energy solutions. 
                Frequency Chain X combines cutting-edge technology with sustainability, 
                enabling decentralized apps and NFT-backed developments to power a cleaner, 
                greener world.
              </p>

             

               {/* Features Section with Animated Background */}
              <div
  style={{
    position: "relative",
    overflow: "hidden",
    padding: window.innerWidth < 960 ? "64px 0" : "80px 0",
  }}
>
  {/* === Animated Gradient Background === */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(120deg, rgba(0,94,255,0.4), rgba(124,77,255,0.3), rgba(0,191,165,0.3))",
      backgroundSize: "400% 400%",
      animation: "gradientMove 12s ease infinite",
      zIndex: 0,
      filter: "blur(80px)",
    }}
  ></div>

  {/* === Floating Glow Particles === */}
  <div className="particles">
    {[...Array(12)].map((_, i) => (
      <div key={i} className="particle"></div>
    ))}
  </div>

  {/* === Main Content === */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    }}
  >
    <h2
      style={{
        fontSize: window.innerWidth < 600 ? "32px" : "40px",
        fontWeight: 700,
        color: "white",
        textAlign: "center",
        marginBottom: "48px",
      }}
    >
      Why Choose Frequency Chain X?
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          window.innerWidth < 600
            ? "1fr"
            : window.innerWidth < 960
            ? "repeat(2, 1fr)"
            : "repeat(3, 1fr)",
        gap: "24px",
      }}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            background: "rgba(0, 94, 255, 0.9)",
            border:
              hoveredCard === index
                ? "1px solid rgba(179,136,255,0.5)"
                : "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "32px",
            transition: "all 0.3s ease",
            transform:
              hoveredCard === index ? "translateY(-8px)" : "translateY(0)",
            boxShadow:
              hoveredCard === index
                ? "0 12px 40px rgba(124,77,255,0.3)"
                : "none",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            {feature.icon}
          </div>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "white",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            {feature.title}
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* === Animations === */}
  <style>
    {`
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .particles {
        position: absolute;
        inset: 0;
        overflow: hidden;
        z-index: 1;
      }

      .particle {
        position: absolute;
        width: 8px;
        height: 8px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        animation: float 12s linear infinite;
      }

      .particle:nth-child(odd) {
        background: rgba(255, 255, 255, 0.1);
      }

      @keyframes float {
        from {
          transform: translateY(0) translateX(0);
        }
        to {
          transform: translateY(-100vh) translateX(20vw);
        }
      }

      /* Random particle positions */
      .particle:nth-child(1) { top: 90%; left: 10%; animation-delay: 0s; }
      .particle:nth-child(2) { top: 95%; left: 30%; animation-delay: 2s; }
      .particle:nth-child(3) { top: 92%; left: 50%; animation-delay: 4s; }
      .particle:nth-child(4) { top: 88%; left: 70%; animation-delay: 6s; }
      .particle:nth-child(5) { top: 94%; left: 85%; animation-delay: 1s; }
      .particle:nth-child(6) { top: 96%; left: 15%; animation-delay: 3s; }
      .particle:nth-child(7) { top: 93%; left: 40%; animation-delay: 5s; }
      .particle:nth-child(8) { top: 90%; left: 60%; animation-delay: 7s; }
      .particle:nth-child(9) { top: 97%; left: 80%; animation-delay: 8s; }
      .particle:nth-child(10) { top: 91%; left: 25%; animation-delay: 9s; }
      .particle:nth-child(11) { top: 95%; left: 45%; animation-delay: 10s; }
      .particle:nth-child(12) { top: 98%; left: 65%; animation-delay: 11s; }
    `}
  </style>
</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
     

      {/* CTA Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: window.innerWidth < 600 ? '28px' : '40px',
          fontWeight: 700,
          color: 'white',
          marginBottom: '24px'
        }}>
          Join the Green Energy Revolution
        </h2>
        <p style={{
          fontSize: '20px',
          color: 'rgba(255,255,255,0.8)',
          marginBottom: '32px',
          maxWidth: '700px',
          margin: '0 auto 32px'
        }}>
          Be part of the future where blockchain technology meets sustainability. 
          Start building on Frequency Chain X today.
        </p>
        <button style={{
          padding: '20px 48px',
          fontSize: '20px',
          fontWeight: 700,
          background: 'linear-gradient(90deg, #00bfa5 0%, #00e676 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,191,165,0.4)',
          transition: 'all 0.3s ease',
          fontFamily: 'inherit'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 25px rgba(0,191,165,0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 20px rgba(0,191,165,0.4)';
        }}>
          Join Now
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>

     


    </div>
  );
}