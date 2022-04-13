import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-slate-600 mt-5">
      <p className="text-slate-200">
        All Right Reserve &copy;
        <span className="text-slate-400"> {date.getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
