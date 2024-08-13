import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBg = (props) => {
  const { theme } = props;
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => {
    if (theme === "dark") {
      return {
        background: {
          color: {
            value: "#000000", // Dark background color for dark mode
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            push: {
              distance: 200,
              duration: 15,
            },
            grab: {
              distance: 190,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // Light color for particles in dark mode
          },
          links: {
            color: "#888888",
            distance: 180,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 150,
          },
          opacity: {
            value: 1.0,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      };
    } else {
      // Default light mode options
      return {
        background: {
          color: {
            value: "#e1e1e1", // Light background color
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            push: {
              distance: 200,
              duration: 15,
            },
            grab: {
              distance: 190,
            },
          },
        },
        particles: {
          color: {
            value: "#222121", // Dark color for particles in light mode
          },
          links: {
            color: "#373333",
            distance: 180,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 150,
          },
          opacity: {
            value: 1.0,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      };
    }
  }, [theme]);

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticleBg;
