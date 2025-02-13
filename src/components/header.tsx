import { Navbar } from "./navbar";
import { Contacts } from "./contacts";

const items = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Products",
    link: "products",
  },
  {
    id: 3,
    label: "Cocktails",
    link: "cocktails",
  },
  {
    id: 4,
    label: "Our Story",
    link: "story",
  },
  {
    id: 5,
    label: "Garnished with Good",
    link: "garnish",
  },
];
export const Header = () => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 font-open">
      <div className="justify-self-start">
        <Navbar items={items} />
      </div>

      <div className="justify-self-center py-3 px-5 border-3 border-red-500 rounded-lg font-bold">
        LOGO
      </div>

      <div className="justify-self-end">
        <Contacts />
      </div>
    </div>
  );
};
