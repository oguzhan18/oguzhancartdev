import React, {useCallback, useEffect, useRef, useState} from "react";
import {AnimatePresence, motion, MotionValue, useAnimationControls, useSpring,} from "framer-motion";
import {useIsTouchDevice} from "../../hooks/useIsTouchDevice";
import Curve from "./Curve";
import Overlay from "./Overlay";
import {X} from "lucide-react";
import {useLenis} from "@studio-freight/react-lenis";

type ProjectsSectionProps = {
    isProjectsInView: boolean;
    isMobile: boolean;
    backgroundGradient: MotionValue<string>;
};

export type Project = {
    number: string;
    title: string;
    category: string;
    year: string;
    image: string;
    imageDetail: string;
    description: string;
    technologies: { frontend: string; backend: string };
    color: string;
    link: string;
};

const fadeInUpVariants = {
    hidden: {opacity: 0, y: 50},
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: custom * 0.2,
        },
    }),
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.4,
            ease: "easeIn",
        },
    },
};

const Projects: React.FC<ProjectsSectionProps> = ({
                                                      isProjectsInView,
                                                      isMobile,
                                                      backgroundGradient,
                                                  }) => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isScrolling, setIsScrolling] = useState(false);

    const isTouchDevice = useIsTouchDevice();

    const projectsControls = useAnimationControls();
    const [hasAnimated, setHasAnimated] = useState(false);

    const cursorX = useSpring(0, {stiffness: 200, damping: 50});
    const cursorY = useSpring(0, {stiffness: 200, damping: 50});

    const projects: Project[] = [
        {
            number: "01",
            title: "Wope Clone",
            category: "Web Development / Design",
            year: "2023-25",
            image: "./img/wope-clone/wope-clone.png",
            imageDetail: "./img/wope-clone/wope-clone.png",
            description:
                "Wope Clone is a social media platform that connects people with similar interests. Users can create events, join groups, and meet new people. The platform is designed to be user-friendly and intuitive, with a focus on privacy and security.",
            color: "121 35 208",
            technologies: {
                frontend: "Angular, TailwindCSS, ThreeJS, GSAP",
                backend: "Not Involved",
            },
            link: "https://wope-clone.vercel.app/",
        },
        {
            number: "02",
            title: "Whois APP.",
            category: "Mobile Development / Cloud Development",
            year: "2024-24",
            image: "./img/whois_app/whois_app.png",
            imageDetail: "./img/whois_app/whois_app.png",
            description:
                "The WHOIS Lookup App is a simple Flutter application that allows users to perform WHOIS lookups for any domain. It provides detailed information about domain registrations, such as the registrar, registration date, and contact information. Users can also save their search results for future reference.",
            technologies: {
                frontend: "Flutter, Material ",
                backend: "Dart, Http Package, SQLite",
            },
            color: "0 122 255",
            link: "https://github.com/oguzhan18/whois_app",
        },
        {
            number: "03",
            title: "VKS APP",
            category: "Mobile Development",
            year: "2022",
            image: "./img/vks-app/vks-app.png",
            imageDetail: "./img/vks-app/vks-app.png",
            description: `VARLIK KONTROL SİSTEMİ - Fast and easy to use money management app that keeps track of you. It is a simple and easy to use app that helps you keep track of your expenses and income. It is designed to be simple and easy to use, with a focus on privacy and security.`,
            technologies: {
                frontend: "Flutter, Material, Firebase",
                backend: "Dart, Firebase",
            },
            color: "121 35 208",
            link: "https://github.com/oguzhan18/vks-app",
        },
        {
            number: "04",
            title: "Time Planner",
            category: "Mobile Development",
            year: "2024",
            image: "./img/Time-Planner/time-planner.png",
            imageDetail: "./img/Time-Planner/time-planner.png",
            description:
                "You can now use your time efficiently with quick time management and planning with Time Planner. With Firebase DB, you can check the work you have completed, and with the change of theme, you can work in an interface according to your taste. You can also add your own tasks and delete them.",
            technologies: {
                frontend: "Flutter, Firebase, Material, Kanban Board, GetX",
                backend: "Not Involved",
            },
            color: "255 255 255",
            link: "https://github.com/oguzhan18/Time-Planner",
        },
        {
            number: "05",
            title: "Speed Project",
            category: "Web Development",
            year: "2022",
            image: "./img/speed-project/speed-project.png",
            imageDetail: "./img/speed-project/speed-project.png",
            description:
                "When building the basic skeleton of your Angular projects, spend your time writing code using SPEED PROJECT so that you can prepare your components faster and more precisely.",
            technologies: {
                frontend: "Angular,Material",
                backend: "NodeJS, ExpressJS",
            },
            color: "121 35 208",
            link: "https://github.com/oguzhan18/speed-project",
        },
        {
            number: "06",
            title: "SEO Tools API",
            category: "Web Development",
            year: "2024",
            image: "./img/seo-tools-api/seo-tools-api.png",
            imageDetail: "./img/seo-tools-api/seo-tools-api.png",
            description:
                "seo-tools-api is a comprehensive collection of SEO tools designed to help webmasters, developers, and SEO professionals optimize websites for better search engine performance. Built using NestJS, this API provides various modules for analyzing and improving different aspects of a website's SEO. The API is designed to be easy to use and integrate into any web application.",
            technologies: {
                frontend: "Swagger UI",
                backend: "NestJS",
            },
            color: "0 122 255",
            link: "https://github.com/oguzhan18/seo-tools-api",
        },
        {
            number: "07",
            title: "Pagespeed API",
            category: "Web Development",
            year: "2024",
            image: "./img/pagespeed-api/page-speed-logo.png",
            imageDetail: "./img/pagespeed-api/page-speed-logo.png",
            description:
                "pagespeed-api is a simple API that provides performance insights for web pages. It uses Google's PageSpeed Insights API to analyze a given URL and return performance metrics such as Lighthouse scores, field data, and lab data. The API is designed to be easy to use and integrate into any web application.",
            technologies: {
                frontend: "Swagger UI",
                backend: "NestJS, PageSpeed Insights API",
            },
            color: "255 255 255",
            link: "https://github.com/oguzhan18/pagespeed-api",
        },
        {
            number: "08",
            title: "NpmJS CDN APP",
            category: "Web Development",
            year: "2024",
            image: "./img/npmjs-cdn-app/npmjs-cdn-app.png",
            imageDetail: "./img/npmjs-cdn-app/npmjs-cdn-app.png",
            description: "npmjs-cdn-app is a simple web application that allows users to search for and view information about npm packages. It uses the npmjs.com API to fetch package data and display it in a user-friendly interface. Users can search for packages by name, view package details, and copy package URLs for use in their projects.",
            technologies: {
                frontend: "Swagger UI",
                backend: "NestJS, npmjs.com API",
            },
            color: "255 255 255",
            link: "https://npmjs-cdn-app.vercel.app/swagger#/",
        },
        {
            number: "09",
            title:"Glasses UI",
            category:"Web Development",
            year:"2023",
            image:"./img/glasses-ui/glasses-ui-logo.png",
            imageDetail:"./img/glasses-ui/glasses-ui-logo.png",
            description:"Glasses UI (0.0.4-3)v a collection of reusable CSS classes to enhance your web development experience. This library provides various utilities, styles, and components that you can easily integrate into your projects. The library is designed to be lightweight, easy to use, and customizable, making it ideal for building modern web applications.",
            technologies:{
                frontend:"",
                backend:""
            },
            color:"255 255 255",
            link:"https://npmjs.com/package/glasses-ui"
        },
        {
            number: "10",
            title:"Canlı TV İzle",
            category:"Mobile Development",
            year:"2023",
            image:"./img/canl-tv-izle/1.gif",
            imageDetail:"./img/canl-tv-izle/1.gif",
            description:"Application where you can watch live Turkish television channels. You can watch live broadcasts of all Turkish TV channels on your mobile device. You can watch live broadcasts of all Turkish TV channels on your mobile device.",
            technologies:{
                frontend:"Flutter, Material",
                backend:"Dart, GetX"
            },
            color:"255 255 255",
            link:"https://github.com/oguzhan18/canl-tv-izle"
        }
    ];

    useEffect(() => {
        if (isProjectsInView && !hasAnimated) {
            projectsControls.start("visible");
            setTimeout(() => {
                setHasAnimated(true);
            }, 500);
        } else if (!isProjectsInView && hasAnimated) {
            projectsControls.start("hidden");
            setHasAnimated(false);
        }
    }, [isProjectsInView, projectsControls, hasAnimated, setHasAnimated]);

    // ----- Hover effect ----- //

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        },
        [cursorX, cursorY],
    );

    const handleScroll = useCallback(() => {
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 100); // Debounce scrolling state
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const items = itemsRef.current;
        if (!items) return;

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        const checkHover = () => {
            if (isScrolling) {
                const hoverItem = document.elementFromPoint(
                    cursorX.get(),
                    cursorY.get(),
                );
                const projectItem = hoverItem?.closest(".project-item");
                if (projectItem) {
                    const index = Array.from(items.children).indexOf(
                        projectItem as Element,
                    );
                    setActiveIndex(index);
                } else {
                    setActiveIndex(-1);
                }
            }
        };

        items.addEventListener("mouseleave", () => {
            setActiveIndex(-1);
        });

        const scrollCheckInterval = setInterval(checkHover, 100);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            clearInterval(scrollCheckInterval);
        };
    }, [isMobile, handleMouseMove, handleScroll, cursorX, cursorY, isScrolling]);

    // ----- Overlay ----- //

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsOverlayVisible(true);
    };

    const closeOverlay = () => {
        setIsContentVisible(false);
        setTimeout(() => {
            setIsOverlayVisible(false);
        }, 800);
    };

    const lenis = useLenis();

    useEffect(() => {
        if (isOverlayVisible) {
            lenis?.stop();
            document.documentElement.style.overflowY = "hidden";
            const timer = setTimeout(() => {
                setIsContentVisible(true);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            lenis?.start();
            document.documentElement.style.overflowY = "auto";
        }
    }, [isOverlayVisible]);

    // ----- Image Preloading ----- //

    useEffect(() => {
        projects.map((project: Project) => {
            const img = new Image();
            img.src = project.image;

            const img2 = new Image();
            img2.src = project.imageDetail;
        });
    }, []);

    return (
        <motion.div
            style={{
                background: backgroundGradient,
                zIndex: isOverlayVisible ? 20 : 10,
            }}
            initial="hidden"
            animate={projectsControls}
            className="w-screen min-h-screen flex justify-center flex-col items-center relative z-10"
        >
            {isTouchDevice || (!isTouchDevice && isMobile) ? (
                <motion.div>
                    <motion.h2
                        custom={0}
                        variants={fadeInUpVariants}
                        className="poppins-light text-3xl tracking-[calc(3rem * 0.02)] text-center mb-10"
                    >
                        Selected Projects
                    </motion.h2>

                    {/* Mobile Version: Card like design */}
                    <div className="grid grid-cols-2 grid-flow-row max-sm:grid-cols-1 gap-6 gap-y-32 px-4">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.number}
                                className="w-80 max-sm:w-[80vw] flex flex-col gap-y-4 items-center"
                                variants={fadeInUpVariants}
                                onClick={() => handleProjectClick(project)}
                                custom={index + 1}
                            >
                                <div
                                    key={project.number}
                                    className="w-80 aspect-[77/44] max-sm:w-[80vw] bg-cover bg-center rounded-xl"
                                    style={{backgroundImage: `url('${project.image}')`}}
                                ></div>
                                <h1 className="khula-regular text-4xl mt-8">{project.title}</h1>
                                <hr/>
                                <div className="flex flex-row justify-between items-center w-full">
                                    <p className="poppins-extralight text-lg">
                                        {project.category}
                                    </p>
                                    <p className="poppins-extralight text-lg">{project.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    initial="hidden"
                    animate={projectsControls}
                    className="max-w-[1000px] w-full flex justify-center flex-col items-center px-4"
                >
                    <motion.h2
                        custom={0}
                        variants={fadeInUpVariants}
                        className="poppins-light text-3xl tracking-[calc(3rem * 0.02)] mb-10"
                    >
                        Selected Projects
                    </motion.h2>

                    {hasAnimated && (
                        <AnimatePresence>
                            {activeIndex !== -1 && (
                                <motion.div
                                    ref={galleryRef}
                                    className="fixed w-[385px] h-[200px] overflow-hidden pointer-events-none z-40 rounded-xl"
                                    initial={{opacity: 0, scale: 0.2}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0.2}}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                    style={{
                                        left: cursorX,
                                        top: cursorY,
                                        x: "-50%",
                                        y: "-50%",
                                    }}
                                >
                                    <motion.div
                                        ref={imagesRef}
                                        className="w-full h-[800px] flex flex-col"
                                        animate={{y: `-${200 * activeIndex}px`}}
                                        transition={{duration: 0.2, ease: "easeOut"}}
                                    >
                                        {projects.map((project) => (
                                            <img
                                                key={project.number}
                                                className="w-full h-[200px] object-cover object-center"
                                                src={project.image}
                                            />
                                        ))}
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}

                    <div
                        ref={itemsRef}
                        className="flex justify-center items-center flex-col w-full"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.number}
                                className="flex flex-col w-full group project-item cursor-pointer"
                                style={{willChange: "transform, opacity"}}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => handleProjectClick(project)}
                                variants={fadeInUpVariants}
                                custom={index + 1}
                            >
                                <div className="w-full flex justify-between items-center h-[200px]">
                                    <div className="flex justify-start items-start h-fit gap-x-4">
                                        <p className="poppins-extralight text-2xl leading-none group-hover:text-gray-2 text-gray-3 transition-colors">
                                            {project.number}
                                        </p>
                                        <h1 className="khula-regular text-6xl tracking-[calc(3.75rem * 0.03)] group-hover:text-gray-2 transition-all group-hover:ml-2">
                                            {project.title}
                                        </h1>
                                    </div>
                                    <p className="poppins-extralight text-lg pr-2 group-hover:text-gray-2 group-hover:pr-4 transition-all">
                                        {project.category}
                                    </p>
                                </div>
                                <hr className="w-full border-gray-1 group-hover:border-gray-4 transition-colors"></hr>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            <AnimatePresence>
                {(isOverlayVisible || selectedProject) && (
                    <>
                        <Curve isVisible={isOverlayVisible}/>
                        <motion.div
                            className="fixed inset-0 w-full z-[999] flex items-center justify-center"
                            style={{pointerEvents: isContentVisible ? "auto" : "none"}}
                            initial="hidden"
                            animate={isOverlayVisible ? "visible" : "exit"}
                            exit="exit"
                            onTouchStart={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                        >
                            <AnimatePresence mode="wait">
                                {isContentVisible && selectedProject && (
                                    <Overlay project={selectedProject} isMobile={isMobile}/>
                                )}
                            </AnimatePresence>
                        </motion.div>
                        {isContentVisible && (
                            <button
                                onClick={closeOverlay}
                                className="fixed z-[9999] top-6 right-6 px-4 py-2 text-light text-xl poppins-regular flex flex-row gap-x-2 items-center"
                            >
                                <X size={32}/>
                            </button>
                        )}
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Projects;
