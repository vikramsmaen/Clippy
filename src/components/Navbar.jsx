"use client";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 ">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">Clip Board</a>
      </div>
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-stretch">
          <input type="checkbox" className="toggle theme-controller" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
