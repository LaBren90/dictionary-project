import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <form className="searchEngine">
        <input type="search" placeholder="Enter a word..." />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
