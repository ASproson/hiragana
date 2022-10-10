import "./App.css";

const data = [
  { id: 0, hiragana: "あ", eng: "a", sound: "ah" },
  { id: 1, hiragana: "い", eng: "i", sound: "iee" },
  { id: 2, hiragana: "う", eng: "u", sound: "uoo" },
  { id: 3, hiragana: "え", eng: "e", sound: "eh" },
  { id: 4, hiragana: "お", eng: "o", sound: "oh" },
];

function App() {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl mt-10 mb-10">Let's Learn Hiragana!</h1>
        <div className="text-center text-3xl flex justify-center">
          {data.map((val) => {
            return (
              <div key={val.id} className='mr-4'>
                <p>{val.eng}</p>
                <p className='mt-2'>{val.hiragana}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
