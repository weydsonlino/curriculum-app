import Image, { StaticImageData } from "next/image";

interface CardComponentProps {
  title: string;
  width: "sm" | "md" | "lg";
  image: StaticImageData;
  description?: string;
}
function CardComponent(props: CardComponentProps) {
  const size = {
    sm: ["w-[375px]", "h-[315px]", "text-[32px]", "64"],
    md: ["w-80", "h-80", "text-[64px]", "32"],
    lg: ["w-96", "h-96", "text-[80px]", "64"],
  };
  return (
    <div
      className={`${size[props.width][0]} ${size[props.width][1]} bg-linear-to-b from-init to-azul-escuro rounded-4xl flex flex-col items-center justify-center text-white text-2xl font-semibold py-9 space-y-2`}
    >
      <Image
        src={props.image}
        alt="Frame"
        className={`w-${size[props.width][3]} h-${size[props.width][3]}`}
      />
      <h3 className={`${size[props.width][2]} font-bold`}>
        {props.title ? props.title : ""}
      </h3>
      <p className="text-[20px] font-medium text-center">
        {props.description ? props.description : ""}
      </p>
    </div>
  );
}

export default CardComponent;
