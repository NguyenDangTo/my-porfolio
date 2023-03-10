import React from "react";
import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";
import {useCallback} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="flex gap-4 overflow-hidden max-w-screen">
      <Sidebar />
      <div className="flex flex-col w-full sm:ml-[69px]">
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
        <Main />
        <About />
        <Projects />
        <Contact />
      </div>
    </section>
  );
};

export default Home;
