import React from "react";
import { hW, hR, hY, hM, hP, hB, hH, hN, hD, hT, hZ, hS, hG, hK, hVowels } from "../data/hiraganaList";

const data = [
  {id: 0, name: 'Vowels', set: hVowels},
  {id: 2, name: 'ka', set: hK},
  {id: 3, name: 'ga', set: hG},
  {id: 4, name: 'sa', set: hS},
  {id: 5, name: 'za', set: hZ},
  {id: 6, name: 'ta', set: hT},
  {id: 7, name: 'da', set: hD},
  {id: 8, name: 'na', set: hN},
  {id: 9, name: 'ha', set: hH},
  {id: 10, name: 'ba', set: hB},
  {id: 11, name: 'pa', set: hP},
  {id: 12, name: 'ma', set: hM},
  {id: 12, name: 'ya', set: hY},
  {id: 12, name: 'ra', set: hR},
  {id: 12, name: 'wa', set: hW},
]

const StudyGuide = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl pt-10">Study Guide</h1>
        <p className="p-4">Click each vowel/consonant set to study them</p>
      </div>

      <div className="text-center font-bold text-xl">
        {data.map((d) => {
          return (
            <div>
              {d.set.map((val) => {
                return (
                  <p>{val.hiragana}</p>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default StudyGuide;

// Click a set to study [vowels] [consonants: [k, s, t, n, h, m, y, r, w]], show with their dakuten counterpart
// List hiragana with english spelling beneath by default, give option to 'show' pronunciation guide
// ^store this option in state so that it doesn't have to be clicked for each one
