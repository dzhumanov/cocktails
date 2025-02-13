import { cn } from "../utils/utils";
import { useIntersection } from "react-use";
import BackgroundImage from "../assets/background.jpg";
import { Container } from "./container";
import { Carousel } from "./carousel";
import { RefObject, useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
}

export const Products: React.FC<Props> = ({ className }) => {
  const [textState, setTextState] = useState<boolean>(false);
  const [firstButtonState, setFirstButtonState] = useState<boolean>(false);
  const [secondButtonState, setSecondButtonState] = useState<boolean>(false);

  const textRef = useRef<HTMLSpanElement>(null) as RefObject<HTMLSpanElement>;
  const firstButtonRef = useRef<HTMLAnchorElement>(
    null
  ) as RefObject<HTMLAnchorElement>;
  const secondButtonRef = useRef<HTMLAnchorElement>(
    null
  ) as RefObject<HTMLAnchorElement>;

  const textIntersection = useIntersection(textRef, {
    threshold: 0.4,
  });

  const firstButtonIntersection = useIntersection(firstButtonRef, {
    threshold: 0.4,
  });

  const secondButtonIntersection = useIntersection(secondButtonRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (textIntersection?.isIntersecting) {
      setTextState(true);
    } else {
      setTextState(false);
    }
  }, [textIntersection]);

  useEffect(() => {
    if (firstButtonIntersection?.isIntersecting) {
      setFirstButtonState(true);
    } else {
      setFirstButtonState(false);
    }
  }, [firstButtonIntersection]);

  useEffect(() => {
    if (secondButtonIntersection?.isIntersecting) {
      setSecondButtonState(true);
    } else {
      setSecondButtonState(false);
    }
  }, [secondButtonIntersection]);

  return (
    <div
      className={cn("py-20 bg-no-repeat bg-cover bg-center", className)}
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold font-phil" id="products">
            Our Products
          </h2>
          <p>
            Make every party a cocktail party.{" "}
            <span ref={textRef} className="relative pb-2">
              Explore our vodkas.
              <span
                className={`absolute left-0 bottom-0 h-[3px] bg-red-500 transition-all duration-700 ease-out ${
                  textState ? "w-full" : "w-0"
                }`}
              ></span>
            </span>
          </p>
        </div>
      </Container>

      <Carousel />

      <Container>
        <div className="flex gap-4 justify-center mt-4">
          <a
            ref={firstButtonRef}
            href="#"
            className={`inline-block text-center w-[140px] py-4 bg-red text-primary rounded-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-red active:bg-red hover:shadow-lg active:shadow-none ${
              firstButtonState ? "fadeInUpFirst" : "opacity-0"
            }`}
          >
            Where To Buy
          </a>
          <a
            ref={secondButtonRef}
            href="#"
            className={`inline-block text-center w-[140px] py-4 bg-secondary text-primary rounded-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-secondary active:bg-secondary hover:shadow-lg active:shadow-none ${
              secondButtonState ? "fadeInUpSecond" : "opacity-0"
            }`}
          >
            Learn More
          </a>
        </div>
      </Container>
    </div>
  );
};
