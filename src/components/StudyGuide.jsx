import React from "react";

const data = [
  { id: 0, hiragana: "あ", eng: "a", sound: "ah" },
  { id: 1, hiragana: "い", eng: "i", sound: "ee" },
  { id: 2, hiragana: "う", eng: "u", sound: "uoo" },
  { id: 3, hiragana: "え", eng: "e", sound: "eh" },
  { id: 4, hiragana: "お", eng: "o", sound: "oh" },
];

const StudyGuide = () => {
  return (
      <div>
        <div className="text-center text-3xl flex justify-center">
          {data.map((val) => {
            return (
              <div key={val.id} className="mr-4">
                <p>{val.eng}</p>
                <p>{val.sound}</p>
                <p className="mt-2">{val.hiragana}</p>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default StudyGuide;
