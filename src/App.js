import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>📖 Dictionary </h1>
      <SearchEngine />
      <footer>
        <a
          href="https://github.com/LaBren90/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Laura Brennan
      </footer>
    </div>
  );
}
