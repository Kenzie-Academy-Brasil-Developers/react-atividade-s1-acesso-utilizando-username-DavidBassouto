import "./style.css";

function WelcomePage({ user, setIsLoggedIn }) {
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="div-welcome">
      <p>Bem Vindo {user}</p>
      <button onClick={handleLogout}> Fazer Logout</button>
    </div>
  );
}

export default WelcomePage;
