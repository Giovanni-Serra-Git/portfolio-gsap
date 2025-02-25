import { useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import prova from "./assets/particles.json";
import gsap from "gsap";
import { loadSlim } from "@tsparticles/slim";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    type: "live",
    websites: [
      {
        title: "pool builders website",
        stack: [
          {
            logo: "/logo/react.svg",
            name: "React",
          },
          {
            logo: "/logo/tailwind.svg",
            name: "TailwindCSS",
          },
          {
            logo: "/logo/reactrouter.svg",
            name: "React Router",
          },
        ],
        url: "https://deapiscine.it/",
        description:
          "A website for pool builders. The site has an integrated feature with four different languages. I chose a simple yet functional design to represent what the company does",
        img: "/gallery/piscine.png",
      },
      {
        title: "beauty center website",
        stack: [
          {
            logo: "/logo/react.svg",
            name: "React",
          },
          {
            logo: "/logo/tailwind.svg",
            name: "TailwindCSS",
          },
          {
            logo: "/logo/reactrouter.svg",
            name: "React Router",
          },
        ],
        url: "https://esteticaunoraperte.it/",
        description:
          "A beauty aesthetics website I created for a client. I primarily focused on an innovative design and aimed for light and eye-pleasing colors.",
        img: "/gallery/centro_estetico.png",
      },
    ],
  },
  {
    type: "demo",
    websites: [
      {
        title: "Pizzeria App",
        stack: [
          {
            logo: "/logo/react.svg",
            name: "React",
          },
          {
            logo: "/logo/tailwind.svg",
            name: "TailwindCSS",
          },
          {
            logo: "/logo/reactrouter.svg",
            name: "React Router",
          },
        ],
        url: "https://pizza-take-away-react.netlify.app/",
        description:
          "An app to order pizzas quickly and easily! Based on the Fast React Pizza Co. API, it allows users to fake login, order pizzas and remove them from the cart.",
        img: "/gallery/pizzeria.jpg",
      },
      {
        title: "Mark places you visited",
        stack: [
          {
            logo: "/logo/react.svg",
            name: "React",
          },
          {
            logo: "/logo/tailwind.svg",
            name: "TailwindCSS",
          },
          {
            logo: "/logo/reactrouter.svg",
            name: "React Router",
          },
        ],
        url: "https://map-app-places.netlify.app/",
        description:
          "An application that provides interaction with the map to mark points of interest with markers, specifically the places visited.",
        img: "/gallery/map.jpg",
      },
      {
        title: "Quiz Dishes",

        stack: [
          {
            logo: "/logo/react.svg",
            name: "React",
          },
          {
            logo: "/logo/tailwind.svg",
            name: "TailwindCSS",
          },
          {
            logo: "/logo/reactrouter.svg",
            name: "React Router",
          },
        ],

        url: "https://quiz-dishes.netlify.app/",
        description:
          "An application with typical dishes from different countries with an integrated rating system.",
        img: "/gallery/quiz.jpg",
      },
      {
        title: "restaurant design",
        stack: [
          {
            logo: "/logo/html.svg",
            name: "Html",
          },
          {
            logo: "/logo/css.svg",
            name: "TailwindCSS",
          },
          {
            logo: "/logo/javascript.svg",
            name: "Javascript",
          },
        ],
        url: "https://website-gericht.netlify.app/",
        description:
          "Restaurant Website with simple and clean design. The design was taken from UI8 website",
        img: "/gallery/gericht.png",
      },
      {
        title: "tic tac toe game",
        stack: [
          {
            logo: "/logo/html.svg",
            name: "Html",
          },
          {
            logo: "/logo/css.svg",
            name: "TailwindCSS",
          },
          {
            logo: "/logo/javascript.svg",
            name: "Javascript",
          },
        ],
        url: "https://game-app-tic-tac-toe.netlify.app/",
        description:
          "Tic Tac Toe Game where two players can challenge each other",
        img: "/gallery/tic-tac-toe.png",
      },
      {
        title: "imdb clone website app",
        stack: [
          {
            logo: "/logo/react.svg",
            name: "React",
          },
          {
            logo: "/logo/tailwind.svg",
            name: "TailwindCSS",
          },
          {
            logo: "/logo/reactrouter.svg",
            name: "React Router",
          },
        ],
        url: "https://app-imdb-clone.netlify.app/",
        description:
          "A simple version of IMDB website. I created this demo in order to practice the tech stack I learned.Built with React, React Router, React Redux, Material UI, Styled Component",
        img: "/gallery/imdb.png",
      },
    ],
  },
];

