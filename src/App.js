import "./App.css";
import { Link } from "react-router-dom";

// ref link https://www.lexilogos.com/keyboard/hiragana.htm

function App() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mt-10 mb-4">Let's Learn Hiragana!</h1>
      <div className="mb-10">
        <p>
          This is resource I am building to practice Hiragana, there are very
          likely mistakes!
        </p>
        <p> So please be patient and raise an issue on GitHub for any fixes</p>
      </div>
      <Link to="/studyguide">Study Guide</Link>
    </div>
  );
}

export default App;
