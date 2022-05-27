import { useState } from "react";
import "./style.css";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  function handleLogin() {
    setUser(userInput);
    setIsLoggedIn(true);
  }

  return (
    <div className='div-form'>
      <form onSubmit={(event) => handleLogin(event.preventDefault())}>
        <input
          type="text"
          placeholder="Insira seu nome"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button type="submit">Acessar com o nome</button>
      </form>
    </div>
  );
}

export default GetUserComponent;
