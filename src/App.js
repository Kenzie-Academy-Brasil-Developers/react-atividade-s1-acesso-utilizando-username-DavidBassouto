import "./App.css";
import GetUserComponent from "./components/GetUserComponent";
import WelcomePage from "./components/WelcomePage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        )}
      </header>
    </div>
  );
}

export default App;
