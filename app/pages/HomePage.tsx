import Image from "next/image";
import essa from "../../public/essa.png";
import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";
import HeaderComponent from "../components/HeaderComponent";
import download from "../../public/download.png";
function HomePage() {
  return (
    <div className="bg-background w-full min-h-screen flex flex-col flex-1 items-center justify-start">
      <HeaderComponent />
      <main className="flex-1 w-full flex flex-row items-center justify-around ">
        <section className="flex flex-row w-full h-fit mt-28 space-x-24">
          <article className="flex flex-col items-start justify-around text-white text-5xl font-medium w-1/2 h-fit space-y-6 pl-34">
            <div className="flex flex-col items-start justify-center space-y-6">
              <p>Hi, I&apos;m </p>
              <span className="bg-linear-to-r from-finish to-init to-secondary bg-clip-text text-transparent text-8xl font-bold">
                Weydson Lino
              </span>
              <h2 className="text-[64px] font-semibold">
                Full-Stack Developer
              </h2>
              <p className="text-[20px] text-[#C7CAFF]">
                I design and develop full-stack applications that are intuitive,{" "}
                <br />
                scalable, and performant.
              </p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-4 space-y-4 ml-1 mt-4">
              <button className="bg-linear-to-r from-init to-finish text-white w-fit h-fit font-medium p-3.5 pl-16 pr-16 rounded-4xl text-2xl">
                See My Projects
              </button>
              <div className="inline-block rounded-full bg-linear-to-r from-init to-finish p-1">
                <button className="flex items-center space-x-3 bg-pink-950 text-white w-fit h-fit font-medium p-3.5 pl-16 pr-16 rounded-full text-2xl">
                  <Image src={download} alt="Download" className="w-6 h-6 " />
                  <h3>Download Resume</h3>
                </button>
              </div>
            </div>
            <p className="text-2xl text-[#C7CAFF] mt-8">Follow Me</p>
            <div className="flex flex-row items-center justify-center space-x-4 ">
              <a
                href="http://www.github.com/weydsonlino"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={github} alt="GitHub" className="w-10 h-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/weydson-silva-1b4bab375/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="LinkedIn" className="w-10 h-10" />
              </a>
            </div>
          </article>
          <article className="relative w-1/2 space-y-4 object-contain bg-background-elipse">
            <div className={`bg-cover bg-center`}>
              <Image src={essa} alt="Essa" className="w-3/4" />
            </div>
            <div className="w-80 h-80 rounded-4xl flex flex-col items-start justify-center pl-10 space-y-4 text-white text-2xl font-bold absolute top-100 left-100 bg-linear-to-r from-finish/40 to-init/40 backdrop-blur-xs">
              <h3 className="text-6xl">5+</h3>
              <p className="text-4xl">Years of Experience</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
