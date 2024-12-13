import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./LoginPage.css"

function LoginPage() {
return (
    <>
    <Header />
    <body className="loginBody">
        <img id="steam" src="./../../public/icons/steam-logo.png" alt="steam logo"/>
        <h3 id="loginText1">Logging into SteamDB allows you to access additional features.
To provide a better service we will fetch public information about your account from the Steam Web API (this includes steamid, profile name, avatar, and game list).
This website is not affiliated with Valve Corporation or Steam.
You can delete your account and all of the data at any time.</h3>
    <button id="signIn">Sign In Trough Steam</button>
    <h3 id="loginText2">Si todavía no estas registrado pincha <a href="/register"> aquí </a></h3>
    </body>
    <Footer />
    </>
);

}

export default LoginPage