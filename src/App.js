import "./App.css";

const data = [
  { id: 0, hiragana: "あ", eng: "a", sound: "ah" },
  { id: 1, hiragana: "い", eng: "i", sound: "iee" },
  { id: 2, hiragana: "う", eng: "u", sound: "uoo" },
  { id: 3, hiragana: "え", eng: "e", sound: "eh" },
  { id: 4, hiragana: "お", eng: "o", sound: "oh" },
];

const s = "あ";

function App() {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl mt-10 mb-10">Let's Learn Hiragana!</h1>
        <div className="text-center text-3xl">
          {data.map((val) => {
            return (
              <div>
                <span className="mr-4">{val.eng}</span>
                <span>{val.hiragana}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
