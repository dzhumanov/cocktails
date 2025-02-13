import { cn } from "../utils/utils";
import BackgroundImage from "../assets/background.png";
import { Container } from "./container";
import { Carousel } from "./carousel";

interface Props {
  className?: string;
}

export const Products: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("py-20 bg-no-repeat bg-cover bg-center", className)}
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Our Products</h2>
          <p>
            Make every party a cocktail party.{" "}
            <span className="border-b-2 border-secondary pb-3">
              Explore our vodkas.
            </span>
          </p>
        </div>

        <Carousel />

        <div className="flex gap-4 justify-center mt-4">
          <a href="#" className="inline-block text-center w-[140px] py-4 px-5 bg-red text-primary">
            Where To Buy
          </a>
          <a href="#" className="inline-block text-center w-[140px] py-4 px-5 bg-secondary text-primary">
            Learn More
          </a>
        </div>
      </Container>
    </div>
  );
};
