import React from "react";
import { Link } from "react-router-dom";

const links = [
  { id: 0, to: "/", text: "Home" },
  { id: 1, to: "/studyguide", text: "Study Guide" },
  { id: 2, to: "/quiz", text: "Set Quizzes" },
  { id: 3, to: "/randomQuiz", text: "Random Quiz" },
];

const NavBar = () => {
  return (
    <div className="space-x-6 text-right pr-10">
      {links.map((link) => {
        return (
          <Link to={link.to} key={link.id} className='cursor-pointer hover:text-blue-500'>
            {link.text}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
