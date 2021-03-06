import "./App.css";
import React from "react";

function UsernameForm({ onSubmitUsername }) {
  function handleSubmit(event) {
    event.preventDefault();
    const lastname = event.target.elements.lastnameInput.value;
    const firstname = event.target.elements.firstnameInput.value;
    onSubmitUsername(firstname, lastname);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="lastnameInput">名字: </label>
        <input id="lastnameInput" type="text" />
      </div>
      <div>
        <label htmlFor="firstnameInput">名前: </label>
        <input id="firstnameInput" type="text" />
      </div>
      <button type="submit">ファーストネームラストネームが知りたい</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (firstname, lastname) =>
    alert(
      `お前のファーストネームは: ${firstname}\nんでラストネームは: ${lastname}`
    );
  return (
    <div className="App">
      <header className="App-header">
        <UsernameForm onSubmitUsername={onSubmitUsername} />
      </header>
    </div>
  );
}

export default App;
