import React from "react";

const Header = () => {
  return (
    <header className="py-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="">
            <h1 className="text-3xl">Bandgeek Dev</h1>
          </a>
          <button className="btn btn-sm">Work with Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
