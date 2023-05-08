import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="flex-none justify-center shadow-md mb-20 h-auto w-52 bg-slate-50 rounded-lg relative">
      <div className="flex justify-center border-b rounded-t-md text-xl bg-pink-500">
        <h3 className="mt-4 mb-4 text-white">Menu</h3>
      </div>
      <div className="flex-none justify-center">
        <p className="flex justify-center mt-4">Start Language</p>
        <div className="flex justify-center m-auto mt-4 ">
          <button className="border h-10 w-16 hover:bg-pink-200 rounded-md">
            English
          </button>
          <button className="border h-10 w-16 hover:bg-pink-200 ml-4 rounded-md">
            Russian
          </button>
        </div>
      </div>
      <div className="items-center m-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis porro
          fuga odio maxime deleniti. Dignissimos blanditiis architecto modi.
          Autem neque fugit dolorum a, ipsum soluta optio beatae distinctio
          aliquid error.
        </p>
      </div>
      <div className="flex-none justify-center border rounded-b-md absolute bottom-0 w-full hover:bg-pink-200 cursor-pointer">
        <span className="flex justify-center text-center text-xl mt-4 mb-2">
          <Link to="/Configuration" className="mr-2 text-xl">
            Advanced Settings
          </Link>
        </span>
      </div>
    </div>
  );
};
