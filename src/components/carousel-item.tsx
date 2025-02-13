import { CarouselItemInterface } from "../types/type";
import { cn } from "../utils/utils";

interface Props {
  className?: string;
  item: CarouselItemInterface;
}

export const CarouselItem: React.FC<Props> = ({ className, item }) => {
  return (
    <div className={cn("w-[500px] mx-auto text-center", className)}>
      <img className="block mx-auto h-[500px]" src={item.image} alt="" />
      <h3 className="font-bold uppercase text-2xl mb-2">{item.name}</h3>
      <p className="text-xl">{item.description}</p>
    </div>
  );
};
