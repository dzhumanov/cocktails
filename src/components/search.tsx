import { cn } from "../utils/utils";

interface Props {
  className?: string;
}

export const Search: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute left-1/2 bottom-[-10%] transform -translate-x-1/2 p-10 pb-6 bg-red",
        className
      )}
    >
      <h2 className="text-primary font-bold text-2xl mb-5">
        We're here to help you make the most of cocktail hour.
      </h2>
      <div className="bg-primary  rounded-full w-75 mx-auto mb-8">
        <input
          type="text"
          placeholder="Search for..."
          className="font-bold py-3 px-5 w-75 outline-0"
        />
      </div>
      <p className="text-primary text-center">
        Browse our curated cocktails by cocktail name, occasion or key
        ingredient
      </p>
    </div>
  );
};
