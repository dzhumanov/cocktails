import { cn } from "../utils/utils";

interface Props {
  className?: string;
}

export const Search: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[50%] p-10  bg-red fadeInUpAnimation",
        className
      )}
    >
      <h2 className="text-primary font-bold text-2xl mb-5">
        We're here to help you make the most of cocktail hour.
      </h2>
      <div className="bg-primary  rounded-full w-75 mx-auto mb-8 text-xl py-2">
        <input
          type="text"
          placeholder="Search for..."
          className="font-bold py-3 px-5 w-75 outline-0 placeholder:text-xl  placeholder:align-middle line-height[3rem]"
        />
      </div>
      <p className="text-primary text-center">
        Browse our curated cocktails by cocktail name, occasion or key
        ingredient
      </p>
    </div>
  );
};
