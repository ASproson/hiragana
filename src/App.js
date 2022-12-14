import "./App.css";
import { Link } from "react-router-dom";

// ref link https://www.lexilogos.com/keyboard/hiragana.htm

function App() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl pb-4 pt-10">Let's Learn Hiragana!</h1>
        <div className="pb-10">
          <p>
            This is resource I am building to practice Hiragana, there are very
            likely mistakes!
          </p>
          <p className="pt-4">
            Please be patient and raise an issue on GitHub for any fixes
          </p>
          <p className="pt-4">
            Currently only the
            <Link
              to="/studyguide"
              className="cursor-pointer font-bold text-blue-500"
            >
              {" "}
              Study Guide{" "}
            </Link>{" "}
            is functional!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
