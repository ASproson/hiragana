import React from "react";

const data = [
  { id: 0, hiragana: "あ", eng: "a", sound: "ah" },
  { id: 1, hiragana: "い", eng: "i", sound: "ee" },
  { id: 2, hiragana: "う", eng: "u", sound: "uoo" },
  { id: 3, hiragana: "え", eng: "e", sound: "eh" },
  { id: 4, hiragana: "お", eng: "o", sound: "oh" },
];

const getRandomArrayofNumbers = (min = 0, max = data.length) => {
  let randomNumbers = [];
  for (let i = 0; i < 2; i++) {
    let rand = Math.floor(Math.random() * (max - 1 - min + 1));
    if (!randomNumbers.includes(rand)) {
      randomNumbers.push(rand);
    } else {
      i--;
    }
  }
  return randomNumbers;
};

const getRandomHiragana = () => {
  let array = getRandomArrayofNumbers();
  let randomHiragana = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (data[i].id === array[j]) {
        randomHiragana.push(data[i]);
      }
    }
  }
  //   console.table(randomHiragana);
  return randomHiragana;
};

getRandomHiragana();

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