let tl = gsap.timeline({ repeat: 0 });

export default function App() {
  const [init, setInit] = useState(false);
  const greetings = useRef();
  const name = useRef();
  const role = useRef();
  const letterRefs = useRef([]);
  const description_1 = useRef();
  const description_2 = useRef();
  const stack = useRef();
  const stackTech = useRef();
  const projectsRef = useRef([]);
  const location = useRef();
  const liveWebsites = useRef([]);
  const prototypeWebsites = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "I build visually appealing websites that deliver a great user experience";
  const finalText =
    "I would love the opportunity to join a team of developers where I can learn from the best, gaining insights into sophisticated web development and site-building techniques";

  useGSAP(() => {
    tl.to(greetings.current, { x: 0, opacity: 1 })

      .to(name.current, { x: 0, opacity: 1 })

      .to(location.current, { x: 0, opacity: 1 })

      .to(role.current, { x: 0, opacity: 1 })

      .to(letterRefs.current, {
        x: "0%",
        opacity: 1,
        autoAlpha: 1,
        duration: 0.1,
        stagger: 0.2,
        ease: "power3.out",
      });

    gsap.fromTo(
      description_1.current,
      { y: "20vh" },
      {
        scrollTrigger: description_1.current,
        y: 0,
      }
    );

    gsap.fromTo(
      description_2.current,
      { y: "40vh" },
      {
        scrollTrigger: description_2.current,
        y: 0,
      }
    );

    gsap.fromTo(
      stack.current,
      { scale: 0 },
      {
        scrollTrigger: stack.current,
        scale: 1,
        delay: 1,
      }
    );

    gsap.fromTo(
      ".stack-tech",
      { scale: 0 },
      {
        scrollTrigger: stackTech.current,
        scale: 1,
        delay: 1,
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      projectsRef.current,

      { x: "-150%", opacity: 0, autoAlpha: 0 },
      {
        x: "0%",
        autoAlpha: 1,
        opacity: 1,
        duration: 0.1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      liveWebsites.current,

      { x: "-150%", opacity: 0, autoAlpha: 0 },
      {
        x: "0%",
        autoAlpha: 1,
        opacity: 1,
        duration: 0.1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: liveWebsites.current,
          start: "top+=100 bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      prototypeWebsites.current,

      { x: "-150%", opacity: 0, autoAlpha: 0 },
      {
        x: "0%",
        autoAlpha: 1,
        opacity: 1,
        duration: 0.1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: prototypeWebsites.current,
          toggleActions: "play none none reverse",
          start: "top 80%"
        },
      }
    );

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".item-gallery").forEach((item) => {
      gsap.fromTo(
        item,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.utils.toArray(".picture-gallery").forEach((item) => {
      gsap.fromTo(
        item,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1 / 4,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none", 
            onEnter: () => {
              gsap.to(item, {
                y: 0,
                duration: 1 / 2,
                ease: "bounce.out",
              });
            },
          },
        }
      );
    });

    gsap.fromTo(
      ".final-text",
      {
        x: -100,
        y: 0,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        stagger: {
          each: 0.1,
          from: "random",
        },
        scrollTrigger: {
          trigger: ".final-text-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".email",
      { scale: 0, x: "-150%" },
      {
        scrollTrigger: ".email",
        scale: 1,
        x: 0,
        delay: 1,
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      ".icon",
      { scale: 0 },
      {
        scrollTrigger: ".icon",
        scale: 1,
        delay: 1,
        stagger: 0.2,
        duration: 0.8,
      }
    );

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  const particlesLoaded = (container) => {
    console.log(container);
  };

  return ( 
    <>

    {/* LANDING ANIMATION */}

      <div className="w-full min-h-[100vh] relative bg-[262626] px-[2rem] overflow-hidden">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={prova}
            className="z-10 h-[100vh]"
          />
        )}
        <div className="flex flex-col justify-center w-full h-full absolute top-0 left-0 z-20 px-[2rem]">
          <p
            className="text-white text-xl md:text-3xl font-bold uppercase greetings"
            ref={greetings}
          >
            Hi,
          </p>
          <p
            className="text-[#ecf0f1] text-xl md:text-3xl font-bold uppercase name"
            ref={name}
          >
            my name is <span className="text-[#ffcc66]">Giovanni Serra, </span>
          </p>
          <p
            className="text-[#ecf0f1] text-xl md:text-3xl font-bold uppercase location"
            ref={location}
          >
            I am based in <span className="text-[#00802b] uppercase">It</span>
            <span className="uppercase">a</span>
            <span className="text-[#ff4d4d] uppercase">ly</span>, I am a
          </p>
          <p
            className="text-[#ffcc66] text-4xl md:text-7xl uppercase font-bold my-8 role"
            ref={role}
          >
            Front-End Developer
          </p>
          <p className="text-[#80d4ff] text-xl font-bold uppercase my-4 mx-auto md:w-1/2 md:mx-0">
            {text.split(" ").map((char, index) => {
              return (
                <>
                  <span
                    className="inline-block lettersRef"
                    ref={(el) => (letterRefs.current[index] = el)}
                    key={index}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                  <span> </span>
                </>
              );
            })}
          </p>
        </div>
      </div>

      {/* ABOUT ME */}

      <div className="min-h-[100vh] py-10 bg-[#1a1a1a] text-white flex flex-col justify-center items-center px-[2rem] uppercase font-500 mx-auto">
        <div className="w-[80%] h-[100%] mx-auto flex flex-col items-center justify-center gap-[2rem] md:gap-[5rem]">
          <p
            ref={description_1}
            className="text-2xl md:text-4xl text-[#80d4ff]"
          >
            I'm a front end developer eager to join a company in order to learn
            the job from experts.
          </p>
          <p ref={description_2} className="text-xl md:text-3xl">
            I use simple yet effective colors to create the structure and
            organization of the site. I always strive to improve the final
            result I deliver to users and pay close attention to how the site is
            represented.
          </p>
        </div>
      </div>
      <div className="bg-[#1a1a1a] px-[2rem] flex flex-col justify-center items-center py-[2rem]">
        <p
          ref={stack}
          className="text-4xl md:text-7xl text-amber-300 uppercase font-bold"
        >
          stack
        </p>
        <div
          ref={stackTech}
          className="mt-[4rem] grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-[2rem]"
        >
          <p className="stack-tech text-amber-100 uppercase  rounded-[10px] px-2 md:rounded-4xl border-amber-300 border-[2px] w-[100%] md:w-[150px] my-[1rem] text-center py-1">
            html
          </p>
          <p className="stack-tech text-amber-100 uppercase  rounded-[10px] px-2 md:rounded-4xl border-amber-300 border-[2px] w-[100%] md:w-[150px] my-[1rem] text-center py-1">
            css
          </p>
          <p className="stack-tech text-amber-100 uppercase  rounded-[10px] px-2 md:rounded-4xl border-amber-300 border-[2px] w-[100%] md:w-[150px] my-[1rem] text-center py-1">
            javascript
          </p>
          <p className="stack-tech text-amber-100 uppercase  rounded-[10px] px-2 md:rounded-4xl border-amber-300 border-[2px] w-[100%] md:w-[150px] my-[1rem] text-center py-1">
            react
          </p>
          <p className="stack-tech text-amber-100 uppercase  rounded-[10px] px-2 md:rounded-4xl border-amber-300 border-[2px] w-[100%] md:w-[150px] my-[1rem] text-center py-1">
            react router
          </p>
          <p className="stack-tech text-amber-100 uppercase  rounded-[10px] px-2 md:rounded-4xl border-amber-300 border-[2px] w-[100%] md:w-[150px] my-[1rem] text-center py-1">
            redux toolkit
          </p>
          <p className="stack-tech text-amber-100 uppercase  rounded-[10px] px-2 md:rounded-4xl border-amber-300 border-[2px] w-[100%] md:w-[150px] my-[1rem] text-center py-1 col-start-2">
            tailwind css
          </p>
        </div>
      </div>

      <div className="projects bg-[#1a1a1a] px-[2rem] md:px-8 flex flex-col justify-center items-center">


        <div className="my-[2rem] md:mt-[3rem] projects bg-[#1a1a1a] px-[2rem] md:px-8 flex flex-col justify-center items-center">
          <div className="projects-letter">
            {"projects".split("").map((char, index) => (
              <span 
                className="letter inline-block text-4xl md:text-7xl uppercase font-bold text-outline"
                ref={(el) => {
                  projectsRef.current[index] = el;
                  console.log(projectsRef.current);
                }}
                key={index}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* PROJECTS */}

        <div className="w-[90%] md:w-[80%] mx-auto my-[4rem]">
      
          {projects.map((item, index) => {
            return (
              <>
          <div key={index} className="text-center md:text-left">
              { item.type == "live" ?  (
                <>
             {item.type.split("").map((char, index) => (
              <span
                className="letter md:text-left inline-block text-3xl text-wrap md:text-7xl uppercase font-bold text-outline"
                ref={(el) => {
                  liveWebsites.current[index] = el }                  
                }
                key={index}
              >
            {char === " " ? "\u00A0" : char}
            </span>
              ))}
                </>
              ) : (
                item.type.split("").map((char, index) => (
                  <span
                    className="letter inline-block text-3xl md:text-7xl uppercase font-bold text-outline"
                    ref={(el) => {
                      prototypeWebsites.current[index] = el }                  
                    }
                    key={index}
                  >
                {char === " " ? "\u00A0" : char}
                </span>
                  ))
              )}
          </div>

          {/* GALLERY WEBSITES */}

                {item.websites.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="item-gallery text-center flex flex-col md:text-left md:flex-row justify-between my-[4rem] gap-x-2"
                    >
                      <div
                        className=" text-white flex-2/3 flex flex-col gap-4"
                        key={index}
                      >
                        <p className="text-3xl uppercase font-bold text-outline-yellow my-5">
                          {item.title}
                        </p>
                        <div className="grid grid-rows-3 grid-cols-3 lg:flex gap-6 w-[100%]">
                          {item.stack.map((item, index) => {
                            return (
                              <div
                                className={`flex gap-4 items-center w-full col-start-1 md:col-start-1`}
                                key={index}
                              >
                                <img
                                  src={item.logo}
                                  alt={item.name}
                                  width="50"
                                  height="50"
                                />
                                <p>{item.name}</p>
                              </div>
                            );
                          })}
                        </div>
                        <p className="w-[100%] lg:w-[80%] my-8 md:my-4 lg:my-0 text-center md:text-left">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex-1/3 flex justify-center md:items-center picture-gallery">
                        <a href={item.url} target="_blank">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-[300px] h-[150px]"
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>

      {/* CONTACTS */}

      <div className="bg-[#1a1a1a] px-8 flex flex-col gap-22">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="final-text-container text-xl md:text-4xl text-center text-[#ffcc66] uppercase font-bold">
            {finalText.split(" ").map((item, index) => {
              return (
                <>
                  <span className="inline-block final-text" key={index}>
                    {item}
                  </span>
                  <span> </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex-1 md:flex-2/3">
            <p className="text-[#80d4ff] text-[1rem] text-center md:text-left md:text-4xl font-bold uppercase email">
              giovanni.serra.web@gmail.com
            </p>
          </div>
          <div className="flex md:flex-1/3 justify-center md:justify-end items-end gap-4 md:gap-8 my-10">
            <a
              href="https://github.com/Giovanni-Serra-Git"
              target="_blank"
              className="inline-block icon"
            >
              <img
                src="/logo/github.svg"
                alt="Github Logo"
                width="50"
                className=" transition-transform duration-300 hover:scale-150 ease-in-out"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/giovanni-serra-609a84277/"
              target="_blank"
              className="inline-block icon"
            >
              <img
                src="/logo/linkedin.svg"
                alt="Linkedin Logo"
                width="50"
                className=" transition-transform duration-300 hover:scale-150 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
