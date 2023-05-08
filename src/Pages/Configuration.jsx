export const Configuration = () => {
  return (
    <div className="container flex justify-center mx-auto relative h-[580px] mb-20">
      <div className="mt-10 border rounded-md bg-pink-50 h-auto w-[600px]">
        <span className="flex justify-center border-b-2">
          <h2 className="text-xl mt-2 mb-2">Advanced Settings</h2>
        </span>
      </div>
      <div></div>
      <div className="items-center absolute bottom-0 mb-10">
        <input
          type="text"
          className="order h-9 outline-none bg-black text-white py-1 px-2"
        />
        <input
          type="text"
          className="border ml-10 h-9 outline-none bg-black text-white py-1 px-2"
        />
        <div className="flex justify-center mt-10 text-xl w-auto h-9 border rounded-md hover:bg-pink-200 cursor-pointer">
          <p>Added Words</p>
        </div>
      </div>
    </div>
  );
};
