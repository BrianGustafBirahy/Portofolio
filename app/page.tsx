import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import { Timeline } from "./components/Timelines/Timeline";
import { Navbar } from "./components/NavBar/navbar";
import 'remixicon/fonts/remixicon.css'
import { listProyek } from "./db/proyek";
import { tools } from "./db/tools";
import Footer from "./components/Footer/footer";
import Preloader from "./components/PreLoader/preloader";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import { listExperience } from "./db/experience";
// import CircularText from "./components/CircularText/CircularText";
import 'animate.css';

export default function Home() {
  return (
    <div className=" min-h-screen overflow-x-hidden bg-[#19222D]">
      <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full ">
        <Squares
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#2F3A4F'
          hoverFillColor='#191970'
        />
      </div>
      {/* <SplashCursor/> */}
      <Navbar />
      
      {/* <Preloader/> */}
      <div className="container mx-auto min-h-screen pt-24 sm:pt-28 md:pt-32 xl:pt-16 xl:gap-0 gap-6 grid " id="home"> 
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-6">
            <div className="flex items-center h-full p-20">
              <div className="flex flex-col gap-4">
                <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                duration={1.2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h1 className="text-lg sm:text-xl md:text-3xl text-white font-bold">I'm Ready For Job</h1>
                      <RotatingText 
                      texts={['Internet Of Things', 'Web Development', 'Design UI', 'Data Scientist']}
                      mainClassName="px-2 sm:px-3 md:px-4 bg-[#4169E1] text-black overflow-hidden py-0.5 sm:py-1 md:py-1.5 justify-center rounded-lg text-sm sm:text-lg md:text-2xl font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                      />
                  </div>      
                </AnimatedContent>

                <div className="flex flex-col items-start">
                  <SplitText
                  text="I'm Brian Gustaf"
                  className="text-2xl sm:text-4xl md:text-6xl text-white font-semibold text-center"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  />
                  <SplitText
                  text="IoT Developer"
                  className="text-3xl sm:text-4xl md:text-6xl font-semibold text-start text-[#4169E1]"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  />
                </div>

                <BlurText 
                  text="Computer Science graduate majoring in Informatics with strong interest in data management, administrative systems, and Design graphic. Skilled in analysis, detail-oriented, and proficient in administrative and database tools. Recognized as disciplined, structured, and efficient in supporting systematic team operations."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-sm sm:text-base md:text-xl mb-8 text-white"
                  />

                {/* <div className="flex items-center">
                  <GradientText
                  colors={["#40ffaa", "#4169E1", "#40ffaa", "#4169E1", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="px-8 py-6 rounded-lg border"
                  >
                    Download CV
                  </GradientText>
                </div> */}
                <div className="flex flex-col gap-2 sm:gap-4">
                  <a
                    href="https://drive.google.com/file/d/1L_lYCYusfs6rrKzYqsO_Rx3W6umRrA3r/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GradientText
                      colors={["#40ffaa", "#4169E1", "#40ffaa", "#4169E1", "#40ffaa"]}
                      animationSpeed={3}
                      showBorder={false}
                      className="mx-auto md:mx-0 px-2 py-1 sm:px-6 sm:py-3 rounded-lg border text-sm sm:text-base cursor-pointer"
                    >
                      Download CV <i className="ri-download-line ri-lg"></i>
                    </GradientText>
                  </a>
                </div>

                
              </div>
            </div>
            
          </div>
          <div className="col-span-6 relative order-1 md:order-2 -translate-y-10 md:-translate-y-10 pt-24">
          <div className="absolute top-0 left-0 w-full md:hidden p-2 sm:p-4 bg-black rounded-md">
            <ScrollVelocity texts={['About Me', 'Brian Gustaf Birahy']} 
            className="inline-block whitespace-nowrap
             font-extrabold text-3xl sm:text-4xl tracking-widest
             text-transparent bg-clip-text
             bg-gradient-to-r from-cyan-400 to-blue-500
             drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
            />
          </div>
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            {/* <CircularText
              className="absolute top-10 right-10"
              text="INTERNET*OF*THINGS*"
              onHover="speedUp"
              spinDuration={20}
            /> */}
          </div>
        </div>
      </div>
      <div className="  mx-auto hidden sm:block bg-black p-4 rounded-md">
        <ScrollVelocity 
        texts={['About Me', 'Brian Gustaf Birahy']}
        className="inline-block text-transparent bg-clip-text font-extrabold text-6xl bg-gradient-to-r from-cyan-400 to-blue-500
        drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
        />
      </div>

{/* Tentang */}
      <div className="relative z-10 tentang mt-32 px-20 py-20 " id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto py-5 px-5 bg-zinc-800 rounded-lg">
          <img src="/assets/images/private/Internet of Things (2).png" alt="image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className = "text-sm sm:text-base md:text-lg leading-relaxed mb-10 text-white">
          Hi there! I’m a Computer Science graduate with a focus in Informatics who loves exploring how technology can make life smarter and easier. I’m especially into IoT, microcontrollers, and automation, and I enjoy turning ideas into working prototypes using sensors, actuators, and cloud platforms. Beyond the tech side, I bring an organized and adaptive approach to every project, making sure solutions are not only functional but also impactful.
          </p>
          <div className="flex items-center justify-between">
            <img src="/assets/images/private/Internet of Things (2).png" alt="image" className="w-12 rounded-md sm:block hidden" />
{/* Maintainance */}
            {/* <div className="flex items-center gap-6 text-white">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl mb-1">
                  45 <span className="text-blue-600">+</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg">
                  Done Project
                </p>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl mb-1">
                  4 <span className="text-blue-600">+</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg">
                Experience Years
                </p>
                
              </div>
            </div> */}
{/* Maintainance */}
          </div>
        </div>

        {/* Tools */}
        <div className="text-white tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools I Use</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Here are some tools I usually use to work on projects</p>
          
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              >
                <img
                  src={tool.image}
                  alt={`${tool.name} image`}
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.name}</h4>
                  <p className="opacity-50">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Tools */}
      </div>
{/* Tentang */}
      {/* Proyek */}
      <div className="relative z-10 text-white proyek mt-32 px-20 py-20" id="project">
        <h1 className="text-center text-4xl font-bold mb-2 ">Project</h1>
        <p className="text-base/loose text-center opacity-50">Here are some projects I have completed</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <div className="w-full h-48 flex items-center justify-center bg-gray-100">
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" className="max-h-full max-w-full object-contain"/>
              </div>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 ">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href={proyek.link} className="bg-blue-700 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600 ">View Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}
      {/* Experience */}
      <div className="relative z-10 text-white proyek mt-32 px-20 py-20" id="project">
        <h1 className="text-center text-4xl font-bold mb-2 ">Organization Experience</h1>
        <p className="text-base/loose text-center opacity-50">Here are some highlights from my experience</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listExperience.map((experience) => (
            <div key={experience.id} className="p-4 bg-zinc-800 rounded-md flex flex-col justify-between">
              <div className="w-full h-48 flex items-center justify-center bg-gray-100">
                <img src={experience.gambar} alt="experience Image" loading="lazy" className="max-h-full max-w-full object-contain"/>
              </div>
              <div className="flex flex-col flex-grow">
                <h1 className="text-2xl font-bold mt-2 mb-0 min-h-[64px] line-clamp-2" >{experience.nama}</h1>
                <p className="text-base/loose mb-4 mt-1 sm:-mt-5 md:-mt-6 lg:-mt-8">{experience.desk}</p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {experience.tools.map((tool, index) => (
                      <p className="text-sm sm:text-base md:text-sm lg:text-base py-1 px-2 sm:px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a href={experience.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-700 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600 ">View Documentation</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Experience */}
      {/* Kontak */}
      <div className="relative z-10 kontak mt-32 sm:p-10 p-0" id="contact">
        <h1 className="text-white text-4xl mb-2 font-bold text-center">Contact</h1>
        <p className="text-white text-base/loose text-center mb-10 opacity-50">Let's Get in Touch!</p>
        <form action="https://formsubmit.co/briangustaf03work@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off">
          <div className="text-white flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-white">Full Name</label>
              <input type="text" name="name" placeholder="Input Your Name..." className="bg-zinc-800 border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-white">Email</label>
              <input type="email" name="email" placeholder="Input Your Email..." className="bg-zinc-800 border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold text-white">Message</label>
              <textarea name="message" id="message" cols={45} rows={7} placeholder="Message..." className="bg-zinc-800 border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600 " > Send Message</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}

      <div className="relative z-10 text-white px-20 py-20">
        <Footer/>
      </div>
      </div>
      
  );
}
