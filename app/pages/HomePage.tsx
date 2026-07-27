import Image from "next/image";
import essa from "../../public/essa.png";
import HeaderComponent from "../components/HeaderComponent";
function HomePage() {
  return (
    <div className="bg-background w-full flex flex-col flex-1 items-center justify-start">
      <HeaderComponent />
      <main className="flex-1 w-full flex flex-row items-center justify-around ">
        <section className="flex flex-col items-start justify-around text-white text-5xl font-medium w-1/2 h-fit space-y-6 pl-34">
          <div className="flex flex-col items-start justify-center space-y-6">
            <p>Hi, I&apos;m </p>
            <span className="bg-linear-to-r from-finish to-init to-secondary bg-clip-text text-transparent text-8xl font-bold">
              Weydson Lino
            </span>
            <h2 className="text-[64px] font-semibold">Full-Stack Developer</h2>
            <p className="text-[20px]">
              I design and develop full-stack applications that are intuitive,{" "}
              <br />
              scalable, and performant.
            </p>
          </div>
          <div className="flex flex-row items-start justify-start space-x-4 space-y-4 ml-1">
            <button className="bg-linear-to-r from-init to-finish text-white w-fit h-fit font-medium p-3.5 pl-16 pr-16 rounded-4xl text-2xl">
              See My Projects
            </button>
            <button className="bg-linear-to-r from-init to-finish text-white w-fit h-fit font-medium p-3.5 pl-16 pr-16 rounded-4xl text-2xl">
              Download Resume
            </button>
          </div>
          <p className="text-2xl">Follow Me</p>
          <div className="flex flex-row items-center justify-center space-x-4">
            <a href="#" className="text-white text-2xl">
              LinkedIn
            </a>
            <a href="#" className="text-white text-2xl">
              GitHub
            </a>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-1/2 space-y-4">
          <Image src={essa} alt="Essa" className="w-3/4" />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
