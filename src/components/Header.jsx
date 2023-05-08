import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-between items-center h-[50px] px-5 shadow-md bg-rose-600 text-white">
      <span>
        <Link to="/" className="mr-2 text-xl">
          Learn Languages
        </Link>
      </span>
      <span>
        <Link to="/Auth" className="mr-2 text-xl">
          Auth Form
        </Link>
      </span>
    </div>
  );
};
