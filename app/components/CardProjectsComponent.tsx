import Image, { StaticImageData } from "next/image";
import arrowUp from "../../public/arrowUp.png";

interface CardProjectsComponentProps {
  title: string;
  image: StaticImageData;
  type: string;
  link?: string;
}
function CardProjectsComponent(props: CardProjectsComponentProps) {
  return (
    <div className="w-[533px] h-[400px] rounded-4xl bg-fundo flex flex-col items-center justify-center relative overflow-hidden text-white">
      <Image src={props.image} alt="Projeto" fill className="object-center" />
      <div className="absolute bottom-0 left-0 w-full h-32 p-6 flex flex-row items-center justify-between bg-linear-to-r from-roxo-cardProject to-azul-escuro rounded-4xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">{props.title}</h2>
          <h3 className="mt-2 font-medium text-white">{props.type}</h3>
        </div>
        <a
          href={props.link || "https://www.github.com/weydsonlino"}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto"
        >
          <button className="rounded-full bg-[#8D1AFC] px-6 py-6 ">
            <Image
              src={arrowUp}
              alt="Seta na diagonal superior direita"
              className="w-8 h-8"
            />
          </button>
        </a>
      </div>
    </div>
  );
}

export default CardProjectsComponent;
