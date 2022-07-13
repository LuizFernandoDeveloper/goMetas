import logo from '../../assets/img/svg/logo.svg';
import "./styles.css";

function Header() {
  return (

    <header>
        <div className="goMeta-logo-container">
            <img src={logo} alt="goMeta" />
            <h1>goMetas</h1>
            <p>
                <br></br>
                <a href="https://github.com/LuizFernandoDeveloper">my git - Hub</a>
            </p>
        </div>
    </header>

  )
}
export default Header;
