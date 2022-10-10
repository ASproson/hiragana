import "./App.css";
import StudyGuide from "./components/StudyGuide";

// ref link https://www.lexilogos.com/keyboard/hiragana.htm

function App() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mt-10 mb-10">Let's Learn Hiragana!</h1>
      <StudyGuide />
    </div>
  );
}

export default App;
