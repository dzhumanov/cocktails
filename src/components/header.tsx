import { Navbar } from "./navbar";
import { Contacts } from "./contacts";

const items = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "Products",
  },
  {
    id: 3,
    label: "Cocktails",
  },
  {
    id: 4,
    label: "Our Story",
  },
  {
    id: 5,
    label: "Garnished with Good",
  },
];
export const Header = () => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
      <div className="justify-self-start">
        <Navbar items={items} />
      </div>

      <div className="justify-self-center py-3 px-5 border-2 border-red-500 rounded-lg font-bold">
        LOGO
      </div>

      <div className="justify-self-end">
        <Contacts />
      </div>
    </div>
  );
};
