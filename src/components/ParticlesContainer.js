import React, {useCallback} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <>
      <Particles
        className="z-0"
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              links: {
                opacity: 0.2,
              },
            },
          },
          particles: {
            color: {
              value: "#8b5cf6",
            },
            links: {
              color: "#8b5cf6",
              distance: 200,
              enable: true,
              opacity: 0.2,
              width: 0.8,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: {min: 1, max: 5},
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default ParticlesContainer;
