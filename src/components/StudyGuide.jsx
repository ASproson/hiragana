import React from "react";
import { useState } from "react";
import {
  hW,
  hR,
  hY,
  hM,
  hP,
  hB,
  hH,
  hN,
  hD,
  hT,
  hZ,
  hS,
  hG,
  hK,
  hVowels,
} from "../data/hiraganaList";

const hiraganaSet = [
  { id: 0, name: "vowels", set: hVowels },
  { id: 1, name: "ka", set: hK },
  { id: 2, name: "ga", set: hG },
  { id: 3, name: "sa", set: hS },
  { id: 4, name: "za", set: hZ },
  { id: 5, name: "ta", set: hT },
  { id: 6, name: "da", set: hD },
  { id: 7, name: "na", set: hN },
  { id: 8, name: "ha", set: hH },
  { id: 9, name: "ba", set: hB },
  { id: 10, name: "pa", set: hP },
  { id: 11, name: "ma", set: hM },
  { id: 12, name: "ya", set: hY },
  { id: 13, name: "ra", set: hR },
  { id: 14, name: "wa", set: hW },
];

const StudyGuide = () => {
  const [showHiraganaSet, setShowHiraganaSet] = useState();

  const selectHirganaSet = (setRequest) => {
    setShowHiraganaSet(setRequest);
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl pt-10">Study Guide</h1>
        <p className="p-4">
          Click each vowel/consonant set to study them, english is followed by
          pronunciation
        </p>
      </div>

      <div className="flex space-x-6 justify-center">
        {hiraganaSet.map((hSet) => {
          return (
            <p
              key={hSet.id}
              onClick={() => {
                selectHirganaSet(hSet.set);
              }}
              className="cursor-pointer font-bold text-xl hover:text-blue-500 hover:scale-150 transition ease-in-out"
            >
              {hSet.name}
            </p>
          );
        })}
      </div>

      <div className="flex justify-center space-x-6 pt-16 text-3xl font-bold">
        {showHiraganaSet?.map((set) => {
          return (
            <div key={set.id} className="text-center">
              <p className="pb-8 pt-4">{set.eng}</p>
              <p className="pb-12 pt-4 text-red-400">{set.sound}</p>
              <p className="text-[70px] text-cyan-600 hover:scale-150 transition ease-in-out">{set.hiragana}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudyGuide;

// Click a set to study [vowels] [consonants: [k, s, t, n, h, m, y, r, w]], show with their dakuten counterpart
// List hiragana with english spelling beneath by default, give option to 'show' pronunciation guide
// ^store this option in state so that it doesn't have to be clicked for each one
