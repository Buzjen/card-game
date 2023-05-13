import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-between items-center h-[50px] px-5 shadow-md bg-rose-600 text-white transition-all">
      <Link to="/" className="mr-2 text-xl">
        <div className="flex justify-between items-center hover:shadow-md hover:bg-rose-700 py-1 px-1 rounded-md">
          <img alt="logo" src="/img/eng_logo.png" height={36} width={36} />
          <span className="ml-4">Learn Language</span>
        </div>
      </Link>
      <span>
        <Link
          to="/Auth"
          className="mr-2 text-xl hover:shadow-md hover:bg-rose-700 py-1 px-1 rounded-md"
        >
          Auth Form
        </Link>
      </span>
    </div>
  );
};
