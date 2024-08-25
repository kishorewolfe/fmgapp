import React from "react";

type Props = {};

const LanguagesSpoken = ({ languages }) => {
  return (
    <div>
      {languages.map((lang, i) => {
        return (
          <span
            key={i}
            className=" ring-yellow-600/20 inline- mx-1 items-center rounded-md  bg-lime-50 px-2 py-1 text-xs font-medium text-cyan-700 ring-1 ring-inset ring-purple-700/10"
          >
            {lang}
          </span>
        );
      })}
    </div>
  );
};

export default LanguagesSpoken;
