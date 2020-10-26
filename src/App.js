import "./App.css";
import React from "react";

function UsernameForm({ onSubmitUsername }) {
  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return (
    <div className="App">
      <header className="App-header">
        <UsernameForm onSubmitUsername={onSubmitUsername} />
      </header>
    </div>
  );
}

export default App;
