import logo from './logo.svg';
import './App.css';
import LoginButton from "./login";
import LogoutButton from "./logout";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <LoginButton></LoginButton>
                </p>
                <LogoutButton></LogoutButton>
            </header>
        </div>
    );
}

export default App;
