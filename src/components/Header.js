import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handlefixedHeader = () => {
      console.log("fixedHeader");
      const header = document.getElementById("header");
      if (window.scrollY > 100) header.classList.add("fixed");
    };
    window.addEventListener("scroll", handlefixedHeader);
    return () => {
      window.removeEventListener("scroll", handlefixedHeader);
    };
  }, []);
  return <div className="w-full p-5 bg-black" id="header"></div>;
};

export default Header;
