import Image from "next/image";
import essa from "../../public/essa.png";
import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";
import HeaderComponent from "../components/HeaderComponent";
import arrow from "../../public/arrow.png";
import Frame from "../../public/Frame.png";
import CardComponent from "../components/CardComponent";
import typescript from "../../public/typescript.png";
import nest from "../../public/nest.png";
import php from "../../public/php.png";
import laravel from "../../public/laravel.png";
import CardProjectsComponent from "../components/CardProjectsComponent";
import AsgenHomePage from "../../public/AsgenHomePage.png";
import GlHomePage from "../../public/GlHomePage.png";
import oni from "../../public/oni.png";
import CarrouselComponent from "../components/CarrouselComponet";
function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col flex-1 items-center justify-start bg-linear-to-b from-[#00010F] to-[#000442]">
      <HeaderComponent />
      <main className="flex-1 w-full flex flex-col items-center justify-around ">
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
              <div className="inline-block rounded-full bg-linear-to-r from-init to-finish p-1 ">
                <button className="flex items-center space-x-1 bg-black text-white w-fit h-fit font-medium p-3.5 pl-16 pr-16 rounded-full text-2xl">
                  <Image src={arrow} alt="Download" className="w-6 h-6 " />
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
        <div className="w-full h-1/2 flex flex-col items-center justify-center space-y-4">
          <h3 className="text-4xl text-[#C7CAFF] font-semibold">Scroll</h3>
          <div className="w-10 h-10 rounded-full border-4 border-[#C7CAFF] animate-bounce"></div>
        </div>

        {/* About Me */}
        <section className="w-full h-1/2 flex flex-row items-center justify-center space-y-4 mt-10">
          <article className="w-1/2 h-fit flex flex-col items-start justify-center space-y-4 text-white font-semibold pl-34">
            <h2 className="text-[64px] font-semibold text-white text-primary border-b-4 border-[#8E19FB]">
              About Me
            </h2>
            <p className="text-[20px] text-[#C7CAFF] text-left">
              Back-end developer focused on API creation, database architecture,
              and programming logic. I am proficient in languages ​​such as PHP
              and JavaScript and experienced in version control using Git. I am
              committed to continuous professional growth, developing web-based
              projects and honing my back-end technology skills. I am ready to
              contribute to development teams and take on new professional
              challenges.
            </p>
          </article>
          <article className="w-1/2 h-fit flex flex-row items-start justify-center space-x-8">
            <CardComponent
              title="3+"
              width="md"
              description="projects done"
              image={Frame}
            />
            <CardComponent
              title="3+"
              width="md"
              description="projects done"
              image={Frame}
            />
          </article>
        </section>

        {/* Stacks */}
        <section className="w-full h-1/2 flex flex-col items-start justify-center space-y-10 mt-10 ">
          <h2 className="text-[64px] font-semibold text-white text-primary border-b-4 border-[#8E19FB] ml-32 mt-16">
            Stacks
          </h2>
          <article className="w-full h-fit flex flex-row items-start justify-center space-x-16 ml-4 mt-7">
            <CardComponent image={typescript} title="TypeScript" width="sm" />
            <CardComponent image={nest} title="NestJS" width="sm" />
            <CardComponent image={laravel} title="Laravel" width="sm" />
            <CardComponent image={php} title="PHP" width="sm" />
          </article>
        </section>
        {/* Feature Projects */}
        <section className="w-full h-1/2 flex flex-col items-start justify-center space-y-10 mt-10 ">
          <div className="w-full flex flex-row items-center justify-between pr-24">
            <h2 className="text-[64px] font-semibold text-white text-primary border-b-4 border-[#8E19FB] ml-32 mt-16">
              Feature Projects
            </h2>
            <div className="inline-block rounded-full bg-linear-to-r from-init to-finish p-1 ">
              <button className="flex items-center space-x-1 bg-black text-white w-fit h-fit font-medium p-3.5 pl-16 pr-16 rounded-full text-2xl">
                View All Projects
              </button>
            </div>
          </div>

          {/* <CarrouselComponent>
            <CardProjectsComponent
              image={GlHomePage}
              title="Glosário de Libras"
              type="Education"
              link="https://libras-glossario-ifpe.onrender.com/"
            />
            <CardProjectsComponent
              image={AsgenHomePage}
              title="Asgen"
              type="Education"
              link="https://asgen.up.railway.app/"
            />
            <CardProjectsComponent
              image={oni}
              title="Descubra Mais"
              type="Travel"
            />
          </CarrouselComponent> */}
          <article className="w-full h-fit flex flex-row items-start justify-center space-x-16 ml-4 mt-7">
            <CardProjectsComponent
              image={GlHomePage}
              title="Glosário de Libras"
              type="Education"
              link="https://libras-glossario-ifpe.onrender.com/"
            />
            <CardProjectsComponent
              image={AsgenHomePage}
              title="Asgen"
              type="Education"
              link="https://asgen.up.railway.app/"
            />
            <CardProjectsComponent
              image={oni}
              title="Descubra Mais"
              type="Travel"
            />
          </article>
        </section>
        {/* My Services */}
        <section className="w-full h-1/2 flex flex-col items-start justify-center space-y-10 mt-10 mb-16 ">
          <h2 className="text-[64px] font-semibold text-white text-primary border-b-4 border-[#8E19FB] ml-32 mt-16">
            My Services
          </h2>
          <article className="w-full h-fit flex flex-row items-start justify-center space-x-16 ml-4 mt-7 flex-wrap">
            <CardComponent
              image={Frame}
              title="Web Development"
              description="Build responsive, modern, and high-performance websites focused on usability and scalability."
              width="lg"
            />
            <CardComponent
              image={Frame}
              title="Frontend Development"
              description="Create intuitive user interfaces using modern frameworks with responsive and accessible design."
              width="lg"
            />
            <CardComponent
              image={Frame}
              title="Backend Development"
              description="Develop secure APIs, business logic, authentication, and server-side applications."
              width="lg"
            />
          </article>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
