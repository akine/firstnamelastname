import "./App.css";
import React from "react";

function Display() {
  return (
    <div>
      <p hidden>ファーストネームラストネーム</p>
    </div>
  );
}

function UsernameForm({ onSubmitUsername }) {
  const [error, setError] = React.useState(null)

  function hundleSubmit(event) {
    event.preventDefault();
    const lastname = event.target.elements.lastnameInput.value;
    const firstname = event.target.elements.firstnameInput.value;
    onSubmitUsername(firstname, lastname);
  }

  function hundleChange(event) {
    const {value} = event.target
    const isNumber = typeof value === "number"
    setError(isNumber ? null : '数字じゃん💢')
  }

  return (
    <form onSubmit={hundleSubmit}>
      <div>
        <label htmlFor="lastnameInput">名字: </label>
        <input id="lastnameInput" type="text" onChange={hundleChange} />
      </div>
      <div>
        <label htmlFor="firstnameInput">名前: </label>
        <input id="firstnameInput" type="text" onChange={hundleChange} />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">ファーストネームラストネームが知りたい</button>
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
        <Display />
        <UsernameForm onSubmitUsername={onSubmitUsername} />
      </header>
    </div>
  );
}

export default App;
